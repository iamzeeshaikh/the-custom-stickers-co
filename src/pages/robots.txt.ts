export const prerender = true;

export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://thecustomstickers.co/sitemap-index.xml

# Disallow API routes
Disallow: /api/
`;
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
