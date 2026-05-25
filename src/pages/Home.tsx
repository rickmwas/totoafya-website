// ── TotoAfya Digital — Home Page ───────────────────────────────
// Assembles all landing page sections in order
import Hero         from '@/components/Hero'
import Features     from '@/components/Features'
import HowItWorks   from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CTA          from '@/components/CTA'

export default function Home() {
  return (
    <>
      {/* ── SEO meta for this page ─── (add react-helmet-async if needed) */}
      <title>TotoAfya Digital — Smarter Maternal Care at Your Fingertips</title>

      {/* ── Page sections (in scroll order) ───────────────────── */}
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  )
}
