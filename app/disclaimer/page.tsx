import React from 'react';
import type { Metadata } from 'next';
import { ShieldAlert } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Clinical & AI Guardrails Disclaimer',
  description:
    'Clinical safety, non-diagnostic boundaries, and AI supportive scope disclaimer for TotoAfya Digital.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 bg-[#F8FAFA] text-[#102027]">
      <div className="space-y-2 border-b border-[#D4E7EC] pb-6">
        <div className="badge-clinical">Safety Disclosures</div>
        <h1 className="text-3xl font-bold text-[#063B4C]">Clinical & AI Guardrails Disclaimer</h1>
        <p className="text-xs text-[#5E7078]">
          Last updated: August 19, 2026 · {SITE_CONFIG.legalName}
        </p>
      </div>

      <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-3">
        <div className="flex items-center gap-2 font-bold text-sm">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
          <span>Non-Diagnostic Clinical Scope Notice</span>
        </div>
        <p className="text-xs leading-relaxed text-amber-950">
          TotoAfya Digital is a health registry and supportive guidance tool. It is NOT an automated diagnostic system, medical device, or prescription software. It does not replace the professional evaluation, diagnosis, or treatment by a licensed physician, midwife, or nurse.
        </p>
      </div>

      <div className="text-xs sm:text-sm text-[#5E7078] leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#063B4C]">1. AI Health Companion Limitations</h2>
          <p>
            The 24/7 Swahili and English AI Care Companion integrated into the Mother PWA is strictly programmed to deliver supportive maternal health education based on public WHO and Kenya Ministry of Health protocols. It does not generate medical diagnoses, prescribe drugs, or issue binding clinical directives.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#063B4C]">2. Emergency Symptoms & Red Flags</h2>
          <p>
            In the event of acute red-flag danger signs (such as severe vaginal bleeding, severe abdominal pain, high fever, convulsions, or absence of fetal movement), caregivers are explicitly instructed to seek immediate emergency care at the nearest health facility.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#063B4C]">3. Clinician Vitals & Protocols</h2>
          <p>
            Automated alerts (such as blood pressure warnings or MUAC malnutrition staging) within the Nurse Clinical Portal are provided as clinical decision support. Nurses and clinicians remain fully responsible for validating patient vitals prior to medical intervention.
          </p>
        </section>
      </div>
    </div>
  );
}
