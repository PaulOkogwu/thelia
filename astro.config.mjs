// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE || 'https://thelia.pages.dev',
});
