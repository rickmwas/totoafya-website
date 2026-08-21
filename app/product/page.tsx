import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Syringe,
  Activity,
  WifiOff,
  ShieldCheck,
  FileSpreadsheet,
  Lock,
} from 'lucide-react';

import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Product Architecture & Technical Capabilities',
  description:
    'Deep dive into TotoAfya Digital platform architecture: Mother PWA, Nurse Clinical Portal, Tauri Facility App, Offline Sync Engine, and KEPI Vaccine Logic.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/product`,
  },
};

export default function ProductPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="section-index">Technical Architecture</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Engineered for clinical precision & offline resilience.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            TotoAfya Digital combines mobile Progressive Web Apps, tablet clinical registries, and desktop management tools linked through an encrypted offline synchronization engine.
          </p>
        </div>
      </section>

      {/* Architecture Overview Diagram Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-300 bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              System Architecture Diagram
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              End-to-End Care Data Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative text-xs">
            
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-emerald-900 block">1. Mother PWA</span>
              <p className="text-slate-600 leading-relaxed">
                Registers profile, receives automated vaccine SMS, logs ANC milestones.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-emerald-900 block">2. Local IndexedDB</span>
              <p className="text-slate-600 leading-relaxed">
                Stores encrypted records client-side when dispensary internet is unavailable.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-emerald-900 block">3. Sync Queue</span>
              <p className="text-slate-600 leading-relaxed">
                Background thread pushes pending transactions to cloud database upon network connection.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-emerald-900 block">4. Telemetry & MoH Export</span>
              <p className="text-slate-600 leading-relaxed">
                Aggregates facility indicators and exports MoH / DHIS2 aligned CSV registers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5 Core Technical Engines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="section-index">Core Platform Engines</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Five core technical subsystems.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Engine 1: Offline Sync Engine */}
          <div className="card-institutional p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">1. Encrypted Offline Engine</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Utilizes browser IndexedDB for local zero-latency reading and writing. Operations queue locally and sync automatically when internet resumes.
            </p>
          </div>

          {/* Engine 2: KEPI Vaccine Scheduler */}
          <div className="card-institutional p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Syringe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">2. KEPI Immunization Engine</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Calculates exact vaccine milestone target dates from birth (BCG, OPV0) through 24 months (Measles-Rubella 2, Vitamin A) per KEPI guidelines.
            </p>
          </div>

          {/* Engine 3: WHO Growth Calculator */}
          <div className="card-institutional p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">3. WHO Growth Staging</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Evaluates Weight-for-Age, Height-for-Age, and MUAC measurements against WHO growth standards to flag Moderate (MAM) or Severe (SAM) Acute Malnutrition.
            </p>
          </div>

          {/* Engine 4: Role-Based Access Control */}
          <div className="card-institutional p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">4. Role-Based Access Control</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enforces strict access boundaries: Mothers view their personal record, Nurses access facility clinic registers, Facility Leads manage telemetry.
            </p>
          </div>

          {/* Engine 5: MoH / DHIS2 Exporter */}
          <div className="card-institutional p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">5. MoH / DHIS2 Data Exporter</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Generates structured CSV and Excel files formatted to match Ministry of Health monthly reporting registers for rapid submission.
            </p>
          </div>

          {/* Engine 6: Data Security */}
          <div className="card-institutional p-6 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">6. Statutory Encryption</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patient identifiers and clinical notes are encrypted using AES-256 standards in transit and at rest in full compliance with Data Protection Act 2019.
            </p>
          </div>

        </div>
      </section>

      {/* Product Screenshot Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-subtle pt-16 space-y-8">
        <div className="space-y-2">
          <span className="section-index">Authentic Interface Evidence</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Designed for actual clinical environments.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-institutional p-4 space-y-3">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/nurse_portal_mockup.png"
                alt="Nurse Portal Workflow"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="px-2">
              <span className="font-bold text-slate-900 text-sm block">Nurse Clinical Portal</span>
              <span className="text-xs text-slate-500">Tablet-optimized registration, vitals logging, and KEPI vaccination entries.</span>
            </div>
          </div>

          <div className="card-institutional p-4 space-y-3">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <Image
                src="/admin_telemetry_trust.png"
                alt="Facility Telemetry Dashboard"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="px-2">
              <span className="font-bold text-slate-900 text-sm block">Facility & Telemetry App</span>
              <span className="text-xs text-slate-500">Desktop telemetry dashboard for attendance monitoring and register exports.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Need detailed technical documentation?</h3>
            <p className="text-xs text-slate-400">Download pilot standards, security architecture briefs, and integration guides.</p>
          </div>
          <Link
            href="/resources"
            className="px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors shrink-0"
          >
            <span>View Technical Documentation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
