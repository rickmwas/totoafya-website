import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/lib/constants';
import { getOrganizationSchema, getSoftwareApplicationSchema } from '@/lib/seo';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreaderSerif = Newsreader({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Connected Maternal & Child Healthcare Kenya`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'TotoAfya Digital',
    'Maternal healthcare Kenya',
    'KEPI immunization schedule',
    'WHO child growth tracking',
    'Offline health app Kenya',
    'Kisii University innovation',
    'TerraSept Solutions Ltd',
    'Community health worker PWA',
    'Dispensary digital health registry',
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/mother_portal_mockup.png',
        width: 1200,
        height: 630,
        alt: 'TotoAfya Digital Platform Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['/mother_portal_mockup.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = getOrganizationSchema();
  const appSchema = getSoftwareApplicationSchema();

  return (
    <html lang="en" className={`${jakartaSans.variable} ${newsreaderSerif.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
