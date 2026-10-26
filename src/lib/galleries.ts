import type { ImageMetadata } from 'astro';
import { categories, type CategorySlug } from '../data/site';

export interface GalleryPhoto {
  src: ImageMetadata;
  alt: string;
  file: string;
}

// Every image dropped into src/assets/galleries/<category>/ is picked up here.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/galleries/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

// "jane-and-sam_downtown-dekalb.jpg" becomes "Jane and sam downtown dekalb".
function altFromFile(file: string, category: string, index: number): string {
  const base = file.replace(/\.[^.]+$/, '');
  if (/^placeholder/i.test(base)) {
    return `${category} placeholder image ${index + 1}`;
  }
  const words = base.replace(/^\d+[\s._-]*/, '').replace(/[_-]+/g, ' ').trim();
  if (!words) return `${category} photo ${index + 1} by Eric McGill`;
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function getPhotos(slug: CategorySlug): GalleryPhoto[] {
  const title = categories.find((c) => c.slug === slug)?.title ?? slug;
  return Object.entries(files)
    .filter(([path]) => path.split('/').at(-2) === slug)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, mod], i) => {
      const file = path.split('/').at(-1)!;
      return { src: mod.default, alt: altFromFile(file, title, i), file };
    });
}
