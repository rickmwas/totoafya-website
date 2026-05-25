// ── TotoAfya Digital — How It Works Section ────────────────────
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, slideRight, staggerContainer, hoverScale, easeExpo } from '@/lib/animations'
import { Building2, UserCheck, Activity, Sparkles, Syringe, Calendar, Check, Bell, ArrowRight } from 'lucide-react'

// ── Step data ────────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    icon: <Building2 className="w-5 h-5 text-white" />,
    title: 'Register Your Facility',
    description:
      'Set up your clinic, hospital, or county dashboard on TotoAfya to secure your dedicated B2B portal, configure vaccine schedules, and manage departments.',
    color: 'bg-forest-600',
    light: 'bg-forest-50',
  },
  {
    number: '02',
    icon: <UserCheck className="w-5 h-5 text-white" />,
    title: 'Integrate Clinical Staff',
    description:
      'Train and log in nurses or community health workers (CHWs). Empower them to digitize ANC visits, record nutritional measurements, and manage schedules.',
    color: 'bg-earth-500',
    light: 'bg-earth-50',
  },
  {
    number: '03',
    icon: <Activity className="w-5 h-5 text-white" />,
    title: 'Onboard Mother Profiles',
    description:
      'Register mothers and children at the point of care in under 2 minutes. The system auto-generates their KEPI schedule and matches maternal care protocols.',
    color: 'bg-coral-400',
    light: 'bg-coral-50',
  },
  {
    number: '04',
    icon: <Sparkles className="w-5 h-5 text-white" />,
    title: 'Monitor & Support Remotely',
    description:
      'Track immunization rates in real-time, send automated SMS clinic reminders, and let mothers access 24/7 AI-guided support connected to your facility.',
    color: 'bg-forest-700',
    light: 'bg-forest-50',
  },
]

// ── Step Item ────────────────────────────────────────────────────
interface StepItemProps {
  step: typeof steps[0]
  index: number
  total: number
}

function StepItem({ step, index, total }: StepItemProps) {
  const isLast = index === total - 1

  return (
    <motion.div variants={fadeUp} className="relative flex gap-5">
      {/* ── Number + connector line ──────────────────────────── */}
      <div className="flex flex-col items-center">
        {/* Leaf-shaped icon container */}
        <div
          className={`w-12 h-12 rounded-[8px_20px_8px_20px] ${step.color} flex items-center justify-center
                      flex-shrink-0 shadow-md z-10 relative`}
        >
          {step.icon}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-gray-200 to-transparent
                          min-h-[2.5rem]" aria-hidden="true" />
        )}
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className={`pb-${isLast ? '0' : '8'} flex-1 min-w-0`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Phase {step.number}
          </span>
        </div>
        <h3 className="font-display font-bold text-lg text-gray-900 leading-snug">
          {step.title}
        </h3>
        <p className="font-sans text-sm text-gray-500 leading-relaxed mt-1.5">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

// ── Phone Mockup ─────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Glow behind phone */}
      <div className="absolute w-64 h-64 bg-forest-100/50 rounded-full blur-3xl"
        aria-hidden="true" />

      {/* Phone frame */}
      <div className="relative w-64 h-[32rem] bg-gray-900 rounded-[2.5rem] shadow-2xl
                      border-4 border-gray-800 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6
                        bg-gray-900 rounded-b-2xl z-10" aria-hidden="true" />

        {/* Screen content (stylized app UI) */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-50 to-white pt-8">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 py-2">
            <span className="font-sans text-xs text-gray-600">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2.5 bg-forest-600 rounded-sm" />
            </div>
          </div>

          {/* App header */}
          <div className="px-5 pt-2 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wider">Good morning,</p>
                <p className="font-display font-bold text-base text-gray-900 mt-0.5">Mama Aisha</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-forest-100 overflow-hidden border border-forest-200">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {[
                { label: 'Next visit', value: 'Tomorrow', color: 'bg-forest-600' },
                { label: 'Vaccines due', value: '1 due', color: 'bg-earth-500' },
              ].map((s) => (
                <div key={s.label} className="bg-white/95 rounded-xl p-3 border border-gray-100 shadow-sm leading-tight">
                  <div className={`w-2.5 h-2.5 rounded-full ${s.color} mb-2`} />
                  <p className="font-sans text-[9px] font-semibold text-gray-400 uppercase tracking-wider">{s.label}</p>
                  <p className="font-sans font-bold text-xs text-gray-900 mt-1">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Growth chart stub */}
            <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm mb-3">
              <p className="font-sans text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-2">
                Amina's Growth
              </p>
              <div className="flex items-end gap-1 h-12">
                {[40, 55, 48, 70, 65, 80, 75, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-forest-100"
                    style={{ height: `${h}%` }}
                    aria-hidden="true"
                  >
                    {i === 7 && (
                      <div className="w-full h-full bg-forest-600 rounded-t-sm" />
                    )}
                  </div>
                ))}
              </div>
              <p className="font-sans text-[10px] text-forest-700 mt-2 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-forest-600 stroke-[3]" /> On track — 7.2 kg
              </p>
            </div>

            {/* AI chat preview */}
            <div className="bg-forest-600 rounded-xl p-3 shadow-md border border-forest-500/20">
              <p className="font-sans text-[9px] font-bold text-forest-200 uppercase tracking-widest mb-2">AI Health Companion</p>
              <div className="bg-white/10 rounded-lg p-2">
                <p className="font-sans text-[10px] text-white/80">
                  "When should I introduce solids?"
                </p>
              </div>
              <div className="bg-white rounded-lg p-2 mt-2">
                <p className="font-sans text-[10px] text-gray-700 leading-normal">
                  At 6 months, start with soft purees like mashed banana or sweet potato...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification styled exactly like StatBadge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -right-6 top-16 bg-white/95 backdrop-blur-xs rounded-2xl shadow-card-lg
                   border border-gray-100 px-4 py-3 min-w-max z-20"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-earth-50 border border-earth-100 flex items-center justify-center flex-shrink-0 text-earth-600">
            <Bell className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="leading-tight">
            <p className="font-sans font-bold text-xs text-gray-900">Vaccine Alert</p>
            <p className="font-sans text-[10px] font-semibold text-earth-600 mt-0.5">OPV due in 3 days</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ── Main Component ──────────────────────────────────────────────
export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="how-it-works"
      className="section mesh-bg relative overflow-hidden"
      aria-labelledby="how-heading"
      ref={ref}
    >
      {/* Curved background line decoration mirroring the hero */}
      <div className="absolute -left-32 -top-16 w-96 h-96 rounded-[350px_100px_350px_100px] border-[3px] border-forest-100/20 rotate-[-15deg] pointer-events-none" aria-hidden="true" />

      <div className="container-tight">
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Onboarding Process</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            id="how-heading"
            className="section-heading mt-5"
          >
            Platform integration in
            <span className="text-forest-600 italic"> 4 simple phases.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto">
            How we partner with clinics and health departments to coordinate and deliver maternal care.
          </motion.p>
        </motion.div>

        {/* ── Split layout: steps + mockup ─────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Steps ──────────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-0"
          >
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} total={steps.length} />
            ))}

            {/* CTA at bottom of steps */}
            <motion.div variants={fadeUp} className="pt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm shadow-warm hover:bg-forest-700 active:scale-95 transition-all duration-200 group"
              >
                Schedule Onboarding Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Phone mockup ─────────────────────────────────── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center lg:justify-end lg:sticky lg:top-24"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
