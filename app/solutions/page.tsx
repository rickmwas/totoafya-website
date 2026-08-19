import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2, ArrowRight, Heart, Stethoscope, Building2, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions — Stakeholder Capabilities & Workflows',
  description:
    'Explore TotoAfya Digital solutions tailored for Mothers, Clinical Nurses, Facility Administrators, and County Health Departments in Kenya.',
};

export default function SolutionsPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="badge-trust">Role-Tailored Healthcare Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Coordinated care for every level of{' '}
            <span className="font-serif italic text-emerald-800">the healthcare delivery system.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            TotoAfya Digital replaces disjointed paper logs with synchronized, role-specific tools that empower mothers, nurses, facility managers, and county health leaders.
          </p>
        </div>
      </section>

      {/* Stakeholder Deep Dives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Solution 1: Mothers & Caregivers */}
        <div id="caregivers" className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Caregiver Portal</span>
              <h2 className="text-2xl font-bold text-slate-900">For Mothers & Families</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Expectant mothers and caregivers receive a mobile PWA that transforms their ANC booklet into an interactive, encrypted health companion.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">Automated Vaccine SMS Alerts</strong>
                    <span>Notifications sent before each of the 7 KEPI immunization visits.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">24/7 Bilingual Supportive AI</strong>
                    <span>Swahili & English guidance on nutrition, danger signs, and clinic visits.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">Child Growth & Milestone Visualizer</strong>
                    <span>Track weight-for-age, height-for-age, and motor milestones easily.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/mother_portal_mockup.png"
                  alt="Mother Portal Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solution 2: Clinical Nurses & CHVs */}
        <div id="nurses" className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Nurse Clinical Registry</span>
              <h2 className="text-2xl font-bold text-slate-900">For Clinical Nurses & CHVs</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/nurse_portal_mockup.png"
                  alt="Nurse Portal Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for tablet and laptop touchscreens, allowing nurses to register patients in under 2 minutes and capture ANC vitals without paper bottleneck.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">Encrypted Offline Storage</strong>
                    <span>Full reading and writing capability during power or cellular network outages.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">WHO Growth Staging Engine</strong>
                    <span>Automated Z-score & MUAC calculation flagging SAM and MAM cases immediately.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">Red-Flag Vitals Warnings</strong>
                    <span>Visual alerts for high blood pressure, abnormal fundal height, or urine protein.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 3: Facility Administrators */}
        <div id="facilities" className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Facility Desktop App</span>
              <h2 className="text-2xl font-bold text-slate-900">For Facility Leads & Maternity Hospitals</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Hospital administrators use a dedicated Tauri desktop application to monitor facility performance, track missed appointments, and export patient registers.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">Facility Performance Telemetry</strong>
                    <span>Real-time graphs of active mothers, ANC visits, and vaccine coverage.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">MoH Summary Export</strong>
                    <span>Export patient logs to CSV/Excel formatted for Ministry of Health reporting.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/admin_telemetry_trust.png"
                  alt="Facility Admin Telemetry Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solution 4: County Health Departments */}
        <div id="counties" className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">County Governance Portal</span>
              <h2 className="text-2xl font-bold text-slate-900">For County Health Departments & NGOs</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="/chv_outreach_trust.png"
                  alt="County Outreach Governance Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Centralized governance dashboard enabling county directors of health and development partners to track immunization compliance across dozens of facilities simultaneously.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">Multi-Facility Aggregated Insights</strong>
                    <span>Monitor vaccine drop-off trends and ANC attendance at sub-county level.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">Audit Trails & Security Controls</strong>
                    <span>Role-based access control and immutable audit logs per facility.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Evaluate TotoAfya for your organization</h3>
            <p className="text-xs text-slate-300">
              Our technical team provides customized pilot setup and staff onboarding support.
            </p>
          </div>
          <Link
            href="/contact?type=solution_demo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-all shrink-0"
          >
            <span>Request Solution Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
