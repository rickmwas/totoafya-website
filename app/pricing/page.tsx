'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, ShieldCheck, Zap, Building2, PhoneCall, ChevronDown } from 'lucide-react';
import { B2B_PRICING_PLANS, B2C_PRICING_PLANS, FAQ_ITEMS, SITE_CONFIG } from '@/lib/constants';

export default function PricingPage() {
  const [pricingMode, setPricingMode] = useState<'b2b' | 'b2c'>('b2b');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activePlans = pricingMode === 'b2b' ? B2B_PRICING_PLANS : B2C_PRICING_PLANS;

  return (
    <div className="space-y-20 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="badge-trust">Transparent Pricing & Deployment</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Predictable plans for{' '}
            <span className="font-serif italic text-emerald-800">clinics, health centers & families.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Deploy TotoAfya Digital at your maternity dispensary to eliminate paper registers, or protect your family with our caregiver mobile companion app.
          </p>

          {/* Pricing Mode Switcher */}
          <div className="pt-4 inline-flex p-1 bg-slate-200/80 rounded-xl">
            <button
              onClick={() => setPricingMode('b2b')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                pricingMode === 'b2b'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              For Healthcare Facilities (B2B)
            </button>
            <button
              onClick={() => setPricingMode('b2c')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                pricingMode === 'b2c'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
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
              className={`relative rounded-2xl bg-white border p-6 flex flex-col justify-between space-y-6 transition-all ${
                plan.highlighted
                  ? 'border-emerald-700 ring-2 ring-emerald-600/20 shadow-lg'
                  : 'border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 right-4 bg-emerald-800 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Zap className="w-3 h-3 fill-white stroke-none" />
                  <span>Recommended</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-xs text-slate-500">/{plan.period}</span>
                  </div>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                    {plan.quota}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed border-b border-slate-100 pb-4">
                  {plan.description}
                </p>

                <ul className="space-y-3 pt-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.href}
                className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all ${
                  plan.highlighted
                    ? 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm'
                    : 'border border-slate-300 hover:bg-slate-50 text-slate-800'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* M-Pesa & Bank Invoicing Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Safaricom M-Pesa & Bank Transfer Ready</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            All facility subscriptions and caregiver plans support Lipa na M-Pesa STK Push. Healthcare facilities and county departments can also request formal invoicing for local bank transfer processing.
          </p>
        </div>
      </section>

      {/* County & Large-Scale Deployment Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              County & NGO Deployments
            </span>
            <h3 className="text-xl font-bold text-white">Large-Scale Health Department Licensing</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We coordinate with county directors of health to implement centralized dashboards, customize dispensary portals, and provide onsite clinical staff training.
            </p>
          </div>
          <Link
            href="/contact?type=partnership"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-all shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule Consultation</span>
          </Link>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="badge-trust">Frequently Asked Questions</span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Deployment & Platform FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-800 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
