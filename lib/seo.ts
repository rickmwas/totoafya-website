import { SITE_CONFIG } from './constants';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      areaServed: 'KE',
      availableLanguage: ['en', 'sw'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kisii Town',
      addressRegion: 'Kisii County',
      addressCountry: 'KE',
    },
    knowsAbout: [
      'Maternal Health',
      'Child Health',
      'KEPI Immunization Schedule',
      'Digital Health Registries',
      'Offline-First Healthcare Technology',
    ],
  };
}

export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TotoAfya Digital Platform',
    operatingSystem: 'Web, Android PWA, Windows/macOS Desktop (Tauri)',
    applicationCategory: 'HealthApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KES',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Organization',
          name: 'Kisii University Innovation Hub',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'Recognized as Best Digital Healthcare Innovation during Kisii Innovation Week for connected offline-first maternal and child immunization tracking.',
      },
    ],
    description: SITE_CONFIG.description,
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
