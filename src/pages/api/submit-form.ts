export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // Visitor input: trim, cap length (truncate, never reject) and keep CR/LF
    // out of anything that ends up in a mail header.
    const field = (key: string, max: number) => {
      const raw = formData.get(key);
      return (typeof raw === 'string' ? raw : '').trim().slice(0, max);
    };
    const line = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();
    const esc = (v: unknown) =>
      String(v ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    // Honeypot: never drop an enquiry — label the subject and still send.
    const honeypot = line(field('honeypot', 200));
    const spamPrefix = honeypot ? '[Possible spam] ' : '';

    const name = line(field('name', 200));
    const email = line(field('email', 254));
    const phone = line(field('phone', 100));
    const product = line(field('product', 200));
    const quantity = line(field('quantity', 100));
    const size = line(field('size', 200));
    const message = field('message', 5000);
    const artworkFile = formData.get('artwork') as File | null;
    const artworkName = artworkFile ? artworkFile.name.slice(0, 200) : '';

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), { status: 400 });
    }
    // A malformed address still gets through; it just cannot be the reply-to.
    const replyTo = /^[^\s@<>,;"']+@[^\s@<>,;"']+\.[A-Za-z0-9-]+$/.test(email) ? email : undefined;

    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(import.meta.env.SMTP_PORT || '587'),
      secure: import.meta.env.SMTP_SECURE === 'true',
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#F97316;padding:20px;border-radius:8px 8px 0 0;">
          <h2 style="color:white;margin:0;">New Quote Request – The Custom Stickers</h2>
        </div>
        <div style="background:white;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;width:140px;">Name</td><td style="padding:10px;">${esc(name)}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Email</td><td style="padding:10px;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Phone</td><td style="padding:10px;">${esc(phone) || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Product</td><td style="padding:10px;">${esc(product) || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Quantity</td><td style="padding:10px;">${esc(quantity) || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Size</td><td style="padding:10px;">${esc(size) || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Message</td><td style="padding:10px;">${esc(message).replace(/\n/g, '<br>') || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Artwork</td><td style="padding:10px;">${artworkFile && artworkFile.size > 0 ? `File attached: ${esc(artworkName)}` : 'No file uploaded'}</td></tr>
          </table>
        </div>
        <p style="color:#6b7280;font-size:12px;margin-top:16px;">This email was sent from thecustomstickers.co</p>
      </div>
    `;

    const attachments = [];
    if (artworkFile && artworkFile.size > 0 && artworkFile.size < 10 * 1024 * 1024) {
      const buffer = Buffer.from(await artworkFile.arrayBuffer());
      attachments.push({
        filename: artworkName || 'artwork',
        content: buffer,
        contentType: artworkFile.type,
      });
    }

    await transporter.sendMail({
      from: `"${import.meta.env.SMTP_FROM_NAME || 'The Custom Stickers'}" <${import.meta.env.SMTP_FROM_EMAIL}>`,
      to: import.meta.env.SMTP_TO,
      replyTo,
      subject: `${spamPrefix}New Quote Request: ${product || 'Custom Stickers'} – ${name}`,
      html: htmlBody,
      attachments,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Form submission error:', err instanceof Error ? err.message : err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
