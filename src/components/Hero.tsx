// ── TotoAfya Digital — Hero Section ─────────────────────────────
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, easeExpo } from '@/lib/animations'
import { Shield, ArrowRight, Play } from 'lucide-react'

// ── Trust logos ──────────────────────────────────────────────────
const trustLogos = [
  { src: '/Header-2.png',                                        alt: 'Ministry of Health' },
  { src: '/kisii_teaching_and_referral_hospital_logo.jpg',       alt: 'Kisii Teaching & Referral Hospital' },
  { src: '/kisii_university_logo_clean-removebg-preview.png',   alt: 'Kisii University' },
  { src: '/NAKURU_LOGO-removebg-preview.png',                    alt: 'Nakuru County' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-white overflow-hidden flex items-center pt-28 pb-16 md:pt-36 md:pb-24"
      aria-label="Hero section"
    >
      {/* Very subtle ambient glow — top left only */}
      <div
        className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,107,69,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Copy ────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Label */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-50 border border-forest-100 text-forest-700 text-[10px] font-sans font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-forest-600" />
                Enterprise Maternal Health Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-5 font-sans font-extrabold text-[2.75rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight text-gray-900"
            >
              The operating system{' '}
              <span className="text-forest-600">for maternal healthcare.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="mt-5 font-sans text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg"
            >
              From ANC appointments to immunization, AI support, reporting and
              compliance — TotoAfya gives hospitals and county health systems one
              intelligent platform.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm shadow-warm hover:bg-forest-700 active:scale-95 transition-all duration-200 group"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg border border-gray-200 text-gray-700 font-sans font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 active:scale-95 transition-all duration-200"
              >
                <span className="w-7 h-7 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                  <Play className="w-3 h-3 fill-forest-600 ml-0.5" />
                </span>
                Watch 90 sec demo
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div variants={fadeUp} className="mt-10">
              <p className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Trusted by leading healthcare organizations
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {trustLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                  />
                ))}
                <span className="font-sans text-xs font-semibold text-gray-500 border border-gray-200 rounded-full px-3 py-1">
                  County Governments
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard visual ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: easeExpo }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            {/* Dot-grid background panel */}
            <div
              className="absolute inset-0 rounded-3xl dot-grid-bg"
              aria-hidden="true"
              style={{ margin: '-16px -8px -16px 24px' }}
            />

            <div className="relative flex items-end justify-end">

              {/* Dashboard screenshot */}
              <div className="relative z-10 w-full max-w-[620px] ml-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: easeExpo }}
                  className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.14)] border border-gray-200/60"
                >
                  <img
                    src="/ui-mockup-dash.png"
                    alt="TotoAfya facility dashboard"
                    className="w-full h-auto block"
                    loading="eager"
                  />
                </motion.div>

                {/* Mother photo — overlapping bottom-right of dashboard */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.65, ease: easeExpo }}
                  className="absolute -bottom-10 -right-6 sm:-right-10 lg:-right-14 z-20 w-44 sm:w-52 lg:w-60"
                >
                  <img
                    src="/motherchildprofile.png"
                    alt="Mother and child"
                    className="w-full h-auto drop-shadow-[0_12px_32px_rgba(8,45,27,0.18)]"
                    loading="eager"
                  />
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
