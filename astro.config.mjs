import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://thecustomstickers.co',
  output: 'server',
  adapter: vercel(),
  // 301 redirects from the old Georgia location URLs to the new keyword URL.
  redirects: {
    '/locations/georgia': '/georgia-custom-stickers',
    '/locations/georgia/atlanta': '/georgia-custom-stickers/atlanta',
    '/locations/georgia/savannah': '/georgia-custom-stickers/savannah',
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
