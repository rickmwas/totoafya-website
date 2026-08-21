import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Award, ShieldCheck, Globe2, Users, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, LEADERSHIP_TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us — Mission, Leadership & Vision',
  description:
    'Learn about TerraSept Solutions Ltd, Kisii Innovation Week recognition, and TotoAfya Digital leadership team transforming maternal healthcare in Kenya.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="badge-trust">About TerraSept Solutions Ltd</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Maternal care technology,{' '}
            <span className="font-serif italic text-emerald-800">engineered for African clinics.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            TotoAfya Digital was founded under {SITE_CONFIG.legalName} in Kisii Town, Kenya, to bridge the gap between national preventative health policies and the real-world digital capabilities of dispensaries, maternity hospitals, and community health networks.
          </p>
        </div>
      </section>

      {/* Award & Incubator Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-950 text-white p-8 sm:p-10 shadow-lg border border-emerald-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
              <Award className="w-5 h-5 shrink-0" />
              <span>Kisii Innovation Week Winner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Recognized as &quot;Best Project — Digital Healthcare&quot;
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
              Awarded for excellence in technology innovation designed to reduce maternal and infant mortality through offline-first digital registries and automated KEPI immunization schedules.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-800 text-center space-y-2">
              <span className="text-xs font-bold text-white block">Incubated at</span>
              <span className="text-xs text-emerald-300 font-medium block">
                {SITE_CONFIG.governance.incubator}
              </span>
              <span className="text-[10px] text-emerald-400 block">Kisii Town, Kisii County, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Leadership Team
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            The team behind TotoAfya Digital
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Directing technology, business operations, and community outreach at TerraSept Solutions Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-100 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                    {member.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 pt-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-emerald-800">{member.role}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Institutional Values
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <Globe2 className="w-6 h-6 text-emerald-800" />
            <h3 className="text-base font-bold text-slate-900">Built for Africa</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Grounded in local clinic realities — offline functionality, bilingual education (English & Kiswahili), and low-bandwidth compatibility.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <ShieldCheck className="w-6 h-6 text-emerald-800" />
            <h3 className="text-base font-bold text-slate-900">Data Protection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patient records are encrypted end-to-end and stored securely in full compliance with Kenya&apos;s Data Protection Act 2019.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <Users className="w-6 h-6 text-emerald-800" />
            <h3 className="text-base font-bold text-slate-900">Provider Co-Design</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Features are co-designed alongside clinical nurses, CHVs, and county directors to address actual clinical bottlenecks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <Award className="w-6 h-6 text-emerald-800" />
            <h3 className="text-base font-bold text-slate-900">Evidence-Based</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All growth metrics and immunization tables conform to WHO protocols and Kenya Ministry of Health NHSSP guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Partner with TerraSept Solutions</h3>
            <p className="text-xs text-slate-300">
              Connect with executive leadership to evaluate pilot implementation in your county or facility network.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-all shrink-0"
          >
            <span>Contact Executive Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
