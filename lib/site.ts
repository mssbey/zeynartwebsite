import type { Metadata } from 'next';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zeynart.com';
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@zeynart.com';
export const contactPhone = { display: '0850 305 0 533', href: 'tel:+908503050533' } as const;
export const locales = { default: 'tr', supported: ['tr', 'en'] } as const;
export function metadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ZEYNART`,
      description,
      url: path,
      locale: 'tr_TR',
      type: 'website',
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
  };
}
