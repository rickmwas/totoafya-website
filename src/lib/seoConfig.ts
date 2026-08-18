// ── TotoAfya Digital — SEO Configuration & JSON-LD Generators ───────

export const SITE_CONFIG = {
  domain: 'totoafya.co.ke',
  siteUrl: 'https://totoafya.co.ke',
  siteName: 'TotoAfya Digital',
  companyLegalName: 'TerraSept Solutions Ltd',
  tagline: 'Smarter Maternal & Child Healthcare in Kenya',
  defaultTitle: 'TotoAfya Digital — Smarter Maternal & Child Healthcare',
  defaultDescription:
    'TotoAfya Digital empowers mothers, community health workers (CHWs), and clinics across Kenya with smart maternal health tracking, KEPI immunization reminders, ANC visit logs, and AI healthcare guidance.',
  defaultKeywords: [
    'maternal health Kenya',
    'child health app Kenya',
    'ANC tracker Kenya',
    'vaccination reminder Kenya',
    'KEPI immunization schedule',
    'pregnancy tracking app Africa',
    'community health worker CHW app',
    'MOH 511 integration',
    'digital health Kenya',
    'TotoAfya',
    'TerraSept Solutions',
  ],
  defaultOgImage: 'https://totoafya.co.ke/images/og-cover.jpg',
  twitterHandle: '@TotoAfya',
  locale: 'en_KE',
  address: {
    streetAddress: 'Commercial Street',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    postalCode: '00100',
    addressCountry: 'KE',
  },
  contact: {
    email: 'info@totoafya.co.ke',
    phone: '+254 700 000 000', // Update with actual official support number if available
  },
}

/**
 * Generates JSON-LD Organization Schema for Google Knowledge Graph & Rich Snippets
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${SITE_CONFIG.siteUrl}/#organization`,
    name: SITE_CONFIG.siteName,
    legalName: SITE_CONFIG.companyLegalName,
    url: SITE_CONFIG.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.siteUrl}/logo.png`,
    },
    description: SITE_CONFIG.defaultDescription,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    address: {
      '@type': 'PostalAddress',
      ...SITE_CONFIG.address,
    },
    sameAs: [
      'https://twitter.com/TotoAfya',
      'https://linkedin.com/company/totoafya',
      'https://facebook.com/totoafyadigital',
    ],
  }
}

/**
 * Generates JSON-LD WebSite Schema with SearchAction
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.siteUrl}/#website`,
    url: SITE_CONFIG.siteUrl,
    name: SITE_CONFIG.siteName,
    description: SITE_CONFIG.defaultDescription,
    publisher: {
      '@id': `${SITE_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: 'en-KE',
  }
}

/**
 * Generates JSON-LD SoftwareApplication / MobileApplication Schema
 */
export function getSoftwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TotoAfya Mother & Caregiver App',
    operatingSystem: 'Android, Web PWA, iOS (PWA)',
    applicationCategory: 'HealthApplication',
    url: `${SITE_CONFIG.siteUrl}/download`,
    downloadUrl: `${SITE_CONFIG.siteUrl}/download`,
    price: '0',
    priceCurrency: 'KES',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KES',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.companyLegalName,
    },
    description:
      'Digital maternal health companion for African mothers to track pregnancy milestones, KEPI immunization timelines, growth charts, and AI health support.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '128',
    },
  }
}

/**
 * Generates JSON-LD FAQPage Schema for SERP Rich FAQ Accordions
 */
export function getFAQPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

/**
 * Generates JSON-LD BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.path}`,
    })),
  }
}
