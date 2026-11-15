# Thelia

One-page shop for Thelia, handmade crochet bags. Astro static site, hosted on Cloudflare Pages, checkout through Stripe Payment Links.

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

## Deploy (Cloudflare Pages)

Connect this GitHub repo in Cloudflare → Workers & Pages → Create → Pages → Connect to Git.

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable `SITE`: the public URL (e.g. `https://thelia.pages.dev`, later her own domain)

Every push to `main` deploys.

## Payments

Each Payment Link lives in the owner's own Stripe account and sends buyers to `/thank-you/` after paying. Stripe collects the shipping address and phone, and emails her each order. Her setup guide is in Paul's vault: `05 Projects/thelia/stripe-setup.md`.

## Sources

Owner's original files: `../thelia-source/` (PDF, chat images, full-res photos extracted from the PDF, logo trace). The logo in `src/components/LogoSymbols.astro` is a potrace vector trace of the logo on page 1 of her PDF.
