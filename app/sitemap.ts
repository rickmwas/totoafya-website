import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    '',
    '/about',
    '/solutions',
    '/product',
    '/pricing',
    '/contact',
    '/resources',
    '/privacy',
    '/terms',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/product' || route === '/pricing' ? 0.8 : 0.6,
  }));
}
