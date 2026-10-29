/**
 * Google Merchant feed, built from the same catalog and the same src/data/order.ts
 * constants as the product pages, their Offer JSON-LD, the checkout and /api/order:
 * one item per product page, 100 stickers for $30.00, free shipping to the US, UK,
 * Canada and Australia, defective-only returns.
 */
export const prerender = true;

import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { SITE, BRAND, PACK_QTY, PACK_PRICE_TEXT, UNIT_PRICE_TEXT, SHIPPING, absImage } from '../data/order';

const x = (s: unknown) =>
  String(s ?? '').replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c] as string);

export const GET: APIRoute = () => {
  const items = products
    .filter((p) => p.images.length)
    .map((p) => {
      const imgs = p.images.slice(0, 6).map(absImage);
      return `  <item>
    <g:id>${x(`TCS-${p.slug}`.slice(0, 50))}</g:id>
    <title>${x(`${p.name}, Pack of ${PACK_QTY}`)}</title>
    <description>${x(`${p.metaDescription} Sold in packs of ${PACK_QTY} stickers ($${UNIT_PRICE_TEXT} each), printed with your artwork after a free digital proof.`)}</description>
    <link>${SITE}/${x(p.slug)}/</link>
    <g:image_link>${x(imgs[0])}</g:image_link>${imgs
      .slice(1)
      .map((u) => `\n    <g:additional_image_link>${x(u)}</g:additional_image_link>`)
      .join('')}
    <g:availability>in_stock</g:availability>
    <g:condition>new</g:condition>
    <g:price>${PACK_PRICE_TEXT} USD</g:price>
    <g:multipack>${PACK_QTY}</g:multipack>
    <g:brand>${x(BRAND)}</g:brand>
    <g:identifier_exists>no</g:identifier_exists>
    <g:mpn>${x(p.slug)}</g:mpn>
    <g:product_type>${x(`Custom Stickers > ${p.category.charAt(0).toUpperCase()}${p.category.slice(1)}`)}</g:product_type>
${SHIPPING.destinations.map((d) => `    <g:shipping><g:country>${d.code}</g:country><g:service>Free shipping</g:service><g:price>0.00 USD</g:price><g:min_transit_time>${d.transitMin}</g:min_transit_time><g:max_transit_time>${d.transitMax}</g:max_transit_time></g:shipping>`).join('\n')}
    <g:min_handling_time>${SHIPPING.handlingDaysMin}</g:min_handling_time>
    <g:max_handling_time>${SHIPPING.handlingDaysMax}</g:max_handling_time>
  </item>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
  <title>${x(BRAND)}</title>
  <link>${SITE}/</link>
  <description>Custom printed stickers and labels, sold in packs of ${PACK_QTY}.</description>
${items}
</channel>
</rss>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
