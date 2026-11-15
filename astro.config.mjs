// @ts-check
import { defineConfig } from 'astro/config';

// Preview lives on GitHub Pages under /thelia. For her own domain (or Cloudflare Pages)
// set SITE=https://<domain> BASE=/ at build time.
export default defineConfig({
  site: process.env.SITE ?? 'https://paulokogwu.github.io',
  base: process.env.BASE ?? '/thelia',
  devToolbar: { enabled: false },
});
