import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Experience } from '@/components/layout/experience';
import { StructuredData } from '@/components/ui/structured-data';
import { siteUrl } from '@/lib/site';
import './globals.css';
const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ROVA DIGITAL — Dijitalde Daha Fazlası Mümkün.',
    template: '%s | ROVA DIGITAL',
  },
  description:
    'Strateji, tasarım ve teknoloji. Web, mobil uygulama, yapay zeka ve özel yazılım çözümleriyle fikrinizi gerçeğe dönüştürüyoruz.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'ROVA DIGITAL',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#080c11', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body>
        <a href="#main" className="skip-link">
          İçeriğe geç
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Experience />
        <StructuredData
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': `${siteUrl}/#organization`,
                name: 'ROVA DIGITAL',
                url: siteUrl,
                logo: `${siteUrl}/icon.svg`,
              },
              {
                '@type': 'WebSite',
                name: 'ROVA DIGITAL',
                url: siteUrl,
                inLanguage: 'tr-TR',
                publisher: { '@id': `${siteUrl}/#organization` },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
