import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Award, ArrowRight, MapPin } from 'lucide-react';
import { SITE_CONFIG, LEADERSHIP_TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us — Mission, Team & Leadership',
  description:
    'Learn about TerraSept Solutions Ltd, Kisii Innovation Week recognition, and the team building connected digital healthcare for Kenya.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-24 py-12 bg-[#FAF9F6]">
      
      {/* 1. Page Header — Editorial & Human */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            About TerraSept Solutions Ltd
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Maternal health technology,{' '}
            <span className="text-emerald-800">built for the realities of African clinics.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            TotoAfya Digital was founded under {SITE_CONFIG.legalName} in Kisii Town, Kenya, to bridge the gap between national health policies and the real-world operational capabilities of dispensaries, maternity hospitals, and community health networks.
          </p>
        </div>
      </section>

      {/* 2. Why TotoAfya Exists (Editorial Narrative) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-14 space-y-8 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Our Perspective</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why we built TotoAfya
            </h2>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
              <p>
                In rural and peri-urban dispensaries across Kenya, dedicated clinical nurses care for dozens of expectant mothers each day while manually filling paper registers. When power goes out or cellular coverage drops, digital software often fails completely.
              </p>
              <p>
                We believe care continuity should not depend on continuous internet. By engineering offline-first digital health registries that run client-side and sync when connectivity returns, we keep care records intact across every encounter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Factual Institutional Award & Incubation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-950 text-white p-8 sm:p-12 border border-emerald-900 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Award className="w-5 h-5 shrink-0" />
              <span>Kisii Innovation Week Winner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Recognized as Best Project in Digital Healthcare
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Awarded for excellence in technology innovation designed to reduce maternal and infant mortality through offline-first digital registries and KEPI immunization schedules.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="p-4 rounded-xl bg-emerald-900 border border-emerald-800 text-left space-y-1">
              <span className="text-xs font-bold text-white block">Incubated at</span>
              <span className="text-xs text-emerald-300 font-semibold block">
                {SITE_CONFIG.governance.incubator}
              </span>
              <span className="text-[11px] text-emerald-400 block flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Kisii Town, Kisii County, Kenya</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Leadership Team — Story Composition (NO REPETITIVE CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Leadership & Engineering
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            The team directing TerraSept Solutions
          </h2>
        </div>

        <div className="space-y-12">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm"
            >
              <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-center md:text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                    {member.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-slate-600">{member.role}</p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Institutional Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-950 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-900">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Partner with TerraSept Solutions</h3>
            <p className="text-xs text-slate-400">
              Connect with executive leadership to evaluate pilot implementation in your county or facility network.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm shrink-0"
          >
            <span>Contact Executive Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
