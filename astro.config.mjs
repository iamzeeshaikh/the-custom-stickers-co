import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://thecustomstickers.co',
  // One canonical URL form: /page/ always. Vercel 308-redirects the bare form,
  // so /about and /about/ stop serving the same page twice.
  trailingSlash: 'always',
  output: 'server',
  adapter: vercel(),
  // 301 redirects from the old Georgia location URLs to the new keyword URL.
  // Slashed sources: with trailingSlash 'always' the bare form 308s to the
  // slashed one first, so these catch both. Slashed targets avoid a second hop.
  redirects: {
    '/locations/georgia/': '/georgia-custom-stickers/',
    '/locations/georgia/atlanta/': '/georgia-custom-stickers/atlanta/',
    '/locations/georgia/savannah/': '/georgia-custom-stickers/savannah/',
  },
  integrations: [],
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
