import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Activity,
  Syringe,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Building2,
  Database,
  Lock,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG, ECOSYSTEM_PILLARS } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-slate-950 text-white">
        {/* Sharp, Unblurred High-Resolution Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_clinic_bg.jpg"
            alt="Kenyan Maternal Health Clinic Environment"
            fill
            priority
            quality={95}
            className="object-cover object-center filter-none"
          />
          {/* Subtle Editorial Dark Overlay Gradients for Perfect Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Top Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-sm text-slate-200 text-xs font-semibold tracking-wide shadow-md">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{SITE_CONFIG.governance.recognition}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-sm">
              Connected Maternal & Child Healthcare for{' '}
              <span className="text-emerald-400 font-serif italic">Kenya’s Health Ecosystem.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
              TotoAfya Digital bridges dispensaries, referral hospitals, and caregivers with offline-first digital registries, automated KEPI immunization tracking, and WHO-standard nutrition monitoring.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-700 text-white font-bold text-sm hover:bg-emerald-800 active:scale-[0.98] transition-all shadow-xl shadow-slate-950/50"
              >
                <span>Schedule a Pilot Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/product"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/80 backdrop-blur-sm text-slate-100 font-semibold text-sm hover:bg-slate-800 hover:text-white border border-slate-700 transition-all shadow-lg"
              >
                <span>Explore Architecture</span>
              </Link>
            </div>
          </div>

          {/* Product Real Interface Showcase */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="relative rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 p-2 sm:p-4 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-slate-400 text-xs mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[11px] text-slate-300">
                    totoafya.co.ke · Multi-Portal MNCH Clinical Suite
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[11px]">
                  <span className="text-emerald-400 font-medium">Offline Sync Active</span>
                  <span>|</span>
                  <span>KEPI 2026 Engine</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group">
                  <Image
                    src="/mother_portal_mockup.png"
                    alt="Mother Caregiver PWA Portal"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Mother & Caregiver Portal
                    </span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Pregnancy milestone logs, KEPI vaccine calendar & AI companion.
                    </p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group">
                  <Image
                    src="/nurse_portal_mockup.png"
                    alt="Nurse Clinical Registry Portal"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Nurse Clinical Registry
                    </span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Under-2-minute registration, ANC vitals entry & WHO growth staging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INSTITUTIONAL VALIDATION ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Institutional Partnership
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Built & Tested with Healthcare Leaders
              </h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Incubated under TerraSept Solutions Ltd with academic and county hospital collaborators.
              </p>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center text-center space-y-2">
                <Image
                  src="/kisii_university_logo_clean-removebg-preview.png"
                  alt="Kisii University Innovation Hub Logo"
                  width={60}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-slate-800">Kisii University Innovation Hub</span>
                <span className="text-[10px] text-slate-500">Academic Incubator</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center text-center space-y-2">
                <Image
                  src="/kisii_teaching_and_referral_hospital_logo.jpg"
                  alt="Kisii Teaching and Referral Hospital"
                  width={60}
                  height={60}
                  className="h-12 w-auto object-contain rounded-full"
                />
                <span className="text-xs font-semibold text-slate-800">Kisii Teaching & Referral</span>
                <span className="text-[10px] text-slate-500">Clinical Collaboration</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center text-center space-y-2">
                <Image
                  src="/NAKURU_LOGO-removebg-preview.png"
                  alt="County Health Department Engagement"
                  width={60}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-slate-800">County Health Systems</span>
                <span className="text-[10px] text-slate-500">Pilot Alignment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE HEALTHCARE PROBLEM ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="badge-trust">Real-World Health System Realities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Paper registers break care continuity for mothers and children.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In many dispensaries and maternity centers across Kenya, child health books get misplaced, ANC registers remain siloed on physical paper, and nurses spend hours manually compiling MoH monthly summary sheets.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                <div className="text-xs text-amber-900">
                  <strong className="font-semibold">Vaccine Drop-off:</strong> Without automated SMS reminders, infants miss second-dose immunizations (such as Measles 2 at 18 months).
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                <div className="text-xs text-amber-900">
                  <strong className="font-semibold">Disconnected Transfers:</strong> When a mother visits a different clinic or county hospital, her clinical history is lost.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
                <div className="text-xs text-amber-900">
                  <strong className="font-semibold">Network Interruptions:</strong> Cloud-only hospital software fails completely when local cellular networks drop in rural wards.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                How TotoAfya Solves Paper Fragmentation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Offline-First Engine</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nurses record ANC vitals and vaccines on tablets without internet. Data syncs automatically once online.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">KEPI Schedule Logic</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Generates the 7 national vaccine visit dates automatically based on child DOB, eliminating manual errors.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">WHO Growth Staging</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Instantly flags Moderate (MAM) or Severe Acute Malnutrition (SAM) using Weight-for-Age & MUAC.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Bilingual Mother PWA</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Caregivers receive SMS alerts and 24/7 Swahili & English guidance pre-linked to their local clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ECOSYSTEM PILLARS ────────────────────────────────────── */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="badge-trust">Connected MNCH Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Designed for every stakeholder in the care continuum.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            TotoAfya provides specialized, role-tailored interfaces rather than a single monolithic app.
          </p>
        </div>

        <div className="space-y-12">
          {ECOSYSTEM_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  {pillar.badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.summary}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {pillar.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. CLINICAL ENGINES ──────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-semibold">
              <Syringe className="w-3.5 h-3.5" />
              Clinical Logic & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Grounded in KEPI Protocols & WHO Guidelines
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every automated schedule, vitals flag, and nutrition classification strictly conforms to Kenya Ministry of Health standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                <Syringe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">KEPI Vaccine Engine</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Auto-calculates exact target dates for BCG, OPV, Penta, PCV, Rota, and Measles 1 & 2 vaccines from birth through 18 months.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">WHO Nutrition Staging</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Evaluates child weight-for-age z-scores and Mid-Upper Arm Circumference (MUAC) to alert clinicians of SAM or MAM status instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Digital ANC Registry</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Records fundamental ANC vitals (BP, fundal height, fetal heart rate, urine protein) and highlights red-flag danger signs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OFFLINE & SECURITY ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="badge-trust">Institutional Security & Governance</span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Data Protection Act 2019 & Encrypted Offline Sync
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Healthcare data requires institutional security standards. TotoAfya Digital ensures full compliance with Kenyan data laws, role-based authorization, and encrypted local storage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="font-semibold text-slate-900 block">Encrypted IndexedDB</strong>
                  <span className="text-slate-500">Patient profiles remain encrypted locally on clinic devices.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Database className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="font-semibold text-slate-900 block">PostgreSQL RLS</strong>
                  <span className="text-slate-500">Row Level Security restricts data strictly to authorized facilities.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="font-semibold text-slate-900 block">Zero-Data-Loss Queue</strong>
                  <span className="text-slate-500">Local writes queue safely during cellular outages and auto-sync.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="font-semibold text-slate-900 block">Non-Diagnostic AI Bounds</strong>
                  <span className="text-slate-500">AI companion provides guidance only and escalates to clinicians.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-6 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-mono text-emerald-400">Security & Compliance Checklist</span>
              <span className="text-slate-500">v0.9-Pilot Ready</span>
            </div>

            <ul className="space-y-3 text-xs">
              {SITE_CONFIG.governance.compliance.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>TerraSept Solutions Ltd</span>
              <span>Kisii Town, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INSTITUTIONAL CTA ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              Pilot & Onboarding Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Transform maternal healthcare delivery in your facility.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Schedule a demonstration with project lead Erick Mwangi and the TerraSept Solutions team to evaluate TotoAfya Digital for your clinic or county health department.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition-all shadow-lg"
              >
                <span>Request Facility Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-700 hover:text-white border border-slate-700 transition-all"
              >
                <span>View B2B Pricing Tiers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
