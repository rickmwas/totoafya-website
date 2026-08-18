// ── TotoAfya Digital — Download Page ───────────────────────────
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, slideLeft, slideRight, hoverScale, easeExpo } from '@/lib/animations'
import { Smartphone, Globe, Apple, MoreVertical, PlusSquare, Rocket, Calendar, ShieldCheck, Heart, ArrowRight, ChevronDown } from 'lucide-react'
import SmartInstallButton from '@/components/SmartInstallButton'
import SEOHead from '@/components/SEOHead'
import { getBreadcrumbSchema, getSoftwareAppSchema } from '@/lib/seoConfig'

// ── FAQ data ─────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Is TotoAfya free to download?',
    a: 'Yes, TotoAfya Digital is free for mothers and caregivers onboarded by their clinic. Premium features for healthcare facilities and dashboard systems are available on a subscription basis.',
  },
  {
    q: 'Does it work without internet?',
    a: 'Yes. TotoAfya is built offline-first. All data is stored locally and syncs automatically when a network connection is available.',
  },
  {
    q: 'Is our health data secure?',
    a: 'Absolutely. Patient data is encrypted in transit and at rest, complying with Kenya\'s Data Protection Act 2019 and WHO digital health frameworks.',
  },
  {
    q: 'Which languages are supported?',
    a: 'TotoAfya currently supports English, Kiswahili, and Ekegusii. More local languages are coming soon.',
  },
  {
    q: 'Can nurses and facilities use TotoAfya?',
    a: 'Yes. We have a dedicated nurse portal and facility admin dashboard. Contact us for an onboarding consultation.',
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

// ── System requirements ──────────────────────────────────────────
const requirements = [
  { platform: 'Android Client',   req: 'Android 6.0+, 50 MB storage',  icon: <Smartphone className="w-5 h-5 text-forest-600" /> },
  { platform: 'Nurse & Facility Web Portal', req: 'Chrome, Safari, Firefox, Edge (latest)', icon: <Globe className="w-5 h-5 text-forest-600" /> },
  { platform: 'iOS Client',       req: 'Coming soon — iOS 14+',         icon: <Apple className="w-5 h-5 text-forest-600" /> },
]

// ── Main Component ───────────────────────────────────────────────
export default function Download() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const downloadSchemas = [
    getSoftwareAppSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Download', path: '/download' },
    ]),
  ]

  return (
    <div className="pt-16">
      <SEOHead
        title="Download Mother App & Access Clinic Portals"
        description="Download TotoAfya Digital for Android or launch the web PWA. Instant access for mothers, community health workers, and clinical nurses across Kenya."
        keywords={[
          'Download TotoAfya App',
          'TotoAfya Android APK',
          'Maternal care app download Kenya',
          'Nurse portal login',
          'PWA health app Kenya',
        ]}
        canonicalPath="/download"
        jsonLd={downloadSchemas}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="section mesh-bg relative overflow-hidden text-center">
        {/* Curved background line decoration mirroring the hero */}
        <div className="absolute -right-32 -top-16 w-96 h-96 rounded-[100px_350px_100px_350px] border-[3px] border-forest-100/25 rotate-[25deg] pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-48 bottom-12 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] bg-forest-50/30 rotate-[-15deg] pointer-events-none blur-3xl" aria-hidden="true" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container-tight max-w-3xl mx-auto relative z-10"
        >
          <motion.span variants={fadeUp} className="section-label">
            Download TotoAfya Digital
          </motion.span>
          <motion.h1 variants={fadeUp} className="section-heading mt-5 text-5xl lg:text-6xl">
            Get the portals.
            <br />
            <span className="text-forest-600 italic font-medium">Transform maternal care.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mt-5 mx-auto text-center">
            Deploy TotoAfya at your health center. Provide offline-first tools for nurses and caregivers.
          </motion.p>

          {/* ── Download buttons ──────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Google Play — coming soon */}
            <div
              aria-disabled="true"
              title="Android app coming soon"
              className="flex items-center gap-4 px-6 py-3.5 rounded-xl bg-gray-900/40
                         text-white/50 cursor-not-allowed group text-left select-none"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0 opacity-40" aria-hidden="true">
                <path fill="#EA4335" d="M3.18 23.76a2 2 0 001.85-.09l11.93-6.89-3.39-3.39z" />
                <path fill="#FBBC04" d="M20.37 9.37l-2.88-1.66-3.8 3.8 3.8 3.79 2.91-1.68a2.3 2.3 0 000-4.25z" />
                <path fill="#4285F4" d="M.17 1.08A2 2 0 000 1.88v20.23a2 2 0 00.17.8l.08.08L11.49 12l-.08-.08z" />
                <path fill="#34A853" d="M5.03.63L16.96 7.52l-3.39 3.39z" />
              </svg>
              <div className="leading-tight">
                <div className="font-sans text-[10px] text-gray-500 font-bold uppercase tracking-wider">Coming Soon</div>
                <div className="font-sans font-bold text-base mt-0.5 text-white/50">Google Play</div>
              </div>
            </div>

            {/* PWA — Smart Install / Open button */}
            <SmartInstallButton />
          </motion.div>

          {/* Version note */}
          <motion.p variants={fadeUp} className="mt-6 font-sans text-xs text-gray-400 font-medium">
            Latest version: v2.1.0 · Updated June 2026 · Built in partnership with TerraSept Solutions
          </motion.p>
        </motion.div>
      </section>

      {/* ── PWA install guide ─────────────────────────────────── */}
      <section id="pwa-guide" ref={ref} className="section bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <span className="section-label">PWA Install Guide</span>
              <h2 className="section-heading mt-4">
                Add TotoAfya to your{' '}
                <span className="text-forest-600 italic">home screen.</span>
              </h2>
              <p className="section-subheading mt-4">
                Deploy and access the clinical app on your device instantly. The PWA works exactly like
                a native app, with full offline data entry.
              </p>

              {/* Steps with numerical leaf badges */}
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: <Globe className="w-5 h-5 text-forest-600" />,
                    title: 'Open in Browser',
                    desc: 'Visit motherapp.terraseptsolutions.com in Google Chrome or Safari on your phone.',
                  },
                  {
                    icon: <MoreVertical className="w-5 h-5 text-forest-600" />,
                    title: 'Tap the menu',
                    desc: 'Tap the three-dot menu (Android) or the Share icon (iOS) in your browser.',
                  },
                  {
                    icon: <PlusSquare className="w-5 h-5 text-forest-600" />,
                    title: 'Add to Home Screen',
                    desc: 'Select "Add to Home Screen" or "Install App" and tap confirm.',
                  },
                  {
                    icon: <Rocket className="w-5 h-5 text-forest-600" />,
                    title: 'Launch from home screen',
                    desc: 'TotoAfya will appear on your screen like a native app, working fully offline.',
                  },
                ].map((step, i) => (
                  <div key={step.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-[8px_20px_8px_20px] bg-forest-50 border border-forest-100 flex items-center
                                    justify-center flex-shrink-0 text-forest-600 shadow-sm">
                      {step.icon}
                    </div>
                    <div className="leading-tight">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-[10px] font-bold text-forest-400">
                          0{i + 1}
                        </span>
                        <h3 className="font-sans font-bold text-sm text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* System requirements */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
                System Requirements
              </h2>
              <div className="space-y-4">
                {requirements.map((r) => (
                  <motion.div key={r.platform} {...hoverScale} className="card flex items-center gap-4 border border-gray-150 shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center flex-shrink-0 text-forest-600 shadow-sm animate-pulse-soft">
                      {r.icon}
                    </div>
                    <div className="leading-tight">
                      <div className="font-sans font-bold text-sm text-gray-900">
                        {r.platform}
                      </div>
                      <div className="font-sans text-xs text-gray-500 mt-1">{r.req}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What's included shaped as leaf card */}
              <div className="mt-8 p-6 rounded-[20px_80px_20px_80px] bg-forest-900 text-white shadow-warm-lg border border-forest-800 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-earth-500/5 blur-xl rounded-full" />
                </div>
                
                <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2 relative z-10">
                  <ShieldCheck className="w-5 h-5 text-earth-300" />
                  What's included in deployment
                </h3>
                <ul className="space-y-2.5 relative z-10">
                  {[
                    'Clinical growth charts (WHO standards)',
                    'Automated KEPI immunization scheduling',
                    'Digital ANC record registers',
                    '24/7 multilingual patient AI assistant',
                    'Full offline registry data sync',
                    'Facility administrator metrics dashboard',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 font-sans text-xs
                                           text-forest-100 font-semibold uppercase tracking-wide">
                      <Heart className="w-3.5 h-3.5 text-earth-300 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section mesh-bg relative overflow-hidden" aria-labelledby="faq-heading">
        <div className="absolute -right-32 bottom-0 w-96 h-96 rounded-[350px_100px_350px_100px] border-[3px] border-forest-100/20 rotate-[15deg] pointer-events-none" aria-hidden="true" />

        <div className="container-tight max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading" className="section-heading mt-5">
              Common <span className="text-forest-600 italic">questions.</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-sans text-sm text-gray-500 mb-4">
              Looking to deploy TotoAfya at your clinic or county network?
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm shadow-warm hover:bg-forest-700 active:scale-95 transition-all duration-200 group"
            >
              Request Onboarding Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

