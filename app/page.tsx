import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Syringe,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Database,
  Lock,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  ChevronRight,
} from 'lucide-react';
import { SITE_CONFIG, ECOSYSTEM_PILLARS, LEADERSHIP_TEAM } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION — Product-Led Editorial Light Direction
         ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 sm:pt-16 lg:pt-20 border-b border-subtle bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16 lg:pb-24">
            
            {/* Editorial Copy Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <span className="section-index">01 / Connected Health Infrastructure</span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                  Connected care.{' '}
                  <span className="text-emerald-800 block sm:inline font-normal italic">
                    From community to clinic.
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                TotoAfya Digital bridges maternal and child healthcare gaps in Kenya by connecting mothers, clinical nurses, facility managers, and county health systems through offline-first digital registries and KEPI immunization scheduling.
              </p>

              {/* Primary Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/contact?type=demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-900 text-white font-bold text-xs sm:text-sm hover:bg-emerald-950 transition-all shadow-md"
                >
                  <span>Request a Facility Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/product"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-50 hover:border-slate-400 transition-all"
                >
                  <span>Explore Architecture</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Factual Credibility Statements */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">Offline-First Engine</span>
                  <span className="text-slate-500">IndexedDB local sync</span>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">KEPI & WHO Aligned</span>
                  <span className="text-slate-500">Immunization standards</span>
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-1">
                  <span className="font-bold text-slate-900 block">Data Protection 2019</span>
                  <span className="text-slate-500">Kenya statutory compliance</span>
                </div>
              </div>
            </div>

            {/* Product UI Composition Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
                
                {/* Main Nurse Registry Showcase */}
                <div className="rounded-xl overflow-hidden border border-slate-300/80 bg-white shadow-xl">
                  <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold text-white">Nurse Clinical Registry</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Offline Mode Active
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src="/nurse_portal_mockup.png"
                      alt="TotoAfya Nurse Clinical Registry Workflow"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                {/* Sub-Card 1: Mother PWA Companion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <Smartphone className="w-4 h-4 text-emerald-800" />
                      <span>Mother PWA Companion</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Bilingual ANC booklet & automated vaccine SMS notifications.
                    </p>
                  </div>

                  {/* Sub-Card 2: Telemetry & Reporting */}
                  <div className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-800" />
                      <span>Facility Telemetry</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Export MoH / DHIS2 patient registers with zero data loss.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. INSTITUTIONAL VALIDATION BAR
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Institutional Credibility & Alignment
              </span>
              <h2 className="text-lg font-bold text-slate-900">
                Recognized for Digital Healthcare Innovation in Kenya
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto text-xs text-slate-700 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-8">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Award Recognition</span>
                <span className="font-bold text-slate-900 block">{SITE_CONFIG.governance.recognition}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Incubation Hub</span>
                <span className="font-bold text-slate-900 block">{SITE_CONFIG.governance.incubator}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Corporate Body</span>
                <span className="font-bold text-slate-900 block">{SITE_CONFIG.legalName}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. 01 / THE SYSTEMIC CARE CONTINUITY CHALLENGE
         ───────────────────────────────────────────────────────────── */}
      <section id="challenge" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="section-index">01 / The Continuity Challenge</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Fragmented records create fragmented care.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In maternal and child healthcare, care is delivered across multiple encounters. When paper mother-child booklets are lost or connectivity fails, critical immunization dates and nutrition records disappear.
          </p>
        </div>

        {/* Timeline Journey Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          <div className="card-institutional p-6 space-y-4 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Community & Antenatal Visit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pregnancy registration occurs at a local dispensary or CHW visit. Paper records remain localized to the physical clinic register.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-slate-500 border-t border-slate-100">
              Risk: Lost ANC booklet prior to delivery
            </div>
          </div>

          <div className="card-institutional p-6 space-y-4 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Delivery at Sub-County Hospital</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Delivery occurs at a referral facility. Attending nurses lack previous ANC vitals, blood pressure history, or blood type records.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-slate-500 border-t border-slate-100">
              Risk: Unseen high-risk maternal complications
            </div>
          </div>

          <div className="card-institutional p-6 space-y-4 relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Postnatal & Immunization Follow-up</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Child returns home for KEPI vaccination milestones over 24 months. Missed doses go unnoticed due to lack of automated SMS tracking.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-slate-500 border-t border-slate-100">
              Risk: Vaccine dropout & malnutrition staging delays
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. 02 / THE CONNECTED ECOSYSTEM (4-Pillar System Diagram)
         ───────────────────────────────────────────────────────────── */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="section-index">02 / The Connected Ecosystem</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Four specialized workflows. One synchronized health record.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            TotoAfya Digital coordinates care across caregivers, health workers, dispensary managers, and county health leadership through role-tailored interfaces.
          </p>
        </div>

        {/* Pillar Grid with Real Evidence Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ECOSYSTEM_PILLARS.map((pillar, index) => (
            <div key={pillar.id} className="card-institutional p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Pillar 0{index + 1}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.summary}</p>

                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {pillar.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evidence Crop Screenshot */}
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. 03 / CLINICAL GOVERNANCE & TRUST ARCHITECTURE
         ───────────────────────────────────────────────────────────── */}
      <section id="trust" className="bg-slate-950 text-white py-16 sm:py-24 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              03 / Clinical Governance & Trust Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Built for statutory compliance, offline resilience, and clinical safety.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Digital health infrastructure in public healthcare demands transparent security parameters, clinician oversight, and reliable data protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Data Protection */}
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Data Protection 2019</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full statutory alignment with Kenya Data Protection Act 2019. Patient records are encrypted in transit and at rest with strict role-based access control.
              </p>
            </div>

            {/* Offline Resilience */}
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <Database className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Offline Sync Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Client-side IndexedDB database allows full registration and vitals entry without active internet. Data syncs automatically upon connection re-establishment.
              </p>
            </div>

            {/* Clinical Protocols */}
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <Syringe className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">KEPI & WHO Standards</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Immunization schedules adhere to Kenya Expanded Programme on Immunization (KEPI). Nutrition growth charts utilize WHO Weight-for-Age and MUAC metrics.
              </p>
            </div>

            {/* Responsible AI */}
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Non-Diagnostic Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Supportive AI educational assistance is strictly non-diagnostic. Red-flag symptoms trigger immediate referral protocols to licensed health facilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. 04 / EXECUTIVE LEADERSHIP & STEWARDSHIP
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="section-index">04 / Leadership & Governance</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Led by dedicated healthcare & technology leadership.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            TerraSept Solutions Ltd combines corporate strategy, community health outreach, and clinical software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((member) => (
            <div key={member.name} className="card-institutional p-6 space-y-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  {member.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs font-semibold text-slate-600">{member.role}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. INSTITUTIONAL CONSULTATION & PILOT CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-950 text-white p-8 sm:p-12 border border-emerald-900 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Pilot Evaluation & Deployment
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to evaluate TotoAfya Digital at your facility or county?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-2xl">
              Arrange a technical demonstration, review data protection compliance documentation, or initiate a dispensary pilot evaluation.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href="/contact?type=demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 transition-all shadow-md text-center"
            >
              <span>Schedule Technical Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-900/80 border border-emerald-800 text-white font-bold text-xs sm:text-sm hover:bg-emerald-900 transition-all text-center"
            >
              <span>View Pilot Tiers</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
