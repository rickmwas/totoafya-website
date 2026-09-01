'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  organization: z.string().min(2, 'Please enter your facility or organization name'),
  role: z.enum(['caregiver', 'nurse', 'admin', 'county', 'partner'], {
    errorMap: () => ({ message: 'Please select your role' }),
  }),
  message: z.string().min(15, 'Message must be at least 15 characters'),
});

type ContactFormInput = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="space-y-16 py-12 bg-[#F8FAFA] text-[#102027]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="badge-clinical">Institutional Inquiries & Pilots</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#063B4C] tracking-tight">
            Connect with the <span className="text-[#087EA4]">TerraSept Solutions team.</span>
          </h1>
          <p className="text-base text-[#5E7078] leading-relaxed">
            Whether you represent a dispensary, referral hospital, county health department, or caregiver family — we are ready to assist with your pilot evaluation.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-white border border-[#D4E7EC] p-8 space-y-6">
              <h2 className="text-xl font-bold text-[#063B4C] border-b border-[#EAF6F9] pb-4">
                Office & Contact Channels
              </h2>

              <div className="space-y-5 text-xs text-[#102027]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-[#EAF6F9] border border-[#C4E2EA] flex items-center justify-center text-[#087EA4] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-bold text-[#063B4C] block">Headquarters Location</strong>
                    <span className="text-[#5E7078]">{SITE_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-[#EAF6F9] border border-[#C4E2EA] flex items-center justify-center text-[#087EA4] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-bold text-[#063B4C] block">General & Partnerships Email</strong>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#087EA4] hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-md bg-[#EAF6F9] border border-[#C4E2EA] flex items-center justify-center text-[#087EA4] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-bold text-[#063B4C] block">Telephone & Support Line</strong>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#087EA4] hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#063B4C] text-white p-6 space-y-2 border border-[#084D63]">
              <span className="text-xs font-bold text-[#159A9C] uppercase tracking-wider block">
                Academic & Clinical Incubator
              </span>
              <p className="text-xs text-[#EAF6F9]">
                {SITE_CONFIG.governance.incubator} · Kisii Town, Kisii County, Kenya.
              </p>
            </div>
          </div>

          {/* Right: Contact / Request Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#D4E7EC] p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EAF6F9] text-[#087EA4] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#063B4C]">Request Submitted</h3>
                <p className="text-xs text-[#5E7078] max-w-md mx-auto">
                  Thank you for reaching out to TotoAfya Digital. A clinical partnerships representative will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-md bg-[#087EA4] text-white font-semibold text-xs hover:bg-[#066989]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h2 className="text-xl font-bold text-[#063B4C]">Request a Pilot Demonstration</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#063B4C] mb-1">Full Name</label>
                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="e.g. Dr. Jane Kwamboka"
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#D4E7EC] text-xs focus:border-[#087EA4] focus:outline-none"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 block mt-1">{errors.fullName.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#063B4C] mb-1">Work Email</label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="jane@health.go.ke"
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#D4E7EC] text-xs focus:border-[#087EA4] focus:outline-none"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 block mt-1">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#063B4C] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="+254 700 000 000"
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#D4E7EC] text-xs focus:border-[#087EA4] focus:outline-none"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 block mt-1">{errors.phone.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#063B4C] mb-1">Facility / Organization</label>
                    <input
                      type="text"
                      {...register('organization')}
                      placeholder="e.g. Kisii Level 5 Hospital"
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#D4E7EC] text-xs focus:border-[#087EA4] focus:outline-none"
                    />
                    {errors.organization && (
                      <span className="text-[11px] text-red-600 block mt-1">{errors.organization.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#063B4C] mb-1">Primary Role / Stakeholder Type</label>
                  <select
                    {...register('role')}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D4E7EC] text-xs focus:border-[#087EA4] focus:outline-none bg-white"
                  >
                    <option value="">Select your role...</option>
                    <option value="admin">Facility Lead / Hospital Manager</option>
                    <option value="nurse">Clinical Nurse / CHP Lead</option>
                    <option value="county">County Health Official</option>
                    <option value="partner">Development Partner / NGO</option>
                    <option value="caregiver">Mother / Family Caregiver</option>
                  </select>
                  {errors.role && (
                    <span className="text-[11px] text-red-600 block mt-1">{errors.role.message}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#063B4C] mb-1">Inquiry / Pilot Details</label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    placeholder="Tell us about your facility volume, target region, or evaluation objectives..."
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#D4E7EC] text-xs focus:border-[#087EA4] focus:outline-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-600 block mt-1">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-md bg-[#087EA4] text-white font-semibold text-xs hover:bg-[#066989] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
