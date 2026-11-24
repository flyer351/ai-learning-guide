import { defineConfig } from 'astro/config';

// Served from the custom domain https://aistudytime.com/ (public/CNAME tells GitHub Pages).
export default defineConfig({
  site: 'https://aistudytime.com',
  trailingSlash: 'always',
});
