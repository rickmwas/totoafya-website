import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2, ArrowRight, Heart, Stethoscope, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions — Stakeholder Capabilities & Workflows',
  description:
    'Explore TotoAfya Digital solutions tailored for Mothers, Clinical Nurses, Facility Administrators, and County Health Departments in Kenya.',
};

export default function SolutionsPage() {
  return (
    <div className="space-y-20 py-12 bg-[#F8FAFA] text-[#102027]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="badge-clinical">Role-Tailored Healthcare Solutions</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#063B4C] tracking-tight">
            Coordinated care for every level of <span className="text-[#087EA4]">the health system.</span>
          </h1>
          <p className="text-base text-[#5E7078] leading-relaxed">
            TotoAfya Digital replaces disjointed paper logs with synchronized, role-specific tools that empower mothers, nurses, facility managers, and county health leaders.
          </p>
        </div>
      </section>

      {/* Stakeholder Deep Dives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Solution 1: Mothers & Caregivers */}
        <div id="caregivers" className="rounded-xl bg-white border border-[#D4E7EC] p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EAF6F9] text-[#087EA4] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087EA4]">Caregiver Portal</span>
              <h2 className="text-2xl font-bold text-[#063B4C]">For Mothers & Families</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-[#5E7078] leading-relaxed">
                Expectant mothers and caregivers receive a mobile PWA that transforms their ANC booklet into an interactive, encrypted health companion.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">Automated Vaccine SMS Alerts</strong>
                    <span className="text-[#5E7078]">Notifications sent before each of the 7 KEPI immunization visits.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">24/7 Bilingual Supportive Guidance</strong>
                    <span className="text-[#5E7078]">Swahili & English guidance on nutrition, danger signs, and clinic visits.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">Child Growth & Milestone Visualizer</strong>
                    <span className="text-[#5E7078]">Track weight-for-age, height-for-age, and motor milestones easily.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-[#D4E7EC]">
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
        <div id="nurses" className="rounded-xl bg-white border border-[#D4E7EC] p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EAF6F9] text-[#087EA4] flex items-center justify-center">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087EA4]">Nurse Clinical Registry</span>
              <h2 className="text-2xl font-bold text-[#063B4C]">For Clinical Nurses & CHVs</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden border border-[#D4E7EC]">
                <Image
                  src="/nurse_portal_mockup.png"
                  alt="Nurse Clinical Registry Portal"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <p className="text-sm text-[#5E7078] leading-relaxed">
                Empowers clinical nurses in dispensaries and health centers to complete maternal intake, log vitals, track red-flag danger signs, and administer vaccines seamlessly.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">Under-2-Minute Registration Workflow</strong>
                    <span className="text-[#5E7078]">Fast digital intake designed for busy dispensary environments.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">WHO Growth Z-Score Calculation</strong>
                    <span className="text-[#5E7078]">Automated staging for Weight-for-Age, Height-for-Age & MUAC.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">KEPI Vaccine Schedule Engine</strong>
                    <span className="text-[#5E7078]">Calculates exact target dates for BCG, Penta 1-3, Rota, and Measles.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution 3: Facilities & County Systems */}
        <div id="facilities" className="rounded-xl bg-white border border-[#D4E7EC] p-8 sm:p-12 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#EAF6F9] text-[#087EA4] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087EA4]">Facility & County Intelligence</span>
              <h2 className="text-2xl font-bold text-[#063B4C]">For Hospitals & County Health Departments</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-[#5E7078] leading-relaxed">
                Hospital managers and county health directors gain aggregated performance telemetry, immunization coverage tracking, and automated MoH register exports.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">Automated MoH / DHIS2 Exports</strong>
                    <span className="text-[#5E7078]">One-click CSV generation formatted for Ministry of Health reporting.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#102027]">
                  <CheckCircle2 className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-[#063B4C] block">Immunization Coverage & Dropout Tracking</strong>
                    <span className="text-[#5E7078]">Identify missed vaccine visits and send community outreach prompts.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-[#D4E7EC]">
                <Image
                  src="/admin_telemetry_trust.png"
                  alt="Facility Telemetry Interface"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063B4C] text-white rounded-xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore a pilot for your facility or county</h2>
          <p className="text-sm text-[#EAF6F9] max-w-xl mx-auto">
            Contact our health partnerships team to arrange a clinical workflow demo and technical readiness check.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=pilot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#087EA4] text-white font-semibold text-xs hover:bg-[#066989] transition-all"
            >
              <span>Request Pilot Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
