// ── TotoAfya Digital — Hero Section ────────────────────────────
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, slideRight, staggerContainer, easeExpo } from '@/lib/animations'
import { TrendingUp, Shield, Trophy, Database, Star, Activity, ArrowRight, UserCheck } from 'lucide-react'

// ── Stat badge props ─────────────────────────────────────────
interface StatBadgeProps {
  icon: React.ReactNode
  value: string
  label: string
  className?: string
  iconBgClass: string
  iconColorClass: string
  delay?: number
  animateClass?: string
}

function StatBadge({
  icon,
  value,
  label,
  className = '',
  iconBgClass,
  iconColorClass,
  delay = 0,
  animateClass = 'animate-float'
}: StatBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: delay + 0.8, duration: 0.6, ease: easeExpo }}
      className={`absolute flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-2xl px-4 py-3
                  shadow-card-lg border border-white/40 min-w-max z-20 transition-all duration-300
                  hover:scale-105 active:scale-95 ${animateClass} ${className}`}
    >
      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgClass} ${iconColorClass} shadow-inner`}>
        {icon}
      </div>
      <div className="leading-tight">
        <div className="font-sans font-bold text-sm text-gray-900">{value}</div>
        <div className="font-sans text-[10px] font-semibold text-gray-500 mt-0.5">{label}</div>
      </div>
    </motion.div>
  )
}

// ── Hero Component ──────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      className="relative min-h-screen mesh-bg overflow-hidden flex items-center pt-24 pb-16 md:pt-32 md:pb-24"
      aria-label="Hero section"
    >
      {/* ── Decorative background blobs ──────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Soft waves in the background mirroring the leaf shapes */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-forest-100/30 blur-3xl" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[700px] rounded-[220px_30px_220px_30px] bg-forest-50/40 rotate-[12deg] blur-2xl" />
        
        {/* Subtle dot pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" aria-hidden="true">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#1A6B45" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* ── Main content grid ──────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Text content (col-span-7 for spacious layout) ─── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center text-left"
          >
            {/* Label pill */}
            <motion.div variants={fadeUp} className="flex">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-50 border border-forest-100 text-forest-700 text-[10px] font-sans font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-forest-600 fill-forest-600/10" />
                Enterprise Maternal Health Infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.1] text-gray-900 tracking-tight"
            >
              Digitize and scale <br className="hidden sm:inline" />
              <span className="text-forest-600 italic font-medium font-display">maternal care</span> <br className="hidden sm:inline" />
              across your <span className="text-earth-500 font-extrabold">facility.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 font-sans text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl"
            >
              Equip your hospital, clinic, or county health system with TotoAfya's digital suite.
              Onboard mothers at the point of care, automate immunization compliance tracking,
              and offer 24/7 AI-guided patient companions.
            </motion.p>

            {/* Trust grid */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Kisii badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                  <Trophy className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="font-sans leading-tight">
                  <div className="text-xs font-bold text-gray-900">Kisii Innovation</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Week Winner</div>
                </div>
              </div>

              {/* MoH & HIPAA badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Shield className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="font-sans leading-tight">
                  <div className="text-xs font-bold text-gray-900">MoH & HIPAA</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Aligned</div>
                </div>
              </div>

              {/* Database badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600">
                  <Database className="w-4 h-4 stroke-[2]" />
                </div>
                <div className="font-sans leading-tight">
                  <div className="text-xs font-bold text-gray-900">Robust Offline</div>
                  <div className="text-[10px] text-gray-500 font-semibold mt-0.5">Database</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm shadow-warm hover:bg-forest-700 active:scale-95 transition-all duration-200 group"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-forest-600 text-forest-700 font-sans font-semibold text-sm hover:bg-forest-50 active:scale-95 transition-all duration-200"
              >
                Explore Features
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="font-sans text-[11px] text-gray-500">
                <span className="font-bold text-gray-900">50+ partner facilities</span> trust us to manage patient care
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Hero image (col-span-5 for perfect framing) ─── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center py-12"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[4/5]">
              {/* ── Broken Grid Background Layers ──────────────── */}
              
              {/* Layer 1: Soft backdrop decorative card */}
              <div className="absolute -left-6 -top-6 w-[90%] h-[90%] rounded-[2rem] bg-gradient-to-tr from-earth-50 to-forest-50/50 border border-forest-100/30 -rotate-3 z-0" />
              
              {/* Layer 2: Gold dashed outline frame */}
              <div className="absolute -right-4 -bottom-4 w-[95%] h-[95%] border-2 border-dashed border-earth-300 rounded-[2.5rem_2.5rem_2.5rem_8rem] z-0 translate-x-2 translate-y-2 pointer-events-none opacity-50" />
              
              {/* Layer 3: Tech Grid Overlay Accent */}
              <div className="absolute -right-8 top-[10%] w-24 h-24 text-forest-100/60 opacity-30 z-0 pointer-events-none hidden sm:block">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                  <line x1="50" y1="10" x2="50" y2="90" />
                  <line x1="10" y1="50" x2="90" y2="50" />
                </svg>
              </div>

              {/* ── Layer 4: Main Image Container ──────────────── */}
              <div className="w-full h-full rounded-[2.5rem_2.5rem_2.5rem_8rem] overflow-hidden border-[6px] border-white shadow-warm-lg relative bg-white z-10 select-none group">
                <img
                  src="/motherchildprofile.png"
                  alt="Mother and Child"
                  className="w-full h-full object-cover object-center scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                {/* Elegant dark green-tinted shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/20 via-transparent to-transparent z-15" />
              </div>

              {/* ── Floating status cards (Layer 5) ───────────── */}
              
              {/* Top-Left Card: Immunization Rate */}
              <StatBadge
                icon={<TrendingUp className="w-4 h-4" />}
                value="98%"
                label="Immunization rate"
                iconBgClass="bg-forest-50"
                iconColorClass="text-forest-600"
                className="-left-8 top-10 sm:-left-12 sm:top-14"
                animateClass="animate-float"
                delay={0.1}
              />

              {/* Middle-Right Card: Registered Mothers */}
              <StatBadge
                icon={<UserCheck className="w-4 h-4" />}
                value="12K+"
                label="Registered mothers"
                iconBgClass="bg-amber-50"
                iconColorClass="text-amber-500"
                className="-right-8 top-[32%] sm:-right-10 sm:top-[32%]"
                animateClass="animate-float-slow"
                delay={0.25}
              />

              {/* Bottom-Left Card: Clinical Satisfaction */}
              <StatBadge
                icon={<Star className="w-4 h-4 text-coral-500 fill-coral-500/15" />}
                value="4.9 / 5"
                label="Clinical satisfaction"
                iconBgClass="bg-coral-50"
                iconColorClass="text-coral-500"
                className="-left-6 bottom-20 sm:-left-8 sm:bottom-24"
                animateClass="animate-float"
                delay={0.4}
              />

              {/* Bottom-Right Card (Wide): Patient Onboarded Notification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease: easeExpo }}
                className="absolute -bottom-8 -right-4 sm:-right-8 w-[320px] sm:w-[360px]
                           flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl
                           p-4 shadow-card-lg border border-white/40 z-20 transition-all duration-300 hover:scale-102"
              >
                <div className="w-10 h-10 rounded-xl bg-forest-600 flex items-center
                                justify-center flex-shrink-0 shadow-sm">
                  <Activity className="text-white w-4.5 h-4.5 stroke-[2.5]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-sans font-bold text-xs text-gray-900 leading-none">
                    Patient Onboarded
                  </div>
                  <div className="font-sans text-[10px] text-forest-700 font-semibold mt-2 truncate">
                    Amina Hassan <span className="text-gray-400 font-normal mx-0.5">•</span> Registered at Nyamira Hospital
                  </div>
                </div>
                <span className="bg-forest-50 text-forest-700 font-bold px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider border border-forest-100 ml-auto flex-shrink-0 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse" />
                  Active
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

