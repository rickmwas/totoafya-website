import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Solutions — Workflows Tailored for Healthcare Stakeholders',
  description:
    'Discover specialized TotoAfya Digital solutions for Mothers, Clinical Nurses, Health Facilities, County Health Systems, and Development Donors in Kenya.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/solutions`,
  },
};

export default function SolutionsPage() {
  return (
    <div className="space-y-24 py-12 bg-[#FAF9F6]">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            Tailored Stakeholder Workflows
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for the realities of every healthcare role.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Whether caring for a newborn at home, running a high-volume dispensary clinic, managing facility operations, or overseeing county-wide immunization, TotoAfya provides purpose-built capabilities.
          </p>
        </div>
      </section>

      {/* 1. Mothers & Caregivers — Human Photo + Product Interface */}
      <section id="mothers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">For Mothers & Caregivers</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Clear pregnancy milestone guidance and automated SMS reminders.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Expectant mothers receive timely SMS notifications prior to scheduled ANC and vaccination visits, eliminating forgotten milestone dates. The PWA portal offers bilingual health guidance in Swahili and English.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
              <Image
                src="/images/hero-mother-child.jpg"
                alt="Kenyan mother with child"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/mother_portal_mockup.png"
                alt="Mother PWA Portal Interface"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Health Workers & CHVs — Clinical Workflow + Tablet UI */}
      <section id="clinicians" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950 text-white rounded-2xl border border-emerald-900 p-8 sm:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">For Clinical Nurses & CHVs</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Fast clinical registries built for high patient volume.
              </h2>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Nurses at dispensary and maternity centers register patients, record vitals, log blood pressure, and view KEPI immunization timetables in under two minutes per visit.
              </p>
              
              <div className="pt-4 space-y-2 text-xs text-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>WHO Weight-for-Age & MUAC nutrition staging (Normal, MAM, SAM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Red-flag danger sign clinical warnings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Offline operation during power or network outages</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-emerald-800 bg-emerald-900 shadow-xl">
                <Image
                  src="/nurse_portal_mockup.png"
                  alt="Nurse Clinical Registry Interface"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Health Facilities — Operational Dashboard & Data Exports */}
      <section id="facilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                <Image
                  src="/admin_telemetry_trust.png"
                  alt="Facility Telemetry App"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">For Health Facilities & Dispensaries</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Operational telemetry and 1-click MoH register exports.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hospital managers and facility leads track patient attendance, identify vaccine dropouts, provision staff accounts, and export CSV/Excel registers aligned with Ministry of Health monthly reporting.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-900 transition-colors shadow-sm"
                >
                  <span>Discuss facility deployment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Health Systems & Donors — Aggregated Impact & Governance */}
      <section id="donors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-8 sm:p-12 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">For County Directors & Development Donors</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Aggregated public health telemetry and verifiable evidence.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              County reproductive health coordinators and development partners obtain multi-facility visibility across sub-counties. Evaluate immunization coverage rates and audit-trailed milestone data.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-medium">
              <span>Incubated at {SITE_CONFIG.governance.incubator} under {SITE_CONFIG.legalName}.</span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm text-center"
            >
              <span>Arrange institutional consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
