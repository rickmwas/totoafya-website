import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Database, Syringe, Activity, Lock, FileSpreadsheet } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Platform Capabilities & Care Infrastructure',
  description:
    'Discover how TotoAfya Digital connects care from mother to health worker, facility, and health system with offline-first digital registries.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/product`,
  },
};

export default function ProductPage() {
  return (
    <div className="space-y-20 py-12 bg-[#FAF9F6]">
      
      {/* 1. Header Section — Outcome-Led */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            Platform Overview
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How TotoAfya connects care.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Care flows continuously across four levels of the health system — ensuring health workers have complete records, mothers stay informed, and facilities maintain full visibility.
          </p>
        </div>
      </section>

      {/* 2. Care Flow Composition (Mother -> Health Worker -> Facility -> Health System) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-10 shadow-sm">
          <div className="border-b border-slate-100 pb-6 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Connected Care Journey</span>
            <h2 className="text-2xl font-bold text-slate-900">Synchronized record across every encounter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">01</span>
              <h3 className="text-base font-bold text-slate-900">Mother & Caregiver</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registers profile, receives automated vaccine SMS reminders, and accesses pregnancy milestone tracking.
              </p>
            </div>

            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">02</span>
              <h3 className="text-base font-bold text-slate-900">Health Worker & CHV</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Logs vitals, ANC parameters, WHO growth staging, and KEPI vaccine doses in under 2 minutes per visit.
              </p>
            </div>

            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">03</span>
              <h3 className="text-base font-bold text-slate-900">Health Facility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitors daily appointment attendance, manages staff access, and exports monthly patient registers.
              </p>
            </div>

            <div className="space-y-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">04</span>
              <h3 className="text-base font-bold text-slate-900">County Health System</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aggregates sub-county public health indicators and reconciles DHIS2 / MoH coverage metrics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Real Product Interfaces */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Authentic Interfaces</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Interfaces designed for actual clinical environments.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm space-y-4 p-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
              <Image
                src="/nurse_portal_mockup.png"
                alt="Nurse Clinical Registry Interface"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-2 space-y-1">
              <h3 className="text-base font-bold text-slate-900">Nurse Clinical Registry</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tablet and laptop workflow for ANC visits, blood pressure logging, danger sign alerts, and KEPI dose recording.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm space-y-4 p-4">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
              <Image
                src="/admin_telemetry_trust.png"
                alt="Facility Telemetry Dashboard"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-2 space-y-1">
              <h3 className="text-base font-bold text-slate-900">Facility Telemetry Desktop App</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tauri desktop application for facility managers to review missed appointments and generate CSV register exports.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Capabilities Explained Through Outcomes */}
      <section className="bg-slate-950 text-white py-20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Core Capabilities</span>
            <h2 className="text-3xl font-extrabold text-white">
              Capabilities built for real-world healthcare.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="space-y-3 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <Database className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Care doesn&apos;t stop when connectivity does.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Client-side IndexedDB engine allows clinical staff to register mothers and log vitals without active internet. Transactions sync automatically upon reconnection.
              </p>
            </div>

            <div className="space-y-3 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <Syringe className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Immunization schedules follow national KEPI timetables.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calculates exact milestone target dates from birth (BCG, OPV) through 24 months (Measles-Rubella, Vitamin A) per Ministry of Health guidelines.
              </p>
            </div>

            <div className="space-y-3 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <Activity className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Growth staging flags malnutrition early.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluates Weight-for-Age, Height-for-Age, and MUAC measurements against WHO growth standards to alert nurses to MAM or SAM risk.
              </p>
            </div>

            <div className="space-y-3 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Patient privacy & role security by default.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Access controls enforce role boundaries so health workers only access data for their assigned facility in alignment with Data Protection Act 2019 principles.
              </p>
            </div>

            <div className="space-y-3 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <FileSpreadsheet className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Statutory reporting in one click.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generates structured CSV and Excel files formatted to match Ministry of Health monthly reporting registers for rapid submission.
              </p>
            </div>

            <div className="space-y-3 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Automated SMS patient engagement.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sends automated SMS reminders to mothers in Swahili and English before upcoming clinic visits to reduce vaccine dropouts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Want to evaluate TotoAfya Digital at your facility?</h3>
            <p className="text-xs text-slate-600">Discuss pilot deployment options with our technical team.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-sm shrink-0"
          >
            <span>Request a demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
