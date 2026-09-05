'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Quote
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import LiveAppDemo from '@/components/interactive/LiveAppDemo';

export default function HomePage() {
  // ── 4-Stage Thematic Narrative State ──────────────────────────────────────
  const [activeStoryStage, setActiveStoryStage] = useState(0);

  const storyStages = [
    {
      id: 'story',
      num: '01',
      title: 'Our Story',
      headline: 'Born from Frontline Realities at Kisii University',
      content:
        'TotoAfya Digital was conceived to eliminate the catastrophic failures of paper antenatal booklets, lost immunization cards, and unmonitored pregnancy complications in rural Kenyan dispensaries. Incubated at the Kisii University Innovation Hub by TerraSept Solutions, our mission is to build resilient digital infrastructure that keeps care connected even when internet and power networks collapse.',
      tag: 'Genesis & Mission',
      ctaText: 'Read Our Founding Journey',
      ctaHref: '/about',
      stats: 'Recognized as Best Project in Digital Healthcare at Kisii Innovation Week',
    },
    {
      id: 'challenge',
      num: '02',
      title: 'The Challenge',
      headline: 'The Triple Deficit: Distance, Paper Records & Connectivity',
      content:
        'Across 47 counties, rural Level 2 dispensaries face frequent cellular blackouts and erratic power grids. When mothers migrate between villages or clinics run out of physical Mother-Child booklets, immunization dropout rates surge past 30%. Without automated danger-sign triaging, maternal pre-eclampsia and infant malnutrition go undetected until critical stages.',
      tag: 'Clinical Urgency',
      ctaText: 'Review Frontline Clinical Data',
      ctaHref: '/solutions#facilities',
      stats: 'Over 30% of child immunization dropouts are driven by lost physical documentation',
    },
    {
      id: 'approach',
      num: '03',
      title: 'The Triad Approach',
      headline: 'A Unified Care Continuum: Mother, Clinic & County',
      content:
        'We replace disconnected software silos with a synchronized triad: A mobile PWA for mothers with 24/7 bilingual guidance, an ultra-fast offline tablet registry for clinical nurses computing KEPI dates in seconds, and a robust desktop app for facility heads providing audited public health telemetry without requiring constant cloud connectivity.',
      tag: 'Systems Architecture',
      ctaText: 'Inspect The Triad Architecture',
      ctaHref: '/product',
      stats: 'Zero-drop offline IndexedDB sync ensures continuity through complete network outages',
    },
    {
      id: 'ambition',
      num: '04',
      title: 'The Ambition',
      headline: 'A Scalable Health Infrastructure for 47 Counties',
      content:
        'Our national roadmap targets integration with county primary healthcare networks (PCNs) and national reporting standards (MoH 711, MoH 705, and KHIS/DHIS2). By embedding Kenya Data Protection Act (KDPA 2019) compliance and localized intelligence directly into frontline care, we ensure every newborn reaches their 24-month developmental milestones.',
      tag: 'National Roadmap',
      ctaText: 'Explore County Partnership Call',
      ctaHref: '/contact?type=pilot',
      stats: 'Engineered for full interoperability with MoH / DHIS2 national reporting schemas',
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F5F0] min-h-screen text-[#0A0A0A]">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION (OFFICIAL TOTOAFYA APP SYSTEM BRANDING)             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 sm:pt-14 pb-18 sm:pb-24 border-b border-[#E5E5E5] bg-gradient-to-b from-[#F7F5F0] via-white to-[#F7F5F0] overflow-hidden">
        {/* Soft Ambient Kenyan Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#006B5F]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#E68A00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-10">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F4F1] border border-[#BCE2DA] shadow-sm text-xs font-semibold text-[#006B5F]">
              <span className="w-2 h-2 rounded-full bg-[#107C41] animate-pulse shrink-0 ring-2 ring-[#006B5F]/20" />
              <span>MOH KEPI PROTOCOLS ALIGNED • KISII UNIVERSITY INCUBATED</span>
            </div>

            {/* Main Headline with TotoAfya Teal & Savannah Sunrise */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.12]">
              Connected Maternal Care That Never Drops{' '}
              <span className="text-[#006B5F] underline decoration-[#E68A00] decoration-wavy decoration-2 underline-offset-8">
                Offline.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal max-w-2xl mx-auto">
              TotoAfya Digital connects mothers, community health promoters, and dispensary nurses with zero-data offline registries, automated KEPI immunization schedules, and WHO-standard growth triage.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact?type=pilot"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#006B5F] text-white font-bold text-sm hover:bg-[#00574D] active:scale-[0.98] transition-all shadow-lg shadow-[#006B5F]/20"
              >
                <span>Request Pilot Deployment</span>
                <ArrowRight className="w-4 h-4 text-[#E68A00]" />
              </Link>
              <Link
                href="/product"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-[#F7F5F0] border border-[#E5E5E5] transition-all shadow-sm"
              >
                <span>Explore Technical Architecture</span>
              </Link>
            </div>

            {/* Compliance Trust Tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#555555]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#107C41]" />
                <span>Kenya Data Protection Act (KDPA 2019)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#107C41]" />
                <span>KEPI & WHO Growth Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-[#006B5F]" />
                <span>IndexedDB Client Sync</span>
              </div>
            </div>
          </div>

          {/* Live Interactive Software Showcase (100% Native Code UI) */}
          <div className="max-w-5xl mx-auto">
            <LiveAppDemo />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. AUDITED IMPACT & BENCHMARKS (TOTOAFYA TEAL & SAVANNAH SUNRISE)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="impact" className="py-20 sm:py-24 bg-[#0A1F1B] text-white border-b border-[#145244]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E68A00]">
              Clinical Performance & Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
              Audited Health Indicators (2024–2026)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed">
              Verifiable benchmarks engineered into our registry algorithms to eliminate dropouts and prevent diagnostic delays.
            </p>
          </div>

          {/* 4 Clean Stat Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1: Offline Continuity */}
            <div className="p-6 rounded-2xl bg-[#0F352E] border border-[#1B6B5A] flex flex-col items-center text-center relative overflow-hidden group hover:border-[#E68A00] transition-colors">
              <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#145244" strokeWidth="4" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#00A389" strokeWidth="4" strokeDasharray="264" strokeDashoffset="0" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-white">100%</span>
                </div>
              </div>
              <h3 className="font-bold text-base text-white mb-2">Offline Continuity</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero clinical records lost during dispensary grid blackouts via client-side encrypted IndexedDB storage.
              </p>
            </div>

            {/* Stat 2: Intake Velocity */}
            <div className="p-6 rounded-2xl bg-[#0F352E] border border-[#1B6B5A] flex flex-col items-center text-center relative overflow-hidden group hover:border-[#E68A00] transition-colors">
              <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#145244" strokeWidth="4" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E68A00" strokeWidth="4" strokeDasharray="264" strokeDashoffset="66" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-white">&lt; 2m</span>
                </div>
              </div>
              <h3 className="font-bold text-base text-white mb-2">Rapid Clinical Intake</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nurses register expectant mothers, record vitals, and generate KEPI vaccine timelines in under 120 seconds.
              </p>
            </div>

            {/* Stat 3: KEPI Schedule Generation */}
            <div className="p-6 rounded-2xl bg-[#0F352E] border border-[#1B6B5A] flex flex-col items-center text-center relative overflow-hidden group hover:border-[#E68A00] transition-colors">
              <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#145244" strokeWidth="4" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#107C41" strokeWidth="4" strokeDasharray="264" strokeDashoffset="40" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-white">14</span>
                </div>
              </div>
              <h3 className="font-bold text-base text-white mb-2">KEPI Milestones Tracked</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated vaccine calendar from birth BCG and Oral Polio through 18-month Measles-Rubella booster.
              </p>
            </div>

            {/* Stat 4: County Readiness */}
            <div className="p-6 rounded-2xl bg-[#0F352E] border border-[#1B6B5A] flex flex-col items-center text-center relative overflow-hidden group hover:border-[#E68A00] transition-colors">
              <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#145244" strokeWidth="4" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#00A389" strokeWidth="4" strokeDasharray="264" strokeDashoffset="10" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-white">47</span>
                </div>
              </div>
              <h3 className="font-bold text-base text-white mb-2">Counties Readiness</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Standardized MoH 711 & MoH 705 export compatibility built for Primary Care Networks across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. THEMATIC NARRATIVE SECTION (4-STAGE CLINICAL STORY)              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="our-story" className="py-20 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B5F]">
              The Story of TotoAfya
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#0A0A0A] font-extrabold tracking-tight mt-1.5">
              An Infrastructure Born from Frontline Necessity.
            </h2>
            <p className="text-[#555555] text-base mt-2.5 leading-relaxed">
              Explore how TotoAfya Digital evolved from an academic inquiry at Kisii University into a county-deployable maternal and child health continuum.
            </p>
          </div>

          {/* Interactive 4-Stage Tab Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 rounded-xl bg-[#F7F5F0] border border-[#E5E5E5] mb-8">
            {storyStages.map((stage, idx) => {
              const isActive = activeStoryStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStoryStage(idx)}
                  className={`text-left p-4 rounded-lg transition-all flex flex-col justify-between ${
                    isActive
                      ? 'bg-white text-[#006B5F] shadow-sm border border-[#BCE2DA]'
                      : 'bg-transparent text-[#555555] hover:text-[#0A0A0A]'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#006B5F]' : 'text-slate-400'}`}>
                    {stage.num}
                  </span>
                  <span className="font-bold text-sm sm:text-base mt-1 text-[#0A0A0A]">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Presentation */}
          {(() => {
            const stage = storyStages[activeStoryStage];
            return (
              <div className="rounded-2xl border border-[#BCE2DA] bg-gradient-to-br from-[#E6F4F1]/50 via-white to-[#F0FAF5]/40 p-6 sm:p-10 shadow-sm">
                <div className="space-y-4 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#006B5F] text-xs font-bold tracking-wider uppercase">
                    <span>{stage.tag}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl text-[#0A0A0A] font-bold leading-snug">
                    {stage.headline}
                  </h3>

                  <p className="text-[#555555] text-base leading-relaxed">
                    {stage.content}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] flex items-start gap-3 text-xs text-[#0A0A0A] shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#107C41] shrink-0 mt-0.5" />
                    <span className="font-medium">{stage.stats}</span>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={stage.ctaHref}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#006B5F] hover:text-[#00574D] uppercase tracking-wider transition-colors group"
                    >
                      <span>{stage.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#E68A00]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. CONSORTIUM & CLINICAL GOVERNANCE PARTNERS                        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B5F]">
              Consortium & Governance
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#0A0A0A] font-extrabold mt-1">
              Accredited Clinical & Institutional Partners
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              TotoAfya Digital is engineered in collaboration with academic health researchers, county hospitals, and national health authorities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Partner 1: Kisii University */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-white flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all hover:border-[#006B5F]">
              <div className="h-16 w-28 relative flex items-center justify-center">
                <Image
                  src="/kisii_university_logo_clean-removebg-preview.png"
                  alt="Kisii University Innovation Hub"
                  width={110}
                  height={60}
                  className="object-contain max-h-14"
                />
              </div>
              <span className="font-bold text-xs text-[#0A0A0A]">Kisii University</span>
              <span className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">
                Innovation & Research Hub
              </span>
            </div>

            {/* Partner 2: TerraSept Solutions */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-white flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all hover:border-[#006B5F]">
              <div className="h-16 w-28 relative flex items-center justify-center">
                <Image
                  src="/terrasept_logo_clean.png"
                  alt="TerraSept Solutions Ltd"
                  width={110}
                  height={60}
                  className="object-contain max-h-14"
                />
              </div>
              <span className="font-bold text-xs text-[#0A0A0A]">TerraSept Solutions</span>
              <span className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">
                Primary Systems Architect
              </span>
            </div>

            {/* Partner 3: KTRH Referral Hospital */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-white flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all hover:border-[#006B5F]">
              <div className="h-16 w-28 relative flex items-center justify-center">
                <Image
                  src="/kisii_teaching_and_referral_hospital_logo.jpg"
                  alt="Kisii Teaching and Referral Hospital"
                  width={90}
                  height={60}
                  className="object-contain max-h-14 rounded"
                />
              </div>
              <span className="font-bold text-xs text-[#0A0A0A]">KTRH Hospital</span>
              <span className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">
                Clinical Workflow Validation
              </span>
            </div>

            {/* Partner 4: Nakuru Health Network */}
            <div className="p-6 rounded-xl border border-[#E5E5E5] bg-white flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all hover:border-[#006B5F]">
              <div className="h-16 w-28 relative flex items-center justify-center">
                <Image
                  src="/NAKURU_LOGO-removebg-preview.png"
                  alt="Nakuru County Health Network"
                  width={90}
                  height={60}
                  className="object-contain max-h-14"
                />
              </div>
              <span className="font-bold text-xs text-[#0A0A0A]">County Health Network</span>
              <span className="text-[10px] text-[#555555] uppercase tracking-wider font-semibold">
                Pilot Deployment Evaluation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. FRONTLINE VOICES & CLINICAL TESTIMONY                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006B5F]">
              Frontline Clinical Evidence
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#0A0A0A] font-extrabold mt-1.5">
              Voices from the Primary Health Facility.
            </h2>
            <p className="text-[#555555] text-base mt-2">
              Hear from clinicians and facility directors testing TotoAfya in active maternal health dispensaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Dr Josephine */}
            <div className="p-8 rounded-2xl bg-[#F7F5F0] border border-[#E5E5E5] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#006B5F]/40" />
                <p className="text-sm text-[#0A0A0A] leading-relaxed italic">
                  &ldquo;In rural dispensaries, paper antenatal cards are frequently lost or destroyed during rains. TotoAfya gives our nurses an instant clinical history and automatically flags high-risk maternal blood pressure readings even before the mother sits down.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#E5E5E5]">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-[#BCE2DA]">
                  <Image src="/drjosephine.jpg" alt="Dr. Josephine" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0A0A0A]">Dr. Josephine K.</h4>
                  <p className="text-[11px] text-[#555555]">Maternal Health Lead, Western Kenya</p>
                </div>
              </div>
            </div>

            {/* Card 2: Dispensary Immunization Nurse */}
            <div className="p-8 rounded-2xl bg-[#F7F5F0] border border-[#E5E5E5] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#107C41]/40" />
                <p className="text-sm text-[#0A0A0A] leading-relaxed italic">
                  &ldquo;Logging 35 infant vaccinations by hand every Tuesday used to consume four hours of paperwork. With TotoAfya, the KEPI schedule generates automatically by birth date, and we register every child in under 2 minutes.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#E5E5E5]">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-[#BDE8D3]">
                  <Image src="/character_anchor_best_face.jpg" alt="Frontline Nurse" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0A0A0A]">Sister Beatrice M.</h4>
                  <p className="text-[11px] text-[#555555]">Dispensary Immunization Coordinator</p>
                </div>
              </div>
            </div>

            {/* Card 3: County Health Systems Administrator */}
            <div className="p-8 rounded-2xl bg-[#F7F5F0] border border-[#E5E5E5] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#E68A00]/40" />
                <p className="text-sm text-[#0A0A0A] leading-relaxed italic">
                  &ldquo;The ability to export clean, formatted MoH 711 summaries without chasing down lost physical registers across 12 peripheral dispensaries is a complete paradigm shift for our sub-county surveillance team.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#E5E5E5]">
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-[#E5E5E5]">
                  <Image src="/healthdirector.webp" alt="Health System Lead" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0A0A0A]">Dr. Edwin O.</h4>
                  <p className="text-[11px] text-[#555555]">County Health Informatics Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. CALL-TO-ACTION (TOTOAFYA TEAL & SAVANNAH ACCENT)                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="pilot-program" className="py-20 sm:py-24 bg-gradient-to-br from-[#006B5F] via-[#00574D] to-[#0A1F1B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E68A00]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-xs font-bold text-white uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E68A00]" />
            <span>2026 County Healthcare Partnership Call</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Deploy TotoAfya Digital Across Your Primary Healthcare Network.
          </h2>

          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            We invite County Health Management Teams (CHMT), maternity clinic superintendents, and maternal health NGOs to initiate an audited pilot deployment.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=pilot"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E68A00] text-white font-extrabold text-sm hover:bg-[#CC7A00] transition-all shadow-xl shadow-black/20"
            >
              <span>Schedule Institutional Demonstration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>View Deployment Sizing</span>
            </Link>
          </div>

          <div className="pt-8 text-xs text-teal-200">
            <span>Direct Inquiries: </span>
            <a
              href={`mailto:${SITE_CONFIG.partnershipsEmail}`}
              className="text-white underline hover:text-[#FFD580] ml-1 font-mono"
            >
              {SITE_CONFIG.partnershipsEmail}
            </a>
            <span className="mx-2">•</span>
            <span>Technical Office: {SITE_CONFIG.governance.incubator}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
