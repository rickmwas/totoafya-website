import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy — Data Protection Act 2019 Compliance',
  description:
    'Privacy Policy for TotoAfya Digital platform operated by TerraSept Solutions Ltd in compliance with Kenya Data Protection Act 2019.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <span className="badge-trust">Legal Compliance</span>
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-500">
          Last updated: August 21, 2026 · {SITE_CONFIG.legalName}
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Data Controller Information</h2>
          <p>
            TotoAfya Digital is owned and operated by {SITE_CONFIG.legalName}, headquartered in {SITE_CONFIG.address}. We collect, store, and process personal health information in strict compliance with the Kenya Data Protection Act 2019, statutory Ministry of Health protocols, and global health data governance standards.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Categories of Health Information Collected</h2>
          <p>
            To provide continuous maternal, newborn, and child health tracking, TotoAfya Digital records data across authorized role boundaries:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Mother & Caregiver Record:</strong> Full legal name, national identification or ANC register number, primary phone number, residence location, Last Menstrual Period (LMP), and Estimated Date of Delivery (EDD).</li>
            <li><strong>Child Record:</strong> Child full name, date of birth, biological sex, birth weight, height, and serial growth measurements (Weight-for-Age, Height-for-Age, MUAC).</li>
            <li><strong>Clinical Visit Register:</strong> Antenatal Care (ANC) visit logs, blood pressure, hemoglobin levels, red-flag danger signs, and KEPI vaccine batch numbers.</li>
            <li><strong>Institutional System Data:</strong> Facility UUID, assigned nurse user ID, timestamped audit logs, and encrypted sync queue metadata.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. End-to-End Encryption & Offline Security</h2>
          <p>
            Patient records written to local device databases (Android tablets, smartphones, desktop Tauri applications) are encrypted at rest using AES client-side IndexedDB encryption. Data synchronized to cloud PostgreSQL infrastructure utilizes TLS 1.3 encryption in transit and PostgreSQL Row-Level Security (RLS) to restrict data access strictly to authorized facility personnel.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Data Subject Rights & Consent</h2>
          <p>
            Under Section 26 of the Kenya Data Protection Act 2019, registered mothers and caregivers have the right to request access to their digital health records, request correction of inaccurate clinical data, or withdraw consent for optional SMS notifications. Requests can be initiated directly at the registered health facility or by contacting our Data Protection Officer.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">5. Retention & Institutional Sharing</h2>
          <p>
            Patient health records are retained in accordance with Kenya Ministry of Health statutory record retention policies for maternal and child health. Aggregated, non-personally identifiable statistical telemetry may be shared with County Health Departments for immunization coverage monitoring. Patient identifiable data is never sold, leased, or disclosed to unauthorized commercial third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">6. Data Protection Officer Contact</h2>
          <p>
            For privacy inquiries, data subject rights requests, or statutory compliance verification, contact our Data Protection Office:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <p><strong>Data Protection Officer:</strong> TerraSept Solutions Ltd</p>
            <p><strong>Location:</strong> {SITE_CONFIG.address}</p>
            <p><strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-800 underline font-semibold">{SITE_CONFIG.email}</a></p>
            <p><strong>Telephone:</strong> <a href={`tel:${SITE_CONFIG.phone}`} className="text-emerald-800 underline font-semibold">{SITE_CONFIG.phone}</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
