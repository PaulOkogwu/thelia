# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro static site (decided with Paul in the approved plan), hosted on Cloudflare Pages from a private GitHub repo. Checkout through Stripe Payment Links (one link per bag, created in the owner's own Stripe account). No server, no cart.

## Users
- **Young women and students** (around 18-25, many at Western University) buying a bag for themselves.
- **Gift buyers** looking for a handmade present.
- **Market and pop-up shoppers** who met the bags in person and look Thelia up afterwards.
- They arrive mostly from **Instagram/TikTok** and from **markets and pop-ups**, usually on a phone.
- Their job: see the bags clearly, fall for one, know the price, and buy it with shipping in a few taps.

## Product Purpose
Thelia sells handmade crochet bags made by one person. The site is its shop and its story. Success is a visitor finding a bag they love and paying for it on the site, with the owner receiving the order and shipping address to ship it.

## Positioning
Every bag is designed and crocheted by hand by the founder, a Western business student who started Thelia in 2024. The thick t-shirt-yarn bags, the colour pairings and the names (Marina, Celeste, Rose, Emerald, Soleil, Amora, Perla, Odette, Aurelia, Strawberry Shortcake) are hers; a mass-market shop cannot claim "made by me, by hand, piece by piece."

## Operating Context
- Visitors come from social posts and markets, mostly on phones.
- Bags ship (Canada assumed; regions and rates undecided). Stripe collects the shipping address, phone and email; the owner is notified by Stripe email/app and ships by hand.
- Bags may be one-of-a-kind (Payment Link limited to 1 sale) or made to order: **undecided**, asked of the owner.

## Capabilities and Constraints
- 11 named bags with prices (CAD): Marina clutch $120, Celeste clutch $120, Rose mini $60, Emerald mini $60, Soleil mini $60 (PDF spells "Soleli", unconfirmed), The Amora (bag + pouch pair) $140, The Perla Shell Bag in forest green $199 and ivory $199, Strawberry Shortcake $110, The Odette Bag $110, The Aurelia Bag $120.
- Bag descriptions: none yet; the owner will add them. Never invent them.
- A catalogue of lifestyle photos and unnamed bags sits at the bottom, without prices.
- Sold bags must be markable as sold without a redesign (data file).
- Undecided: domain, Instagram handle, contact email, shipping rates/regions, returns policy.

## Brand Commitments
- **Name:** Thelia. Tagline on her swing tags: "Handmade in Canada".
- **Logo:** a script "Thelia" wordmark with a fine-line rose and a script "T" monogram, in charcoal on white or cream. Owner wants the logo as a small icon at the top of the page, and the logo as the opening image.
- **Opening copy (hers):** "Welcome to Thelia" / "At Thelia every piece is handmade with love and attention to detail."
- **Voice:** first person, warm, sincere, reflective ("I believe in the value of creating something by hand"). Use her text word for word; fix only extraction glitches.
- **Sections she asked for:** About us (clickable to read the full story), Brand mission and values (5 values), Meet the maker, Bags and prices, catalogue at the bottom.

## Evidence on Hand
- Copy and photos: `../thelia-source/thelia-website.pdf` (34 pages), full-res photos in `../thelia-source/upright/`, chat images (product JPGs, transparent PNG cut-outs, logo PNGs) in `../thelia-source/chat-images/`.
- No testimonials, reviews, press, sales figures or stockists. Do not fabricate any.

## Product Principles
1. The bags are the hero; the interface steps back so colour and texture carry the page.
2. Her words, her voice: the founder's story is told in her first person, not marketing copy.
3. Buying is obvious and short: price and Buy on every bag, Stripe handles payment and shipping details.
4. Honest about handmade: nothing claimed that she hasn't said.

## Accessibility & Inclusion
WCAG 2.2 AA as the floor: real alt text for every bag photo, sufficient contrast on cream, keyboard-usable story dialog and photo viewer, respects reduced motion.
