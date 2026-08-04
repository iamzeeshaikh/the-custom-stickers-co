export const prerender = true;

// llms.txt — a curated site map for AI assistants and answer engines
// (https://llmstxt.org). Generated from the same data files as the site, so it
// never drifts from the real catalog. Keep descriptions to one line.

import { products } from '../data/products';
import { blogPosts } from '../data/blogPosts';
import { locationStates, stateUrl } from '../data/locations';

const BASE = 'https://thecustomstickers.co';

const CATEGORY_LABELS: Record<string, string> = {
  core: 'Core Sticker Products',
  business: 'Business & Industry Stickers',
  personal: 'Personal & Lifestyle Stickers',
  specialty: 'Specialty Stickers',
  seasonal: 'Seasonal & Holiday Stickers',
  vehicle: 'Vehicle & Outdoor Stickers',
  food: 'Food & Beverage Labels',
  material: 'Materials',
  finish: 'Finishes',
  size: 'Sizes',
  shape: 'Shapes',
  packaging: 'Packaging Labels',
  security: 'Security Stickers',
  events: 'Event Stickers',
  sports: 'Sports Stickers',
  educational: 'School & Education Stickers',
  home: 'Home & Decor Stickers',
};

export function GET() {
  const lines: string[] = [];

  lines.push('# The Custom Stickers');
  lines.push('');
  lines.push(
    '> The Custom Stickers (thecustomstickers.co) is a US custom sticker and label printing company. We print die cut, kiss cut, vinyl, holographic, clear, and waterproof stickers plus product labels in any shape and size, with free digital proofs, 3-5 day production, and free US shipping. Quotes are free — customers upload artwork and get a tailored price.'
  );
  lines.push('');
  lines.push('Key facts:');
  lines.push('- Products: 100+ sticker and label types, all custom printed to order');
  lines.push('- Turnaround: 3-5 business days production, 1-3 days US delivery');
  lines.push('- Proofing: free full-color digital proof before every print run');
  lines.push('- Ordering: request a quote at ' + BASE + '/get-a-quote/ (no fixed price list; pricing depends on size, material, and quantity)');
  lines.push('- Contact: info@thecustomstickers.co · +1 (503) 358-0443');
  lines.push('- Service area: ships nationwide across the US');
  lines.push('');

  lines.push('## Start Here');
  lines.push(`- [Get a Quote](${BASE}/get-a-quote/): Upload artwork and get a custom sticker price`);
  lines.push(`- [All Stickers & Labels](${BASE}/stickers-and-labels/): Full product overview`);
  lines.push(`- [Sticker Materials](${BASE}/sticker-materials/): Vinyl, paper, clear, holographic and more compared`);
  lines.push(`- [Printing Options](${BASE}/sticker-printing-options/): Finishes, cuts, and formats explained`);
  lines.push(`- [Artwork Guidelines](${BASE}/artwork-guidelines/): File setup for print-ready art`);
  lines.push(`- [About](${BASE}/about/): Who we are`);
  lines.push(`- [Contact](${BASE}/contact/): Email, phone, and support`);
  lines.push('');

  const byCategory = new Map<string, typeof products>();
  for (const p of products) {
    const list = byCategory.get(p.category) ?? [];
    list.push(p);
    byCategory.set(p.category, list);
  }
  for (const [cat, items] of byCategory) {
    lines.push(`## ${CATEGORY_LABELS[cat] ?? cat}`);
    for (const p of items) {
      lines.push(`- [${p.name}](${BASE}/${p.slug}/): ${p.metaDescription}`);
    }
    lines.push('');
  }

  lines.push('## Locations');
  lines.push(`- [All Locations](${BASE}/locations/): Custom stickers shipped across the US`);
  for (const state of locationStates) {
    lines.push(`- [${state.name}](${BASE}${stateUrl(state)}): ${state.metaDescription}`);
  }
  lines.push('');

  if (blogPosts.length) {
    lines.push('## Blog');
    for (const post of blogPosts) {
      lines.push(`- [${post.title}](${BASE}/blog/${post.slug}/): ${post.metaDescription}`);
    }
    lines.push('');
  }

  lines.push('## Policies');
  lines.push(`- [Shipping Policy](${BASE}/shipping-policy/): Free US shipping details`);
  lines.push(`- [Terms & Conditions](${BASE}/terms-and-conditions/)`);
  lines.push(`- [Privacy Policy](${BASE}/privacy-policy/)`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
