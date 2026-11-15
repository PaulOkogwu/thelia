---
name: Thelia
description: Handmade crochet bags, shown the way they leave the maker's hands. Hung on a black swing tag, named on a sewn white label.
colors:
  label: "#fafaf8"
  label-edge: "#e7e5df"
  tag: "#141414"
  ink: "#262624"
  ink-soft: "#55534f"
  on-tag: "#f3f1ec"
  on-tag-soft: "#b9b6ae"
  rose: "#7a1f3d"
  rose-deep: "#5e1730"
  string: "#e9b8c6"
typography:
  display:
    fontFamily: "Gloock, 'Times New Roman', serif"
    fontSize: "clamp(2.3rem, 5vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Gloock, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Gloock, 'Times New Roman', serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.1
  price:
    fontFamily: "Gloock, 'Times New Roman', serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "lnum"
  body:
    fontFamily: "'Figtree Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "'Figtree Variable', system-ui, sans-serif"
    fontSize: "1.18rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Figtree Variable', system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  photo: "4px"
  tag: "12px"
  round: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "78rem"
  section: "clamp(4.5rem, 10vw, 8rem)"
  group: "clamp(3.5rem, 8vw, 6rem)"
  grid-gap: "clamp(1.25rem, 3vw, 2.5rem)"
components:
  woven-label:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "0.5em 1.45em"
  button-buy:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.on-tag}"
    typography: "{typography.label}"
    rounded: "0"
    padding: "0.55rem 1.6rem"
    height: "2.75rem"
  button-buy-hover:
    backgroundColor: "{colors.rose-deep}"
  button-buy-off:
    backgroundColor: "transparent"
    textColor: "{colors.rose}"
    rounded: "0"
    padding: "0.55rem 1.6rem"
  swing-tag:
    backgroundColor: "{colors.tag}"
    textColor: "{colors.on-tag}"
    rounded: "{rounded.tag}"
    padding: "3.1rem 2rem 1.4rem"
  bag-photo:
    backgroundColor: "{colors.label-edge}"
    rounded: "{rounded.photo}"
  viewer-button:
    backgroundColor: "rgb(243 241 236 / 0.06)"
    textColor: "{colors.on-tag}"
    rounded: "{rounded.round}"
    size: "3rem"
---

# Design System: Thelia

## Overview

**Creative North Star: "The Woven Label"**

Every bag is presented the way it leaves the maker's hands: hung from her black swing tag on a pink yarn string, named on her sewn-in white woven label, priced in plain figures. The system is built from those two physical objects and nothing else. Optic-white label ground and matte swing-tag black are the two fields; charcoal is the ink; one deep rose thread marks the act of buying. All other colour comes from the bags in the photographs.

The interface steps back so yarn colour and texture carry the page. Surfaces are flat paper and flat black; depth exists only where a real object would cast it (the hanging tag, the label sewn over a photo, the Buy label). Stitch-dashed rules divide sections the way a seam divides fabric. Motion is physical and slow: the tag swings as a damped pendulum, labels straighten on hover, photos ease in a few percent. Everything is static under reduced motion.

It rejects the boutique-theme banner-plus-grid and the cream-and-serif "artisan" default: the ground is optic white, not cream, and the serif is a heavy, high-contrast display cut used for names and headings only.

**Key Characteristics:**
- Two fields: label white (page) and tag black (opening tag, story band, footer, thank-you note).
- Bag names sit on woven labels that overlap the photo's bottom edge, tilted slightly.
- Rose appears only on Buy, its disabled and sold states, the focus ring and text selection.
- Dividers are stitch-dashed (7px dash, 5px gap), never solid hairlines.
- The string pink is the yarn the tags hang from; it is a material, not a second accent.

## Colors

A near-monochrome label-and-tag palette with a single rose thread; the photographs supply every other hue.

### Primary
- **Rose Thread** (`rose`): the Buy label fill, the outline and text of "Coming soon" and "Sold", the focus ring on light grounds, and text selection. Nothing decorative.
- **Deep Rose** (`rose-deep`): Buy hover only.

### Secondary
- **Tag String Pink** (`string`): the yarn the swing tag and thank-you note hang from, and the focus ring on black grounds. Never fills a surface or sets text.

### Neutral
- **Optic Label White** (`label`): the page ground and the base of the sticky header (at 92% with blur).
- **Label Fold** (`label-edge`): the folded-under ends of woven labels, the header hairline once scrolled, and the placeholder behind bag photos.
- **Swing-Tag Black** (`tag`): the hanging tag, the story band, the footer, the thank-you note, and the browser theme colour.
- **Charcoal Ink** (`ink`): body text, headings and the logo on white.
- **Soft Ink** (`ink-soft`): secondary copy on white (intros, notes, value descriptions, captions).
- **Tag Cream** (`on-tag`): headings, logo and primary text on black; text on the Buy label.
- **Tag Grey** (`on-tag-soft`): secondary text on black (story paragraphs, footer info, tag tagline).

Woven labels themselves are pure white (#ffffff) so they read a step brighter than the page.

### Named Rules
**The One Thread Rule.** Rose means "buy" (and keyboard focus). If an element is not a purchase control, a purchase state or a focus ring, it is not rose.

**The Bags Bring the Colour Rule.** No tints, gradients or coloured panels. Hue on the page comes from the photographs.

## Typography

**Display Font:** Gloock (with Times New Roman, serif)
**Body Font:** Figtree Variable (with system-ui, sans-serif)

**Character:** Gloock is a heavy, high-contrast serif that looks like the woven script of a garment label set in print; Figtree is a plain, friendly sans that keeps her first-person copy easy to read on a phone.

### Hierarchy
- **Display** (400, clamp(2.3rem, 5vw, 3.6rem), 1.08): section headings ("How Thelia started", "Mission and values", "Meet the maker", "Catalogue"). "The bags" runs slightly smaller (clamp(2.2rem, 4.2vw, 3.4rem)). The featured bag's name reaches clamp(2rem, 3.4vw, 3rem).
- **Headline** (400, clamp(1.5rem, 2.6vw, 2rem), 1.08): bag group headings; value names run at clamp(1.45rem, 2.6vw, 1.95rem), line-height 1.15.
- **Title** (400, clamp(1.05rem, 1.6vw, 1.25rem), 1.1): bag names on woven labels; woven buttons run at 1.05rem.
- **Price** (Gloock 400, 1.5rem, 1, lining numerals): every price; 2rem on the featured bag.
- **Body** (400, 1.0625rem, 1.6): all running copy, max 56-62ch; first paragraph of a story or maker block steps up to 1.18rem / 1.55.
- **Label** (Figtree 600, 0.95rem, 0.02em): Buy; nav links are 500 at 0.95rem.

### Named Rules
**The Serif Is Sewn Rule.** Gloock is for things that would be woven or printed on a label: headings, bag names, prices, value names. Interface controls other than labels (nav, Buy, captions) are Figtree.

**The Tagline Exception.** Uppercase tracked text (0.78rem, 0.14em) appears once: "Handmade in Canada" at the foot of the swing tag, because it is printed that way on her real tags. It is not a reusable eyebrow style.

## Layout

A single centred column (`max` 78rem, `gutter` clamp(1rem, 4vw, 3rem)) on the white field, interrupted by full-bleed black bands. The opening is a centred hanging tag dropping from the top edge on a string, with the logo as a faded watermark behind it that fades out by mid-height; the first bags begin directly below it.

Bags are grouped (clutches as a pair, minis as a trio, shoulder bags as a trio, one featured bag). Each group has a Display/Headline heading over a stitch-dashed rule. On phones (below 760px) every group becomes a horizontal snap row, cards at 78% width so the next bag peeks in, bleeding to the screen edge. From 760px groups become grids (2 or 3 columns, pair photos switch to 4:3). From 900px the featured bag splits 7fr / 5fr, its text column overlapping the photo by 3.5rem; from 1200px a square detail crop sits in the open column above the text, sharing the text's left edge.

Section rhythm: major sections pad clamp(4.5rem, 10vw, 8rem) vertically; groups stack clamp(3.5rem, 8vw, 6rem) apart. Two-column splits (story, maker, values) start at 900px. The catalogue is a masonry of CSS columns (2 on phones, 4 from 900px). Breakpoints: 640, 760, 900, 1200px.

## Elevation & Depth

Flat by default. Shadows exist only on objects that physically hang or are sewn on, and they are soft and ambient, never hard or offset.

### Shadow Vocabulary
- **Hanging tag** (`filter: drop-shadow(0 22px 28px rgb(20 20 20 / 0.22)) drop-shadow(0 4px 6px rgb(20 20 20 / 0.12))`): the swing tag and the thank-you note (single 0 22px 26px layer). Drop-shadow so it follows the punched hole and string.
- **Sewn label** (`box-shadow: 0 1px 1px rgb(20 20 20 / 0.08), 0 4px 10px -4px rgb(20 20 20 / 0.18)`): every woven label.
- **Buy label** (`box-shadow: 0 1px 1px rgb(20 20 20 / 0.1), 0 6px 14px -6px rgb(122 31 61 / 0.55)`): rose-tinted lift under Buy; deepens and rises 2px on hover.

### Named Rules
**The Real Objects Rule.** Only tags and labels cast shadows. Photos, sections, cards and the header stay flat; the header separates with a 1px label-fold hairline after scroll.

## Shapes

Labels are square-cornered ribbons: no radius, with folded-under ends drawn as a darker tuck and crease at each side, and a vertical dashed stitch line just inside each end. Tags are 12px rounded rectangles with a punched hole (a radial mask) where the string enters. Photos take a barely-there 4px radius. The only full circles are the photo viewer's controls (999px). Rules are stitch dashes: 1.5px tall, 7px dash, 5px gap, in ink at 30-35% (on white) or tag cream at 28-30% (on black).

## Components

### Woven Label (signature)
White ribbon carrying a Gloock name. Folded ends in label fold with a crease, dashed stitches inside each end, sewn-label shadow. Used for bag names (tilted -1.2deg, overlapping the photo's bottom edge by 1.35em, straightening on card hover), and as the light button on black ("Shop the bags", "Read my story", "Back to Thelia"), which rises 2px on hover.

### Buttons
- **Shape:** square-cornered stitched label (0 radius), min height 2.75rem.
- **Buy:** rose fill, tag-cream Figtree 600 text, dashed stitch lines in tag cream at 60% inside each end, rose-tinted shadow.
- **Hover / Active:** fills deep rose and rises 2px; returns to rest on press. Transitions 0.25s on the shared ease-out curve.
- **Coming soon / Sold:** the same stitched label as a 1.5px rose outline, rose text; "Coming soon" italic 500, "Sold" upright 600 with 0.06em tracking. No hover response. A sold bag's photo greys (grayscale 0.65, opacity 0.72).

### Bag Card
4:5 photo (4:3 in pairs) on a label-fold placeholder, 4px radius, slow 1.035 zoom on hover (0.9s). Below: woven name label, optional note in soft ink, then price left and Buy right on one line. No card surface, border or shadow.

### Swing Tag
Black tag (subtle noise texture) hanging on a pink string through a punched hole (the ground shows through), logo in tag cream, Gloock heading, tag-grey line, a woven-label button, and the uppercase tagline below a stitch rule. Swings on a damped pendulum from scroll speed and mouse position; static under reduced motion. The thank-you note reuses it without the texture.

### Navigation
Sticky header on label white at 92% with blur, 4.25rem tall: logo mark plus script wordmark left, three Figtree 500 links right. Hover draws a 1px underline left to right (0.35s). The footer repeats the links on tag black, underlined on hover.

### Photo Viewer
Full-screen dialog on near-black at 94%, image with 4px radius and caption in tag grey, round 3rem ghost controls with SVG strokes. Keyboard arrows and swipe step through photos.

## Do's and Don'ts

### Do:
- **Do** put every bag name on a woven label and every price in Gloock with lining numerals beside its Buy label.
- **Do** keep rose to Buy, its outline states, focus and selection.
- **Do** separate sections and groups with stitch-dashed rules (1.5px, 7px dash, 5px gap), not solid lines.
- **Do** alternate the white field with full-bleed tag-black bands for story and footer.
- **Do** use the pink string colour only as the yarn something hangs from, or as the focus ring on black.
- **Do** keep motion physical (swing, settle, straighten) on the shared ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)) and make it static under reduced motion.

### Don't:
- **Don't** introduce cream grounds, tinted panels or coloured section backgrounds; the colour belongs to the bags.
- **Don't** add shadows to photos, sections or containers; only tags and labels cast them, and never as hard offset blocks.
- **Don't** round the woven labels or the Buy label; ribbons have square, folded ends.
- **Don't** reuse the uppercase tracked tagline style as a section eyebrow or kicker.
- **Don't** set controls or running copy in Gloock, or headings in Figtree.
