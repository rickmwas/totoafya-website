import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Database,
  Syringe,
  Activity,
  Lock,
} from 'lucide-react';
import { SITE_CONFIG, FAQ_ITEMS } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24 overflow-x-hidden bg-[#FAF9F6]">
      
      {/* ─────────────────────────────────────────────────────────────
          01 / HERO — Editorial Split Composition with Breathing Photography
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-8 sm:pt-16 pb-16 lg:pb-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Message & Primary Action */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  Digital Health Platform · Kenya
                </span>

                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                  Connected care.{' '}
                  <span className="block text-emerald-800">
                    For Kenya&apos;s families.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                TotoAfya Digital connects mothers, community health volunteers, and clinical nurses across dispensaries and maternity centers — ensuring offline-first health registries, KEPI vaccine scheduling, and WHO growth tracking follow the patient everywhere.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-sm transition-all active:scale-[0.98] text-center"
                >
                  <span>Request a demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/product"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all text-center"
                >
                  <span>See how it works</span>
                </Link>
              </div>

              {/* Verified Evidence Footer Pill */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Offline-First Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>KEPI Protocol Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Data Protection 2019</span>
                </div>
              </div>
            </div>

            {/* Right: Human Photography Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src="/images/hero-mother-child.jpg"
                  alt="Kenyan mother with child receiving care"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Subtle Human Context Badge */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <Image
                    src="/kisii_university_logo_clean-removebg-preview.png"
                    alt="Kisii University Incubator"
                    width={32}
                    height={32}
                    className="object-contain filter brightness-110 shrink-0"
                  />
                  <div>
                    <span className="font-bold text-white block">Incubated at {SITE_CONFIG.governance.incubator}</span>
                    <span className="text-slate-400 text-[11px] block">{SITE_CONFIG.governance.recognition}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 shrink-0">
                  Kisii County, Kenya
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          02 / THE PROBLEM — Narrative Journey: Care Doesn't Happen in One Place
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            01 / The Continuity Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Care doesn&apos;t happen in one place.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            A mother&apos;s healthcare journey spans community visits, local dispensaries, sub-county maternity centers, and immunization clinics over two years. When paper registers stay in one building or internet cuts out, records disappear.
          </p>
        </div>

        {/* Timeline Flow Narrative - NO CARDS */}
        <div className="relative border-l-2 border-emerald-200 pl-6 sm:pl-10 space-y-12 ml-3 sm:ml-4">
          
          {/* Journey Node 1 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">
              1
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">First Contact · Home / Community</span>
              <h3 className="text-xl font-bold text-slate-900">Registration & Antenatal Intake</h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Pregnancy begins with a Community Health Volunteer (CHV) encounter or dispensary visit. Physical paper booklets are easily misplaced before labor.
              </p>
            </div>
          </div>

          {/* Journey Node 2 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">
              2
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Delivery · Referral Hospital</span>
              <h3 className="text-xl font-bold text-slate-900">Hospital Delivery & Labor Ward</h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Delivery takes place at a referral facility miles away. Attending midwives often lack previous ANC vitals, blood pressure history, or blood group records.
              </p>
            </div>
          </div>

          {/* Journey Node 3 */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold">
              3
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">24-Month Follow-Up · Local Dispensary</span>
              <h3 className="text-xl font-bold text-slate-900">Immunization & Child Growth Milestones</h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Over the child&apos;s first 24 months, KEPI vaccinations and WHO weight checks require continuous monitoring. Without automated alerts, dropouts go undetected.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          03 / THE PRODUCT — Care Follows the Mother
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-950 text-white py-20 sm:py-28 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              02 / Real Product Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Care follows the mother — not the facility.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              TotoAfya Digital maintains a single synchronized record across mother, nurse, and facility administrator portals. Workflows run seamlessly online or offline.
            </p>
          </div>

          {/* Large Product Interface Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Primary Showcase Image */}
            <div className="lg:col-span-8 relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/nurse_portal_mockup.png"
                  alt="TotoAfya Nurse Clinical Registry Interface"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Key Outcomes List */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
                <h3 className="text-lg font-bold text-white">Nurse Clinical Registry</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tablet-optimized clinical workflow for fast ANC registration, vitals logging, and red-flag danger sign alerts.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-slate-700 pl-4">
                <h3 className="text-lg font-bold text-white">Mother PWA Portal</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Digital booklet and automated KEPI SMS reminders on basic smartphones for expectant mothers.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-slate-700 pl-4">
                <h3 className="text-lg font-bold text-white">Facility Telemetry Desktop App</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tauri desktop application for facility managers to monitor patient volume and export MoH registers.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Explore product capabilities</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          04 / WHO IT SERVES — 4 Distinct Audience Visual Compositions (NO IDENTICAL CARDS)
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            03 / Who It Serves
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for every stakeholder in maternal healthcare.
          </h2>
        </div>

        <div className="space-y-16">
          
          {/* Audience 1: Mothers & Caregivers (Human Photo + PWA Mockup) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 rounded-2xl border border-slate-200">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Mothers & Caregivers</span>
              <h3 className="text-2xl font-bold text-slate-900">Never miss an ANC checkup or vaccine milestone.</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mothers receive direct SMS reminders prior to scheduled immunization clinic visits, access their pregnancy booklet on their phone, and read bilingual health education in Kiswahili and English.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Digital ANC booklet & vaccine schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Automated SMS clinic reminders</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/mother_portal_mockup.png"
                  alt="Mother Portal Interface"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Audience 2: Health Workers & CHVs (Clinical Workflow Focus) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-emerald-950 text-white p-8 rounded-2xl border border-emerald-900">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-emerald-800 bg-emerald-900">
                <Image
                  src="/clinical_nurse_pilot.png"
                  alt="Clinical Nurse Pilot Workflow"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Clinical Nurses & CHVs</span>
              <h3 className="text-2xl font-bold text-white">Under 2-minute registration in busy dispensaries.</h3>
              <p className="text-sm text-emerald-100 leading-relaxed">
                Designed for frontline nurses operating under high patient volume. Rapid intake forms, automatic WHO Z-score malnutrition evaluation, and KEPI dose logging without manual calculations.
              </p>
              <ul className="space-y-2 text-xs text-emerald-200 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>WHO Weight-for-Age & MUAC nutrition staging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Red-flag maternal danger sign warnings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Audience 3: Facilities & County Systems (Telemetry Focus) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 rounded-2xl border border-slate-200">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Health Facilities & County Leadership</span>
              <h3 className="text-2xl font-bold text-slate-900">Statutory MoH register export & coverage telemetry.</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Facility administrators and county health directors monitor clinic attendance, track vaccine dropout risks, and export monthly patient registers aligned with MoH / DHIS2 standards.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>1-click CSV/Excel register exports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Multi-facility sub-county governance</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/admin_telemetry_trust.png"
                  alt="Facility Telemetry Dashboard"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          05 / BUILT FOR THE REAL WORLD — Technical Capability Strip
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              04 / Built for Real Clinics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Engineered for low-connectivity dispensaries.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Offline-First Engine</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operates locally via client-side IndexedDB when network fails. Background sync pushes pending logs upon connection.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <Syringe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">KEPI Schedule Logic</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calculates exact vaccination target dates from birth through 24 months per Kenya Ministry of Health protocols.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">WHO Growth Charts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluates Weight-for-Age, Height-for-Age, and MUAC against WHO standards to flag MAM/SAM malnutrition early.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Data Governance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Encrypted storage and role-based access control aligned with Kenya Data Protection Act 2019 principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          06 & 07 / EVIDENCE, IMPACT & TRUST
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Factual Institutional Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Awarded Best Project in Digital Healthcare
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Recognized during Kisii Innovation Week and incubated at {SITE_CONFIG.governance.incubator} under {SITE_CONFIG.legalName}. Developed in Kenya to solve real maternal care bottlenecks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full lg:w-auto shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm text-center"
            >
              <span>Learn about TerraSept</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          08 / FAQ — Human Accordion
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            05 / Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">{item.question}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          09 / FINAL CTA — Image-Led Composition
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-emerald-950 text-white p-8 sm:p-14 border border-emerald-900 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Deployment & Pilot Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let&apos;s keep care connected.
            </h2>
            <p className="text-sm text-emerald-100 max-w-xl leading-relaxed">
              Arrange a technical demonstration for your dispensary, maternity center, or county health department.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white text-slate-950 font-extrabold text-sm hover:bg-slate-100 transition-all text-center shadow-md"
            >
              <span>Request a demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-900/80 border border-emerald-700 text-white font-semibold text-xs hover:bg-emerald-900 transition-all text-center"
            >
              <span>View Pilot Framework</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
