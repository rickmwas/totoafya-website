// ── TotoAfya Digital — Hero Section ─────────────────────────────
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, easeExpo } from '@/lib/animations'
import { Shield, ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative bg-white overflow-hidden pt-24 pb-0 md:pt-28"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">

          {/* ── Left: Copy ────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 pb-14 flex flex-col justify-center"
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
              className="mt-5 font-sans font-extrabold text-[2.6rem] sm:text-5xl lg:text-[3.1rem] leading-[1.1] tracking-tight text-gray-900"
            >
              The operating system<br />
              for{' '}
              <span className="text-forest-600">maternal healthcare.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="mt-5 font-sans text-base text-gray-500 leading-relaxed max-w-md"
            >
              From ANC appointments to immunization, AI support, reporting and
              compliance—TotoAfya gives hospitals and county health systems one
              intelligent platform.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-forest-700 text-white font-sans font-bold text-sm hover:bg-forest-800 active:scale-95 transition-all duration-200 group"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg border border-gray-200 text-gray-700 font-sans font-semibold text-sm hover:bg-gray-50 active:scale-95 transition-all duration-200"
              >
                <span className="w-7 h-7 rounded-full border border-forest-200 bg-forest-50 flex items-center justify-center text-forest-600 flex-shrink-0">
                  <Play className="w-3 h-3 fill-forest-600 ml-0.5" />
                </span>
                Watch 90 sec demo
              </a>
            </motion.div>

            {/* Trust logos */}
            <motion.div variants={fadeUp} className="mt-10">
              <p className="font-sans text-xs font-medium text-gray-400 mb-4">
                Trusted by leading healthcare organizations
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <img src="/Header-2.png"           alt="Ministry of Health"    className="h-8 w-auto object-contain" />
                <img src="/kisii_teaching_and_referral_hospital_logo.jpg" alt="Kisii Teaching Hospital" className="h-7 w-auto object-contain" />
                <img src="/kisii_university_logo_clean-removebg-preview.png" alt="Kisii University" className="h-7 w-auto object-contain" />
                <img src="/NAKURU_LOGO-removebg-preview.png" alt="Nakuru County" className="h-7 w-auto object-contain" />
                <span className="font-sans text-[11px] font-semibold text-gray-500 border border-gray-200 rounded-full px-3 py-1 whitespace-nowrap">
                  County Governments
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard screenshot only ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: easeExpo }}
            className="lg:col-span-7"
          >
            <div className="rounded-t-2xl overflow-hidden shadow-[0_-4px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.06)]">
              <img
                src="/ui-mockup-dash.png"
                alt="TotoAfya facility overview dashboard"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
