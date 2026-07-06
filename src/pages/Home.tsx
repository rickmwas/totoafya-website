// ── TotoAfya Digital — Home Page ───────────────────────────────
// Assembles all landing page sections in order
import Hero         from '@/components/Hero'
import StatsStrip   from '@/components/StatsStrip'
import Features     from '@/components/Features'
import HowItWorks   from '@/components/HowItWorks'
import AppShowcase  from '@/components/AppShowcase'
import Testimonials from '@/components/Testimonials'
import CTA          from '@/components/CTA'

export default function Home() {
  return (
    <>
      {/* ── SEO meta ─────────────────────────────────────────── */}
      <title>TotoAfya Digital — The Operating System for Maternal Healthcare</title>

      {/* ── Page sections (in scroll order) ─────────────────── */}
      <Hero />
      <StatsStrip />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <Testimonials />
      <CTA />
    </>
  )
}
