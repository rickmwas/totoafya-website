'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Zap, ChevronDown } from 'lucide-react';
import { B2B_PRICING_PLANS, B2C_PRICING_PLANS, FAQ_ITEMS } from '@/lib/constants';

export default function PricingPage() {
  const [pricingMode, setPricingMode] = useState<'b2b' | 'b2c'>('b2b');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePlans = pricingMode === 'b2b' ? B2B_PRICING_PLANS : B2C_PRICING_PLANS;

  return (
    <div className="space-y-20 py-12 bg-[#F8FAFA] text-[#102027]">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="badge-clinical">Transparent Pricing & Deployment</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#063B4C] tracking-tight">
            Predictable plans for <span className="text-[#087EA4]">clinics, health centers & families.</span>
          </h1>
          <p className="text-base text-[#5E7078] leading-relaxed">
            Deploy TotoAfya Digital at your maternity dispensary to eliminate paper registers, or protect your family with our caregiver mobile companion app.
          </p>

          {/* Pricing Mode Switcher */}
          <div className="pt-4 inline-flex p-1 bg-[#EAF6F9] border border-[#C4E2EA] rounded-lg">
            <button
              onClick={() => setPricingMode('b2b')}
              className={`px-5 py-2.5 rounded-md text-xs font-bold transition-all ${
                pricingMode === 'b2b'
                  ? 'bg-[#087EA4] text-white shadow-sm'
                  : 'text-[#063B4C] hover:bg-white/50'
              }`}
            >
              For Healthcare Facilities (B2B)
            </button>
            <button
              onClick={() => setPricingMode('b2c')}
              className={`px-5 py-2.5 rounded-md text-xs font-bold transition-all ${
                pricingMode === 'b2c'
                  ? 'bg-[#087EA4] text-white shadow-sm'
                  : 'text-[#063B4C] hover:bg-white/50'
              }`}
            >
              For Caregivers & Families (B2C)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-8 items-stretch ${
            pricingMode === 'b2b'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
          }`}
        >
          {activePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl bg-white border p-6 flex flex-col justify-between space-y-6 transition-all ${
                plan.highlighted
                  ? 'border-[#087EA4] ring-2 ring-[#087EA4]/20 shadow-md'
                  : 'border-[#D4E7EC] hover:border-[#087EA4]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 right-4 bg-[#087EA4] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <Zap className="w-3 h-3 fill-white stroke-none" />
                  <span>Recommended</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#063B4C]">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-extrabold text-[#063B4C]">{plan.price}</span>
                    <span className="text-xs text-[#5E7078]">/{plan.period}</span>
                  </div>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-[#EAF6F9] text-[#063B4C] text-[10px] font-bold uppercase tracking-wider border border-[#C4E2EA]">
                    {plan.quota}
                  </span>
                </div>

                <p className="text-xs text-[#5E7078] leading-relaxed border-b border-[#EAF6F9] pb-4">
                  {plan.description}
                </p>

                <ul className="space-y-3 pt-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-[#102027]">
                      <Check className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.href}
                className={`w-full text-center py-2.5 px-4 rounded-md font-semibold text-xs transition-all ${
                  plan.highlighted
                    ? 'bg-[#087EA4] text-white hover:bg-[#066989]'
                    : 'bg-[#EAF6F9] text-[#063B4C] hover:bg-[#087EA4] hover:text-white border border-[#C4E2EA]'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#063B4C]">Frequently Asked Questions</h2>
          <p className="text-xs text-[#5E7078]">
            Key information about clinical registry deployments, offline data security, and Safaricom M-Pesa billing.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-lg bg-white border border-[#D4E7EC] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left font-bold text-xs sm:text-sm text-[#063B4C] flex items-center justify-between gap-4 hover:bg-[#F8FAFA]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#087EA4] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-[#5E7078] leading-relaxed border-t border-[#EAF6F9] pt-3">
                    {faq.answer}
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
