// ── TotoAfya Digital — Medical Disclaimer ──────────────────────
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { ShieldAlert, Heart, Activity, Siren, HelpCircle, ArrowRight } from 'lucide-react'

const sections = [
  { id: 'educational', label: '1. Educational Support Only' },
  { id: 'not-medical-advice', label: '2. Not Professional Advice' },
  { id: 'no-relationship', label: '3. No Provider Relationship' },
  { id: 'sync-accuracy', label: '4. System Data Limitations' },
  { id: 'emergencies', label: '5. Emergency Situations' },
]

export default function Disclaimer() {
  const [activeSection, setActiveSection] = useState('educational')
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
            <span className="section-label flex items-center gap-1.5 mx-auto bg-coral-50 text-coral-600 border border-coral-100">
              <ShieldAlert className="w-3.5 h-3.5" />
              Medical Disclaimer
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="section-heading">
            Clinical
            <span className="text-coral-500 italic"> Disclaimer.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mt-4 mx-auto text-center text-sm sm:text-base">
            Last Updated: May 25, 2026. Important information regarding the scope of TotoAfya Digital health monitoring and care coordination features.
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
                        ? 'bg-coral-50/50 text-coral-700 font-bold border-l-4 border-coral-450 pl-2'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-coral-50/20'
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
            <article id="educational" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-coral-500" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  1. Educational Support Only
                </h2>
              </div>
              <p>
                TotoAfya Digital (&quot;Platform&quot;), including its clinic nurse registries, SMS immunization reminders, and maternal care AI companions, is designed and provided by <strong>TerraSept Solutions Ltd</strong> to offer administrative, log management, and general educational health tracking.
              </p>
              <p>
                All materials, immunization timelines, weight trackers, and care checkups hosted on the website or applications conform to standards such as WHO and Kenya Ministry of Health (MoH) guidelines. However, these features are intended for support purposes and statistical records only.
              </p>
            </article>

            {/* Section 2 */}
            <article id="not-medical-advice" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-coral-500" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  2. Not Professional Medical Advice
                </h2>
              </div>
              <p className="font-semibold text-gray-900">
                The information provided on TotoAfya Digital does not constitute professional medical advice, diagnosis, treatment, or clinical consultation.
              </p>
              <p>
                Caregivers and platform users must not rely on the information provided by our applications, charts, or automated notification responses as an alternative to advice from qualified obstetricians, pediatricians, nurses, or other clinical practitioners.
              </p>
              <p>
                We highly recommend verifying care indicators, immunization schedules, and high-risk ANC status indicators directly with licensed medical practitioners. Never disregard professional clinical advice or delay seeking medical attention due to information seen on TotoAfya Digital.
              </p>
            </article>

            {/* Section 3 */}
            <article id="no-relationship" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-coral-500" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  3. No Doctor-Patient Relationship
                </h2>
              </div>
              <p>
                Your usage of TotoAfya Digital, including communication with our AI assistants or configuring patient notifications, does not create or establish a physician-patient relationship, nurse-patient relationship, or clinical provider relationship between you and TerraSept Solutions Ltd.
              </p>
              <p>
                The digital registry platform serves as a tool for registered clinics and their respective health workers to log and organize physical data. Clinic operators are independently responsible for the medical treatment, assessments, and diagnostic correctness provided to their registered mothers.
              </p>
            </article>

            {/* Section 4 */}
            <article id="sync-accuracy" className="space-y-4 scroll-mt-24">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-coral-500" />
                <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                  4. System Data Limitations
                </h2>
              </div>
              <p>
                While we strive to ensure that immunization notifications, clinic schedules, and records remain accurate and synchronized, TotoAfya Digital operates with offline-first capabilities. This means:
              </p>
              <ul className="space-y-2">
                {[
                  'Information cached on local clinic devices might experience sync delays in remote regions with low network connectivity.',
                  'Automated SMS notifications depend on local telecommunication networks, and delivery cannot be 100% guaranteed.',
                  'Clinical logs are created and managed by individual clinic staff, and we are not liable for data entry errors or incorrect patient profiles.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-coral-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Section 5 */}
            <article id="emergencies" className="space-y-4 scroll-mt-24 border-t border-gray-150 pt-8">
              <div className="flex items-center gap-2.5 mb-2 p-4 bg-coral-50/50 border border-coral-100 rounded-2xl">
                <Siren className="w-6 h-6 text-coral-650 shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-display font-bold text-lg text-gray-900">
                    5. Emergency Situations
                  </h2>
                  <p className="text-xs text-coral-800 font-semibold mt-0.5">
                    Critical warning for acute symptoms or emergency incidents.
                  </p>
                </div>
              </div>
              <p className="font-medium text-gray-900">
                TotoAfya Digital must NOT be used in medical emergencies.
              </p>
              <p>
                If an expectant mother, newborn, or infant is experiencing acute symptoms, labor signs, persistent fever, or other urgent medical conditions, immediately contact or visit the nearest physical clinic, maternity hospital, or health center.
              </p>
              <p className="text-sm">
                For administrative questions or clinical registry inquiries, you may contact TerraSept Solutions Ltd:
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
