import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { articles } from '@/data/articles';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/hizmetler',
    '/projeler',
    '/hakkimizda',
    '/blog',
    '/iletisim',
    '/gizlilik',
    '/kvkk',
    '/cerezler',
    ...services.map((s) => `/hizmetler/${s.slug}`),
    ...projects.map((p) => `/projeler/${p.slug}`),
    ...articles.map((a) => `/blog/${a.slug}`),
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path.split('/').length === 2 ? 0.8 : 0.6,
  }));
}
