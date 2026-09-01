import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Syringe, ShieldCheck, ChevronRight, BookOpen } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resources & FAQs — Technical & KEPI Documentation',
  description:
    'Explore TotoAfya Digital clinical documentation, KEPI vaccine schedule standards, pilot readiness guide, and platform FAQs.',
};

export default function ResourcesPage() {
  return (
    <div className="space-y-16 py-12 bg-[#F8FAFA] text-[#102027]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="badge-clinical">Documentation & Technical Knowledge</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#063B4C] tracking-tight">
            Clinical protocols, KEPI schedules & <span className="text-[#087EA4]">pilot readiness guides.</span>
          </h1>
          <p className="text-base text-[#5E7078] leading-relaxed">
            Access technical specifications, vaccine schedule references, and governance documentation for TotoAfya Digital deployments across Kenya.
          </p>
        </div>
      </section>

      {/* Featured Technical Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl bg-white border border-[#D4E7EC] p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF6F9] text-[#087EA4] flex items-center justify-center">
                <Syringe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#063B4C]">KEPI Immunization Schedule Reference</h3>
              <p className="text-xs text-[#5E7078] leading-relaxed">
                Detailed reference of the 7 national vaccine visits (from BCG at birth to Measles 2 at 18 months) matching Kenya National Immunization protocols.
              </p>
            </div>
            <Link
              href="/product#kepi-engine"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087EA4] hover:text-[#066989] pt-2"
            >
              <span>View KEPI Logic</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-xl bg-white border border-[#D4E7EC] p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF6F9] text-[#087EA4] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#063B4C]">Pilot Readiness Implementation Guide</h3>
              <p className="text-xs text-[#5E7078] leading-relaxed">
                Security, backup, RBAC, encrypted IndexedDB, and clinical safety checklist required prior to introducing TotoAfya into real health facilities.
              </p>
            </div>
            <Link
              href="/product#offline-engine"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087EA4] hover:text-[#066989] pt-2"
            >
              <span>View Pilot Standards</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-xl bg-white border border-[#D4E7EC] p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EAF6F9] text-[#087EA4] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#063B4C]">Data Protection & Privacy Overview</h3>
              <p className="text-xs text-[#5E7078] leading-relaxed">
                Legal breakdown of compliance with Kenya&apos;s Data Protection Act 2019, patient data consent, role-based authorization, and encrypted storage.
              </p>
            </div>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#087EA4] hover:text-[#066989] pt-2"
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
          <div className="badge-clinical">FAQ Knowledge Base</div>
          <h2 className="text-2xl font-bold text-[#063B4C]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-6 rounded-xl bg-white border border-[#D4E7EC] space-y-2">
              <h3 className="font-bold text-sm text-[#063B4C]">{item.question}</h3>
              <p className="text-xs text-[#5E7078] leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
