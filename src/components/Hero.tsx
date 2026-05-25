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
                  '/Header-2.png',
                  '/kisii_teaching_and_referral_hospital_logo.jpg',
                  '/kisii_university_logo_clean-removebg-preview.png',
                  '/NAKURU_LOGO-removebg-preview.png',
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
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none lg:w-[135%] lg:-mr-28 xl:-mr-40 aspect-[10/9] lg:aspect-square group select-none">

              {/* ── Layer 1: Cinematic Atmospheric Radial Glows ─────── */}
              <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-earth-200/20 rounded-full blur-[100px] pointer-events-none z-0" />
              <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-forest-200/25 rounded-full blur-[120px] pointer-events-none z-0" />

              {/* ── Layer 2: Mockup-style Organic Leaf & Line Swirls ── */}
              <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center">
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

                  {/* Dual-Layer leaf: Layer A (Semi-transparent background leaf) */}
                  <path
                    d="M 230,170 
                       C 270,120 350,140 380,180 
                       C 410,220 440,300 380,360 
                       C 330,420 280,440 220,450 
                       C 160,460 110,420 80,360 
                       C 50,300 40,240 95,180 
                       C 140,130 190,190 230,170 Z"
                    fill="#1A6B45"
                    fillOpacity="0.06"
                    className="rotate-6 origin-center"
                  />

                  {/* Dual-Layer leaf: Layer B (Main Organic Stage Shape) */}
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

              {/* ── Layer 3: Atmospheric Floating Particle details ───── */}
              <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <div className="absolute left-[15%] top-[15%] w-3 h-3 rounded-full bg-earth-300/40 blur-xs animate-float" />
                <div className="absolute left-[5%] top-[45%] w-4.5 h-4.5 rounded-full bg-forest-300/30 blur-xs animate-float-slow" />
                <div className="absolute right-[10%] bottom-[20%] w-2 h-2 rounded-full bg-forest-400/50 blur-2xs animate-float" />
                <div className="absolute right-[25%] top-[12%] w-3.5 h-3.5 rounded-full bg-earth-400/35 blur-xs animate-float-slow" />
              </div>

              {/* ── Layer 4: Cutout Image of Mother & Child (Emerging/Confident) ── */}
              <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
                <img
                  src="/motherchildprofile.png"
                  alt="Mother and Child"
                  className="w-[125%] h-auto max-h-[110%] object-contain filter drop-shadow-[0_24px_48px_rgba(8,45,27,0.16)] group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-700 ease-out"
                  loading="eager"
                />
              </div>

              {/* ── Layer 4.5: Bottom Gradient Mask (Seamless Crop Fade) ── */}
              <div
                className="absolute bottom-0 left-0 right-0 h-48 z-12 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, #FDFBF5 0%, rgba(253, 251, 245, 0.98) 35%, rgba(253, 251, 245, 0.7) 70%, rgba(253, 251, 245, 0) 100%)'
                }}
              />

              {/* ── Layer 4.6: Bottom Glowing Vector Wave Sweep ── */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-20 pointer-events-none z-13 opacity-90 select-none">
                <svg viewBox="0 0 600 80" fill="none" className="w-full h-full">
                  <path
                    d="M0,60 Q150,15 300,55 T600,35"
                    stroke="url(#bottomGlowGrad)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="opacity-75"
                  />
                  <path
                    d="M0,60 Q150,15 300,55 T600,35 L600,80 L0,80 Z"
                    fill="url(#bottomGlowFill)"
                    opacity="0.12"
                  />
                  <defs>
                    <linearGradient id="bottomGlowGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3fa577" stopOpacity="0" />
                      <stop offset="35%" stopColor="#3fa577" />
                      <stop offset="65%" stopColor="#fbca4c" />
                      <stop offset="100%" stopColor="#fbca4c" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="bottomGlowFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3fa577" />
                      <stop offset="100%" stopColor="#FDFBF5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* ── Layer 5: Floating Stat Cards (Staggered Orbit) ───── */}

              {/* Card 1: Immunization Rate (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: easeExpo }}
                className="hidden lg:flex absolute lg:-right-6 lg:top-8 xl:-right-8 xl:top-10 w-[235px] bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-[0_25px_50px_rgba(8,45,27,0.12)] border border-white/40 z-20 flex-col gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_60px_rgba(8,45,27,0.16)] animate-float"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-forest-50 text-forest-600 shadow-inner flex-shrink-0">
                    <TrendingUp className="w-4 sm:w-4.5 h-4 sm:h-4.5" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-sans font-extrabold text-sm sm:text-base text-gray-900">98%</div>
                    <div className="font-sans text-[8px] sm:text-[9px] font-semibold text-gray-500 mt-0.5">Immunization rate across facilities</div>
                  </div>
                </div>
                {/* Sparkline */}
                <svg className="w-full h-5 sm:h-6 mt-0.5" viewBox="0 0 100 30" fill="none">
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

              {/* Card 2: Registered Mothers (Middle-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.6, ease: easeExpo }}
                className="hidden lg:flex absolute lg:-right-12 lg:top-[38%] xl:-right-14 w-[190px] bg-white/80 backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_25px_50px_rgba(8,45,27,0.12)] border border-white/40 z-20 items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_60px_rgba(8,45,27,0.16)] animate-float-slow"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-amber-50 text-amber-500 shadow-inner flex-shrink-0">
                  <UserCheck className="w-4 sm:w-4.5 h-4 sm:h-4.5" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans font-extrabold text-sm sm:text-base text-gray-900">12K+</div>
                  <div className="font-sans text-[8px] sm:text-[9px] font-semibold text-gray-500 mt-0.5">Registered mothers</div>
                </div>
              </motion.div>

              {/* Card 3: 24/7 AI Companion (Bottom-Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease: easeExpo }}
                className="hidden lg:flex absolute lg:-right-8 lg:bottom-[12%] xl:-right-10 w-[235px] bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-[0_25px_50px_rgba(8,45,27,0.12)] border border-white/40 z-20 gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_60px_rgba(8,45,27,0.16)] animate-float"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-forest-50 text-forest-600 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <MessageSquare className="w-4 sm:w-4.5 h-4 sm:h-4.5" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans font-extrabold text-[10px] sm:text-xs text-gray-900">24/7 AI Companion</div>
                  <div className="font-sans text-[8px] sm:text-[9px] text-gray-500 mt-0.5 sm:mt-1 leading-normal sm:leading-relaxed">
                    Guidance. Reminders. Support in local languages.
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Clinical Satisfaction (Bottom-Left / Intersecting Shoulder) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.6, ease: easeExpo }}
                className="hidden lg:flex absolute lg:-left-12 lg:bottom-6 xl:-left-16 xl:bottom-8 w-[205px] bg-white/80 backdrop-blur-xl rounded-2xl p-3.5 shadow-[0_25px_50px_rgba(8,45,27,0.12)] border border-white/40 z-20 gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_60px_rgba(8,45,27,0.16)] animate-float-slow"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-coral-50 text-coral-500 shadow-inner flex-shrink-0">
                  <Heart className="w-4 sm:w-4.5 h-4 sm:h-4.5 fill-coral-500 text-coral-500" />
                </div>
                <div className="leading-tight flex-1">
                  <div className="font-sans font-extrabold text-sm sm:text-base text-gray-900">4.9 / 5</div>
                  <div className="font-sans text-[8px] sm:text-[9px] font-semibold text-gray-500 mt-0.5">Clinical satisfaction</div>
                  <div className="flex gap-0.5 mt-0.5 sm:mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-amber-400 text-amber-400" />
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

