# AI Learning Guide

Free, calm, step-by-step lessons that help curious adults learn to use AI, build a simple iPhone app or website, and avoid AI money scams.

- No accounts, cookies, analytics, ads or third-party requests.
- Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Working on the site

```sh
npm install
npm run dev      # local preview at http://localhost:4321/ai-learning-guide/
npm run build    # static site in dist/
```

## Where things live

| What | Where |
|---|---|
| Lessons (Markdown) | `src/content/lessons/<path>/<NN-slug>.md` |
| Learning paths (titles, order, blurbs) | `src/data/paths.ts` |
| Home, Start here, About | `src/pages/` |
| Design (colors, type, layout) | `src/styles/global.css` |

Lesson front matter: `title`, `order`, `minutes`, `summary`, and optional `device`.
Special boxes in a lesson: wrap Markdown in `<div class="try">`, `<div class="takeaway">` or `<div class="warn">` with a blank line after the opening tag and before the closing tag. A quote (`>`) inside a `try` box gets a "Copy message" button.

## Custom domain later

Set `site` in `astro.config.mjs` to the domain, remove `base`, and add the domain under Settings › Pages.
