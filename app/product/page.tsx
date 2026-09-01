import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Syringe, WifiOff, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Architecture & Technical Capabilities',
  description:
    'Deep dive into TotoAfya Digital platform architecture: Mother PWA, Nurse Clinical Portal, Tauri Facility App, Offline Sync Engine, and KEPI Vaccine Logic.',
};

export default function ProductPage() {
  return (
    <div className="space-y-20 py-12 bg-[#F8FAFA] text-[#102027]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="badge-clinical">Technical Platform Architecture</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#063B4C] tracking-tight">
            Production-grade health registry <span className="text-[#087EA4]">built for offline resilience.</span>
          </h1>
          <p className="text-base text-[#5E7078] leading-relaxed">
            TotoAfya Digital combines mobile Progressive Web Apps, tablet clinical registries, and desktop management tools linked through an encrypted offline synchronization engine.
          </p>
        </div>
      </section>

      {/* Architectural Overview Diagram / Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#063B4C] text-white p-8 sm:p-12 border border-[#084D63] space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#084D63]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#159A9C]">
                Multi-Portal Architecture
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">Four Integrated Portals</h2>
            </div>
            <span className="text-xs text-[#C4E2EA] font-mono">
              Partitioned by Facility UUID (`facility_id`)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-lg bg-[#084D63] border border-[#0A5C77] space-y-3">
              <div className="w-8 h-8 rounded bg-[#063B4C] text-[#159A9C] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-white">Mother PWA Portal</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Mobile-first PWA for pregnancy logs, vaccine schedules, and AI health chat.
              </p>
              <span className="text-[10px] font-mono text-[#159A9C] block pt-1">
                `apps/mother-portal`
              </span>
            </div>

            <div className="p-5 rounded-lg bg-[#084D63] border border-[#0A5C77] space-y-3">
              <div className="w-8 h-8 rounded bg-[#063B4C] text-[#159A9C] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-white">Nurse Clinical Portal</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Tablet/laptop registry for ANC vitals, WHO growth staging, and vaccine entry.
              </p>
              <span className="text-[10px] font-mono text-[#159A9C] block pt-1">
                `apps/nurse-portal`
              </span>
            </div>

            <div className="p-5 rounded-lg bg-[#084D63] border border-[#0A5C77] space-y-3">
              <div className="w-8 h-8 rounded bg-[#063B4C] text-[#159A9C] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-white">Facility PC Desktop App</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Tauri-wrapped desktop app for facility managers to view analytics & alerts.
              </p>
              <span className="text-[10px] font-mono text-[#159A9C] block pt-1">
                `apps/facility-pc`
              </span>
            </div>

            <div className="p-5 rounded-lg bg-[#084D63] border border-[#0A5C77] space-y-3">
              <div className="w-8 h-8 rounded bg-[#063B4C] text-[#159A9C] flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h3 className="text-sm font-bold text-white">Super Admin Portal</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Central governance console for feature flags, county audits & telemetry.
              </p>
              <span className="text-[10px] font-mono text-[#159A9C] block pt-1">
                `apps/super-admin-portal`
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div id="offline-engine" className="bg-white rounded-xl border border-[#D4E7EC] p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-3">
            <WifiOff className="w-6 h-6 text-[#087EA4]" />
            <h2 className="text-2xl font-bold text-[#063B4C]">Encrypted Offline Sync Engine</h2>
          </div>
          <p className="text-sm text-[#5E7078] leading-relaxed max-w-3xl">
            Built using client-side IndexedDB with cryptographic checksums. Nurses and CHVs can record vitals, register patients, and update care logs without network coverage. Once connected, records synchronize seamlessly using background delta sync.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-lg bg-[#F8FAFA] border border-[#D4E7EC]">
              <strong className="font-bold text-[#063B4C] block mb-1">Local Storage Cache</strong>
              <span className="text-[#5E7078]">Instant read/write responsiveness in remote clinics.</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F8FAFA] border border-[#D4E7EC]">
              <strong className="font-bold text-[#063B4C] block mb-1">Delta Synchronization</strong>
              <span className="text-[#5E7078]">Only altered data fields are transmitted to minimize data usage.</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F8FAFA] border border-[#D4E7EC]">
              <strong className="font-bold text-[#063B4C] block mb-1">Conflict Resolution</strong>
              <span className="text-[#5E7078]">Deterministic timestamp ordering handles simultaneous edits.</span>
            </div>
          </div>
        </div>

        <div id="kepi-engine" className="bg-white rounded-xl border border-[#D4E7EC] p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-3">
            <Syringe className="w-6 h-6 text-[#087EA4]" />
            <h2 className="text-2xl font-bold text-[#063B4C]">KEPI Immunization Scheduler</h2>
          </div>
          <p className="text-sm text-[#5E7078] leading-relaxed max-w-3xl">
            Automates compliance with the Kenya Expanded Programme on Immunization (KEPI). Calculates precise vaccination due dates from birth through 24 months for BCG, Oral Polio (OPV), Pentavalent (DPT-HepB-Hib), Rotavirus, Pneumococcal (PCV10), and Measles-Rubella (MR).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063B4C] text-white rounded-xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Need detailed architecture documentation?</h2>
          <p className="text-sm text-[#EAF6F9]">
            Talk to our engineering team to review security, API endpoints, and cloud data protection compliance.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=tech"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#087EA4] text-white font-semibold text-xs hover:bg-[#066989] transition-all"
            >
              <span>Contact Tech Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
