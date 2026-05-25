// ── TotoAfya Digital — Hero Section ────────────────────────────
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, slideRight, staggerContainer, easeExpo } from '@/lib/animations'
import { TrendingUp, Shield, Trophy, Database, Star, Activity, ArrowRight, UserCheck, Heart, MessageSquare } from 'lucide-react'

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
            className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-start py-12 lg:py-0"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none lg:w-[130%] lg:-mr-24 xl:-mr-36 aspect-[10/9] lg:aspect-square group select-none">
              
              {/* ── Mockup-style Organic Leaf & Line Swirls ─────── */}
              <div className="absolute inset-0 -z-10 pointer-events-none select-none flex items-center justify-center">
                <svg
                  viewBox="0 0 500 500"
                  className="w-[125%] h-[125%] translate-y-[-5%] opacity-95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#155736" stopOpacity="0.95" />
                      <stop offset="60%" stopColor="#1A6B45" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#3fa577" stopOpacity="0.85" />
                    </linearGradient>
                    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#082d1b" floodOpacity="0.18" />
                    </filter>
                  </defs>
                  
                  {/* Swirling Line 1 (Gold/Amber) */}
                  <path
                    d="M 60,390 C 130,480 390,460 420,310 C 450,160 330,60 210,120 C 120,160 60,270 150,360"
                    stroke="#fbca4c"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                  
                  {/* Swirling Line 2 (Green) */}
                  <path
                    d="M 10,330 C 70,430 310,460 400,330 C 490,200 430,60 280,120 C 160,180 100,270 190,370"
                    stroke="#a3d9bc"
                    strokeWidth="2"
                    opacity="0.5"
                  />

                  {/* Leaf shape path (drawn with bezier curves to match mockup leaf shape) */}
                  <path
                    d="M 250,150 
                       C 300,100 370,120 405,170 
                       C 440,220 460,290 405,360 
                       C 355,420 300,440 240,450 
                       C 180,460 120,430 90,370 
                       C 60,310 50,250 105,190 
                       C 150,140 200,190 250,150 Z"
                    fill="url(#leafGrad)"
                    filter="url(#shadow)"
                    className="animate-pulse-soft"
                  />
                  
                  {/* Floating accent circles */}
                  <circle cx="160" cy="130" r="5" stroke="#3fa577" strokeWidth="1.5" />
                  <circle cx="410" cy="190" r="7" stroke="#fbca4c" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="430" cy="330" r="4" fill="#3fa577" opacity="0.6" />
                  <circle cx="110" cy="390" r="6" stroke="#a3d9bc" strokeWidth="1.5" />
                </svg>
              </div>

              {/* ── Cutout Image of Mother & Child (Free-floating) ── */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <img
                  src="/motherchildprofile.png"
                  alt="Mother and Child"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(8,45,27,0.15)] group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>

              {/* ── Mockup Card 1: Immunization Rate (Top-Right) ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: easeExpo }}
                className="absolute -right-6 top-8 sm:-right-8 sm:top-10 w-[230px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-card border border-white/50 z-20 flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-warm animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-forest-50 text-forest-600 shadow-inner">
                    <TrendingUp className="w-4.5 h-4.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-sans font-extrabold text-base text-gray-900">98%</div>
                    <div className="font-sans text-[9px] font-semibold text-gray-500 mt-0.5">Immunization rate across facilities</div>
                  </div>
                </div>
                {/* Custom Sparkline */}
                <svg className="w-full h-6 mt-0.5" viewBox="0 0 100 30" fill="none">
                  <path
                    d="M0,25 Q15,5 30,20 T60,10 T90,15 L100,5"
                    stroke="#1A6B45"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0,25 Q15,5 30,20 T60,10 T90,15 L100,5 L100,30 L0,30 Z"
                    fill="url(#sparkGrad)"
                    opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1A6B45" />
                      <stop offset="100%" stopColor="#1A6B45" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* ── Mockup Card 2: Registered Mothers (Middle-Right) ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.6, ease: easeExpo }}
                className="absolute -right-12 top-[38%] sm:-right-14 sm:top-[38%] w-[190px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-card border border-white/50 z-20 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-warm animate-float-slow"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-amber-50 text-amber-500 shadow-inner">
                  <UserCheck className="w-4.5 h-4.5" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans font-extrabold text-base text-gray-900">12K+</div>
                  <div className="font-sans text-[9px] font-semibold text-gray-500 mt-0.5">Registered mothers</div>
                </div>
              </motion.div>

              {/* ── Mockup Card 3: 24/7 AI Companion (Bottom-Right) ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: easeExpo }}
                className="absolute -right-8 bottom-[12%] sm:-right-10 sm:bottom-[12%] w-[230px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-card border border-white/50 z-20 flex gap-3 transition-all duration-300 hover:scale-105 hover:shadow-warm animate-float"
              >
                <div className="w-9 h-9 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MessageSquare className="w-4.5 h-4.5" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans font-extrabold text-xs text-gray-900">24/7 AI Companion</div>
                  <div className="font-sans text-[9px] text-gray-500 mt-1 leading-relaxed">
                    Guidance. Reminders. Support in local languages.
                  </div>
                </div>
              </motion.div>

              {/* ── Mockup Card 4: Clinical Satisfaction (Bottom-Left / Overlapping) ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.6, ease: easeExpo }}
                className="absolute -left-10 bottom-6 sm:-left-12 sm:bottom-8 w-[200px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-card border border-white/50 z-20 flex gap-3 transition-all duration-300 hover:scale-105 hover:shadow-warm animate-float-slow"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center bg-coral-50 text-coral-500 shadow-inner flex-shrink-0">
                  <Heart className="w-4.5 h-4.5 fill-coral-500 text-coral-500" />
                </div>
                <div className="leading-tight flex-1">
                  <div className="font-sans font-extrabold text-base text-gray-900">4.9 / 5</div>
                  <div className="font-sans text-[9px] font-semibold text-gray-500 mt-0.5">Clinical satisfaction</div>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

