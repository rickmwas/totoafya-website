// ── TotoAfya Digital — Testimonials Section ────────────────────
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer, hoverScale } from '@/lib/animations'
import { Users, ShieldCheck, Star, Building2 } from 'lucide-react'

// ── Testimonial data ─────────────────────────────────────────────
const testimonials = [
  {
    id: 't1',
    name: 'Grace Otieno',
    role: 'Mother of two',
    location: 'Kisii Town, Kisii County',
    avatar: '/gettyimages-622448996-612x612.jpg',
    rating: 5,
    quote:
      'TotoAfya has changed everything. Since my local clinic registered me, I receive SMS reminders for all vaccinations. Amina\'s health card is fully digital, meaning doctors can access it instantly.',
    tag: 'Mother',
  },
  {
    id: 't2',
    name: 'Nurse Beatrice Moraa',
    role: 'Community Health Nurse',
    location: 'Nyamira County Referral Hospital',
    avatar: '/chhww.webp',
    rating: 5,
    quote:
      'Managing hundreds of records was a major bottleneck. TotoAfya saves our clinic hours weekly. Growth charts auto-calculate, ANC logs are clear, and maternal follow-ups are automated.',
    tag: 'Nurse',
  },
  {
    id: 't3',
    name: 'Dr. Emmanuel Kiprop',
    role: 'Director of Maternal Services',
    location: 'Kericho County Health Dept',
    avatar: '/healthdirector.webp',
    rating: 5,
    quote:
      'Integrating TotoAfya across our county clinics has reduced immunization drop-off rates by 40%. The central facility dashboard gives us real-time, actionable public health coverage metrics.',
    tag: 'Health Director',
  },
  {
    id: 't4',
    name: 'Dr. Josephine Kemunto',
    role: 'Medical Officer',
    location: 'Kisii Teaching & Referral Hospital',
    avatar: '/drjosephine.jpg',
    rating: 5,
    quote:
      'The data TotoAfya collects is clinically meaningful. The offline-first design is critical in our setting. This is the kind of health tech Kenya needs — built here, for here.',
    tag: 'Doctor',
  },
]

// ── Star Rating ──────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          fill={i < rating ? '#D4920F' : 'none'}
          stroke={i < rating ? '#D4920F' : '#D1D5DB'}
          strokeWidth="1.5"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M8 1l1.94 3.93 4.33.63-3.14 3.06.74 4.31L8 10.94l-3.87 2.04.74-4.31L1.73 5.56l4.33-.63z" />
        </svg>
      ))}
    </div>
  )
}

// ── Tag color map ────────────────────────────────────────────────
const tagColors: Record<string, string> = {
  Mother: 'badge-green',
  Nurse: 'badge-amber',
  'Health Director': 'bg-blue-50 text-blue-700 border border-blue-100 badge',
  Doctor: 'bg-forest-50 text-forest-700 border border-forest-100 badge',
}

// ── Testimonial Card ─────────────────────────────────────────────
function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <motion.article
      variants={fadeUp}
      {...hoverScale}
      className="card group cursor-default flex flex-col gap-4 h-full border border-gray-100 hover:border-forest-300/80 transition-all duration-300 snap-start shrink-0 w-[290px] sm:w-auto"
    >
      {/* Rating */}
      <Stars rating={t.rating} />

      {/* Quote */}
      <blockquote className="font-sans text-sm text-gray-600 leading-relaxed flex-1 relative mt-2">
        <span className="absolute -top-3 -left-1 font-display text-5xl text-forest-100/70
                         leading-none select-none" aria-hidden="true">
          "
        </span>
        <span className="relative z-10">{t.quote}</span>
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-forest-50 border border-white"
        />
        <div className="min-w-0 flex-1">
          <div className="font-sans font-bold text-sm text-gray-900 truncate">
            {t.name}
          </div>
          <div className="font-sans text-[11px] text-gray-400 mt-0.5 truncate font-medium">
            {t.role} <span className="text-gray-300 mx-0.5">•</span> {t.location}
          </div>
        </div>
        <span className={`${tagColors[t.tag] ?? 'badge-green'} text-[9px] uppercase tracking-wider font-bold`}>
          {t.tag}
        </span>
      </footer>
    </motion.article>
  )
}

// ── Stats strip ──────────────────────────────────────────────────
const stats = [
  { value: '10,000+', label: 'Registered mothers', icon: <Users className="w-5 h-5" /> },
  { value: '98%', label: 'Vaccine compliance', icon: <ShieldCheck className="w-5 h-5" /> },
  { value: '4.9 / 5', label: 'Average satisfaction', icon: <Star className="w-5 h-5" /> },
  { value: '50+', label: 'Partner facilities', icon: <Building2 className="w-5 h-5" /> },
]

// ── Main Component ───────────────────────────────────────────────
export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="testimonials"
      className="section bg-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      ref={ref}
    >
      {/* Background decorations mirroring the hero */}
      <div className="absolute -right-32 bottom-0 w-96 h-96 rounded-[350px_100px_350px_100px] border-[3px] border-forest-100/20 rotate-[15deg] pointer-events-none" aria-hidden="true" />
      <div className="absolute -left-32 top-12 w-96 h-96 rounded-[100px_350px_100px_350px] bg-forest-50/30 rotate-[-25deg] pointer-events-none blur-3xl" aria-hidden="true" />

      <div className="container-tight relative">
        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Loved by Providers</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            id="testimonials-heading"
            className="section-heading mt-5"
          >
            Real results from
            <span className="text-forest-600 italic"> clinical leaders.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto">
            Across Kisii, Nyamira, and Kericho — TotoAfya is elevating child health tracking
            and simplifying healthcare delivery every day.
          </motion.p>
        </motion.div>

        {/* ── Testimonials Grid ──────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </motion.div>

        {/* ── Stats strip (floating style cards) ──────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              {...hoverScale}
              className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/95 backdrop-blur-xs border border-gray-100 shadow-card-lg text-center"
            >
              <div className="w-10 h-10 rounded-full bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 mb-4 shadow-sm">
                {s.icon}
              </div>
              <span className="font-sans font-extrabold text-2xl text-gray-900 block tracking-tight leading-none">
                {s.value}
              </span>
              <span className="font-sans text-[10px] font-semibold text-gray-400 mt-2 block uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

