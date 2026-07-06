// ── TotoAfya Digital — Stats Strip ─────────────────────────────
// 4-column strip that sits between the Hero and Features sections
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, Cloud, BarChart3, Users } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const stats = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-forest-600" />,
    iconBg: 'bg-forest-50 border-forest-100',
    title: 'Secure & Compliant',
    sub: 'HIPAA-aligned, audit logs, role-based access and secure backups.',
  },
  {
    icon: <Cloud className="w-5 h-5 text-blue-600" />,
    iconBg: 'bg-blue-50 border-blue-100',
    title: '99.9% Uptime',
    sub: 'Reliable, scalable and built for mission-critical health systems.',
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-earth-600" />,
    iconBg: 'bg-earth-50 border-earth-100',
    title: 'Data-Driven',
    sub: 'Real-time insights and analytics for better clinical decisions.',
  },
  {
    icon: <Users className="w-5 h-5 text-coral-500" />,
    iconBg: 'bg-coral-50 border-coral-100',
    title: '12,000+ Mothers',
    sub: 'Registered on the platform and counting across multiple counties.',
  },
]

export default function StatsStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="bg-white border-t border-gray-100"
      aria-label="Platform highlights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i}
              className="flex items-start gap-4 group"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${s.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                {s.icon}
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm text-gray-900">{s.title}</h3>
                <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
