// ── TotoAfya Digital — CTA Section (Cinematic Gradient) ─────────
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, hoverScale } from '@/lib/animations'
import { Calendar, Building2, ShieldCheck, WifiOff, Heart, ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="partner"
      className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #082d1b 0%, #0f4128 35%, #155736 65%, #1A6B45 100%)',
      }}
      aria-labelledby="cta-heading"
      ref={ref}
    >
      {/* ── Decorative background elements ───────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Amber center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-earth-500/15 blur-[120px] rounded-full" />
        {/* Ghost big number */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 font-sans font-extrabold text-[200px] leading-none text-white/[0.04] select-none"
          aria-hidden="true"
        >
          50+
        </div>
        {/* Dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
        {/* Curved outlines */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-[100px_350px_100px_350px] border border-white/8 rotate-[20deg]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] border border-white/5 rotate-[-15deg]" />
      </div>

      <div className="container-tight relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Urgency pill */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-forest-100 text-[10px] font-sans font-bold uppercase tracking-wider border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-earth-400 animate-pulse" />
              Partner with Us · Now onboarding new facilities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            id="cta-heading"
            className="mt-6 font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight"
          >
            Join 50+ facilities{' '}
            <span className="text-earth-300">modernizing</span>{' '}
            maternal care in Kenya.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-sans text-base text-forest-100 leading-relaxed max-w-xl mx-auto"
          >
            Digitize your clinic's registers, automate vaccination compliance, and empower mothers
            with MoH-aligned guidance. Get in touch to schedule a custom integration demo.
          </motion.p>

          {/* ── CTA Buttons ─────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              {...hoverScale}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-gray-900 shadow-lg font-sans font-bold text-left group hover:bg-gray-50 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-forest-50 flex items-center justify-center text-forest-600 flex-shrink-0">
                <Calendar className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Schedule with us</div>
                <div className="text-sm font-bold text-gray-900 mt-0.5">Partner With Us</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/download"
              {...hoverScale}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-forest-700/60 text-white border border-forest-600/50 shadow-md font-sans font-bold text-left hover:bg-forest-700 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                <Building2 className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] text-forest-200 font-semibold uppercase tracking-wider">View portals</div>
                <div className="text-sm font-bold text-white mt-0.5">Client Downloads</div>
              </div>
            </Link>
          </motion.div>

          {/* Note pills */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-3 justify-center"
          >
            {[
              { text: 'MoH & HIPAA Aligned', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
              { text: 'Works Fully Offline',  icon: <WifiOff className="w-3.5 h-3.5" /> },
              { text: 'Kiswahili & English',  icon: <Heart className="w-3.5 h-3.5" /> },
            ].map((n) => (
              <span
                key={n.text}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/8 border border-white/10 text-forest-200 text-[10px] font-sans font-bold uppercase tracking-wider"
              >
                {n.icon}
                {n.text}
              </span>
            ))}
          </motion.div>

          {/* Bottom divider */}
          <motion.div variants={fadeUp} className="mt-12 pt-12 border-t border-white/10">
            <p className="font-sans text-xs sm:text-sm text-forest-200 mb-4">
              Need direct integration with your county health system or private hospital network?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="mailto:partnerships@totoafya.co.ke"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/8 border border-white/10 text-white font-sans font-semibold text-xs hover:bg-white/15 active:scale-95 transition-all duration-200"
              >
                Contact Partnerships
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-forest-200 font-sans font-semibold text-xs hover:text-white transition-colors duration-200"
              >
                Learn about us
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
