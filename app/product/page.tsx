import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Syringe,
  Activity,
  WifiOff,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Architecture & Technical Capabilities',
  description:
    'Deep dive into TotoAfya Digital platform architecture: Mother PWA, Nurse Clinical Portal, Tauri Facility App, Offline Sync Engine, and KEPI Vaccine Logic.',
};

export default function ProductPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="badge-trust">Technical Platform Architecture</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Production-grade health registry{' '}
            <span className="font-serif italic text-emerald-800">built for offline resilience.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            TotoAfya Digital combines mobile Progressive Web Apps, tablet clinical registries, and desktop management tools linked through an encrypted offline synchronization engine.
          </p>
        </div>
      </section>

      {/* Architectural Overview Diagram / Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Multi-Portal Architecture
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">Four Integrated Portals</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Partitioned by Facility UUID (`facility_id`)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-white">Mother PWA Portal</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mobile-first PWA for pregnancy logs, vaccine schedules, and AI health chat.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 block pt-1">
                `apps/mother-portal`
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-white">Nurse Clinical Portal</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tablet/laptop registry for ANC vitals, WHO growth staging, and vaccine entry.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 block pt-1">
                `apps/nurse-portal`
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-white">Facility PC Desktop App</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tauri-wrapped desktop app for facility managers to view analytics & alerts.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 block pt-1">
                `apps/facility-pc`
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="text-sm font-bold text-white">Super Admin Portal</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Global admin dashboard for facility provisioning, nurse logins, & content.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 block pt-1">
                `apps/super-admin-portal`
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Core Modules
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Clinical Logic & Data Engine
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module 1: Offline Sync */}
          <div id="offline-engine" className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <WifiOff className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Encrypted Offline Sync Engine</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Functions seamlessly during mobile network outages. Local writes save to an encrypted client IndexedDB and append to an asynchronous background sync queue.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Local IndexedDB persistence with AES client-side encryption</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Automatic background queue retry with exponential backoff</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Supabase PostgreSQL Cloud sync upon connection restore</span>
              </li>
            </ul>
          </div>

          {/* Module 2: KEPI Logic */}
          <div id="kepi-engine" className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Syringe className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">KEPI Immunization Scheduler</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Automates the Kenya Expanded Programme on Immunization (KEPI) calendar, mapping exact target dates for the 7 national vaccine milestones.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Birth: BCG & OPV 0</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>6, 10 & 14 Weeks: OPV 1-3, Penta 1-3, PCV 1-3, Rota 1-2</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>9 & 18 Months: Measles-Rubella 1 & 2</span>
              </li>
            </ul>
          </div>

          {/* Module 3: WHO Nutrition Staging */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">WHO Nutrition & Growth Staging</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Evaluates child growth metrics against WHO standard weight-for-age, height-for-age, and Mid-Upper Arm Circumference (MUAC) thresholds.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Automated classification: Normal, Moderate (MAM), Severe (SAM)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Developmental milestone tracking (Motor, Language, Cognitive, Social)</span>
              </li>
            </ul>
          </div>

          {/* Module 4: Non-Diagnostic AI Companion */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Bilingual Supportive AI Guardrails</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Provides round-the-clock supportive health guidance in Swahili and English. Built with strict non-diagnostic clinical boundaries.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Strictly educational: does not diagnose or prescribe medication</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Automatic clinical escalation for red-flag maternal danger signs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Review technical documentation</h3>
            <p className="text-xs text-slate-300">
              Schedule a technical walk-through of the codebase, sync architecture, and security specs.
            </p>
          </div>
          <Link
            href="/contact?type=technical"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-all shrink-0"
          >
            <span>Contact Engineering Lead</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
