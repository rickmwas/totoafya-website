// ── TotoAfya Digital — Features Section (Bento Grid) ────────────
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, hoverScale } from '@/lib/animations'
import { BarChart3, Syringe, FileText, Sparkles, WifiOff, Globe } from 'lucide-react'

// ── Feature data ─────────────────────────────────────────────────
const smallCards = [
  {
    icon: <BarChart3 className="w-5 h-5 text-forest-700" />,
    iconBg: 'bg-forest-100/70 border-forest-200/60',
    title: 'Clinical Growth Monitoring',
    description: 'Digitize growth tracking with WHO standards. Auto-flag malnourished cases instantly.',
    stat: 'WHO-standardized',
    accent: 'text-forest-700',
  },
  {
    icon: <Syringe className="w-5 h-5 text-earth-700" />,
    iconBg: 'bg-earth-100/70 border-earth-200/60',
    title: 'Immunization Tracker',
    description: 'KEPI-aligned vaccine schedules with automated SMS reminders to caregivers.',
    stat: 'KEPI Schedule Engine',
    accent: 'text-earth-700',
  },
  {
    icon: <FileText className="w-5 h-5 text-coral-600" />,
    iconBg: 'bg-coral-50 border-coral-100/80',
    title: 'Digital ANC Registers',
    description: 'Digitize antenatal care records — vitals, BP, fundal height, and danger signs.',
    stat: 'Structured ANC logs',
    accent: 'text-coral-600',
  },
  {
    icon: <WifiOff className="w-5 h-5 text-earth-700" />,
    iconBg: 'bg-earth-50 border-earth-100/80',
    title: 'Robust Offline Sync',
    description: 'Clinicians manage patient records fully offline; data syncs when connection restores.',
    stat: 'Works without internet',
    accent: 'text-earth-700',
  },
]

// ── Bento: Spotlight Card (AI Companion) ─────────────────────────
function SpotlightCard() {
  return (
    <motion.div
      variants={fadeUp}
      {...hoverScale}
      className="lg:row-span-2 bg-forest-900 rounded-3xl p-7 flex flex-col justify-between
                 shadow-warm-lg border border-forest-800/40 relative overflow-hidden group"
    >
      {/* Glow orb */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-earth-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-forest-500/20 blur-3xl pointer-events-none" />

      {/* Icon */}
      <div>
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-earth-300 mb-6">
          <Sparkles className="w-7 h-7" />
        </div>
        <span className="font-sans text-[10px] font-bold text-forest-400 uppercase tracking-widest">
          AI Patient Companion
        </span>
        <h3 className="font-sans font-extrabold text-white text-2xl mt-3 leading-snug">
          24/7 maternal guidance in{' '}
          <span className="text-earth-300">local languages.</span>
        </h3>
        <p className="font-sans text-sm text-forest-200 mt-4 leading-relaxed">
          Offer mothers round-the-clock access to MoH-compliant maternal advice
          in English and Kiswahili — pre-linked to your facility for clinical escalation.
        </p>
      </div>

      {/* Big number + sub-label */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="flex items-end gap-3">
          <span className="font-sans font-extrabold text-6xl text-white leading-none">24/7</span>
          <span className="font-sans text-sm text-forest-300 mb-1.5 leading-snug">
            Automated<br />companion
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Bento: Small Feature Card ─────────────────────────────────────
function SmallCard({ feature, index }: { feature: typeof smallCards[0]; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      {...hoverScale}
      className="card group cursor-default border border-gray-100 hover:border-forest-200 transition-all duration-300 flex flex-col"
    >
      <div className={`w-11 h-11 mb-4 rounded-xl border flex items-center justify-center ${feature.iconBg} group-hover:scale-105 transition-transform duration-300`}>
        {feature.icon}
      </div>
      <h3 className="font-sans font-bold text-base text-gray-900 mb-2">{feature.title}</h3>
      <p className="font-sans text-sm text-gray-500 leading-relaxed flex-1">{feature.description}</p>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className={`font-sans text-xs font-bold uppercase tracking-wider ${feature.accent}`}>
          {feature.stat}
        </span>
        <svg
          className={`w-4 h-4 ${feature.accent} opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200`}
          viewBox="0 0 16 16" fill="none" aria-hidden="true"
        >
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.article>
  )
}

// ── Main Component ──────────────────────────────────────────────
export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="features"
      className="section bg-gray-50/60 relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      <div className="container-tight relative" ref={ref}>
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Enterprise Features</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            id="features-heading"
            className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-5 tracking-tight leading-tight"
          >
            Streamlined solutions for{' '}
            <span className="text-forest-600">health facilities.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto">
            TotoAfya Digital equips clinical staff and administrators with unified registers,
            automated compliance logic, and robust patient engagement tools.
          </motion.p>
        </motion.div>

        {/* ── Bento grid ─────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
        >
          {/* Spotlight: AI Companion (spans 2 rows on lg) */}
          <SpotlightCard />

          {/* 4 small cards */}
          {smallCards.map((feature, i) => (
            <SmallCard key={feature.title} feature={feature} index={i} />
          ))}

          {/* Full-width dark "Built for East Africa" card */}
          <motion.div
            variants={fadeUp}
            {...hoverScale}
            className="sm:col-span-2 lg:col-span-2 bg-forest-900 rounded-3xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6
                       border border-forest-800/40 relative overflow-hidden"
          >
            <div className="absolute -top-10 right-0 w-64 h-64 rounded-full bg-earth-500/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-earth-300 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-sans text-[10px] font-bold text-forest-400 uppercase tracking-widest">
                Built for East Africa
              </span>
              <h3 className="font-sans font-extrabold text-white text-xl mt-2">
                Available in <span className="text-earth-300">2+ languages</span>
              </h3>
              <p className="font-sans text-sm text-forest-200 mt-2 leading-relaxed max-w-md">
                English, Kiswahili, and local languages — delivering accessible health education to mothers in their own language.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              {['English', 'Kiswahili', 'Local Languages'].map((lang) => (
                <span
                  key={lang}
                  className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-sans font-semibold border border-white/15"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
