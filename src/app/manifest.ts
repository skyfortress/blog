import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SkyFortress - Expert AI Development Services',
    short_name: 'SkyFortress',
    description: 'Transform your business with custom AI solutions, MLOps infrastructure, intelligent chatbots, and expert code audits.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/favicon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['productivity', 'business', 'technology'],
    lang: 'en',
  };
}
