import { defineConfig } from 'astro/config';

// Served from https://flyer351.github.io/ai-learning-guide/ until a custom domain is added.
// When a custom domain is set up, change `site` to it and remove `base`.
export default defineConfig({
  site: 'https://flyer351.github.io',
  base: '/ai-learning-guide',
  trailingSlash: 'always',
});
