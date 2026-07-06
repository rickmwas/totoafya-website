// ── TotoAfya Digital — Hero Section (Redesigned) ────────────────
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, slideRight, staggerContainer, easeExpo } from '@/lib/animations'
import { Shield, ArrowRight, Play, Building2, HeartPulse, Stethoscope } from 'lucide-react'

// ── Trust logos ──────────────────────────────────────────────────
const trustLogos = [
  { src: '/Header-2.png',       alt: 'Ministry of Health' },
  { src: '/kisii_teaching_and_referral_hospital_logo.jpg', alt: 'Kisii Teaching & Referral Hospital' },
  { src: '/kisii_university_logo_clean-removebg-preview.png', alt: 'Kisii University' },
  { src: '/NAKURU_LOGO-removebg-preview.png', alt: 'Nakuru County' },
]

// ── Hero Component ──────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-white overflow-hidden flex items-center pt-28 pb-12 md:pt-36 md:pb-20"
      aria-label="Hero section"
    >
      {/* ── Subtle top-left ambient glow ──────────────────────── */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,107,69,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* ── Main content grid ──────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">

          {/* ── Left: Text content ────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Label pill */}
            <motion.div variants={fadeUp} className="flex">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-50 border border-forest-100 text-forest-700 text-[10px] font-sans font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-forest-600" />
                Enterprise Maternal Health Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-5 font-sans font-extrabold text-[2.6rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-tight text-gray-900"
            >
              The operating system{' '}
              <span className="text-forest-600">for maternal</span>{' '}
              <span className="text-forest-600">healthcare.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="mt-5 font-sans text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg"
            >
              From ANC appointments to immunization, AI support, reporting and compliance —
              TotoAfya gives hospitals and county health systems one intelligent platform.
            </motion.p>

            {/* CTA Buttons */}
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
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border border-gray-200 text-gray-700 font-sans font-semibold text-sm hover:border-forest-300 hover:text-forest-700 hover:bg-forest-50 active:scale-95 transition-all duration-200 group"
              >
                <span className="w-7 h-7 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 group-hover:bg-forest-100 transition-colors flex-shrink-0">
                  <Play className="w-3 h-3 fill-forest-600 ml-0.5" />
                </span>
                Watch 90 sec demo
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div variants={fadeUp} className="mt-10">
              <p className="font-sans text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Trusted by leading healthcare organizations
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {trustLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ))}
                <span className="font-sans text-xs font-bold text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                  County Governments
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard visual stack ─────────────────── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            {/* Dot-grid background panel */}
            <div
              className="absolute inset-0 rounded-3xl dot-grid-bg"
              aria-hidden="true"
              style={{ margin: '-12px -8px -12px 16px' }}
            />

            {/* Visual stack container */}
            <div className="relative flex justify-center lg:justify-end">

              {/* ── Layer 1: Main dashboard screenshot ──────────── */}
              <div className="relative z-10 w-full max-w-[640px]">
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: -1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: easeExpo }}
                  className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)] border border-gray-200/60"
                >
                  <img
                    src="/hero-mockup.png"
                    alt="TotoAfya clinic dashboard"
                    className="w-full h-auto block"
                    loading="eager"
                  />
                </motion.div>

                {/* ── Layer 2: Mother photo overlapping ─────────── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.65, ease: easeExpo }}
                  className="absolute -bottom-8 -right-4 sm:-right-8 lg:-right-12 z-20 w-40 sm:w-52 lg:w-60"
                >
                  <img
                    src="/motherchildprofile.png"
                    alt="Mother and Child"
                    className="w-full h-auto drop-shadow-[0_16px_40px_rgba(8,45,27,0.20)]"
                    loading="eager"
                  />
                </motion.div>

                {/* ── Layer 3: Floating phone mockup ────────────── */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.65, ease: easeExpo }}
                  className="hidden lg:block absolute -bottom-4 left-4 xl:left-8 z-20"
                >
                  <div className="relative w-36 h-64 bg-gray-900 rounded-[1.75rem] shadow-[0_24px_60px_rgba(0,0,0,0.35)] border-4 border-gray-800 overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-xl z-10" />
                    {/* Screen */}
                    <div className="absolute inset-0 bg-gradient-to-b from-forest-50 to-white pt-5 overflow-hidden">
                      <div className="px-3 pt-1">
                        <p className="font-sans text-[8px] text-gray-400 font-semibold">Good morning,</p>
                        <p className="font-sans font-bold text-[11px] text-gray-900 mt-0.5">Jane Wanjiku</p>
                        <div className="mt-3 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm">
                          <p className="font-sans text-[7px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Next Appointment</p>
                          <p className="font-sans font-bold text-[9px] text-gray-900">Antenatal Checkup</p>
                          <p className="font-sans text-[7px] text-gray-400 mt-0.5">12 Jul 2025 · 10:00 AM</p>
                          <p className="font-sans text-[7px] text-gray-400">Kisii County Hospital</p>
                          <div className="mt-2 px-2 py-1 bg-forest-600 rounded-lg text-center">
                            <span className="font-sans font-bold text-[7px] text-white">View Appointment</span>
                          </div>
                        </div>
                        <div className="mt-2 bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm">
                          <p className="font-sans text-[7px] font-bold text-gray-400 uppercase tracking-wide mb-1">Pregnancy Progress</p>
                          <p className="font-sans font-bold text-[9px] text-gray-900">24 weeks</p>
                          <div className="mt-1.5 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-[60%] bg-forest-500 rounded-full" />
                          </div>
                          <p className="font-sans text-[7px] text-gray-400 mt-1">60% complete</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ── Floating stat badge: Active Facilities ─────── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.95, duration: 0.5, ease: easeExpo }}
                  className="hidden sm:flex absolute -top-4 left-0 lg:-left-8 items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 z-30 animate-float"
                >
                  <div className="w-9 h-9 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-sans font-extrabold text-sm text-gray-900">156</div>
                    <div className="font-sans text-[10px] font-semibold text-gray-500">Active Facilities</div>
                  </div>
                </motion.div>

                {/* ── Floating stat badge: Immunization Rate ─────── */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5, ease: easeExpo }}
                  className="hidden sm:flex absolute top-1/3 -right-2 lg:-right-10 items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 z-30 animate-float-slow"
                >
                  <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-sans font-extrabold text-sm text-gray-900">98%</div>
                    <div className="font-sans text-[10px] font-semibold text-gray-500">Immunization Rate</div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
