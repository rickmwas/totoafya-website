'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, ArrowRight } from 'lucide-react';
import { B2B_PRICING_PLANS, B2C_PRICING_PLANS, FAQ_ITEMS } from '@/lib/constants';

export default function PricingClient() {
  const [pricingMode, setPricingMode] = useState<'b2b' | 'b2c'>('b2b');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePlans = pricingMode === 'b2b' ? B2B_PRICING_PLANS : B2C_PRICING_PLANS;

  return (
    <div className="space-y-20 py-12 bg-[#FAF9F6]">
      
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            Deployment & Pilot Framework
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Facility pilots & institutional deployment.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Structure your digital health transition with evaluation tiers for rural dispensaries, maternity hospital deployments, or county-wide institutional partnerships.
          </p>
        </div>

        {/* Deployment Toggle */}
        <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-200/80 border border-slate-300">
          <button
            onClick={() => setPricingMode('b2b')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
              pricingMode === 'b2b'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            Health Facilities & Counties (B2B)
          </button>
          <button
            onClick={() => setPricingMode('b2c')}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
              pricingMode === 'b2c'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-950'
            }`}
          >
            Mothers & Caregivers (B2C)
          </button>
        </div>
      </section>

      {/* Deployment Tiers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-6 flex flex-col justify-between space-y-6 border transition-all ${
                plan.highlighted
                  ? 'border-2 border-emerald-800 shadow-md ring-1 ring-emerald-800/10'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                {plan.highlighted && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-800 text-white inline-block">
                    Recommended Pilot Tier
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{plan.quota}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-2xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-xs text-slate-500 ml-1">/ {plan.period}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{plan.description}</p>

                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={plan.href}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-emerald-800 text-white hover:bg-emerald-900 shadow-sm'
                      : 'bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 pt-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Deployment Questions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Deployment Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-bold text-slate-900">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
