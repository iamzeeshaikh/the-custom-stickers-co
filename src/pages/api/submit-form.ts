export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const honeypot = formData.get('honeypot')?.toString() || '';
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const name = formData.get('name')?.toString()?.trim() || '';
    const email = formData.get('email')?.toString()?.trim() || '';
    const phone = formData.get('phone')?.toString()?.trim() || '';
    const product = formData.get('product')?.toString()?.trim() || '';
    const quantity = formData.get('quantity')?.toString()?.trim() || '';
    const size = formData.get('size')?.toString()?.trim() || '';
    const message = formData.get('message')?.toString()?.trim() || '';
    const artworkFile = formData.get('artwork') as File | null;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }
    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return new Response(JSON.stringify({ error: 'Input too long' }), { status: 400 });
    }

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
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;width:140px;">Name</td><td style="padding:10px;">${name}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Email</td><td style="padding:10px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Phone</td><td style="padding:10px;">${phone || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Product</td><td style="padding:10px;">${product || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Quantity</td><td style="padding:10px;">${quantity || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Size</td><td style="padding:10px;">${size || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Message</td><td style="padding:10px;">${message || '—'}</td></tr>
            <tr><td style="padding:10px;background:#f9fafb;font-weight:600;">Artwork</td><td style="padding:10px;">${artworkFile && artworkFile.size > 0 ? `File attached: ${artworkFile.name}` : 'No file uploaded'}</td></tr>
          </table>
        </div>
        <p style="color:#6b7280;font-size:12px;margin-top:16px;">This email was sent from thecustomstickers.co</p>
      </div>
    `;

    const attachments = [];
    if (artworkFile && artworkFile.size > 0 && artworkFile.size < 10 * 1024 * 1024) {
      const buffer = Buffer.from(await artworkFile.arrayBuffer());
      attachments.push({
        filename: artworkFile.name,
        content: buffer,
        contentType: artworkFile.type,
      });
    }

    await transporter.sendMail({
      from: `"${import.meta.env.SMTP_FROM_NAME || 'The Custom Stickers'}" <${import.meta.env.SMTP_FROM_EMAIL}>`,
      to: import.meta.env.SMTP_TO,
      replyTo: email,
      subject: `New Quote Request: ${product || 'Custom Stickers'} – ${name}`,
      html: htmlBody,
      attachments,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Form submission error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
