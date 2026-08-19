import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service — Platform Usage',
  description:
    'Terms of Service governing the use of TotoAfya Digital platform by health facilities, nurses, and caregivers.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <span className="badge-trust">Terms of Usage</span>
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="text-xs text-slate-500">
          Last updated: August 19, 2026 · {SITE_CONFIG.legalName}
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By registering for or using TotoAfya Digital (including the Mother PWA, Nurse Clinical Portal, and Facility PC Desktop App), healthcare facilities, clinical personnel, and caregivers agree to these Terms of Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Facility Account & User Roles</h2>
          <p>
            Healthcare facilities are responsible for provisioning nurse logins and ensuring that authorized personnel maintain confidential credentials. User roles enforce facility-level data boundaries.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Service Availability & Offline Operation</h2>
          <p>
            TotoAfya Digital is engineered for high availability with offline capability. However, {SITE_CONFIG.legalName} does not guarantee uninterrupted network connectivity where third-party telecommunication providers fail.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Contact Information</h2>
          <p>
            Questions regarding terms of service should be addressed to{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-800 underline">
              {SITE_CONFIG.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
