// ── TotoAfya Digital — App Showcase Section ─────────────────────
// Matches the second reference screenshot: clinic dashboard + mother + phone
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, easeExpo } from '@/lib/animations'
import { ArrowRight } from 'lucide-react'

export default function AppShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="app-showcase"
      className="py-20 bg-white overflow-hidden"
      aria-labelledby="showcase-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Platform Preview</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            id="showcase-heading"
            className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-5 tracking-tight leading-tight"
          >
            Built for clinicians.{' '}
            <span className="text-forest-600">Loved by mothers.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto">
            One platform for your entire facility — from the admin dashboard to the mother's
            pocket companion. Works online and offline.
          </motion.p>
        </motion.div>

        {/* ── Visual composition ─────────────────────────────────── */}
        <div className="relative">

          {/* Background tint */}
          <div
            className="absolute inset-0 rounded-3xl dot-grid-bg opacity-60"
            aria-hidden="true"
            style={{ margin: '0 -16px' }}
          />

          <div className="relative grid lg:grid-cols-12 gap-8 items-end py-10 lg:py-16 px-4 lg:px-10">

            {/* ── Dashboard screenshot ─────────────────────────── */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: easeExpo }}
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.14)] border border-gray-200/70">
                <img
                  src="/ui-mockup-dash.png"
                  alt="TotoAfya clinic facility dashboard"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* ── Right side: clinic photo + phone ────────────── */}
            <div className="lg:col-span-5 flex items-end justify-center lg:justify-start gap-6 relative">

              {/* Clinic photo */}
              <motion.div
                className="relative z-10 flex-1"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.7, ease: easeExpo }}
              >
                <img
                  src="/shot_4_clinic.png"
                  alt="TotoAfya in a clinic setting"
                  className="w-full h-auto rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                  loading="lazy"
                />
              </motion.div>

              {/* Phone frame */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65, duration: 0.7, ease: easeExpo }}
                className="relative z-20 flex-shrink-0"
              >
                <div className="relative w-32 h-60 bg-gray-900 rounded-[1.75rem] shadow-[0_24px_64px_rgba(0,0,0,0.30)] border-4 border-gray-800 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-gray-900 rounded-b-xl z-10" />
                  <div className="absolute inset-0 bg-white pt-5">
                    <div className="px-2.5 pt-1">
                      <div className="bg-forest-600 rounded-xl p-2.5">
                        <p className="font-sans text-[7px] font-bold text-forest-200 uppercase tracking-widest mb-1">Habari,</p>
                        <p className="font-sans font-bold text-[10px] text-white">Mama Akinyi 👋</p>
                        <p className="font-sans text-[7px] text-forest-200 mt-0.5">We are here for you</p>
                      </div>
                      <div className="mt-2 bg-white rounded-xl p-2 border border-gray-100 shadow-sm">
                        <p className="font-sans text-[6px] font-bold text-gray-400 uppercase tracking-wide">Next Appointment</p>
                        <p className="font-sans font-bold text-[8px] text-gray-900 mt-0.5">ANC Follow-up</p>
                        <p className="font-sans text-[6px] text-gray-400">Wed, 22 May · 10:00 AM</p>
                        <div className="mt-1.5 px-2 py-1 bg-forest-600 rounded-md text-center">
                          <span className="font-sans font-bold text-[6px] text-white">Get Directions</span>
                        </div>
                      </div>
                      <div className="mt-2 bg-white rounded-xl p-2 border border-gray-100 shadow-sm">
                        <p className="font-sans text-[6px] font-bold text-gray-400 uppercase tracking-wide">Pregnancy Progress</p>
                        <p className="font-sans font-bold text-[8px] text-gray-900 mt-0.5">24 weeks</p>
                        <div className="mt-1 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[60%] bg-forest-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm shadow-warm hover:bg-forest-700 active:scale-95 transition-all duration-200 group"
          >
            Partner With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
