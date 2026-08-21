import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Syringe, ShieldCheck, ChevronRight, BookOpen } from 'lucide-react';
import { FAQ_ITEMS, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resources & Technical Documentation',
  description:
    'Explore TotoAfya Digital clinical documentation, KEPI vaccine schedule standards, pilot readiness guide, and platform FAQs.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/resources`,
  },
};

export default function ResourcesPage() {
  return (
    <div className="space-y-20 py-12 bg-[#FAF9F6]">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            Documentation & Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technical documentation & clinical standards.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Access technical briefs on offline database synchronization, KEPI immunization protocols, Kenya Data Protection Act 2019 compliance, and facility pilot onboarding standards.
          </p>
        </div>
      </section>

      {/* Resource Brief Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Resource 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Syringe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">KEPI Immunization Schedule Reference</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete technical schedule mapping for BCG, OPV, Rotavirus, Pentavalent, PCV10, and Measles-Rubella milestones from birth to 24 months.
              </p>
            </div>
            <Link
              href="/product"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 pt-2 border-t border-slate-100"
            >
              <span>Explore KEPI Schedule Logic</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Resource 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Data Protection Act 2019 Brief</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legal and technical overview of patient record encryption, role-based authorization, client-side storage security, and data subject consent.
              </p>
            </div>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 pt-2 border-t border-slate-100"
            >
              <span>Read Data Protection Brief</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Resource 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Dispensary Pilot Onboarding Guide</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Checklist for clinical nurse onboarding, hardware requirements (Android tablet / laptop), and offline queue configuration.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 pt-2 border-t border-slate-100"
            >
              <span>Request Pilot Onboarding Brief</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Statutory FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 pt-16 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Common Enquiries</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Platform & Clinical Governance FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">{item.question}</h3>
              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
