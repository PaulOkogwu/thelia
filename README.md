# Thelia

One-page shop for Thelia, handmade crochet bags. Astro static site, previewed on GitHub Pages, checkout through Stripe Payment Links.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Day-to-day changes

All shop data is in `src/data/bags.ts`:

- **Turn on a Buy button:** paste the bag's Stripe Payment Link into `paymentLink`.
- **Mark a bag sold:** set `status: 'sold'`. The photo dims and the card says "Sold".
- **Change a price or name:** edit `price` / `name`, and change the Payment Link in Stripe to match.

Her story, values and maker text: `src/data/content.ts` (her words, verbatim). Catalogue photos: `src/data/catalogue.ts`.

## Deploy

**Preview (now):** GitHub Pages at https://paulokogwu.github.io/thelia/. `.github/workflows/deploy.yml` builds and deploys on every push to `main`. The site lives under the `/thelia` base path (`astro.config.mjs`).

**Her own domain (later):** build with `SITE=https://<domain> BASE=/`, on Cloudflare Pages (connect this repo: build `npm run build`, output `dist`, set those two variables) or any static host.

## Payments

Each Payment Link lives in the owner's own Stripe account and sends buyers to the thank-you page after paying (currently `https://paulokogwu.github.io/thelia/thank-you/`). Stripe collects the shipping address and phone, and emails her each order. Her setup guide is in Paul's vault: `05 Projects/thelia/stripe-setup.md`.

## Sources

Owner's original files: `../thelia-source/` (PDF, chat images, full-res photos extracted from the PDF, logo trace). The logo in `src/components/LogoSymbols.astro` is a potrace vector trace of the logo on page 1 of her PDF.
