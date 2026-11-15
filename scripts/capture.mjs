// Dev-only: full-page screenshots for review. Usage: node scripts/capture.mjs [url] [outdir]
import { chromium } from 'playwright';
const url = process.argv[2] || 'http://localhost:4329/';
const out = process.argv[3] || '.impeccable/review';
const browser = await chromium.launch();
for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
  // fold at 2x on phones; the full page at 1x, since Chromium blanks screenshots taller than ~16k device px
  const foldPage = await browser.newPage({ viewport, deviceScaleFactor: name === 'mobile' ? 2 : 1, reducedMotion: 'reduce' });
  await foldPage.goto(url, { waitUntil: 'networkidle' });
  await foldPage.screenshot({ path: `${out}/${name}-fold.png` });
  await foldPage.close();
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach((i) => { i.loading = 'eager'; }));
  // walk the page so lazy images load
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += viewport.height / 2) { await page.evaluate((v) => window.scrollTo(0, v), y); await page.waitForTimeout(120); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log(name, 'height', h, 'horizontal overflow', overflow);
  await page.close();
}
await browser.close();
