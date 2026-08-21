import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service — Usage Guidelines',
  description:
    'Terms of Service governing the use of TotoAfya Digital platform by health facilities, nurses, and caregivers.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAF9F6] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
        
        <div className="space-y-2 border-b border-slate-200 pb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            Terms & Conditions
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900">Terms of Service</h1>
          <p className="text-xs text-slate-500 font-medium">
            Last updated: August 21, 2026 · {SITE_CONFIG.legalName}
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or operating TotoAfya Digital (including the Mother PWA Portal, Nurse Clinical Portal, and Facility PC Desktop Application), healthcare facilities, clinical nurses, community health workers, and caregivers agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Facility Onboarding & Credentials</h2>
            <p>
              Health facilities deploying TotoAfya Digital are responsible for provisioning authorized clinical staff logins, defining facility administrator roles, and maintaining credential confidentiality. User accounts are non-transferable and tied to authorized health worker roles.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Service Availability & Offline Operations</h2>
            <p>
              TotoAfya Digital is engineered with offline-first client architecture using IndexedDB queues. While the platform operates locally without active internet during clinic intake, cloud synchronization requires network availability. {SITE_CONFIG.legalName} does not guarantee uninterrupted third-party cellular connectivity in remote regions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Intellectual Property</h2>
            <p>
              All rights, title, and interest in and to TotoAfya Digital—including software source code, offline synchronization algorithms, KEPI scheduling engines, WHO growth staging models, and trademark assets—remain the property of {SITE_CONFIG.legalName} and its development partners.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">5. Clinical Responsibility & Limitation</h2>
            <p>
              TotoAfya Digital provides clinical decision support and workflow automation. Healthcare providers retain primary responsibility for patient examination, vitals verification, and medical treatment decisions. {SITE_CONFIG.legalName} shall not be liable for clinical decisions rendered by medical staff based on incorrect manual data entry.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">6. Legal Contact</h2>
            <p>
              For questions regarding these Terms of Service or institutional agreements, please contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <p><strong>Legal Office:</strong> {SITE_CONFIG.legalName}</p>
              <p><strong>Address:</strong> {SITE_CONFIG.address}</p>
              <p><strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-800 underline font-semibold">{SITE_CONFIG.email}</a></p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
