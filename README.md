# TechX website

The landing page for TechX, UNC Chapel Hill's student tech society. It's built with Next.js and exported as a fully static site, so the `out/` folder can be hosted anywhere (GitHub Pages, Netlify, Vercel, S3).

## Run it

You need Node 20 or newer.

```bash
npm install
npm run dev          # http://localhost:3000, live reload
npm run build        # static site in out/
npm start            # serve out/ locally to check the build
```

Checks:

```bash
npm run lint
npm run typecheck
npm run format       # Prettier
```

## Links (Spring Rush form, Instagram, LinkedIn)

Instagram and LinkedIn already point to the real TechX pages (set in `src/content.ts`). The **Join Spring Rush** link points to `#` until you set the form URL:

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_RUSH_FORM_URL=https://forms.gle/...` (the same file can also override the Instagram and LinkedIn URLs).
3. Rebuild.

If you deploy on a host such as Vercel or Netlify, set the same variables in its dashboard.

## Editing content

**All copy, links and lists are in [`src/content.ts`](src/content.ts).** You never need to touch a component to change what the site says.

| To change… | Edit in `content.ts` |
|---|---|
| Nav links | `nav` |
| Mission heading and paragraph | `mission` |
| Lyceum / Professional Development / Community cards | `pillars` |
| Community photo strip | `community.photos` |
| Startup tiles | `built` |
| Company logo wall | `whereWeWork.companies` |
| Footer social labels and links | `footer` and `links` |
| Members / Executive Team placeholder text | `stubPages` |

## Where files live

```
public/                      everything the website serves (committed)
  fonts/                     Satoshi (Regular, Medium, Bold) + its licence
  images/
    brand/                   TechX logos (white, outline) and the hero block-field
    startups/                square startup tiles: brightstar, swarm, lintel, speedi
    companies/               cropped logos for the "Where we work" wall
    community/               web-sized photos for the scrolling strip (~640px tall)
source-assets/               local only, git-ignored (big originals, design files)
  community-originals/       full-size photos
  company-logos-original/    original logo files
  design-files/              the design export, brief and original brand files
docs/screenshots/            review screenshots, git-ignored (regenerate as needed)
src/                         the code (see "How it's built")
```

Only `public/` ships with the site. `source-assets/` stays on your machine: it holds
over 100 MB of originals that shouldn't go into git. Its README is the only committed file.

## Swapping images

- **Community photos:** put a web-sized copy (about 640px tall, JPEG, under ~250 KB; phone photos are often 5-10 MB and would slow the page down) in `public/images/community/`, keep the full-size one in `source-assets/community-originals/`, and add an entry to `community.photos` in `content.ts`:
  ```ts
  { src: '/images/community/kickoff.jpg', alt: 'Members at the fall kickoff', width: 1137, height: 640 },
  ```
  `width` and `height` are the photo's real pixel size, used to reserve space so nothing jumps while photos load. The scroll speed adjusts automatically to the number of photos. The text beside the heading is `community.body`. Visitors can move the strip by hand (click and drag, swipe on touch, horizontal trackpad scroll, or arrow keys); it pauses while they do and resumes drifting about 2 seconds after they stop.
- **Startup tiles:** add or change entries in `built.startups` (square images in `public/images/startups/`, about 1000×1000). An entry with an `href` is a clickable tile; one without shows as a plain image.
- **Company logos:** these are in `public/images/companies/`, cropped to the logo artwork with no extra whitespace. Use lowercase, hyphenated filenames: some web hosts are case-sensitive, and `Plaid.png` would not match `plaid.png` there. To add one, drop in a PNG cropped the same way, add `{ name, logo, width, height }` to `whereWeWork.companies` in alphabetical order, and use the file's pixel size. Each logo is automatically sized to roughly the same visual weight; add `scale: 1.3` (or similar) to an entry if its logo looks too small. Keep the uncropped original in `source-assets/company-logos-original/`.
- **Hero background** (`brand/techx-blockfield.png`): the hero ripple animation reads this image to work out where the blue blocks are, so if you replace it the animation follows the new image automatically. Keep the blocks on a black background.
- **Logos:** `brand/techx-logo-white.png` is used in the header and hero and as the footer fill mask. `brand/techx-logo-outline.png` is the footer outline. Keep both at the same aspect ratio as now.

## How it's built

```
src/
  content.ts               all editable copy, links and lists
  app/
    layout.tsx             fonts (Satoshi, self-hosted), metadata
    globals.css            brand colour variables, base styles, scroll reveal
    page.tsx               the homepage
    members/, executive-team/   placeholder ("coming soon") pages
  components/
    Header                 transparent header over the hero
    Hero + HeroCanvas      Effect A: block-field ripples
    Mission                Effect E: scroll reveal
    Pillars + PillarCard   Effect B smoke, Effect C hover dither, staggered fade-in
    HoverDither            Effect C: CSS-only cursor dither (cards and footer)
    Community + Marquee    photo strip: auto-drifts, draggable by hand
    Built, WhereWeWork
    Footer + Wordmark      Effect D: outlined wordmark with rolling dither
    StubPage               shared layout for the placeholder pages
  hooks/
    useDitherCanvas.ts     shared canvas engine (see below)
    useInView.ts           fire-once IntersectionObserver
    useCursorVars.ts       writes the cursor position into --mx/--my (no re-renders)
  lib/dither.ts            Bayer 4×4 matrix and the A, B and D fields, ported from the design file
```

`useDitherCanvas(draw, { cell, fps, timeOffset, speed, ready })` does the following:
- sizes the canvas to its element × devicePixelRatio (capped at 2);
- has `draw` write one RGBA pixel per cell into an offscreen buffer, then scales that up with smoothing off;
- runs at about 30fps;
- pauses when the canvas is off-screen or the tab is hidden;
- draws one static frame under `prefers-reduced-motion`;
- cleans everything up on unmount.

The Satoshi fonts are in `public/fonts/`, under the Fontshare Free License (`SATOSHI-LICENSE.txt`).

## Checking the build against the design

These are the places where the build intentionally differs from the design file, or where the design file left something open:

1. **Company wall uses logos, not names, with no grid lines and no intro paragraph.** All three changes were requested.
2. **Pillar cards aren't links.** In the design they linked to `#lyceum` and `#professional-development`, which don't exist on the page. They're `<article>`s now. To make them clickable, add an `href` once those pages exist.
3. **Footer hover dither uses the design file's values** (2px on a 7px grid and 2px on a 4px grid, with 220px and 120px radii). The outline doc says to reuse the card layers, but the design file uses these denser values, and the design file was treated as the source of truth.
4. **Mobile sizes aren't in the design**, since it's 1440px only. At 640px and below:
   - the hero is 720px tall instead of 980px;
   - the side gutter is 20px;
   - the header links drop to their own row under the logo;
   - startups stack;
   - the logo wall is 2 columns;
   - body text is 19px.
5. **Card hover shadow** comes from the design (a slightly deeper shadow, with no movement or lift).
6. **No favicon.** The white logo would be invisible on light browser tabs, so a dedicated icon is needed.
7. **Lighthouse hasn't been run.** The biggest likely cost is `techx-blockfield.png` (about 900 KB). Converting it to WebP or AVIF would help, but the canvas mask reads that same file, so test the ripple afterwards.
