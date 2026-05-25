// ── TotoAfya Digital — Features Section ────────────────────────
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, hoverScale } from '@/lib/animations'
import { BarChart3, Syringe, FileText, Sparkles, WifiOff } from 'lucide-react'

// ── Feature data ────────────────────────────────────────────────
const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-forest-700" />,
    title: 'Clinical Growth Monitoring',
    description:
      'Digitize growth tracking. Log weight, height, and MUAC, and auto-evaluate against WHO standards with instant indicators to flag malnourished cases early.',
    color: 'bg-forest-100/70 border border-forest-200/50',
    border: 'hover:border-forest-300/80',
    accent: 'text-forest-700',
    stat: 'Standardized WHO charts',
  },
  {
    icon: <Syringe className="w-6 h-6 text-earth-700" />,
    title: 'Immunization Tracker',
    description:
      'Aligned with Kenya\'s KEPI schedule. Automatically calculates vaccine due dates for registered children and triggers automated SMS notifications to caregivers.',
    color: 'bg-earth-100/70 border border-earth-200/50',
    border: 'hover:border-earth-300/80',
    accent: 'text-earth-700',
    stat: 'KEPI Schedule Engine',
  },
  {
    icon: <FileText className="w-6 h-6 text-coral-600" />,
    title: 'Digital ANC Registers',
    description:
      'Digitize antenatal care records. Log patient vitals, blood pressure, fundal height, and danger signs, replacing slow paper booklets.',
    color: 'bg-coral-50 border border-coral-100/80',
    border: 'hover:border-coral-300/80',
    accent: 'text-coral-600',
    stat: 'Structured ANC logs',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-forest-700" />,
    title: 'AI Patient Companion',
    description:
      'Offer mothers 24/7 access to trusted, MoH-compliant maternal advice in English and Kiswahili, pre-linked to your facility for clinical escalation.',
    color: 'bg-forest-50 border border-forest-100/80',
    border: 'hover:border-forest-300/80',
    accent: 'text-forest-700',
    stat: '24/7 automated companion',
  },
  {
    icon: <WifiOff className="w-6 h-6 text-earth-700" />,
    title: 'Robust Offline Sync',
    description:
      'Built for connectivity realities. Clinicians can manage patient records fully offline; data automatically synchronizes once connection is restored.',
    color: 'bg-earth-50 border border-earth-100/80',
    border: 'hover:border-earth-300/80',
    accent: 'text-earth-700',
    stat: 'Works without internet',
  },
]

// ── Feature Card ────────────────────────────────────────────────
interface FeatureCardProps {
  feature: typeof features[0]
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      {...hoverScale}
      className={`card group cursor-default border-2 border-transparent
                  ${feature.border} transition-all duration-300 flex flex-col snap-start shrink-0 w-[290px] sm:w-auto`}
    >
      {/* Icon with asymmetric leaf curves */}
      <div className={`w-14 h-14 mb-5 rounded-[8px_20px_8px_20px] ${feature.color} 
                       group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-lg text-gray-900 mb-2.5">
        {feature.title}
      </h3>
      <p className="font-sans text-sm text-gray-500 leading-relaxed flex-1">
        {feature.description}
      </p>

      {/* Stat pill */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className={`font-sans text-xs font-bold uppercase tracking-wider ${feature.accent}`}>
          {feature.stat}
        </span>
        <svg
          className={`w-4 h-4 ${feature.accent} opacity-0 group-hover:opacity-100
                      translate-x-0 group-hover:translate-x-1 transition-all duration-200`}
          viewBox="0 0 16 16" fill="none"
          aria-hidden="true"
        >
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
      className="section bg-white relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* ── Background decoration ────────────────────────────── */}
      <div className="absolute -right-32 -top-16 w-96 h-96 rounded-[100px_350px_100px_350px] border-[3px] border-forest-100/25 rotate-[25deg] pointer-events-none" aria-hidden="true" />
      <div className="absolute -left-48 -bottom-12 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] bg-forest-50/30 rotate-[-15deg] pointer-events-none blur-3xl" aria-hidden="true" />

      <div className="container-tight relative" ref={ref}>
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Enterprise Features</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            id="features-heading"
            className="section-heading mt-5"
          >
            Streamlined solutions for
            <span className="text-forest-600 italic font-black"> health facilities.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto">
            TotoAfya Digital equips clinical staff and administrators with unified registers,
            automated compliance logic, and robust patient engagement tools.
          </motion.p>
        </motion.div>

        {/* ── Cards grid ─────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}

          {/* ── Promo card shaped as a leaf ─────────────────── */}
          <motion.div
            variants={fadeUp}
            {...hoverScale}
            className="card bg-gradient-to-br from-forest-600 to-forest-800 text-white
                       border border-forest-500/20 rounded-[20px_100px_20px_100px] flex flex-col justify-between shadow-warm-lg snap-start shrink-0 w-[290px] sm:w-auto"
          >
            <div>
              <span className="font-sans text-[10px] font-bold text-forest-200
                               uppercase tracking-widest">
                Built for East Africa
              </span>
              <h3 className="font-display font-bold text-2xl mt-2.5 leading-snug">
                Available in{' '}
                <span className="text-earth-300 italic">2+ languages</span>
              </h3>
              <p className="font-sans text-sm text-forest-100 mt-3 leading-relaxed">
                English, Kiswahili, local languagees— ensuring clinics can deliver
                accessible, local language health education to mothers.
              </p>
            </div>
            <div className="mt-8 flex gap-2 flex-wrap">
              {['English', 'Kiswahili', 'Local Languages'].map((lang) => (
                <span key={lang}
                  className="px-3.5 py-1 rounded-full bg-white/10 text-white
                             text-[11px] font-sans font-semibold border border-white/20">
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

