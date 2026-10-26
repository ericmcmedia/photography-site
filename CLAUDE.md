# CLAUDE.md

Guidance for working on the EricMcMedia portfolio site (ericmcmedia.com), the photography and video portfolio of Eric McGill, based in DeKalb, Illinois.

## Stack

- **Astro 7** static site (`output: 'static'`), no UI framework, plain CSS
- **astro:assets** (sharp) for all image optimization
- **@astrojs/sitemap** generates `sitemap-index.xml` for `https://ericmcmedia.com`
- **Fonts** self hosted via Fontsource: Anton (display) and Inter Variable (body)
- **Formspree** handles the contact form (no backend)
- **Hosting:** Cloudflare Pages. Build `npm run build`, output `dist`
- **Node:** 22.23.4 or newer (`.nvmrc` pins 24)

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Folder structure

```
public/                    Static files copied as is (og-image.jpg, favicon.svg, robots.txt, _headers)
src/
  assets/
    about/eric.jpg         Eric's photo for the About page
    home/hero.jpg          Home page hero image
    galleries/
      portraits/           Drop Portraits photos here
      events/              Drop Events photos here
      couples/             Drop Couples photos here
  components/              Header, Footer, Gallery (grid + lightbox), BookCta, VideoEmbed
  data/site.ts             Brand info, contact details, nav, categories, services, videos, Formspree ID
  layouts/BaseLayout.astro <head> SEO tags, Open Graph, JSON-LD, header and footer
  lib/galleries.ts         Loads every image in src/assets/galleries/<category>/ automatically
  pages/                   index, about, services, video, contact, 404, galleries/index, galleries/[category]
  styles/global.css        Design tokens and shared styles
```

## Brand

| Token          | Value     | Use                                                              |
| -------------- | --------- | ---------------------------------------------------------------- |
| `--red`        | `#C8102E` | Brand red. Fills, buttons, borders, bars, large display text      |
| `--red-text`   | `#FF4D5E` | Red for small text on black (6.5:1 contrast)                      |
| `--black`      | `#000000` | Page background                                                   |
| `--white`      | `#FFFFFF` | Main text                                                         |

- **Contrast rule:** `#C8102E` on black is only 3.6:1, which fails WCAG AA for normal text. Never use `--red` for small text on a dark background; use `--red-text`. White text on `--red` (5.9:1) and `--red` text on white (5.9:1) are fine.
- **Fonts:** Anton for headings (uppercase, tight leading), Inter Variable for body and UI labels.
- **Style:** bold, high contrast, strong typography, confident layout. Thick red rules and bars as accents.
- **Copy rule:** no em dashes or en dashes anywhere in site copy. Use periods, commas, colons, or "and".

## Adding photos

1. Export the photo as a high quality JPG (around 2400 to 3000px on the long edge is plenty).
2. Drop it into `src/assets/galleries/<category>/` (`portraits`, `events`, or `couples`).
3. Name it descriptively. The file name becomes the alt text: `01-maya-senior-portrait-dekalb.jpg` becomes "Maya senior portrait dekalb". A leading number controls order and is stripped from the alt text.
4. Delete the `placeholder-XX.jpg` files in that folder once real photos are in.

The home page "Featured work" pulls the first two photos from each category, and each category card uses the first photo as its cover.

To add a new category, add an entry to `categories` in `src/data/site.ts` and create the matching folder.

## Always optimize images

- Every image in the site must go through `astro:assets` (`<Image>`, `<Picture>`, or `getImage()`). Never put photos in `public/` and never use a raw `<img src="...">` for photos.
- Always pass `widths` and `sizes` so the browser gets a responsive `srcset`, and `format="webp"`.
- Below the fold images stay `loading="lazy"` (the Astro default). Only the hero and the first visible images use `loading="eager"` (the hero also gets `fetchpriority="high"`).
- Always write meaningful `alt` text, or `alt=""` for purely decorative images.
- The only files in `public/` that are images are `og-image.jpg` (1200x630, for social sharing) and `favicon.svg`.

## Other content

- **Videos:** edit `videos` in `src/data/site.ts`. An empty `id` shows a "Coming soon" placeholder.
- **Services and prices:** edit `services` in `src/data/site.ts`.
- **Formspree:** set `FORMSPREE_FORM_ID` in `src/data/site.ts` (currently the placeholder `YOUR_FORMSPREE_FORM_ID`).
- **SEO:** every page passes a `title` and a `description` to `BaseLayout`. Descriptions should mention DeKalb and Chicago.
