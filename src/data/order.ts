/**
 * One price, one shipping story, one returns rule and one set of payment methods
 * for every surface that sells: the product-page order box, the Product Offer
 * JSON-LD, the Merchant feed (/merchant-feed.xml), /checkout/ and /api/order.
 * Change a number here and all of them follow, so the page, the structured data
 * and the feed cannot disagree.
 *
 * Owner's decisions, 2026-10-29: every product sells online in packs of 100
 * stickers for $30.00 (the same $0.30 per sticker the site has always quoted),
 * free shipping to the US, UK, Canada and Australia, paid by PayPal invoice,
 * bank transfer, or cash on delivery for US and Canadian addresses. Nothing is
 * charged on the site; the team invoices by hand. Returns are defective only.
 */
import { products } from './products';

export const SITE = 'https://thecustomstickers.co';
export const BRAND = 'The Custom Stickers';

export const PACK_QTY = 100;
export const PACK_PRICE = 30;
export const MAX_PACKS = 50;
export const CURRENCY = 'USD';
export const money = (n: number) => `$${n.toFixed(2)}`;
export const PACK_PRICE_TEXT = PACK_PRICE.toFixed(2);
export const UNIT_PRICE_TEXT = (PACK_PRICE / PACK_QTY).toFixed(2);
/** The one price line every product page shows: "100 stickers: $30.00 ($0.30 each)". */
export const PRICE_LINE = `${PACK_QTY} stickers: ${money(PACK_PRICE)} ($${UNIT_PRICE_TEXT} each)`;

/**
 * Shipping. Production (handling) is the site's standard production time from
 * the shipping policy; transit is the policy's standard shipping window for the
 * US and a longer window for the UK, Canada and Australia. Days are business days.
 */
export const SHIPPING = {
  rate: '0',
  currency: 'USD',
  handlingDaysMin: 3,
  handlingDaysMax: 5,
  destinations: [
    { code: 'US', name: 'United States', label: 'USA', transitMin: 5, transitMax: 7 },
    { code: 'GB', name: 'United Kingdom', label: 'UK', transitMin: 7, transitMax: 10 },
    { code: 'CA', name: 'Canada', label: 'Canada', transitMin: 7, transitMax: 10 },
    { code: 'AU', name: 'Australia', label: 'Australia', transitMin: 7, transitMax: 10 },
  ],
} as const;

export type CountryCode = (typeof SHIPPING.destinations)[number]['code'];
export const SHIP_COUNTRIES = SHIPPING.destinations.map((d) => ({ code: d.code, name: d.name }));
export const transitFor = (code: string) => SHIPPING.destinations.find((d) => d.code === code);

export const SHIP_LINE = 'Free shipping to the USA, UK, Canada and Australia';
export const PRODUCTION_TEXT = `${SHIPPING.handlingDaysMin}–${SHIPPING.handlingDaysMax} business days`;
export const TRANSIT_US_TEXT = '5–7 business days';
export const TRANSIT_INTL_TEXT = '7–10 business days';

/** Returns: defective only (owner, 2026-10-29). */
export const RETURNS = {
  claimDays: 14,
  policyUrl: `${SITE}/shipping-policy/#returns`,
} as const;

export const PAYMENT_METHODS = [
  {
    id: 'paypal',
    name: 'PayPal invoice',
    detail:
      'Once you approve your free digital proof, we email a PayPal invoice. Pay with your PayPal balance or a card through PayPal. Printing starts when it is paid.',
  },
  {
    id: 'bank',
    name: 'Bank transfer',
    detail:
      'Once you approve your free digital proof, we email an invoice with our bank details. Printing starts when the transfer arrives.',
  },
  {
    id: 'cod',
    name: 'Cash on delivery',
    detail:
      'Nothing up front. You pay the order total when your stickers are delivered. Available for US and Canadian addresses only.',
  },
] as const;

export type PaymentId = (typeof PAYMENT_METHODS)[number]['id'];

/** Cash on delivery runs through a courier COD service that covers the US and Canada only. */
export const COD_COUNTRIES: string[] = ['US', 'CA'];

export const PAYMENT_LINE =
  'Pay by PayPal invoice or bank transfer after you approve your free proof, or cash on delivery in the US and Canada.';

/** slug -> product name, for the checkout and the server-side re-pricing. */
export const ORDER_CATALOG: Record<string, string> = Object.fromEntries(products.map((p) => [p.slug, p.name]));

/** Absolute, encoded image URL (some filenames contain spaces). */
export const absImage = (path: string) => `${SITE}${encodeURI(path)}`;

/**
 * Product Offer for JSON-LD. The Merchant feed prints the same price, shipping and
 * handling numbers from the constants above.
 */
export function productOffer(slug: string) {
  return {
    '@type': 'Offer',
    url: `${SITE}/${slug}/`,
    price: PACK_PRICE_TEXT,
    priceCurrency: CURRENCY,
    eligibleQuantity: { '@type': 'QuantitativeValue', value: PACK_QTY, unitCode: 'H87' },
    priceValidUntil: '2027-08-04',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@type': 'Organization', name: BRAND },
    shippingDetails: SHIPPING.destinations.map((d) => ({
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: SHIPPING.rate, currency: SHIPPING.currency },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: d.code },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: SHIPPING.handlingDaysMin, maxValue: SHIPPING.handlingDaysMax, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: d.transitMin, maxValue: d.transitMax, unitCode: 'DAY' },
      },
    })),
    // Custom-printed stickers are made to the buyer's artwork and are not
    // returnable; damaged, defective or misprinted orders reported within
    // RETURNS.claimDays are reprinted or refunded (see the shipping policy).
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: SHIPPING.destinations.map((d) => d.code),
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnLink: RETURNS.policyUrl,
    },
  };
}
