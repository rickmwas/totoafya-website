// ── TotoAfya Digital — Terms of Use ───────────────────────────
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { FileText, UserCheck, ShieldAlert, CreditCard, HelpCircle, ArrowRight } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import { getBreadcrumbSchema } from '@/lib/seoConfig'

const sections = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'accounts', label: '2. User Accounts & Duties' },
  { id: 'billing', label: '3. Billing & Payments' },
  { id: 'acceptable-use', label: '4. Acceptable Use Policy' },
  { id: 'disclaimer-liability', label: '5. Limitation of Liability' },
  { id: 'modifications', label: '6. Amendments & Updates' },
]

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState('acceptance')
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const termsSchemas = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms of Use', path: '/terms' },
  ])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-cream-50" ref={containerRef}>
      {/* ── Page Header ────────────────────────────────────────── */}
      <header ref={headerRef} className="section mesh-bg text-center relative overflow-hidden py-16">
        <div className="absolute -right-32 -top-16 w-96 h-96 rounded-[100px_350px_100px_350px] border-[3px] border-forest-100/25 rotate-[25deg] pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-48 bottom-12 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] bg-forest-50/30 rotate-[-15deg] pointer-events-none blur-3xl" aria-hidden="true" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="container-tight max-w-3xl mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <span className="section-label flex items-center gap-1.5 mx-auto">
              <FileText className="w-3.5 h-3.5" />
              Agreement Rules
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="section-heading">
            Terms of
            <span className="text-forest-600 italic"> Use.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto text-center text-sm sm:text-base">
            Last Updated: May 25, 2026. Please review our service terms, subscription structures, and caregiver platform usage rules.
          </motion.p>
        </motion.div>
      </header>

      {/* ── Page Content ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* ── Sticky Sidebar ────────────────────────────────────── */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-2 bg-white p-6 rounded-2xl border border-gray-150 shadow-sm">
              <h3 className="font-display font-bold text-sm text-gray-900 mb-4 px-3 uppercase tracking-wider">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-sans font-medium transition-all duration-150 flex items-center justify-between ${
                      activeSection === section.id
                        ? 'bg-forest-50 text-forest-750 font-bold border-l-4 border-forest-600 pl-2'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-forest-50/30'
                    }`}
                  >
                    <span>{section.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Main Legal Text ───────────────────────────────────── */}
          <div className="lg:w-3/4 space-y-12 bg-white p-8 sm:p-10 rounded-3xl border border-gray-150 shadow-sm leading-relaxed text-gray-600 font-sans text-sm sm:text-base">
            
            {/* Section 1 */}
            <article id="acceptance" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <UserCheck className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p>
                Welcome to TotoAfya Digital. These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (such as a health clinic or hospital), and <strong>TerraSept Solutions Ltd</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), concerning your access to and use of our web applications, portals, and service modules.
              </p>
              <p>
                By logging into our clinical nurse register, downloading our mobile packages, or subscribing to care alerts, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Use. If you do not agree, you are prohibited from using the platform and must discontinue access immediately.
              </p>
            </article>

            {/* Section 2 */}
            <article id="accounts" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  2. User Accounts &amp; Duties
                </h2>
              </div>
              <p>
                To utilize clinical registration features or mother care companions, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate, current, and complete registration credentials.</li>
                <li>Maintain the confidentiality of login details and password hashes.</li>
                <li>Ensure that only licensed clinical practitioners or authorized care facilitators log into client database systems.</li>
                <li>Notify us immediately at support if you detect unauthorized access or security breaches in your facility.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that provide fraudulent clinic information, violate professional licensing laws, or misuse patient charts.
              </p>
            </article>

            {/* Section 3 */}
            <article id="billing" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  3. Billing &amp; Payments
                </h2>
              </div>
              <p>
                Subscriptions for TotoAfya Digital clinical accounts and caregiver services are billed on a recurring basis:
              </p>
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100/60 my-3">
                <h4 className="font-display font-bold text-sm text-gray-900 mb-2">Local Billing &amp; Lipa na M-Pesa</h4>
                <p className="text-xs sm:text-sm text-gray-650 leading-relaxed">
                  We support monthly and annual subscription fees. Transaction payments can be completed via <strong>Safaricom M-Pesa</strong> STK Push billing services. Annual subscriptions provide discount advantages and are non-refundable after the standard 14-day clearance.
                </p>
              </div>
              <p>
                Failure to complete recurring service billing alerts will trigger account notification warnings. If subscriptions are not cleared, registration tools for new mothers may be suspended, while existing health logs remain accessible in read-only mode for client safety.
              </p>
            </article>

            {/* Section 4 */}
            <article id="acceptable-use" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  4. Acceptable Use Policy
                </h2>
              </div>
              <p>
                TotoAfya Digital is designed exclusively for maternal care tracking, health monitoring, and clinical administrative coordination. Users may not:
              </p>
              <ul className="space-y-2">
                {[
                  'Bypass or attempt to exploit the offline database sync endpoints or access API schemas.',
                  'Scrape, copy, or redistribute clinical content or database entries.',
                  'Input falsified medical records or trigger spam SMS messages to guardian numbers.',
                  'Share facility account portals with unverified or unlicensed care practitioners.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-forest-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Section 5 */}
            <article id="disclaimer-liability" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  5. Limitation of Liability
                </h2>
              </div>
              <p>
                In no event shall TerraSept Solutions Ltd, its directors, employees, or tech partners be liable to you or any clinic for any indirect, consequential, exemplary, incidental, or special damages, including lost patient records, sync errors, loss of revenue, or service interruptions.
              </p>
              <p>
                Our services are provided &quot;as is&quot; and &quot;as available.&quot; We make no representations or warranties regarding uptime, data completeness, or absolute error-free operation, particularly when offline systems operate in locations with low network connectivity.
              </p>
            </article>

            {/* Section 6 */}
            <article id="modifications" className="space-y-4 scroll-mt-24 border-t border-gray-150 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  6. Amendments &amp; Updates
                </h2>
              </div>
              <p>
                We reserve the right to edit or modify these Terms of Use at any time. We will alert users to revisions by updating the &quot;Last Updated&quot; marker at the top of this document. Continued usage of TotoAfya Digital portal systems after modifications indicates your acceptance of updated terms.
              </p>
              <p className="text-sm">
                If you have questions regarding these terms, contact TerraSept Solutions Ltd:
                <br />
                Email: <a href="mailto:cto@terraseptsolutions.com" className="text-forest-650 hover:underline">cto@terraseptsolutions.com</a>
              </p>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}
