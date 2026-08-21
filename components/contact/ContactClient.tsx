'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, Clock, CheckCircle2, ArrowRight, Building2, HelpCircle } from 'lucide-react';
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

export default function ContactClient() {
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

  const onSubmit = async (data: ContactFormInput) => {
    setLoading(true);
    console.log('Contact form payload:', data);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="badge-trust">Institutional Contact & Inquiries</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Connect with the{' '}
            <span className="font-serif italic text-emerald-800">TerraSept Solutions team.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Whether you represent a dispensary, referral hospital, county health department, development partner, or caregiver family — our technical team is ready to assist with your pilot evaluation and system integration.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Office & Contact Channels
              </h2>

              <div className="space-y-5 text-xs text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-semibold text-slate-900 block">Headquarters Location</strong>
                    <span className="text-slate-600">{SITE_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-semibold text-slate-900 block">General & Partnerships Email</strong>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-800 hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-semibold text-slate-900 block">Telephone & Support Line</strong>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-emerald-800 hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="font-semibold text-slate-900 block">Operating Hours</strong>
                    <span className="text-slate-600">Mon – Fri: 8:00 AM – 5:00 PM EAT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Executive Pilot Consultations</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                For county directors of health and development partner organizations, email project lead Erick Mwangi directly at{' '}
                <a href={`mailto:${SITE_CONFIG.partnershipsEmail}`} className="text-emerald-400 underline">
                  {SITE_CONFIG.partnershipsEmail}
                </a>.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out to TerraSept Solutions. A member of our technical team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                    Send an Institutional Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('fullName')}
                        type="text"
                        placeholder="Grace Otieno"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="grace@example.co.ke"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="+254 712 345 678"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Facility / Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register('organization')}
                        type="text"
                        placeholder="Kisii Level 5 Maternity Ward"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                      />
                      {errors.organization && (
                        <p className="text-[11px] text-red-600">{errors.organization.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Primary Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('role')}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                    >
                      <option value="">Select your role...</option>
                      <option value="caregiver">Mother / Caregiver</option>
                      <option value="nurse">Clinical Nurse / CHV</option>
                      <option value="admin">Facility Administrator</option>
                      <option value="county">County Director / Ministry Official</option>
                      <option value="partner">NGO / Development Partner</option>
                    </select>
                    {errors.role && (
                      <p className="text-[11px] text-red-600">{errors.role.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Message / Inquiry <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Please detail your pilot requirements, facility size, or questions..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none resize-none"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional FAQ Section for Content Depth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 pt-16 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Pilot Onboarding & Consultation Details</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Contact Questions</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Before submitting your inquiry, review these standard response guidelines for health facilities, county directors, and development partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900">What is the response timeframe for pilot inquiries?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our technical deployment team reviews all facility and county inquiries within 24 business hours. Formal pilot consultations include hardware assessment and staff onboarding timetables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900">Can rural dispensaries request onsite training?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Yes. For Premium Facility and County Enterprise tiers, TerraSept Solutions conducts onsite clinical nurse and Community Health Volunteer (CHV) training sessions tailored to local facility workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
