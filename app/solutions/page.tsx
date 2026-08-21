import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2, ArrowRight } from 'lucide-react';

import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Solutions — Stakeholder Capabilities & Workflows',
  description:
    'Explore TotoAfya Digital solutions tailored for Mothers, Clinical Nurses, Facility Administrators, and County Health Departments in Kenya.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/solutions`,
  },
};

export default function SolutionsPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="section-index">Solutions & Workflow Architecture</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Tailored workflows for every level of the maternal care continuum.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            TotoAfya Digital provides specialized interfaces for mothers, clinical nurses, facility leads, and county health managers — maintaining data integrity across every health encounter.
          </p>
        </div>
      </section>

      {/* Stakeholder Solution 1: Dispensaries & Clinics */}
      <section id="facilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-subtle pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                For Facilities & Dispensaries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Paperless ANC registers & fast clinical workflows.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Designed specifically for Level 2 and Level 3 health facilities where clinical nurses balance high patient volume with mandatory Ministry of Health documentation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Under 2-Minute Patient Intake</strong>
                  <span>Fast registration workflow with automated patient ID generation.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Offline Resilience</strong>
                  <span>Full access to registers and vitals entry when clinic internet fails.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">CSV / MoH Data Export</strong>
                  <span>Export monthly patient registers directly to Excel or CSV for statutory reporting.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?plan=basic"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-900 text-white text-xs font-bold hover:bg-emerald-950 transition-colors shadow-sm"
              >
                <span>Onboard Dispensary</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-300 bg-white shadow-lg">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src="/nurse_portal_mockup.png"
                  alt="TotoAfya Dispensary & Nurse Workflow"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Solution 2: County Health Departments */}
      <section id="counties" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-subtle pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                For County Health Departments
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Aggregated public health telemetry & dropout tracking.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Provides county directors, reproductive health coordinators, and public health officers with real-time visibility across facility immunization coverage and maternal attendance.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">County-Wide Coverage Maps</strong>
                  <span>Monitor KEPI vaccination completion rates across sub-counties and wards.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Early Dropout Identification</strong>
                  <span>Identify missed Pentavalent or Measles-Rubella doses before child reaches 24 months.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">DHIS2 Export Alignment</strong>
                  <span>Compatible schema formatting for seamless county data reconciliation.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?plan=enterprise"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-900 text-white text-xs font-bold hover:bg-emerald-950 transition-colors shadow-sm"
              >
                <span>Request County Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="rounded-xl overflow-hidden border border-slate-300 bg-white shadow-lg">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src="/admin_telemetry_trust.png"
                  alt="TotoAfya County Telemetry Portal"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Solution 3: Mothers & Caregivers */}
      <section id="mothers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-subtle pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                For Mothers & Caregivers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Bilingual ANC companion & automated SMS reminders.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Empowers expectant mothers and caregivers with continuous pregnancy milestone tracking, automated SMS clinic reminders, and 24/7 health education in English and Kiswahili.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Automated SMS Reminders</strong>
                  <span>Direct SMS alerts prior to scheduled KEPI immunization and ANC clinic visits.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Digital ANC Booklet</strong>
                  <span>Always accessible pregnancy milestone record on basic smartphones and PWAs.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Bilingual Health Companion</strong>
                  <span>Supportive maternal education answering questions in English and Kiswahili.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-900 text-white text-xs font-bold hover:bg-emerald-950 transition-colors shadow-sm"
              >
                <span>View Caregiver Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-300 bg-white shadow-lg">
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src="/mother_portal_mockup.png"
                  alt="TotoAfya Mother PWA Portal"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Solution 4: NGOs & Development Partners */}
      <section id="ngos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-subtle pt-16">
        <div className="rounded-2xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              For Donors & Development Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Verifiable maternal milestone telemetry & audit trails.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              Collaborate with TerraSept Solutions Ltd to deploy verified digital registries in underserved sub-counties. Evaluate public health impact through audit-trailed milestone data.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <Link
              href="/contact?type=partner"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 transition-all text-center"
            >
              <span>Partner Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
