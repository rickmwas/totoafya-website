import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — Executive & Institutional Consultations',
  description:
    'Connect with TerraSept Solutions Ltd to arrange TotoAfya Digital pilot deployment, facility onboarding, or county health consultation.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
