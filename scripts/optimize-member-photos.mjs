/**
 * Makes small, web-ready copies of the member photos.
 *
 * The site is a static export (`images.unoptimized` in next.config.ts), so Next.js
 * can't resize images at request time. This script does it ahead of time instead:
 * every photo in public/images/members/cohort-{n}/ is cropped to the tile's 4:5 shape
 * and saved as WebP at two widths, into public/images/members-optimized/ (git-ignored).
 *
 * It runs automatically before `npm run dev` and `npm run build`, and only redoes
 * photos that changed. Keep adding original photos to public/images/members/ as usual.
 */
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

/** Keep in sync with MEMBER_PHOTO_WIDTHS in src/lib/memberPhoto.ts. */
const WIDTHS = [256, 512];
const ASPECT = 5 / 4; // height / width, matches the tile
const QUALITY = 78;

const root = path.resolve(import.meta.dirname, '..');
const srcDir = path.join(root, 'public/images/members');
const outDir = path.join(root, 'public/images/members-optimized');

async function mtime(file) {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
}

let made = 0;
let skipped = 0;

for (const cohort of await readdir(srcDir, { withFileTypes: true })) {
  if (!cohort.isDirectory()) continue;
  const inCohort = path.join(srcDir, cohort.name);
  const outCohort = path.join(outDir, cohort.name);
  await mkdir(outCohort, { recursive: true });

  for (const file of await readdir(inCohort)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const src = path.join(inCohort, file);
    const base = path.parse(file).name;
    const srcTime = await mtime(src);

    for (const w of WIDTHS) {
      const out = path.join(outCohort, `${base}-${w}.webp`);
      if ((await mtime(out)) > srcTime) {
        skipped++;
        continue;
      }
      await sharp(src)
        .rotate() // respect EXIF orientation from phone photos
        .resize(w, Math.round(w * ASPECT), { fit: 'cover', withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(out);
      made++;
    }
  }
}

console.log(`member photos: ${made} written, ${skipped} up to date`);
