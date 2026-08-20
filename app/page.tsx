import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Syringe,
  ArrowRight,
  CheckCircle2,
  Database,
  Lock,
  ShieldCheck,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { SITE_CONFIG, ECOSYSTEM_PILLARS, LEADERSHIP_TEAM } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION — Full Bleed Premium Hero with Natural Contrast
         ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] sm:min-h-[850px] flex flex-col justify-between overflow-hidden bg-slate-950 text-white pt-28 sm:pt-36 pb-12">
        
        {/* Full Bleed Photographic Background Asset */}
        <Image
          src="/images/hero-mother-child.jpg"
          alt="Connected Care for Kenya&apos;s Families — Mother & Child"
          fill
          className="object-cover object-center scale-105 transition-transform duration-1000"
          priority
        />

        {/* Natural Radial & Directional Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950/90 via-slate-950/75 to-transparent pointer-events-none" />

        {/* Centered Typography & Hero Actions */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 my-auto space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 block mb-1">
              CONNECTED HEALTHCARE INFRASTRUCTURE
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-md">
              Connected care.{' '}
              <span className="block sm:inline bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                For Kenya&apos;s Families.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
            TotoAfya Digital connects mothers and health workers across Kenya, ensuring seamless offline-first digital registries, WHO growth staging, and KEPI vaccine scheduling.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?type=demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/25 active:scale-[0.98] transition-all"
            >
              <span>Request Facility Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/20 hover:border-white/40 transition-all"
            >
              <span>Explore Product Architecture</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>

          {/* Inline Tech Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300 font-semibold">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Offline Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <Syringe className="w-4 h-4 text-emerald-400" />
              <span>KEPI Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Data Secure</span>
            </div>
          </div>

        </div>

        {/* Floating Partner Trust Card at Bottom Edge */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
          <div className="rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/10 p-4 sm:p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                Institutional & Academic Partners
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/kisii_university_logo_clean-removebg-preview.png"
                    alt="Kisii University Innovation Incubator"
                    width={36}
                    height={36}
                    className="object-contain filter brightness-110"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">Kisii University</span>
                    <span className="text-[10px] text-slate-400 block">Innovations & Tech Transfer Center</span>
                  </div>
                </div>
                
                <div className="h-6 w-px bg-slate-700/60 hidden sm:block" />

                <div className="flex items-center gap-3">
                  <Image
                    src="/terrasept_logo_clean.png"
                    alt="TerraSept Solutions Logo"
                    width={110}
                    height={40}
                    className="h-10 w-auto object-contain filter brightness-110"
                  />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block">TerraSept Solutions</span>
                    <span className="text-[10px] text-slate-400 block">Incorporated Tech Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. VIBRANT INSTITUTIONAL VALIDATION & RECOGNITION
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 block">
                INSTITUTIONAL VALIDATION
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Recognized for Excellence in Digital Health Innovation
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto text-xs border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-8">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">Award Winner</span>
                <span className="font-bold text-white block">{SITE_CONFIG.governance.recognition}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">Incubated At</span>
                <span className="font-bold text-white block">{SITE_CONFIG.governance.incubator}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-400 block">Incorporated Body</span>
                <span className="font-bold text-white block">{SITE_CONFIG.legalName}</span>
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
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fragmented records create <span className="gradient-text-emerald">fragmented care.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            In maternal and child healthcare, care is delivered across multiple encounters. When paper booklets are lost or connectivity fails, critical immunization dates and nutrition records disappear.
          </p>
        </div>

        {/* Dynamic Journey Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="tech-card p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 font-extrabold flex items-center justify-center text-sm border border-emerald-200">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Community & Antenatal Registration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pregnancy registration occurs at a local dispensary or CHW visit. Paper records remain localized to physical clinic logs.
            </p>
            <div className="pt-2 text-[11px] font-bold text-rose-600 border-t border-slate-100 flex items-center gap-1.5">
              <span>⚠️ Risk: Lost ANC booklet prior to delivery</span>
            </div>
          </div>

          <div className="tech-card p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 font-extrabold flex items-center justify-center text-sm border border-emerald-200">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Delivery at Sub-County Hospital</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Delivery occurs at a referral hospital. Attending nurses lack previous ANC vitals, blood pressure history, or blood type logs.
            </p>
            <div className="pt-2 text-[11px] font-bold text-rose-600 border-t border-slate-100 flex items-center gap-1.5">
              <span>⚠️ Risk: Unseen high-risk maternal complications</span>
            </div>
          </div>

          <div className="tech-card p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-800 font-extrabold flex items-center justify-center text-sm border border-emerald-200">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Immunization & Growth Follow-up</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Child returns for KEPI vaccination milestones over 24 months. Missed doses go unnoticed due to lack of automated SMS tracking.
            </p>
            <div className="pt-2 text-[11px] font-bold text-rose-600 border-t border-slate-100 flex items-center gap-1.5">
              <span>⚠️ Risk: Vaccine dropout & malnutrition staging delays</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. 02 / THE CONNECTED ECOSYSTEM (4-Pillar System)
         ───────────────────────────────────────────────────────────── */}
      <section id="ecosystem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="section-index">02 / The Connected Ecosystem</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Four specialized workflows.{' '}
            <span className="gradient-text-emerald">One synchronized record.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            TotoAfya Digital coordinates care across caregivers, health workers, dispensary managers, and county health leadership through role-tailored interfaces.
          </p>
        </div>

        {/* 4 Pillars with Real Product Screenshots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ECOSYSTEM_PILLARS.map((pillar, index) => (
            <div key={pillar.id} className="tech-card p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                    Pillar 0{index + 1}
                  </span>
                  <span className="badge-vibrant">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.summary}</p>

                <ul className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  {pillar.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshot Evidence Crop */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. 03 / CLINICAL GOVERNANCE & TRUST ARCHITECTURE (High-Tech Dark)
         ───────────────────────────────────────────────────────────── */}
      <section id="trust" className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 text-white py-20 sm:py-28 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="badge-vibrant-dark">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              03 / CLINICAL GOVERNANCE & TRUST
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Built for statutory compliance, offline resilience, and clinical safety.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
              Digital health infrastructure in public healthcare demands transparent security parameters, clinician oversight, and reliable data protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Data Protection */}
            <div className="tech-card-dark p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Data Protection 2019</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full statutory alignment with Kenya Data Protection Act 2019. Patient records are encrypted in transit and at rest with strict role-based access control.
              </p>
            </div>

            {/* Offline Engine */}
            <div className="tech-card-dark p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Offline Sync Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Client-side IndexedDB database allows full registration and vitals entry without active internet. Data syncs automatically upon connection re-establishment.
              </p>
            </div>

            {/* Protocols */}
            <div className="tech-card-dark p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Syringe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">KEPI & WHO Standards</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Immunization schedules adhere to Kenya Expanded Programme on Immunization (KEPI). Nutrition growth charts utilize WHO Weight-for-Age and MUAC metrics.
              </p>
            </div>

            {/* Non-Diagnostic */}
            <div className="tech-card-dark p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
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
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Led by dedicated healthcare & technology leadership.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            TerraSept Solutions Ltd combines corporate strategy, community health outreach, and clinical software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((member) => (
            <div key={member.name} className="tech-card p-6 space-y-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-500/20 bg-slate-100 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 block">
                  {member.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs font-semibold text-slate-600">{member.role}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. VIBRANT HIGH-IMPACT CONSULTATION & PILOT CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-950 text-white p-8 sm:p-12 border border-emerald-500/30 shadow-2xl shadow-emerald-600/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          {/* Ambient Radial Mesh in CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full"></div>

          <div className="lg:col-span-8 space-y-4 relative z-10">
            <span className="badge-vibrant-dark">
              PILOT EVALUATION & DEPLOYMENT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to evaluate TotoAfya Digital at your facility or county?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-2xl font-medium">
              Arrange a technical demonstration, review data protection compliance documentation, or initiate a dispensary pilot evaluation.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center relative z-10">
            <Link
              href="/contact?type=demo"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm hover:from-emerald-400 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/30 text-center"
            >
              <span>Schedule Technical Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-all text-center"
            >
              <span>View Pilot Tiers</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
