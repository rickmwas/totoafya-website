// ── TotoAfya Digital — Testimonials Section (Marquee) ───────────
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
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
      'TotoAfya has changed everything. Since my local clinic registered me, I receive SMS reminders for all vaccinations. Amina\'s health card is fully digital.',
    tag: 'Mother',
    tagColor: 'bg-forest-100 text-forest-700',
  },
  {
    id: 't2',
    name: 'Nurse Beatrice Moraa',
    role: 'Community Health Nurse',
    location: 'Nyamira County Referral Hospital',
    avatar: '/chhww.webp',
    rating: 5,
    quote:
      'Managing hundreds of records was a major bottleneck. TotoAfya saves our clinic hours weekly. Growth charts auto-calculate, ANC logs are clear.',
    tag: 'Nurse',
    tagColor: 'bg-earth-100 text-earth-700',
  },
  {
    id: 't3',
    name: 'Dr. Emmanuel Kiprop',
    role: 'Director of Maternal Services',
    location: 'Kericho County Health Dept',
    avatar: '/healthdirector.webp',
    rating: 5,
    quote:
      'Integrating TotoAfya across our county clinics has reduced immunization drop-off rates by 40%. The dashboard gives us real-time public health coverage metrics.',
    tag: 'Health Director',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    id: 't4',
    name: 'Dr. Josephine Kemunto',
    role: 'Medical Officer',
    location: 'Kisii Teaching & Referral Hospital',
    avatar: '/drjosephine.jpg',
    rating: 5,
    quote:
      'The data TotoAfya collects is clinically meaningful. The offline-first design is critical in our setting. This is the health tech Kenya needs.',
    tag: 'Doctor',
    tagColor: 'bg-forest-50 text-forest-700',
  },
]

// Duplicate array for seamless marquee loop
const row1 = [...testimonials, ...testimonials]
const row2 = [...testimonials.slice(2), ...testimonials.slice(0, 2), ...testimonials.slice(2), ...testimonials.slice(0, 2)]

// ── Stats data ──────────────────────────────────────────────────
const stats = [
  { value: '12,000+', label: 'Registered Mothers', icon: <Users className="w-5 h-5" /> },
  { value: '98%',     label: 'Vaccine Compliance', icon: <ShieldCheck className="w-5 h-5" /> },
  { value: '4.9 / 5', label: 'Avg. Satisfaction',  icon: <Star className="w-5 h-5" /> },
  { value: '50+',     label: 'Partner Facilities',  icon: <Building2 className="w-5 h-5" /> },
]

// ── Star Rating ──────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16"
          fill={i < rating ? '#D4920F' : 'none'}
          stroke={i < rating ? '#D4920F' : '#D1D5DB'}
          strokeWidth="1.5" className="w-3.5 h-3.5" aria-hidden="true"
        >
          <path d="M8 1l1.94 3.93 4.33.63-3.14 3.06.74 4.31L8 10.94l-3.87 2.04.74-4.31L1.73 5.56l4.33-.63z" />
        </svg>
      ))}
    </div>
  )
}

// ── Testimonial Card ─────────────────────────────────────────────
function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex flex-col gap-3 mx-3">
      <Stars rating={t.rating} />
      <blockquote className="font-sans text-sm text-gray-600 leading-relaxed flex-1">
        "{t.quote}"
      </blockquote>
      <footer className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-9 h-9 rounded-full object-cover ring-2 ring-forest-50 border border-white flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <div className="font-sans font-bold text-xs text-gray-900 truncate">{t.name}</div>
          <div className="font-sans text-[10px] text-gray-400 mt-0.5 truncate">{t.role} · {t.location}</div>
        </div>
        <span className={`flex-shrink-0 text-[9px] font-bold uppercase tracking-wide px-2 py-1 rounded-full ${t.tagColor}`}>
          {t.tag}
        </span>
      </footer>
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────
export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="testimonials"
      className="overflow-hidden"
      aria-labelledby="testimonials-heading"
      ref={ref}
    >
      {/* ── Dark stats strip ─────────────────────────────────── */}
      <div className="bg-gray-900 py-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-forest-600/20 border border-forest-600/30 flex items-center justify-center text-forest-400">
                  {s.icon}
                </div>
              </div>
              <div className="font-sans font-extrabold text-3xl text-white">{s.value}</div>
              <div className="font-sans text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Marquee section ───────────────────────────────────── */}
      <div className="bg-gray-50 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-2xl mx-auto px-4 mb-12"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Loved by Providers</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            id="testimonials-heading"
            className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 mt-5 tracking-tight leading-tight"
          >
            Real results from{' '}
            <span className="text-forest-600">clinical leaders.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-gray-500 mt-4 leading-relaxed">
            Across Kisii, Nyamira, and Kericho — TotoAfya is elevating child health
            tracking and simplifying healthcare delivery every day.
          </motion.p>
        </motion.div>

        {/* Row 1: scrolls left */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {row1.map((t, i) => (
                <TestimonialCard key={`r1-${t.id}-${i}`} t={t} />
              ))}
            </div>
          </div>
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>

        {/* Row 2: scrolls right */}
        <div className="relative mt-4">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-rev">
              {row2.map((t, i) => (
                <TestimonialCard key={`r2-${t.id}-${i}`} t={t} />
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
