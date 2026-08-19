import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy — Data Protection Act 2019 Compliance',
  description:
    'Privacy Policy for TotoAfya Digital platform operated by TerraSept Solutions Ltd in compliance with Kenya Data Protection Act 2019.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <span className="badge-trust">Legal Compliance</span>
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-500">
          Last updated: August 19, 2026 · {SITE_CONFIG.legalName}
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Data Controller Information</h2>
          <p>
            TotoAfya Digital is owned and operated by {SITE_CONFIG.legalName}, located in {SITE_CONFIG.address}. We process personal health data in strict accordance with the Kenya Data Protection Act 2019 and relevant Ministry of Health guidelines.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
          <p>
            We process health information necessary for maternal and child health management, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mother Profile: Name, National ID / ANC Book Number, Contact Information, Last Menstrual Period (LMP), Estimated Date of Delivery (EDD).</li>
            <li>Child Profile: Name, Date of Birth, Gender, Weight, Height, Mid-Upper Arm Circumference (MUAC).</li>
            <li>Clinical Logs: Antenatal Care (ANC) vitals, danger signs, KEPI vaccine administration dates.</li>
            <li>Technical Data: Facility UUID, user roles (Mother, Nurse, Facility Lead), and audit logs.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Local Encryption & Sync Security</h2>
          <p>
            Personal health data stored on client devices (tablets, mobile phones, desktop computers) is encrypted using client-side IndexedDB encryption. Sync operations to cloud PostgreSQL infrastructure utilize TLS encryption and PostgreSQL Row Level Security (RLS) to enforce facility-based data isolation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Contact & Data Protection Officer</h2>
          <p>
            Inquiries regarding data access, rectification, or deletion requests under the Data Protection Act 2019 may be directed to our Data Protection Officer at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-800 underline">
              {SITE_CONFIG.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
