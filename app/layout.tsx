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
  description:
    'A connected maternal, newborn and child healthcare platform supporting pregnancy, antenatal care, immunisation and early childhood care in Kenya.',
  keywords: [
    'TotoAfya Digital',
    'Maternal healthcare Kenya',
    'Digital maternal health',
    'ANC tracking',
    'Child immunisation tracking',
    'Maternal and child health platform',
    'Child growth monitoring',
    'Digital clinic records',
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
      <body className="min-h-full flex flex-col font-sans bg-[#fbfaf7] text-[#17221f]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
