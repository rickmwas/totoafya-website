// ── TotoAfya Digital — Privacy Policy ──────────────────────────
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { Shield, Eye, Lock, Server, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'

const sections = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'data-we-collect', label: '2. Data We Collect' },
  { id: 'how-we-use-data', label: '3. How We Use Data' },
  { id: 'security-compliance', label: '4. Security & Compliance' },
  { id: 'patient-rights', label: '5. Patient & User Rights' },
  { id: 'contact-us', label: '6. Contact & Support' },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction')
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
              <Shield className="w-3.5 h-3.5" />
              Trust & Security
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="section-heading">
            Privacy
            <span className="text-forest-600 italic"> Policy.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto text-center text-sm sm:text-base">
            Last Updated: May 25, 2026. Learn how we safeguard maternal health information, patient records, and coordinate secure data under Kenyan regulations.
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
            <article id="introduction" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  1. Introduction
                </h2>
              </div>
              <p>
                TotoAfya Digital (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a product of <strong>TerraSept Solutions Ltd</strong>, is committed to protecting the privacy and security of maternal health records and clinical system data. This Privacy Policy details how we collect, use, and secure your personal and medical information.
              </p>
              <p>
                By accessing or using the TotoAfya Digital platform, including our clinic nurse portal, web client, or caregiver application, you consent to the data practices described in this policy. We ensure that all medical data is handled in strict compliance with <strong>Kenya&apos;s Data Protection Act 2019</strong> and international standards like the Health Insurance Portability and Accountability Act (<strong>HIPAA</strong>).
              </p>
            </article>

            {/* Section 2 */}
            <article id="data-we-collect" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  2. Data We Collect
                </h2>
              </div>
              <p>
                To provide comprehensive antenatal and postnatal care coordination, TotoAfya Digital processes information in three categories:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-2xl bg-forest-50/50 border border-forest-100">
                  <h4 className="font-display font-bold text-sm text-gray-900 mb-2">Patient Records (Clinical Info)</h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-600">
                    <li>Immunization tracker history &amp; vaccination status.</li>
                    <li>Antenatal Care (ANC) logs, gestation age, weight tracker.</li>
                    <li>Due dates and risk status identifiers (MoH classifications).</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl bg-earth-50/50 border border-earth-100">
                  <h4 className="font-display font-bold text-sm text-gray-900 mb-2">Caregiver &amp; Provider Info</h4>
                  <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-600">
                    <li>Healthcare practitioner names, clinic locations, and licenses.</li>
                    <li>Guardian phone numbers (for automated SMS compliance alerts).</li>
                    <li>Billing information (M-Pesa transaction numbers).</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 3 */}
            <article id="how-we-use-data" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  3. How We Use Data
                </h2>
              </div>
              <p>
                We use the information we collect solely to improve maternal care outcomes. This includes:
              </p>
              <ul className="space-y-2">
                {[
                  'Generating automated SMS immunization and checkup reminders for mothers.',
                  'Enabling clinical nurses to access, update, and search patient registers.',
                  'Consolidating anonymous, aggregated health statistics for county health boards (e.g., vaccine dropout rates).',
                  'Validating subscription status and security logins on our clinic dashboard portals.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4.5 h-4.5 text-forest-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-gray-500 italic">
                Important: We do not sell, rent, or trade clinical data or personal phone numbers to pharmaceutical brands or marketing agencies.
              </p>
            </article>

            {/* Section 4 */}
            <article id="security-compliance" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  4. Security &amp; Compliance
                </h2>
              </div>
              <p>
                Data security is our primary focus. We implement standard safeguards to ensure health files remain confidential and protected:
              </p>
              <div className="space-y-3 mt-2">
                <div className="flex items-start gap-3">
                  <span className="bg-forest-100 text-forest-800 text-xs font-bold px-2 py-0.5 rounded-md mt-1">Encryption</span>
                  <p className="text-sm">
                    All patient clinical data is encrypted in transit using SSL/TLS protocols and at rest using AES-256 standard encryption on secure servers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-forest-100 text-forest-800 text-xs font-bold px-2 py-0.5 rounded-md mt-1">Access Control</span>
                  <p className="text-sm">
                    Only authorized clinic practitioners with active credentials can read patient records. Staff accounts are isolated, audited, and secured.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-forest-100 text-forest-800 text-xs font-bold px-2 py-0.5 rounded-md mt-1">Offline Security</span>
                  <p className="text-sm">
                    Offline registries cached on clinic devices are stored within restricted browser sandbox storage and sync automatically when safe internet access is restored.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 5 */}
            <article id="patient-rights" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  5. Patient &amp; User Rights
                </h2>
              </div>
              <p>
                Under Kenya&apos;s Data Protection Act 2019, clinical patients and users registered on TotoAfya Digital retain clear rights regarding their data:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Right of Access:</strong> Caregivers can request a digital file export of their active child health timeline.</li>
                <li><strong>Right to Rectification:</strong> Clinics can update outdated or incorrect demographic or contact numbers.</li>
                <li><strong>Right to Deletion (&quot;Right to be Forgotten&quot;):</strong> Users can request the removal of caregiver accounts, subject to Ministry of Health medical record retention regulations.</li>
              </ul>
            </article>

            {/* Section 6 */}
            <article id="contact-us" className="space-y-4 scroll-mt-24 border-t border-gray-150 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-forest-600" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  6. Contact &amp; Support
                </h2>
              </div>
              <p>
                If you have questions about this policy, or if you need to coordinate security compliance concerns with TerraSept Solutions, contact our technology team:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center text-center">
                  <Mail className="w-5 h-5 text-forest-600 mb-2" />
                  <span className="font-sans font-bold text-xs text-gray-900">Email Contact</span>
                  <a href="mailto:cto@terraseptsolutions.com" className="text-xs text-forest-650 hover:underline mt-1">cto@terraseptsolutions.com</a>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center text-center">
                  <Phone className="w-5 h-5 text-forest-600 mb-2" />
                  <span className="font-sans font-bold text-xs text-gray-900">Support Phone</span>
                  <a href="tel:+254113242983" className="text-xs text-forest-650 hover:underline mt-1">+254 113 242 983</a>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center text-center">
                  <MapPin className="w-5 h-5 text-forest-600 mb-2" />
                  <span className="font-sans font-bold text-xs text-gray-900">Corporate Address</span>
                  <span className="text-xs text-gray-500 mt-1">Kisii Town, Kenya</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  )
}
