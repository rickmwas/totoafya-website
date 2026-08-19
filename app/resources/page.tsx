import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Syringe, FileText, ShieldCheck, ChevronRight, Download, BookOpen } from 'lucide-react';
import { FAQ_ITEMS, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resources & FAQs — Technical & KEPI Documentation',
  description:
    'Explore TotoAfya Digital clinical documentation, KEPI vaccine schedule standards, pilot readiness guide, and platform FAQs.',
};

export default function ResourcesPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="badge-trust">Documentation & Technical Knowledge</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Clinical protocols, KEPI schedules &{' '}
            <span className="font-serif italic text-emerald-800">pilot readiness guides.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Access technical specifications, vaccine schedule references, and governance documentation for TotoAfya Digital deployments across Kenya.
          </p>
        </div>
      </section>

      {/* Featured Technical Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Syringe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">KEPI Immunization Schedule Reference</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed reference of the 7 national vaccine visits (from BCG at birth to Measles 2 at 18 months) matching Kenya National Immunization protocols.
              </p>
            </div>
            <Link
              href="/product#kepi-engine"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 pt-2"
            >
              <span>View KEPI Logic</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Pilot Readiness Implementation Guide</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Security, backup, RBAC, encrypted IndexedDB, and clinical safety checklist required prior to introducing TotoAfya into real health facilities.
              </p>
            </div>
            <Link
              href="/product#offline-engine"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 pt-2"
            >
              <span>View Pilot Standards</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Data Protection & Privacy Overview</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legal breakdown of compliance with Kenya's Data Protection Act 2019, patient data consent, role-based authorization, and encrypted storage.
              </p>
            </div>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 pt-2"
            >
              <span>Read Privacy Policy</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Reference */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="badge-trust">FAQ Knowledge Base</span>
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="rounded-xl bg-white border border-slate-200 p-6 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">{item.question}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
