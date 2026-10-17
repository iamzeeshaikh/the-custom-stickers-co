import data from '../data/page-faqs.json';

/**
 * Extra FAQs keyed by route (trailing slash) so every indexable page carries
 * at least ten. Answers here are rendered as text and reused verbatim in
 * FAQPage, so any authored link markup is reduced to its anchor text.
 */
type Faq = { q: string; a: string };
type Entry = { h2: string; faqs: Faq[] };
const DATA = data as Record<string, Entry>;
const norm = (p: string) => (p.endsWith('/') ? p : p + '/');
const plain = (s: string) => s.replace(/<[^>]+>/g, '');

export const extraFaqs = (route: string): Faq[] => (DATA[norm(route)]?.faqs ?? []).map((f) => ({ q: f.q, a: plain(f.a) }));
export const extraHeading = (route: string) => DATA[norm(route)]?.h2 ?? 'Frequently asked questions';
export function withExtras<T extends Faq>(route: string, faqs: T[] = []): Faq[] {
  const seen = new Set(faqs.map((f) => f.q.trim().toLowerCase()));
  return [...faqs, ...extraFaqs(route).filter((f) => !seen.has(f.q.trim().toLowerCase()))];
}
