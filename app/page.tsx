'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  WifiOff,
  Wifi,
  Activity,
  Syringe,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  Lock,
  Heart,
  Stethoscope,
  ChevronRight,
  RefreshCw,
  Layers,
  MapPin
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function HomePage() {
  // Offline Demo State
  const [offlineSimulated, setOfflineSimulated] = useState(true);
  const syncCount = 4;

  // Signature Journey Active Tab
  const [activeStage, setActiveStage] = useState(0);

  const journeyStages = [
    {
      id: 'mother',
      role: 'Mother & Child',
      title: 'Care Follows Mother & Baby Everywhere',
      description: 'Her complete pregnancy record, digital ANC booklet, vaccine schedule, and growth milestones travel with her on her mobile device — accessible even with zero internet.',
      metrics: '24/7 Access to Digital ANC Booklet',
      icon: Heart,
    },
    {
      id: 'chv',
      role: 'Community Health Promoter',
      title: 'Household Follow-up & Red Flag Alerts',
      description: 'CHPs register mothers at home, log danger signs, and update household health status. Updates save locally and sync automatically when network returns.',
      metrics: 'Zero-drop household screening log',
      icon: Users,
    },
    {
      id: 'nurse',
      role: 'Dispensary & Clinical Nurse',
      title: 'Rapid Intake & KEPI Immunization Engine',
      description: 'Under-2-minute registration, ANC vitals entry, automated KEPI vaccine schedule generation, and WHO z-score growth monitoring at clinical touchpoints.',
      metrics: '100% Offline Intake Continuity',
      icon: Stethoscope,
    },
    {
      id: 'facility',
      role: 'Hospital & Facility Lead',
      title: 'Operational Telemetry & Stock Visibility',
      description: 'Facility leads track patient volume, missed vaccine appointment risk registers, and export MoH registers effortlessly.',
      metrics: 'Automated MoH / DHIS2 Reporting',
      icon: Building2,
    },
    {
      id: 'county',
      role: 'County & Public Health System',
      title: 'Population-Level Maternal Health Intelligence',
      description: 'Aggregated analytics for county health departments to identify coverage gaps, monitor maternal risk indicators, and optimize resource allocation.',
      metrics: 'County-wide MNCH Intelligence',
      icon: Layers,
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 bg-[#F8FAFA] text-[#102027]">
      {/* ── 01. THE HUMAN HERO (PRODUCT-FIRST) ────────────────────────── */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-[#063B4C] text-white overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#087EA4_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Institutional Recognition Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#084D63] border border-[#0A5C77] text-[#EAF6F9] text-xs font-semibold tracking-wide">
                <Award className="w-4 h-4 text-[#159A9C] shrink-0" />
                <span>{SITE_CONFIG.governance.recognition}</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
                Care follows <br className="hidden sm:inline" />
                <span className="text-[#159A9C]">the mother.</span>
              </h1>

              {/* Supporting Editorial Copy */}
              <p className="text-base sm:text-lg text-[#EAF6F9] leading-relaxed max-w-xl font-normal">
                TotoAfya Digital connects maternal, newborn and child healthcare across homes, communities and facilities — even when connectivity doesn&apos;t.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact?type=pilot"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#087EA4] text-white font-semibold text-sm hover:bg-[#066989] active:scale-[0.98] transition-all shadow-md"
                >
                  <span>Request a Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>See How TotoAfya Works</span>
                </a>
              </div>

              {/* Factual Context Badges */}
              <div className="pt-6 border-t border-[#084D63] grid grid-cols-3 gap-4 text-xs text-[#C4E2EA]">
                <div>
                  <span className="block font-bold text-white text-sm sm:text-base">100% Offline</span>
                  <span className="text-[11px] text-[#C4E2EA]/80">Encrypted Local Sync</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm sm:text-base">KEPI 2026</span>
                  <span className="text-[11px] text-[#C4E2EA]/80">Immunization Engine</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm sm:text-base">WHO Growth</span>
                  <span className="text-[11px] text-[#C4E2EA]/80">Automated Z-Scores</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Real Mother Photo + Integrated Product UI Overlay */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#084D63] shadow-2xl bg-[#063B4C]">
                {/* Authentic Kenyan Mother Photo */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                  <Image
                    src="/mama_photo.jpg"
                    alt="Kenyan Mother holding her baby child in a clinical community setting"
                    fill
                    priority
                    quality={95}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B4C] via-[#063B4C]/30 to-transparent" />
                </div>

                {/* Overlaid Real Product Interface Badge */}
                <div className="p-4 sm:p-5 bg-[#063B4C] border-t border-[#084D63] space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#EAF6F9] border-b border-[#084D63] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#159A9C] animate-pulse" />
                      <span className="font-semibold text-white">Live Clinical Record · Patient ID #KE-8492</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#087EA4]/30 text-[#EAF6F9] font-mono text-[10px] border border-[#087EA4]/40">
                      OFFLINE READY
                    </span>
                  </div>

                  {/* Micro Interface Components */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-[#084D63]/70 p-2.5 rounded-md border border-[#0A5C77]">
                      <span className="text-[10px] text-[#C4E2EA] block uppercase font-medium">ANC Visit Staging</span>
                      <span className="font-bold text-white text-xs">Visit 3 of 4 (28 Wks)</span>
                      <span className="text-[10px] text-[#159A9C] block mt-0.5">BP: 118/76 · Hb: 12.4</span>
                    </div>

                    <div className="bg-[#084D63]/70 p-2.5 rounded-md border border-[#0A5C77]">
                      <span className="text-[10px] text-[#C4E2EA] block uppercase font-medium">KEPI Vaccine Schedule</span>
                      <span className="font-bold text-white text-xs">Penta 3 & Rota 2</span>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">✓ Administered Today</span>
                    </div>

                    <div className="col-span-2 sm:col-span-1 bg-[#084D63]/70 p-2.5 rounded-md border border-[#0A5C77]">
                      <span className="text-[10px] text-[#C4E2EA] block uppercase font-medium">WHO Growth Curve</span>
                      <span className="font-bold text-white text-xs">Weight-for-Age</span>
                      <span className="text-[10px] text-[#159A9C] block mt-0.5">+0.4 SD (Normal Range)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02. THE PROBLEM (EDITORIAL NARRATIVE) ────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="badge-clinical">
            <span>Care Continuity Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102027] tracking-tight leading-tight">
            Her care shouldn&apos;t restart every time she enters a different facility.
          </h2>
          <p className="text-base sm:text-lg text-[#5E7078] leading-relaxed">
            In paper-based systems, a mother who moves between a rural dispensary, a community health promoter, and a county referral hospital often loses her maternal history, vaccine records, and risk assessments.
          </p>
        </div>

        {/* Visual Care Progression Flow */}
        <div className="mt-12 pt-8 border-t border-[#D4E7EC]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {[
              { stage: '01', title: 'HOME', desc: 'Mother & Newborn', highlight: false },
              { stage: '02', title: 'CHP / CHV', desc: 'Household Outreach', highlight: false },
              { stage: '03', title: 'DISPENSARY', desc: 'ANC Vitals & Intake', highlight: false },
              { stage: '04', title: 'HOSPITAL', desc: 'Referral & Delivery', highlight: false },
              { stage: '05', title: 'IMMUNIZATION', desc: 'KEPI Vaccine Track', highlight: false },
              { stage: '06', title: 'CHILD HEALTH', desc: 'WHO Growth Check', highlight: true },
            ].map((step, idx) => (
              <div
                key={step.title}
                className={`p-4 rounded-lg border transition-all ${
                  step.highlight
                    ? 'bg-[#063B4C] text-white border-[#063B4C]'
                    : 'bg-white text-[#102027] border-[#D4E7EC]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={step.highlight ? 'text-[#159A9C]' : 'text-[#087EA4]'}>
                    {step.stage}
                  </span>
                  {idx < 5 && <ChevronRight className="w-3.5 h-3.5 text-[#5E7078] hidden lg:block" />}
                </div>
                <h3 className="font-bold text-sm tracking-wide">{step.title}</h3>
                <p className={`text-xs mt-1 ${step.highlight ? 'text-[#C4E2EA]' : 'text-[#5E7078]'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-lg bg-[#EAF6F9] border border-[#C4E2EA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#087EA4] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#063B4C]">TotoAfya keeps the record connected.</h4>
                <p className="text-xs text-[#5E7078] mt-0.5">
                  Regardless of network loss or facility transfers, maternal and child data stays synchronized across every care provider.
                </p>
              </div>
            </div>
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#087EA4] hover:text-[#066989] shrink-0"
            >
              <span>Explore Continuity Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 03. SIGNATURE VISUAL CONCEPT (ONE RECORD JOURNEY) ───────────── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D4E7EC] rounded-xl p-6 sm:p-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider">
              Signature Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#063B4C] tracking-tight">
              One Mother. One Connected Record.
            </h2>
            <p className="text-sm text-[#5E7078] leading-relaxed">
              Explore how patient data seamlessly moves between the mother, community health workers, clinical nurses, facility leads, and county systems.
            </p>
          </div>

          {/* Interactive Stage Selector */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#D4E7EC] pb-4">
            {journeyStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`flex flex-col items-start p-3 rounded-md text-left transition-all ${
                    isActive
                      ? 'bg-[#063B4C] text-white shadow-sm'
                      : 'bg-[#F8FAFA] text-[#5E7078] hover:bg-[#EAF6F9] hover:text-[#063B4C]'
                  }`}
                >
                  <IconComp className={`w-4 h-4 mb-2 ${isActive ? 'text-[#159A9C]' : 'text-[#087EA4]'}`} />
                  <span className="text-xs font-bold">{stage.role}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Display Panel */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-[#EAF6F9] text-[#087EA4] text-xs font-semibold">
                Stage 0{activeStage + 1} · {journeyStages[activeStage].role}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#063B4C]">
                {journeyStages[activeStage].title}
              </h3>
              <p className="text-sm text-[#5E7078] leading-relaxed">
                {journeyStages[activeStage].description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0E8345]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{journeyStages[activeStage].metrics}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F8FAFA] p-6 rounded-lg border border-[#D4E7EC] space-y-4">
              <div className="text-xs font-bold text-[#063B4C] uppercase tracking-wider flex items-center justify-between">
                <span>Data Flow Verification</span>
                <span className="font-mono text-[#087EA4]">SYNC OK</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-white border border-[#D4E7EC] flex justify-between items-center">
                  <span className="text-[#5E7078]">Mother ID:</span>
                  <span className="font-bold text-[#063B4C]">KE-2026-NKR-08492</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-[#D4E7EC] flex justify-between items-center">
                  <span className="text-[#5E7078]">Active Touchpoint:</span>
                  <span className="font-bold text-[#087EA4]">{journeyStages[activeStage].role}</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-[#D4E7EC] flex justify-between items-center">
                  <span className="text-[#5E7078]">Security Protocol:</span>
                  <span className="font-bold text-[#0E8345]">AES-256 Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. OFFLINE-FIRST SECTION (SHOW, DON'T TELL) ──────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063B4C] text-white rounded-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#084D63] text-[#EAF6F9] text-xs font-semibold">
                <WifiOff className="w-3.5 h-3.5 text-[#159A9C]" />
                <span>Connectivity-Aware Health Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                The internet can disappear. <br />
                <span className="text-[#159A9C]">Her care shouldn&apos;t.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#EAF6F9] leading-relaxed">
                Rural health dispensaries and community promoters operating in off-grid zones record ANC visits, vitals, and KEPI vaccinations without interruption. Data persists locally and syncs automatically when a signal returns.
              </p>

              {/* Interactive Simulation Toggle */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setOfflineSimulated(!offlineSimulated)}
                  className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md text-xs font-bold transition-all ${
                    offlineSimulated
                      ? 'bg-[#087EA4] text-white'
                      : 'bg-[#159A9C] text-white'
                  }`}
                >
                  {offlineSimulated ? (
                    <>
                      <WifiOff className="w-4 h-4" />
                      <span>Simulating: Offline Mode Active</span>
                    </>
                  ) : (
                    <>
                      <Wifi className="w-4 h-4 animate-pulse" />
                      <span>Simulating: Network Restored</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Visual Interactive Screen Demonstration */}
            <div className="lg:col-span-6">
              <div className="bg-[#084D63] border border-[#0A5C77] rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between text-xs border-b border-[#0A5C77] pb-3">
                  <div className="flex items-center gap-2">
                    {offlineSimulated ? (
                      <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        No Connection (Offline Mode)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Cellular Connected (Sync Active)
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[11px] text-[#C4E2EA]">
                    Queue: {offlineSimulated ? `${syncCount} Pending Records` : '0 Pending (All Synced)'}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded bg-[#063B4C] border border-[#0A5C77] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#159A9C]" />
                      <span>Register New Mother Profile</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">LOGGED LOCAL</span>
                  </div>

                  <div className="p-3 rounded bg-[#063B4C] border border-[#0A5C77] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#159A9C]" />
                      <span>Record ANC Vitals & Danger Signs</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">LOGGED LOCAL</span>
                  </div>

                  <div className="p-3 rounded bg-[#063B4C] border border-[#0A5C77] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#159A9C]" />
                      <span>Log KEPI Penta-3 Vaccine Dose</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">LOGGED LOCAL</span>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#063B4C]/80 text-[11px] text-[#C4E2EA] flex items-center justify-between border border-[#0A5C77]">
                  <span className="flex items-center gap-2">
                    <RefreshCw className={`w-3.5 h-3.5 text-[#159A9C] ${!offlineSimulated ? 'animate-spin' : ''}`} />
                    {offlineSimulated ? 'Local IndexedDB Engine storing records safely' : 'Background cryptographic delta sync complete'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 05. PRODUCT SHOWCASE (THREE MAJOR EXPERIENCES) ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="badge-clinical">Product Suite</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102027] tracking-tight">
            Built for mothers, clinicians, and health leaders.
          </h2>
          <p className="text-base text-[#5E7078]">
            Three distinct application experiences engineered to work as a unified health registry.
          </p>
        </div>

        {/* Showcase 1: For Mothers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-xl border border-[#D4E7EC]">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block px-3 py-1 rounded bg-[#EAF6F9] text-[#063B4C] text-xs font-bold uppercase tracking-wider">
              01 · FOR MOTHERS & CAREGIVERS
            </div>
            <h3 className="text-2xl font-bold text-[#063B4C]">
              Mother PWA & Digital ANC Booklet
            </h3>
            <p className="text-sm text-[#5E7078] leading-relaxed">
              Provides mothers with immediate visibility into their pregnancy milestones, upcoming KEPI vaccine dates, appointment SMS reminders, and 24/7 supportive maternal guidance.
            </p>
            <ul className="space-y-2 text-xs text-[#102027] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                Digital ANC booklet synchronized with clinic visits
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                Automated KEPI immunization calendar reminders
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                24/7 Swahili & English supportive health guidance
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#D4E7EC]">
            <Image
              src="/mother_portal_mockup.png"
              alt="Mother PWA Application Showcase"
              width={900}
              height={550}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Showcase 2: For Clinicians */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-xl border border-[#D4E7EC]">
          <div className="lg:col-span-7 order-2 lg:order-1 relative rounded-lg overflow-hidden border border-[#D4E7EC]">
            <Image
              src="/nurse_portal_mockup.png"
              alt="Nurse Clinical Registry Portal Showcase"
              width={900}
              height={550}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            <div className="inline-block px-3 py-1 rounded bg-[#EAF6F9] text-[#063B4C] text-xs font-bold uppercase tracking-wider">
              02 · FOR CLINICAL NURSES & CHVs
            </div>
            <h3 className="text-2xl font-bold text-[#063B4C]">
              Nurse Clinical Registry & Intake
            </h3>
            <p className="text-sm text-[#5E7078] leading-relaxed">
              Designed for busy dispensary nurses to complete mother and child registration in under 2 minutes, capture vitals, flag clinical danger signs, and calculate WHO growth z-scores automatically.
            </p>
            <ul className="space-y-2 text-xs text-[#102027] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                Under-2-minute clinical intake & ANC visit log
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                Automated WHO Weight-for-Age & Height-for-Age z-score staging
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                KEPI immunization dose batch logging & vaccine dropout warnings
              </li>
            </ul>
          </div>
        </div>

        {/* Showcase 3: For Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-xl border border-[#D4E7EC]">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block px-3 py-1 rounded bg-[#EAF6F9] text-[#063B4C] text-xs font-bold uppercase tracking-wider">
              03 · FOR HOSPITAL & FACILITY LEADS
            </div>
            <h3 className="text-2xl font-bold text-[#063B4C]">
              Facility Intelligence & Telemetry
            </h3>
            <p className="text-sm text-[#5E7078] leading-relaxed">
              Desktop application providing facility administrators with real-time patient volume telemetry, immunization coverage tracking, staff account management, and one-click MoH register exports.
            </p>
            <ul className="space-y-2 text-xs text-[#102027] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                Facility-level MNCH volume & attendance metrics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                Automated MoH / DHIS2 CSV register exports
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#087EA4]" />
                Multi-nurse access provisioning & audit logs
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#D4E7EC]">
            <Image
              src="/admin_telemetry_trust.png"
              alt="Facility Intelligence Desktop Application"
              width={900}
              height={550}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 06. HEALTHCARE ENGINEERING ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063B4C] text-white p-8 sm:p-12 rounded-xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#159A9C] uppercase tracking-wider">
              Healthcare Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Built for the reality of African healthcare.
            </h2>
            <p className="text-sm sm:text-base text-[#EAF6F9]">
              Engineering choices made specifically for low-resource, off-grid, and high-volume clinical settings.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#084D63] border border-[#0A5C77] p-6 rounded-lg space-y-3">
              <WifiOff className="w-6 h-6 text-[#159A9C]" />
              <h3 className="font-bold text-base text-white">Offline-First Engine</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Stores data locally in encrypted browser storage with background delta synchronization.
              </p>
            </div>

            <div className="bg-[#084D63] border border-[#0A5C77] p-6 rounded-lg space-y-3">
              <Syringe className="w-6 h-6 text-[#159A9C]" />
              <h3 className="font-bold text-base text-white">KEPI Compliance</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Built-in Kenya Expanded Programme on Immunization rules engine for automated visit scheduling.
              </p>
            </div>

            <div className="bg-[#084D63] border border-[#0A5C77] p-6 rounded-lg space-y-3">
              <Activity className="w-6 h-6 text-[#159A9C]" />
              <h3 className="font-bold text-base text-white">WHO Growth Standards</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Automated z-score calculation for Weight-for-Age, Height-for-Age, and MUAC nutrition staging.
              </p>
            </div>

            <div className="bg-[#084D63] border border-[#0A5C77] p-6 rounded-lg space-y-3">
              <Lock className="w-6 h-6 text-[#159A9C]" />
              <h3 className="font-bold text-base text-white">Secure Data Governance</h3>
              <p className="text-xs text-[#C4E2EA] leading-relaxed">
                Compliant with Kenya Data Protection Act 2019 with strict role-based access control (RBAC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. BUILT FOR KENYA (CONTEXTUAL STORYTELLING) ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D4E7EC] bg-white">
            <Image
              src="/shot_4_clinic.png"
              alt="Kenyan Nurse and patient in a health facility"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-5">
            <div className="badge-clinical">
              <span>Local Healthcare Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#063B4C] tracking-tight">
              Built for Kenya.
            </h2>
            <p className="text-base text-[#5E7078] leading-relaxed">
              TotoAfya was born in Kisii County and designed alongside frontline nurses, community health promoters, and mothers who navigate real challenges: power outages, remote facilities, high patient volumes, and paper record loss.
            </p>
            <div className="space-y-3 text-xs text-[#102027] font-medium border-t border-[#D4E7EC] pt-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                <span>Tested in active clinical environments in Western Kenya & Rift Valley region.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                <span>Empowering Community Health Promoters (CHPs) at the household level.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08. INSTITUTIONAL TRUST & GOVERNANCE ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#D4E7EC] rounded-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3 border-b lg:border-b-0 lg:border-r border-[#D4E7EC] pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider">
                Institutional Credibility
              </span>
              <h2 className="text-2xl font-bold text-[#063B4C]">
                Grounded in academic and clinical collaboration.
              </h2>
              <p className="text-xs text-[#5E7078] leading-relaxed">
                Developed under TerraSept Solutions Ltd with academic incubator support and county health department engagement.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-[#F8FAFA] border border-[#D4E7EC] text-center space-y-2">
                <Image
                  src="/kisii_university_logo_clean-removebg-preview.png"
                  alt="Kisii University Innovation Hub"
                  width={56}
                  height={56}
                  className="h-12 w-auto mx-auto object-contain"
                />
                <span className="block text-xs font-bold text-[#063B4C]">Kisii University Hub</span>
                <span className="block text-[10px] text-[#5E7078]">Academic Incubator</span>
              </div>

              <div className="p-4 rounded-lg bg-[#F8FAFA] border border-[#D4E7EC] text-center space-y-2">
                <Image
                  src="/kisii_teaching_and_referral_hospital_logo.jpg"
                  alt="Kisii Teaching and Referral Hospital"
                  width={56}
                  height={56}
                  className="h-12 w-auto mx-auto object-contain rounded-full"
                />
                <span className="block text-xs font-bold text-[#063B4C]">Kisii Teaching & Referral</span>
                <span className="block text-[10px] text-[#5E7078]">Clinical Collaboration</span>
              </div>

              <div className="p-4 rounded-lg bg-[#F8FAFA] border border-[#D4E7EC] text-center space-y-2">
                <Image
                  src="/NAKURU_LOGO-removebg-preview.png"
                  alt="County Health Department Alignment"
                  width={56}
                  height={56}
                  className="h-12 w-auto mx-auto object-contain"
                />
                <span className="block text-xs font-bold text-[#063B4C]">County Health Systems</span>
                <span className="block text-[10px] text-[#5E7078]">Pilot Alignment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 09. FACTUAL IMPACT & INTENDED OUTCOMES ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-lg bg-white border border-[#D4E7EC]">
            <span className="block text-3xl font-bold text-[#087EA4]">1</span>
            <span className="text-xs font-semibold text-[#063B4C] mt-1 block">Connected Record</span>
            <span className="text-[11px] text-[#5E7078] block mt-0.5">Per mother across all facilities</span>
          </div>
          <div className="p-6 rounded-lg bg-white border border-[#D4E7EC]">
            <span className="block text-3xl font-bold text-[#087EA4]">24/7</span>
            <span className="text-xs font-semibold text-[#063B4C] mt-1 block">Maternal Access</span>
            <span className="text-[11px] text-[#5E7078] block mt-0.5">Digital ANC booklet on phone</span>
          </div>
          <div className="p-6 rounded-lg bg-white border border-[#D4E7EC]">
            <span className="block text-3xl font-bold text-[#087EA4]">100%</span>
            <span className="text-xs font-semibold text-[#063B4C] mt-1 block">Offline Continuity</span>
            <span className="text-[11px] text-[#5E7078] block mt-0.5">Zero data loss without network</span>
          </div>
          <div className="p-6 rounded-lg bg-white border border-[#D4E7EC]">
            <span className="block text-3xl font-bold text-[#087EA4]">WHO</span>
            <span className="text-xs font-semibold text-[#063B4C] mt-1 block">Child Growth Standard</span>
            <span className="text-[11px] text-[#5E7078] block mt-0.5">Automated z-score calculation</span>
          </div>
        </div>
      </section>

      {/* ── 10. CALM CALL TO ACTION ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063B4C] text-white rounded-xl p-8 sm:p-14 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s make care continuous.
          </h2>
          <p className="text-base text-[#EAF6F9] max-w-2xl mx-auto leading-relaxed">
            Partner with TotoAfya Digital to explore a facility, county, or community pilot deployment.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=pilot"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#087EA4] text-white font-semibold text-sm hover:bg-[#066989] transition-all shadow-md"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?type=team"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Talk to the Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
