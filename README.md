# TechX website

Landing page for TechX, UNC Chapel Hill's student tech society. Next.js static export (`out/`). Node 20+.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in out/
npm start            # serve out/
npm run lint
npm run typecheck
npm run format
npm run images:avif  # convert JPG/JPEG images in public/images to AVIF
```

Copy, links, and lists live in [`src/content.ts`](src/content.ts) and [`src/content/members.ts`](src/content/members.ts). Change the words there, not in components.

---

## Brand

Use only the tokens in [`src/app/globals.css`](src/app/globals.css). Do not introduce new colours or hard-code hex in components.

| Token | Hex | Use |
|---|---|---|
| `--cosmix` | `#38b6ff` | Brand blue. Focus rings, accents, interactive highlights. |
| `--surf` | `#3ca0db` | Secondary blue. |
| `--bacteria` | `#437592` | Mid blue. Dither / field colour. |
| `--storm` | `#46606e` | Muted blue-grey. |
| `--field-steel` | `#386c95` | Sampled from the hero block field. Dither only. |
| `--field-steel-dark` | `#284e6c` | Darker field stripe. Dither only. |
| `--steel` | `#b0bdc5` | Cool grey. |
| `--glacial` | `#c1cfd4` | Light grey, borders and hairlines. |
| `--ash` | `#e2e4e5` | Pale grey. |
| `--alice` | `#f0f8ff` | Off-white / ice. |
| `--obsidian` | `#0b1215` | Near-black text on light. Theme colour. |
| `--black` | `#000000` | Hero, navy-glow sections, footer. |
| `--white` | `#ffffff` | Page background and text on dark. |

**Type.** Satoshi, self-hosted (`public/fonts/`, Fontshare Free License). Weights in use: Regular 400, Medium 500, Bold 700. Fallback: `-apple-system`, Helvetica Neue, Arial. No italics anywhere — emphasise with **bold**. Section titles use `.heading-xl` (Satoshi Bold, tight tracking). Body copy uses `.lede`.

**Layout.** Max width `--container` (1240px). Side gutter `--gutter` (48px, 20px below 640px). Motion easing `--ease-out`: `cubic-bezier(0.2, 0.8, 0.2, 1)`. Honour `prefers-reduced-motion`.

**Voice.** The organisation is **TechX** (one word). Tagline: *UNC's Premier Tech Society*. Motto: *Via ad Excellentiam*. Hero statement: *We back the minds shaping the future.* Copy is direct and spare. No slang, no exclamation marks, no filler.

**Logo.** White mark for dark surfaces (`public/images/brand/techx-logo-white.png`). Outline mark for the footer (`techx-logo-outline.png`). Keep the existing aspect ratio. Do not recolour the mark.

**Surfaces.** Hero is black with the block-field. Home sections below the hero and the members directory sit on `.navy-glow` (black with a repeating navy glow) and `.home-dark` (light text). Light pages use white / obsidian.

---

## Content

| Change | File |
|---|---|
| Links (Rush, Instagram, LinkedIn, HeelLife) | `links` in `content.ts` (or `.env.local`, see `.env.example`) |
| Nav and header CTA | `nav`, `navCta` |
| Hero statement and motto | `heroStory` |
| Mission, pillars, community strip, startups, company wall, footer | matching keys in `content.ts` |
| Member directory | `src/content/members.ts` |

### Add a member

1. Optional portrait: `public/images/members/cohort-{n}/{first-last}.avif` (or `.png`). Face centred; 4:5 crop. Lowercase, hyphenated names. `npm run dev` / `build` will shrink it.
2. In that cohort's `members` list:

```ts
{ name: 'Jane Doe', linkedin: 'https://www.linkedin.com/in/janedoe', photo: '/images/members/cohort-8/jane-doe.avif' },
```

Omit `photo` for the silhouette. Add a new `{ number, members }` object for a new cohort; the page sorts newest first.

### Images

Web-sized files go in `public/images/`. Full-size originals stay in `source-assets/` (git-ignored except that folder's README).

To convert JPG/JPEG files anywhere under `public/images/` to AVIF while preserving the originals, run `npm run images:avif`. It creates a same-named `.avif` sibling for each image.

- Community: ~640px tall JPEG, under ~250 KB, then list in `community.photos` with real `width` / `height` and a proper `alt`.
- Startups: ~1000×1000 in `public/images/startups/`, centred (shown 4:3).
- Company logos: cropped PNGs, no extra padding, lowercase-hyphen names. Add `{ name, logo, width, height }` to `whereWeWork.companies`. Optional `scale` if a mark looks small.
- Hero field: `brand/techx-blockfield.png` — blue blocks on black. The ripple reads this file.

---

## Code standards

- **TypeScript strict.** No `any`. Use `@/` imports. Named exports for components.
- **Content vs UI.** Strings, URLs, and lists belong in `src/content.ts` or `src/content/members.ts`. Components render; they do not own copy.
- **CSS.** One CSS module per component. Shared tokens, `.container`, `.heading-xl`, `.lede`, `.navy-glow`, and reveal helpers live in `globals.css`. Colours are `var(--token)` only. New colour → add a named token first and justify it.
- **HTML.** Semantic elements. Images need `width`, `height`, and `alt`. Use `<img>` (static export, no `next/image`). `:focus-visible` stays the Cosmix ring.
- **Motion.** Use `--ease-out`. Canvas and CSS animation must pause or freeze under `prefers-reduced-motion`.
- **Formatting.** Prettier: single quotes, semicolons, trailing commas, print width 100. ESLint is `eslint-config-next`. Run `lint`, `typecheck`, and `format` before a PR.
- **Files.** `PascalCase.tsx` / `.module.css` for components. Hooks `useX.ts`. Utilities in `src/lib/`. Asset filenames lowercase with hyphens.
- **Git.** Do not commit `.env.local`, `source-assets/` originals, or `docs/screenshots/`. Do not add secrets. Keep PRs small and on-brand.
)
