export const prerender = true;

import { products } from '../data/products';

const BASE = 'https://thecustomstickers.co';

// Stable last-modified date. Bump this only when page content is materially
// updated. Do NOT use new Date() here — this route is prerendered, so every
// deploy would stamp all URLs with the build date even when nothing changed,
// which makes Google distrust the sitemap's lastmod signal. Individual pages
// can override with their own more recent date (products via `updated`,
// static pages via a `lastmod` field below).
const LASTMOD = '2026-07-09';

const staticPages = [
  { url: '/',                          priority: '1.0', changefreq: 'weekly'  },
  { url: '/get-a-quote/',              priority: '0.9', changefreq: 'weekly'  },
  { url: '/contact/',                  priority: '0.8', changefreq: 'monthly' },
  { url: '/about/',                    priority: '0.7', changefreq: 'monthly' },
  { url: '/sticker-materials/',        priority: '0.7', changefreq: 'monthly' },
  { url: '/sticker-printing-options/', priority: '0.7', changefreq: 'monthly' },
  { url: '/artwork-guidelines/',       priority: '0.6', changefreq: 'monthly' },
  { url: '/shipping-policy/',          priority: '0.5', changefreq: 'monthly' },
  { url: '/sitemap-page/',             priority: '0.4', changefreq: 'monthly' },
  { url: '/privacy-policy/',           priority: '0.3', changefreq: 'yearly'  },
  { url: '/terms-and-conditions/',     priority: '0.3', changefreq: 'yearly'  },
];

export function GET() {
  const staticEntries = staticPages.map(p =>
    `  <url>\n    <loc>${BASE}${p.url}</loc>\n    <lastmod>${(p as { lastmod?: string }).lastmod ?? LASTMOD}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  );

  const productEntries = products.map(p =>
    `  <url>\n    <loc>${BASE}/${p.slug}/</loc>\n    <lastmod>${p.updated ?? LASTMOD}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticEntries, ...productEntries].join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
