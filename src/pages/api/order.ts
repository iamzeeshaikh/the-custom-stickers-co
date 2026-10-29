/**
 * Orders from /checkout/. Every line is re-priced here from src/data/order.ts, so a
 * tampered browser can never change what an order costs. The team gets the order
 * (same recipients and SMTP settings as /api/submit-form) and invoices by hand; the
 * buyer gets a copy. Spam signals only label the subject with "[Possible spam]",
 * they never refuse an order (owner's rule: never drop a lead).
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import {
  PACK_QTY,
  PACK_PRICE,
  MAX_PACKS,
  PAYMENT_METHODS,
  SHIP_COUNTRIES,
  COD_COUNTRIES,
  ORDER_CATALOG,
  SHIPPING,
  PRODUCTION_TEXT,
  transitFor,
  money,
} from '../../data/order';

const SITE = 'https://thecustomstickers.co';
const MAX_FILE = 4 * 1024 * 1024;
const ALLOWED_EXT = /\.(pdf|ai|eps|svg|png|jpe?g|zip)$/i;
const FIELDS = ['name', 'email', 'phone', 'company', 'address1', 'address2', 'city', 'region', 'postal', 'country', 'notes', 'payment', 'items', 'ts', 'website'] as const;
const REQUIRED = ['name', 'email', 'phone', 'address1', 'city', 'postal'] as const;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

function orderRef() {
  const d = new Date();
  const ymd = `${String(d.getUTCFullYear()).slice(2)}${String(d.getUTCMonth() + 1).padStart(2, '0')}${String(d.getUTCDate()).padStart(2, '0')}`;
  const abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return `TCS-${ymd}-${Array.from(crypto.getRandomValues(new Uint8Array(4)), (b) => abc[b % abc.length]).join('')}`;
}

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { ok: false, error: 'Could not read the order' });
  }
  const v = Object.fromEntries(
    FIELDS.map((k) => {
      const raw = form.get(k);
      return [k, (typeof raw === 'string' ? raw : '').trim().slice(0, k === 'items' ? 8000 : 2000)];
    }),
  ) as Record<(typeof FIELDS)[number], string>;

  if (REQUIRED.some((k) => !v[k]) || !/^[^\s@,;<>"']+@[^\s@,;<>"']+\.[^\s@,;<>"']+$/.test(v.email)) {
    return json(422, { ok: false, error: 'Please fill in every required field' });
  }
  const country = SHIP_COUNTRIES.find((c) => c.code === (v.country || 'US'));
  if (!country) return json(422, { ok: false, error: 'Online orders ship to the USA, UK, Canada and Australia. Please request a quote for other countries' });
  const method = PAYMENT_METHODS.find((m) => m.id === v.payment);
  if (!method) return json(422, { ok: false, error: 'Choose a payment method' });
  if (method.id === 'cod' && !COD_COUNTRIES.includes(country.code)) {
    return json(422, { ok: false, error: 'Cash on delivery is only for US and Canadian addresses' });
  }

  // Never trust the browser's prices: rebuild every line from the catalog.
  let raw: unknown = [];
  try {
    raw = JSON.parse(v.items || '[]');
  } catch {}
  const lines = (Array.isArray(raw) ? raw : [])
    .slice(0, 30)
    .map((l: { slug?: unknown; packs?: unknown }) => ({ slug: String(l?.slug ?? ''), packs: Math.floor(Number(l?.packs)) }))
    .filter((l) => ORDER_CATALOG[l.slug] && l.packs >= 1 && l.packs <= MAX_PACKS)
    .map((l) => ({ name: ORDER_CATALOG[l.slug], url: `${SITE}/${l.slug}/`, qty: l.packs * PACK_QTY, total: l.packs * PACK_PRICE }));
  if (!lines.length) return json(422, { ok: false, error: 'Your order is empty' });
  const total = lines.reduce((s, l) => s + l.total, 0);

  // Spam signals label the email; they never block it.
  const spam: string[] = [];
  if (v.website) spam.push('hidden field filled');
  const sentAt = Number(v.ts);
  if (Number.isFinite(sentAt) && sentAt > 0 && Date.now() - sentAt < 4000) spam.push('submitted within 4 seconds of page load');
  const attachments: { filename: string; content: Buffer }[] = [];
  const file = form.get('artwork');
  if (file && typeof file === 'object' && 'arrayBuffer' in file && file.size > 0) {
    if (file.size <= MAX_FILE && ALLOWED_EXT.test(file.name)) {
      attachments.push({ filename: file.name.replace(/[^\w.\- ]+/g, '_').slice(-120), content: Buffer.from(await file.arrayBuffer()) });
    } else spam.push(`attachment not accepted (${oneLine(file.name).slice(0, 60)}, ${file.size} bytes)`);
  }
  const spamLine = spam.length ? `Spam check: ${spam.join('; ')}` : '';

  const env = import.meta.env;
  if (!env.SMTP_USER || !env.SMTP_PASS || !env.SMTP_TO || !env.SMTP_FROM_EMAIL) {
    console.error('[order] SMTP configuration incomplete');
    return json(503, { ok: false, error: 'We could not send your order' });
  }
  // Same transport, sender and recipients as src/pages/api/submit-form.ts.
  const mailer = nodemailer.createTransport({
    host: env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(env.SMTP_PORT || '587'),
    secure: env.SMTP_SECURE === 'true',
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
  });
  const from = `"${env.SMTP_FROM_NAME || 'The Custom Stickers'}" <${env.SMTP_FROM_EMAIL}>`;

  const ref = orderRef();
  const transit = transitFor(country.code) ?? SHIPPING.destinations[0];
  const address = [v.address1, v.address2, [v.city, v.region, v.postal].filter(Boolean).join(', '), country.name].filter(Boolean).join('\n');
  const payLine = method.id === 'cod' ? 'Cash on delivery: the customer pays when the order arrives' : `${method.name}: send the invoice after the customer approves the proof`;
  const itemText = lines.map((l) => `- ${l.name}: ${l.qty.toLocaleString('en-US')} stickers, ${money(l.total)}`).join('\n');
  const td = 'style="padding:6px 12px;border-bottom:1px solid #e5e7eb"';
  const itemHtml = `<table style="font-family:Arial,sans-serif;border-collapse:collapse">${lines.map((l) => `<tr><td ${td}><a href="${l.url}">${esc(l.name)}</a></td><td ${td}>${l.qty.toLocaleString('en-US')} stickers</td><td ${td} align="right">${money(l.total)}</td></tr>`).join('')}<tr><td ${td}>Shipping</td><td ${td}></td><td ${td} align="right">Free</td></tr><tr><th align="left" ${td}>Total</th><td ${td}></td><th ${td} align="right">${money(total)}</th></tr></table>`;
  const office = [
    `PAYMENT: ${payLine}`, spamLine, `Order ${ref}`, '', itemText, `Total: ${money(total)} (free shipping)`, '',
    `Name: ${v.name}`, `Email: ${v.email}`, `Phone: ${v.phone}`, v.company ? `Company: ${v.company}` : '',
    '', 'Ship to:', address, '', v.notes ? `Notes: ${v.notes}` : '', attachments.length ? `Artwork attached: ${attachments[0].filename}` : 'No artwork attached', 'Site: thecustomstickers.co',
  ].filter((x) => x !== '').join('\n');

  try {
    await mailer.sendMail({
      from,
      to: env.SMTP_TO,
      replyTo: { name: oneLine(v.name), address: oneLine(v.email) },
      subject: `${spam.length ? '[Possible spam] ' : ''}New order ${ref}: ${money(total)}, ${method.name}, ${country.code} – ${oneLine(v.name).slice(0, 80)}`,
      text: office,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px"><p style="font-size:16px;background:#fff4e5;padding:10px 12px"><b>PAYMENT:</b> ${esc(payLine)}</p>${spamLine ? `<p style="background:#fde3d8;padding:8px 12px">${esc(spamLine)}</p>` : ''}<h2>Order ${ref}</h2>${itemHtml}<p>${esc(v.name)}<br>${esc(v.email)}<br>${esc(v.phone)}${v.company ? `<br>${esc(v.company)}` : ''}</p><p><b>Ship to</b><br>${esc(address).replace(/\n/g, '<br>')}</p>${v.notes ? `<p><b>Notes</b><br>${esc(v.notes).replace(/\n/g, '<br>')}</p>` : ''}<p>${attachments.length ? `Artwork attached: ${esc(attachments[0].filename)}` : 'No artwork attached'}</p><p style="color:#6b7280;font-size:12px">Sent from the checkout at thecustomstickers.co</p></div>`,
      attachments,
    });
  } catch (err) {
    console.error('[order] send failed', err instanceof Error ? err.message : err, ref);
    return json(502, { ok: false, error: 'We could not send your order' });
  }

  // The buyer's copy is a courtesy; if it fails the order still stands.
  const steps = [
    'We check your artwork and email you a free digital proof.',
    'You approve the proof or ask for changes. Nothing is printed before you approve.',
    method.detail,
    `Printing takes ${PRODUCTION_TEXT}, then your order ships free to ${country.name} and arrives in ${transit.transitMin}–${transit.transitMax} business days.`,
  ];
  try {
    await mailer.sendMail({
      from,
      to: { name: oneLine(v.name), address: oneLine(v.email) },
      replyTo: 'info@thecustomstickers.co',
      subject: `Your order ${ref} with The Custom Stickers`,
      text: [`Hi ${v.name},`, '', `Thank you for your order ${ref}.`, '', itemText, 'Shipping: free', `Total: ${money(total)}`, `Payment: ${method.name}`, '', 'What happens next:', ...steps.map((s, i) => `${i + 1}. ${s}`), '', `Ship to:\n${address}`, '', 'Questions? Call (503) 461-4788 or reply to this email.', 'The Custom Stickers'].join('\n'),
      html: `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5"><p>Hi ${esc(v.name)},</p><p>Thank you for your order <b>${ref}</b>.</p>${itemHtml}<p><b>Payment:</b> ${esc(method.name)}</p><p><b>What happens next</b></p><ol>${steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol><p><b>Ship to</b><br>${esc(address).replace(/\n/g, '<br>')}</p><p>Questions? Call (503) 461-4788 or reply to this email.</p><p>The Custom Stickers</p></div>`,
    });
  } catch (err) {
    console.error('[order] buyer copy failed', err instanceof Error ? err.message : err, ref);
  }

  return json(200, { ok: true, ref, total, payment: method.id });
};

export const ALL: APIRoute = () => json(405, { ok: false, error: 'Method not allowed.' });
