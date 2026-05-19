import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thecustomstickers.co',
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
