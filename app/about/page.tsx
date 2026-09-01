import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Award, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, LEADERSHIP_TEAM } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us — Mission, Leadership & Vision',
  description:
    'Learn about TerraSept Solutions Ltd, Kisii Innovation Week recognition, and TotoAfya Digital leadership team transforming maternal healthcare in Kenya.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 py-12 bg-[#F8FAFA] text-[#102027]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="badge-clinical">About TerraSept Solutions Ltd</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#063B4C] tracking-tight">
            Maternal care technology, <span className="text-[#087EA4]">engineered for African clinics.</span>
          </h1>
          <p className="text-base text-[#5E7078] leading-relaxed">
            TotoAfya Digital was founded under {SITE_CONFIG.legalName} in Kisii Town, Kenya, to bridge the gap between national preventative health policies and the real-world digital capabilities of dispensaries, maternity hospitals, and community health networks.
          </p>
        </div>
      </section>

      {/* Award & Incubator Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#063B4C] text-white p-8 sm:p-10 border border-[#084D63] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-[#159A9C] font-semibold text-xs uppercase tracking-wider">
              <Award className="w-5 h-5 shrink-0" />
              <span>Kisii Innovation Week Winner</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Recognized as &quot;Best Project — Digital Healthcare&quot;
            </h2>
            <p className="text-xs sm:text-sm text-[#EAF6F9] leading-relaxed">
              Awarded for excellence in technology innovation designed to reduce maternal and infant mortality through offline-first digital registries and automated KEPI immunization schedules.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="p-4 rounded-lg bg-[#084D63] border border-[#0A5C77] text-center space-y-2">
              <span className="text-xs font-bold text-white block">Incubated at</span>
              <span className="text-xs text-[#159A9C] font-semibold block">
                {SITE_CONFIG.governance.incubator}
              </span>
              <span className="text-[10px] text-[#C4E2EA] block">Kisii Town, Kisii County, Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087EA4]">
            Leadership Team
          </span>
          <h2 className="text-3xl font-bold text-[#063B4C] tracking-tight">
            The team behind TotoAfya Digital
          </h2>
          <p className="text-xs sm:text-sm text-[#5E7078]">
            Directing technology, business operations, and community outreach at TerraSept Solutions Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.name}
              className="rounded-xl bg-white border border-[#D4E7EC] p-6 flex flex-col justify-between space-y-4 hover:border-[#087EA4] transition-colors"
            >
              <div className="space-y-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#EAF6F9] mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#EAF6F9] text-[#063B4C] text-[10px] font-bold uppercase tracking-wider border border-[#C4E2EA]">
                    {member.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#063B4C] pt-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#087EA4]">{member.role}</p>
                </div>
                <p className="text-xs text-[#5E7078] leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#063B4C] text-white rounded-xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Partner with TerraSept Solutions</h2>
          <p className="text-sm text-[#EAF6F9] max-w-xl mx-auto">
            Contact us for pilot agreements, academic collaboration, or institutional investment inquiries.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?type=partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#087EA4] text-white font-semibold text-xs hover:bg-[#066989] transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
