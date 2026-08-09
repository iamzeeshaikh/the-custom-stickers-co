/**
 * Every raster image under /images has WebP renditions generated alongside it
 * by `scripts/optimize-images.mjs`:
 *   <name>.webp       up to 1000px  — hero and detail views
 *   <name>-700.webp   700px         — 2x card size on phones
 *   <name>-400.webp   400px         — thumbnails and cards
 */

function isLocalRaster(src: string): boolean {
  return src.startsWith('/images/') && /\.(jpe?g|png)$/i.test(src);
}

/**
 * Most filenames under /images contain spaces. A raw space is legal in a `src`
 * attribute but not in `srcset`: the parser ends the URL at the first space and
 * reads the rest as a descriptor, which is invalid, so the candidate is dropped
 * and the browser silently falls back to `src`. Encoding keeps the URLs
 * byte-identical to what is already indexed while making srcset parse.
 *
 * Space is the only character in these filenames that needs escaping, so a
 * plain replace is enough and cannot double-encode an existing %xx.
 */
function encodePath(src: string): string {
  return src.replace(/ /g, '%20');
}

function stripExt(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, '');
}

/** Full-size WebP, falling back to the original path for anything else. */
export function imgFull(src?: string): string {
  if (!src || !isLocalRaster(src)) return src ?? '';
  return encodePath(`${stripExt(src)}.webp`);
}

/** 400px WebP for thumbnails and cards. */
export function imgThumb(src?: string): string {
  if (!src || !isLocalRaster(src)) return src ?? '';
  return encodePath(`${stripExt(src)}-400.webp`);
}

/** srcset across the three renditions. */
export function imgSrcset(src?: string): string | undefined {
  if (!src || !isLocalRaster(src)) return undefined;
  const base = encodePath(stripExt(src));
  return `${base}-400.webp 400w, ${base}-700.webp 700w, ${base}.webp 1000w`;
}
