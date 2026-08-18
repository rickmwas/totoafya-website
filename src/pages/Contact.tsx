// ── TotoAfya Digital — Contact Page ────────────────────────────
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer, slideLeft, slideRight, hoverScale } from '@/lib/animations'
import type { ContactFormData } from '@/types'
import { MapPin, Mail, Phone, Clock, Building2, CheckCircle, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { getBreadcrumbSchema, getOrganizationSchema } from '@/lib/seoConfig'

// ── Validation schema ────────────────────────────────────────────
const schema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name')
    .max(80, 'Name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  role: z.enum(['mother', 'nurse', 'admin', 'other'], {
    errorMap: () => ({ message: 'Please select your role' }),
  }),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message is too long'),
})

// ── Form field wrapper ───────────────────────────────────────────
function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block font-sans text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
        {label}
        {required && <span className="text-coral-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-2 font-sans text-xs text-coral-500 flex items-center gap-1.5 font-semibold">
          <svg viewBox="0 0 12 12" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
            <path d="M6 2a4 4 0 100 8A4 4 0 006 2zM5.5 4.5h1v2h-1V4.5zm0 3h1v1h-1v-1z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

// ── Contact info items ───────────────────────────────────────────
const contactInfo = [
  { icon: <MapPin className="w-5 h-5 text-forest-600" />, label: 'Address', value: 'Kisii Town, Kisii County, Kenya' },
  { icon: <Mail className="w-5 h-5 text-forest-600" />, label: 'Email', value: 'hello@totoafya.co.ke' },
  { icon: <Phone className="w-5 h-5 text-forest-600" />, label: 'Phone', value: '+254 113 242 983' },
  { icon: <Clock className="w-5 h-5 text-forest-600" />, label: 'Hours', value: 'Mon – Fri, 8 AM – 6 PM EAT' },
]

// ── Main Component ───────────────────────────────────────────────
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const formRef = useRef(null)
  const inView = useInView(formRef, { once: true, margin: '-80px' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) })

  // ── Form submission handler ──────────────────────────────────
  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true)
    setServerError(null)

    try {
      // ── MOCK: simulate network delay ─────────────────────────
      await new Promise((r) => setTimeout(r, 1200))
      console.log('Form submission:', data)

      setSubmitted(true)
      reset()
    } catch (err) {
      setServerError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="pt-16">

      {/* ── Page header ─────────────────────────────────────── */}
      <section className="section mesh-bg text-center relative overflow-hidden">
        {/* Curved background line decoration mirroring the hero */}
        <div className="absolute -right-32 -top-16 w-96 h-96 rounded-[100px_350px_100px_350px] border-[3px] border-forest-100/25 rotate-[25deg] pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-48 bottom-12 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] bg-forest-50/30 rotate-[-15deg] pointer-events-none blur-3xl" aria-hidden="true" />

        <div className="container-tight max-w-2xl mx-auto relative z-10">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-heading mt-5">
            We'd love to
            <span className="text-forest-600 italic"> hear from you.</span>
          </h1>
          <p className="section-subheading mt-4 mx-auto text-center">
            Whether you're a healthcare administrator, county health officer, clinical nurse, or
            caregiver — our team is here to support your facility's digitalization goals.
          </p>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────── */}
      <section ref={formRef} className="section bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* ── Left: Contact info ─────────────────────────── */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="lg:col-span-2"
            >
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                Contact information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-[8px_20px_8px_20px] bg-forest-50 border border-forest-100 flex items-center
                                    justify-center flex-shrink-0 shadow-sm text-forest-600">
                      {c.icon}
                    </div>
                    <div className="leading-tight">
                      <div className="font-sans text-[10px] font-bold text-gray-400
                                      uppercase tracking-wider">
                        {c.label}
                      </div>
                      <div className="font-sans text-sm text-gray-800 mt-1 font-semibold">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Partnership / B2B note shaped as a leaf */}
              <div className="mt-10 p-6 rounded-[20px_80px_20px_80px] bg-forest-50 border border-forest-100/60 shadow-md">
                <h3 className="font-display font-bold text-base text-forest-800 mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-forest-800" />
                  Facility Partnerships
                </h3>
                <p className="font-sans text-sm text-forest-700 leading-relaxed">
                  Looking to integrate TotoAfya Digital with your clinic or county health system?
                  We offer custom deployment and training for facilities of all sizes.
                </p>
                <a
                  href="mailto:partnerships@totoafya.co.ke"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-xs mt-5 shadow-warm hover:bg-forest-700 active:scale-95 transition-all duration-200"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Partnership Enquiry
                </a>
              </div>
            </motion.div>

            {/* ── Right: Contact form ────────────────────────── */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="lg:col-span-3"
            >
              {submitted ? (
                /* ── Success state ────────────────────────────── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card text-center py-16 flex flex-col items-center justify-center border border-gray-100 shadow-card-lg"
                >
                  <CheckCircle className="w-12 h-12 text-forest-600 mb-4" />
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                    Message received!
                  </h3>
                  <p className="font-sans text-sm text-gray-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you within
                    24 hours on working days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-forest-600 text-forest-750 font-sans font-semibold text-xs mt-6 hover:bg-forest-50 active:scale-95 transition-all duration-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ─────────────────────────────────────── */
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="card space-y-5 border border-gray-100 hover:border-forest-300/40 shadow-card-lg transition-all duration-300"
                  aria-label="Contact form"
                >
                  <h2 className="font-display font-bold text-xl text-gray-900 mb-2">
                    Send us a message
                  </h2>

                  {/* Row: name + email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" error={errors.fullName?.message} required>
                      <input
                        {...register('fullName')}
                        type="text"
                        autoComplete="name"
                        placeholder="Grace Otieno"
                        className={`input-field ${errors.fullName ? 'input-error' : ''}`}
                      />
                    </Field>
                    <Field label="Email Address" error={errors.email?.message} required>
                      <input
                        {...register('email')}
                        type="email"
                        autoComplete="email"
                        placeholder="grace@example.com"
                        className={`input-field ${errors.email ? 'input-error' : ''}`}
                      />
                    </Field>
                  </div>

                  {/* Role select */}
                  <Field label="I am a..." error={errors.role?.message} required>
                    <select
                      {...register('role')}
                      className={`input-field ${errors.role ? 'input-error' : ''}`}
                    >
                      <option value="">Select your role</option>
                      <option value="mother">Mother / Caregiver</option>
                      <option value="nurse">Nurse / CHW</option>
                      <option value="admin">Facility Administrator</option>
                      <option value="other">Other</option>
                    </select>
                  </Field>

                  {/* Message */}
                  <Field label="Message" error={errors.message?.message} required>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                    />
                  </Field>

                  {/* Server error */}
                  {serverError && (
                    <div className="p-3 rounded-xl bg-coral-50 border border-coral-200
                                    text-coral-700 font-sans text-sm font-semibold">
                      {serverError}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    {...hoverScale}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm shadow-warm hover:bg-forest-700 disabled:opacity-60 disabled:cursor-not-allowed w-full transition-all duration-200"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>

                  <p className="font-sans text-[10px] text-gray-400 text-center mt-4">
                    By submitting this form you agree to our{' '}
                    <a href="#" className="text-forest-600 hover:underline font-semibold">Privacy Policy</a>.
                    We never share your data.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

