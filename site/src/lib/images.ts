/* Bild-Auflösung für Astros Build-time-Optimierung.
   NUR aus .astro-Dateien importieren (nicht aus Client-Islands). */
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { alt as altOf } from './alt';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/img/*.{jpg,jpeg,png}',
  { eager: true }
);

/** Liefert die ImageMetadata zu einem Dateinamen (z. B. "adapter-detail.jpg"). */
export function img(name: string | null | undefined): ImageMetadata | undefined {
  if (!name) return undefined;
  return files[`/src/assets/img/${name}`]?.default;
}

/** Responsive Breiten, nie größer als das Original (verhindert Upscaling-Fehler). */
export function widthsFor(meta: ImageMetadata, want = [400, 768, 1200, 1600]): number[] {
  const ws = want.filter((w) => w <= meta.width);
  if (!ws.includes(meta.width)) ws.push(meta.width);
  return Array.from(new Set(ws)).sort((a, b) => a - b);
}

export interface ResolvedImage {
  src: string;
  srcset: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
}

/** Optimiert ein Bild build-time und gibt serialisierbare Props für Islands zurück. */
export async function optimized(
  name: string,
  sizes = '(max-width: 920px) 100vw, 33vw',
  want = [400, 768, 1200]
): Promise<ResolvedImage | null> {
  const meta = img(name);
  if (!meta) return null;
  const r = await getImage({ src: meta, widths: widthsFor(meta, want), format: 'webp' });
  return {
    src: r.src,
    srcset: r.srcSet.attribute,
    sizes,
    width: meta.width,
    height: meta.height,
    alt: altOf(name),
  };
}
