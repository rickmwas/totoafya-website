// ── TotoAfya Digital — Home Page ───────────────────────────────
// Assembles all landing page sections in order
import Hero         from '@/components/Hero'
import StatsStrip   from '@/components/StatsStrip'
import Features     from '@/components/Features'
import HowItWorks   from '@/components/HowItWorks'
import AppShowcase  from '@/components/AppShowcase'
import Testimonials from '@/components/Testimonials'
import CTA          from '@/components/CTA'
import SEOHead      from '@/components/SEOHead'
import { getOrganizationSchema, getWebSiteSchema, getSoftwareAppSchema } from '@/lib/seoConfig'

export default function Home() {
  const homeJsonLd = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getSoftwareAppSchema(),
  ]

  return (
    <>
      {/* ── Dynamic SEO Meta & Structured Data ───────────────── */}
      <SEOHead
        title="TotoAfya Digital — Operating System for Maternal Care in Kenya"
        description="Empowering African mothers, community health workers, and maternity clinics in Kenya with smart ANC logs, KEPI vaccination schedules, and AI care guidance."
        keywords={[
          'maternal health Kenya',
          'child health app Kenya',
          'ANC tracker',
          'vaccination reminder Kenya',
          'KEPI schedule',
          'CHW digital app',
          'TotoAfya Digital',
          'maternal healthcare Nairobi Nakuru Kisii',
        ]}
        canonicalPath="/"
        jsonLd={homeJsonLd}
      />

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

