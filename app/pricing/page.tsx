import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import PricingClient from '@/components/pricing/PricingClient';

export const metadata: Metadata = {
  title: 'Pricing & Pilot Tiers — Dispensary, Facility & Caregiver Plans',
  description:
    'Explore TotoAfya Digital pricing tiers for health facilities, dispensaries, county health systems, and caregiver access subscriptions.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/pricing`,
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
