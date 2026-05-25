// ── TotoAfya Digital — Pricing Page ──────────────────────────────
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, hoverScale, easeExpo, slideLeft, slideRight } from '@/lib/animations'
import { Check, ShieldCheck, Building2, UserCheck, Sparkles, Zap, HelpCircle, PhoneCall, ChevronDown } from 'lucide-react'

// ── FAQs data ────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How does the B2B 90-day free trial work for clinics?',
    a: 'Facilities can sign up for the Free Plan instantly to onboard up to 5 mothers. To test larger volumes, contact our sales team to activate a 90-day trial of our Basic or Premium tiers with zero credit card required.',
  },
  {
    q: 'What happens when a facility reaches its patient quota limit?',
    a: 'When you approach 80% of your patient limit, the facility portal displays a notification warning. Upon reaching 100%, registration of new mothers is locked until you upgrade. Active patients can still be viewed, edited, and tracked normally.',
  },
  {
    q: 'Can we pay using Safaricom M-Pesa?',
    a: 'Yes! Both facility subscriptions and mother premium plans support Safaricom M-Pesa payments (Lipa na M-Pesa STK Push). Facilities can also request invoices for local bank transfers or check payments.',
  },
  {
    q: 'Does TotoAfya support county-wide health department deployments?',
    a: 'Absolutely. We offer custom enterprise licensing for county governments and NGO hospital networks, which includes custom DHIS2 reporting and offline sync setups. Contact partnerships@totoafya.co.ke for details.',
  },
  {
    q: 'Is there a contract or commitment for monthly plans?',
    a: 'No. Subscriptions are billed month-to-month or annually. You can upgrade, downgrade, or cancel your plan at any time directly from your billing portal.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100/80 rounded-2xl bg-white overflow-hidden shadow-sm hover:border-forest-300/40 transition-colors duration-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-forest-50/30 transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="font-sans font-bold text-sm text-gray-900">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-forest-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeExpo }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 border-t border-gray-50">
              <p className="font-sans text-sm text-gray-500 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────
export default function Pricing() {
  const [billingType, setBillingType] = useState<'b2b' | 'b2c'>('b2b')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // B2B Pricing plans
  const b2bPlans = [
    {
      name: 'Free / Trial',
      price: 'KES 0',
      period: 'forever',
      quota: 'Up to 5 patient profiles',
      desc: 'Evaluate the PWA client, digital registry, and basic immunization schedules on a small scale.',
      features: [
        'Single clinic nurse account',
        'Standard ANC care register logs',
        'Basic KEPI immunization tables',
        'Local mock sync backup',
      ],
      cta: 'Start Free Trial',
      link: '/download',
      accent: 'border-gray-150',
      popular: false,
    },
    {
      name: 'Basic Clinic',
      price: 'KES 2,500',
      period: 'month',
      quota: 'Up to 50 patient profiles',
      desc: 'Ideal for independent maternity clinics and community health dispensaries looking to go paperless.',
      features: [
        '2 clinical staff accounts',
        'Automated SMS clinic reminders',
        'Patient files CSV/Excel export',
        'Email & remote chat support',
      ],
      cta: 'Get Started',
      link: '/contact?plan=basic',
      accent: 'border-gray-150',
      popular: false,
    },
    {
      name: 'Premium Care',
      price: 'KES 8,000',
      period: 'month',
      quota: 'Up to 500 patient profiles',
      desc: 'Best for active maternity hospitals and facilities with high patient volumes and advanced analytics needs.',
      features: [
        'Unlimited staff accounts',
        'Advanced dashboard analytics & charts',
        'Custom SMS Sender ID branding',
        '1-hour remote staff onboarding session',
        'Priority phone & email support',
      ],
      cta: 'Onboard Facility',
      link: '/contact?plan=premium',
      accent: 'border-forest-500/60 shadow-warm-lg ring-2 ring-forest-50',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      quota: 'Unlimited patient profiles',
      desc: 'For multi-facility clinic chains, county health departments, and global NGO networks.',
      features: [
        'Unlimited patients & hospitals',
        'Custom DHIS2 / MoH schema export',
        'Onsite training & deployment team',
        'Dedicated server hosting options',
        '24/7 Emergency Support SLA',
      ],
      cta: 'Contact Sales',
      link: '/contact?plan=enterprise',
      accent: 'border-gray-150',
      popular: false,
    },
  ]

  // B2C Pricing plans
  const b2cPlans = [
    {
      name: 'Monthly Plan',
      price: 'KES 150',
      period: 'month',
      quota: '1 Mother Profile',
      desc: 'Affordable monthly subscription for expectant mothers following their trial period expiration.',
      features: [
        '24/7 Swahili & English AI Care Companion',
        'WHO-standard digital growth monitoring',
        'Automated vaccine SMS compliance reminders',
        'Secure data backup for device transfers',
      ],
      cta: 'Subscribe Monthly',
      link: '/download',
      accent: 'border-gray-150',
      popular: false,
    },
    {
      name: 'Annual Protection',
      price: 'KES 1,000',
      period: 'year',
      quota: '1 Mother Profile',
      desc: 'Save 45% with our popular annual plan, ensuring continuous health tracking and support.',
      features: [
        'All Monthly plan features included',
        '45% savings compared to monthly billing',
        'Downloadable health report history PDF',
        'Early access to development milestone trackers',
      ],
      cta: 'Subscribe & Save 45%',
      link: '/download',
      accent: 'border-forest-500/60 shadow-warm-lg ring-2 ring-forest-50',
      popular: true,
    },
  ]

  const activePlans = billingType === 'b2b' ? b2bPlans : b2cPlans

  return (
    <div className="pt-16">
      {/* ── Page Header ────────────────────────────────────────── */}
      <section className="section mesh-bg text-center relative overflow-hidden">
        <div className="absolute -right-32 -top-16 w-96 h-96 rounded-[100px_350px_100px_350px] border-[3px] border-forest-100/25 rotate-[25deg] pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-48 bottom-12 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] bg-forest-50/30 rotate-[-15deg] pointer-events-none blur-3xl" aria-hidden="true" />

        <div className="container-tight max-w-3xl mx-auto relative z-10">
          <span className="section-label">Transparent Plans</span>
          <h1 className="section-heading mt-5">
            Simple, fair
            <span className="text-forest-600 italic"> pricing.</span>
          </h1>
          <p className="section-subheading mt-4 mx-auto text-center">
            Deploy TotoAfya Digital at your clinic to streamline patient logs, or protect your family with our caregiver companion app.
          </p>

          {/* ── Toggle Switch ────────────────────────────────────── */}
          <div className="mt-8 inline-flex p-1 bg-white border border-gray-150 rounded-2xl shadow-sm">
            <button
              onClick={() => setBillingType('b2b')}
              className={`px-6 py-2.5 rounded-xl font-sans font-bold text-xs transition-all duration-200 ${
                billingType === 'b2b'
                  ? 'bg-forest-600 text-white shadow-warm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              For Healthcare Facilities (B2B)
            </button>
            <button
              onClick={() => setBillingType('b2c')}
              className={`px-6 py-2.5 rounded-xl font-sans font-bold text-xs transition-all duration-200 ${
                billingType === 'b2c'
                  ? 'bg-forest-600 text-white shadow-warm'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              For Mothers & Caregivers (B2C)
            </button>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards Grid ─────────────────────────────────── */}
      <section className="section bg-white relative">
        <div className="container-tight">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={billingType}
            className={`grid gap-8 items-stretch ${
              billingType === 'b2b' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'max-w-2xl mx-auto sm:grid-cols-2'
            }`}
          >
            {activePlans.map((plan, index) => (
              <motion.article
                key={plan.name}
                variants={fadeUp}
                custom={index}
                {...hoverScale}
                className={`card relative flex flex-col justify-between overflow-hidden border-2 bg-white ${plan.accent}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-forest-600 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-sm">
                    <Zap className="w-2.5 h-2.5 fill-white stroke-none" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1.5 mb-2 mt-3">
                    <span className="font-sans font-extrabold text-3xl text-gray-900">{plan.price}</span>
                    <span className="font-sans text-xs text-gray-400">/{plan.period}</span>
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-forest-50 text-forest-750 font-sans font-bold text-[10px] uppercase tracking-wider mb-4">
                    {plan.quota}
                  </span>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6 border-b border-gray-100 pb-5">
                    {plan.desc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-gray-700 leading-tight">
                        <div className="w-4 h-4 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-forest-700 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={plan.link}
                  className={`w-full py-3 rounded-xl font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-forest-600 hover:bg-forest-700 text-white shadow-warm'
                      : 'border-2 border-forest-600 hover:bg-forest-50 text-forest-750'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* ── B2B Partnership Callout ─────────────────────────── */}
          {billingType === 'b2b' && (
            <div className="mt-20 max-w-4xl mx-auto rounded-[20px_80px_20px_80px] bg-gradient-to-br from-forest-50/50 to-white border border-forest-100/60 p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="section-label">County & NGO Portals</span>
                <h3 className="font-display font-bold text-xl text-gray-900 mt-3 mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-forest-800" />
                  Large-Scale Deployments
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  We coordinate with county directors of health and maternal program heads to implement centralized dashboards, customize clinic portals, and set up native PC Tauri apps. Contact founder & CTO Erick Mwangi for technical scheduling and pilot project alignments.
                </p>
              </div>
              <Link
                to="/contact?type=partnership"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-forest-600 text-white font-sans font-bold text-xs hover:bg-forest-700 active:scale-95 transition-all shadow-warm shrink-0"
              >
                <PhoneCall className="w-4 h-4" />
                Schedule Consultation
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQs Section ───────────────────────────────────────── */}
      <section ref={ref} className="section bg-[#FDFBF5] border-t border-gray-100 relative overflow-hidden">
        <div className="absolute -right-32 bottom-0 w-96 h-96 rounded-[350px_100px_350px_100px] border-[3px] border-forest-100/20 rotate-[15deg] pointer-events-none" aria-hidden="true" />

        <div className="container-tight max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="section-label">Pricing FAQ</span>
            <h2 className="section-heading mt-5">
              Frequently asked
              <span className="text-forest-600 italic"> questions.</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-3"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
