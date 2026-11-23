/** Keep in sync with WIDTHS in scripts/optimize-member-photos.mjs. */
export const MEMBER_PHOTO_WIDTHS = [256, 512] as const;

/**
 * Maps an original photo path from src/content/members.ts, e.g.
 * '/images/members/cohort-8/sean.avif', to its generated AVIF copy at the given width:
 * '/images/members-optimized/cohort-8/sean-256.avif'.
 */
export function memberPhotoUrl(original: string, width: number) {
  const m = original.match(/^\/images\/members\/(.+)\.[^./]+$/);
  if (!m) return original;
  return `/images/members-optimized/${m[1]}-${width}.avif`;
}

export function memberPhotoSrcSet(original: string) {
  return MEMBER_PHOTO_WIDTHS.map((w) => `${memberPhotoUrl(original, w)} ${w}w`).join(', ');
}
