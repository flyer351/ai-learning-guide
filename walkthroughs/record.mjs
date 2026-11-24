// Renders a walkthrough storyboard frame by frame in headless Chromium and encodes it.
// Usage: node walkthroughs/record.mjs copy-paste
// Needs: npm install (for the fonts), Playwright, and ffmpeg on the PATH.
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const name = process.argv[2] ?? 'copy-paste';
const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, '..', 'public', 'media');
const frames = path.join(here, '.frames', name);
const FPS = 30, SCALE = 2;
rmSync(frames, { recursive: true, force: true });
mkdirSync(frames, { recursive: true });
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 360, height: 540 }, deviceScaleFactor: SCALE });
await page.goto('file://' + path.join(here, `${name}.html`) + '?still');
await page.evaluate(() => document.fonts.ready);
const duration = await page.evaluate(() => DURATION);
const stage = page.locator('#stage');
const total = Math.round(duration * FPS);
for (let i = 0; i < total; i++) {
  await page.evaluate((t) => render(t), i / FPS);
  await stage.screenshot({ path: path.join(frames, `${String(i).padStart(4, '0')}.png`) });
}
// Poster: the first moment, before anything happens.
await page.evaluate(() => render(0.8));
await stage.screenshot({ path: path.join(frames, 'poster.png') });
await browser.close();

const input = ['-y', '-framerate', String(FPS), '-i', path.join(frames, '%04d.png')];
execFileSync('ffmpeg', [...input, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '26', '-preset', 'slow', '-tune', 'animation', '-movflags', '+faststart', '-an', path.join(out, `${name}.mp4`)], { stdio: 'inherit' });

execFileSync('ffmpeg', ['-y', '-i', path.join(frames, 'poster.png'), '-quality', '80', path.join(out, `${name}-poster.webp`)], { stdio: 'inherit' });
console.log('done', name);
