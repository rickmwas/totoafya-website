// ── TotoAfya Digital — How It Works Section (Dark redesign) ─────
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer, easeExpo } from '@/lib/animations'
import { Building2, UserCheck, Activity, Sparkles, ArrowRight, Bell } from 'lucide-react'

// ── Step data ────────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    icon: <Building2 className="w-5 h-5 text-white" />,
    iconBg: 'bg-forest-500',
    title: 'Register Your Facility',
    description:
      'Set up your clinic, hospital, or county dashboard on TotoAfya to secure your B2B portal, configure vaccine schedules, and manage departments.',
  },
  {
    number: '02',
    icon: <UserCheck className="w-5 h-5 text-white" />,
    iconBg: 'bg-earth-500',
    title: 'Integrate Clinical Staff',
    description:
      'Train and log in nurses or community health workers. Empower them to digitize ANC visits, record nutritional measurements, and manage schedules.',
  },
  {
    number: '03',
    icon: <Activity className="w-5 h-5 text-white" />,
    iconBg: 'bg-coral-400',
    title: 'Onboard Mother Profiles',
    description:
      'Register mothers and children at the point of care in under 2 minutes. The system auto-generates their KEPI schedule and matches maternal care protocols.',
  },
  {
    number: '04',
    icon: <Sparkles className="w-5 h-5 text-white" />,
    iconBg: 'bg-forest-600',
    title: 'Monitor & Support Remotely',
    description:
      'Track immunization rates in real-time, send automated SMS clinic reminders, and let mothers access 24/7 AI-guided support connected to your facility.',
  },
]

// ── Step Item ────────────────────────────────────────────────────
function StepItem({ step, index, total, inView }: { step: typeof steps[0]; index: number; total: number; inView: boolean }) {
  const isLast = index === total - 1

  return (
    <motion.div
      variants={fadeUp}
      className="relative flex gap-5 group"
    >
      {/* Number column */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Ghost big number behind icon */}
        <div className="relative">
          <span
            className="absolute -top-2 -left-3 font-sans font-extrabold text-6xl text-white/5 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <div className={`w-11 h-11 rounded-[10px_20px_10px_20px] ${step.iconBg} flex items-center justify-center flex-shrink-0 shadow-md z-10 relative group-hover:scale-110 transition-transform duration-300`}>
            {step.icon}
          </div>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-white/20 to-transparent min-h-[2rem]" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className={`${isLast ? 'pb-0' : 'pb-8'} flex-1 min-w-0`}>
        <span className="font-sans text-[10px] font-bold text-forest-400 uppercase tracking-widest">
          Phase {step.number}
        </span>
        <h3 className="font-sans font-bold text-lg text-white leading-snug mt-1">{step.title}</h3>
        <p className="font-sans text-sm text-forest-200 leading-relaxed mt-1.5">{step.description}</p>
      </div>
    </motion.div>
  )
}

// ── Dashboard panel (right side, replaces phone mockup) ──────────
function DashboardPanel({ inView }: { inView: boolean }) {
  return (
    <div className="relative flex justify-center items-center">
      {/* Glow */}
      <div className="absolute w-64 h-64 bg-forest-400/20 rounded-full blur-3xl" aria-hidden="true" />

      {/* Dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.7, ease: easeExpo }}
        className="relative glass-dark rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)] w-full max-w-[380px]"
      >
        {/* Header bar */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <p className="font-sans text-[10px] font-bold text-forest-400 uppercase tracking-widest">Overview · Kisii Level 5</p>
            <p className="font-sans font-bold text-base text-white mt-0.5">Your facility at a glance</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Bell className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Stats grid */}
        <div className="px-5 py-4 grid grid-cols-2 gap-3">
          {[
            { label: 'Mothers Registered', value: '3,842', delta: '+18% vs last month', color: 'text-forest-400' },
            { label: 'ANC Appointments', value: '1,256', delta: '+12% vs last month', color: 'text-earth-400' },
            { label: 'Immunization Coverage', value: '92%', delta: '+6% vs last month', color: 'text-forest-400' },
            { label: 'Deliveries This Month', value: '312', delta: '+8% vs last month', color: 'text-coral-400' },
          ].map((s) => (
            <div key={s.label} className="glass-dark rounded-2xl p-3">
              <p className="font-sans text-[9px] font-semibold text-forest-300 uppercase tracking-wide">{s.label}</p>
              <p className={`font-sans font-extrabold text-xl text-white mt-1`}>{s.value}</p>
              <p className={`font-sans text-[9px] font-semibold mt-1 ${s.color}`}>{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Today's appointments stub */}
        <div className="px-5 pb-5">
          <div className="glass-dark rounded-2xl p-3">
            <p className="font-sans text-[9px] font-bold text-forest-300 uppercase tracking-widest mb-3">Today's Appointments</p>
            {[
              { time: '08:00 AM', name: 'Grace Nyaboke', type: 'ANC Follow-up', status: 'Checked In', color: 'bg-forest-500' },
              { time: '09:30 AM', name: 'Mary Atieno', type: 'First ANC Visit', status: 'Scheduled', color: 'bg-blue-500' },
              { time: '10:30 AM', name: 'Purity Moraa', type: 'TT2 Dose', status: 'Scheduled', color: 'bg-blue-500' },
            ].map((a) => (
              <div key={a.name} className="flex items-center gap-3 py-2 border-t border-white/5 first:border-0">
                <span className="font-sans text-[9px] text-forest-300 w-14 flex-shrink-0">{a.time}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-[10px] text-white truncate">{a.name}</p>
                  <p className="font-sans text-[8px] text-forest-400">{a.type}</p>
                </div>
                <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full text-white ${a.color}`}>{a.status}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating notification badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -right-4 top-8 glass-dark rounded-2xl px-4 py-3 z-20"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-earth-500/20 border border-earth-500/30 flex items-center justify-center text-earth-300">
            <Bell className="w-4 h-4" />
          </div>
          <div className="leading-tight">
            <p className="font-sans font-bold text-xs text-white">Vaccine Alert</p>
            <p className="font-sans text-[10px] font-semibold text-earth-400 mt-0.5">OPV due in 3 days</p>
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
      className="section bg-forest-900 relative overflow-hidden"
      aria-labelledby="how-heading"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-forest-700/20 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-earth-500/10 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container-tight relative">
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-forest-200 text-xs font-sans font-semibold uppercase tracking-widest">
              Onboarding Process
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            id="how-heading"
            className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-5 tracking-tight leading-tight"
          >
            Platform integration in{' '}
            <span className="text-earth-300">4 simple phases.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-forest-200 mt-4 max-w-xl mx-auto leading-relaxed">
            How we partner with clinics and health departments to coordinate and deliver maternal care.
          </motion.p>
        </motion.div>

        {/* ── Split layout: steps + dashboard ─────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Steps ──────────────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-0"
          >
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} total={steps.length} inView={inView} />
            ))}

            {/* CTA */}
            <motion.div variants={fadeUp} className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-forest-800 font-sans font-bold text-sm shadow-lg hover:bg-forest-50 active:scale-95 transition-all duration-200 group"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Dashboard panel ───────────────────────────────── */}
          <div className="flex justify-center lg:justify-end lg:sticky lg:top-24">
            <DashboardPanel inView={inView} />
          </div>
        </div>
      </div>
    </section>
  )
}
