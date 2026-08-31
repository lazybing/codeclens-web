import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // you can add more logic if you need
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // something you donot want to be record by google
    },
    sitemap: 'https://codeclens.com/sitemap.xml',
  };
}
