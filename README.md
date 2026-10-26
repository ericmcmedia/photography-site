# EricMcMedia

Photography and video portfolio for Eric McGill, live at [ericmcmedia.com](https://ericmcmedia.com). Built with [Astro](https://astro.build) as a fully static site and hosted on Cloudflare Pages.

## Local development

Requires Node 22.23.4 or newer (Node 24 recommended, see `.nvmrc`).

```sh
npm install
npm run dev       # start the dev server at http://localhost:4321
npm run build     # build the site into dist/
npm run preview   # preview the built site
```

## Adding photos

Gallery photos live in one folder per category:

```
src/assets/galleries/portraits/
src/assets/galleries/events/
src/assets/galleries/couples/
```

To add photos:

1. Drop JPG, PNG, or WebP files into the right folder. About 2400 to 3000px on the long edge is plenty; Astro resizes and converts them to WebP automatically.
2. Use descriptive file names. The name becomes the image's alt text, so `02-sam-and-alex-engagement.jpg` shows up as "Sam and alex engagement". The leading number sets the order.
3. Remove the `placeholder-XX.jpg` files from that folder once your own photos are in.
4. Commit and push. Cloudflare Pages rebuilds the site automatically.

Other images:

- **Home hero:** replace `src/assets/home/hero.jpg` (landscape, at least 2400px wide).
- **About photo:** `src/assets/about/eric.jpg`.
- **Social share image:** `public/og-image.jpg` (exactly 1200x630).

Videos, services, prices, and contact details are all in `src/data/site.ts`.

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form ID (the part after `/f/` in the endpoint, like `abcdwxyz`).
3. In `src/data/site.ts`, replace `YOUR_FORMSPREE_FORM_ID` with that ID.

## Deploying on Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages**, choose **Create**, then the **Pages** tab, and **Connect to Git**.
3. Select this repository and use these build settings:

   | Setting                | Value           |
   | ---------------------- | --------------- |
   | Framework preset       | Astro           |
   | Build command          | `npm run build` |
   | Build output directory | `dist`          |
   | Root directory         | (leave blank)   |

4. Under **Environment variables**, add `NODE_VERSION` = `24` (the `.nvmrc` file also sets this, so this is a safety net).
5. Click **Save and Deploy**. Every push to the production branch redeploys the site, and other branches get preview URLs.

`public/_headers` sets long cache lifetimes for the hashed files in `/_astro/`.

## Connecting the ericmcmedia.com domain

**If the domain's DNS is on Cloudflare (recommended):**

1. Open the Pages project and go to **Custom domains**, then **Set up a custom domain**.
2. Enter `ericmcmedia.com` and confirm. Cloudflare adds the DNS record for you.
3. Repeat for `www.ericmcmedia.com`.
4. To send `www` to the main domain, add a **Redirect Rule** (under the domain's **Rules**) that redirects `www.ericmcmedia.com/*` to `https://ericmcmedia.com/${1}` with a 301.

**If the domain is registered somewhere else (GoDaddy, Namecheap, Squarespace, etc.):**

- Easiest: add `ericmcmedia.com` as a site in Cloudflare (free plan), then change the nameservers at your registrar to the two Cloudflare nameservers it gives you. Once active, follow the steps above.
- Or, to keep DNS at your registrar: add `www.ericmcmedia.com` as a custom domain in Pages, then create a `CNAME` record at your registrar pointing `www` to `<your-project>.pages.dev`. Apex domains (`ericmcmedia.com` with no `www`) require the nameserver option on Cloudflare Pages.

SSL certificates are issued automatically. It can take a few minutes up to 24 hours for DNS changes to fully take effect.

## SEO

- Every page has its own title and meta description.
- Open Graph and Twitter card tags use `public/og-image.jpg`.
- `sitemap-index.xml` is generated at build time for `https://ericmcmedia.com` and referenced in `public/robots.txt`.
- After launch, submit `https://ericmcmedia.com/sitemap-index.xml` in Google Search Console.
