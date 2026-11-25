import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the custom domain https://aistudytime.com/ (public/CNAME tells GitHub Pages).
// The sitemap integration writes sitemap-index.xml (and sitemap-0.xml) at build time,
// listing every page so Google Search Console can find them. public/robots.txt points to it.
export default defineConfig({
  site: 'https://aistudytime.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
