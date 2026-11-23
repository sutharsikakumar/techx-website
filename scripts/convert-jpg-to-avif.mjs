/**
 * Converts every JPG/JPEG under public/images to an AVIF sibling.
 *
 * Original files are preserved. Run with:
 *   npm run images:avif
 */
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const imagesDir = path.join(root, 'public/images');
const QUALITY = 82;

async function mtime(file) {
  try {
    return (await stat(file)).mtimeMs;
  } catch {
    return 0;
  }
}

async function convertDirectory(directory) {
  let converted = 0;
  let skipped = 0;

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      const result = await convertDirectory(file);
      converted += result.converted;
      skipped += result.skipped;
    } else if (entry.isFile() && /\.(jpe?g)$/i.test(entry.name)) {
      const out = path.join(directory, `${path.parse(entry.name).name}.avif`);

      if ((await mtime(out)) > (await mtime(file))) {
        skipped++;
        continue;
      }

      await sharp(file).rotate().avif({ quality: QUALITY }).toFile(out);
      converted++;
    }
  }

  return { converted, skipped };
}

const result = await convertDirectory(imagesDir);
console.log(`images: ${result.converted} converted, ${result.skipped} up to date`);
