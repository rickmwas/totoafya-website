// ── TotoAfya Digital — Interactive Promo & Flyer Page ───────────
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Printer, Smartphone, LayoutDashboard, Eye, ArrowRight } from 'lucide-react'

// ── Data structure for the flyers ─────────────────────────────────
interface FlyerData {
  id: string
  tabLabel: string
  title: string
  badge: string
  tagline: string
  headerText: string
  headline: string
  footerText: string
  image: string
  themeColor: string
  accentColor: string
  bgColor: string
  features: { title: string; desc: string }[]
  explanation: {
    problem: string
    solution: string
    impact: string
  }
}

const flyers: FlyerData[] = [
  {
    id: 'clinical',
    tabLabel: '🩺 Clinic & B2B Portal',
    title: 'The Clinical Champion',
    badge: 'B2B CLINICAL REGISTER',
    tagline: 'Empowering health systems, saving infant lives.',
    headerText: 'TOTOAFYA DIGITAL · CLINICAL SUITE',
    headline: 'Digitize Your Clinic. Elevate Patient Care.',
    footerText: 'Request a clinic onboarding via partnerships@totoafya.co.ke',
    image: '/images/clinical_transition.png',
    themeColor: 'text-forest-600 border-forest-200 bg-forest-50/50',
    accentColor: 'bg-forest-600',
    bgColor: 'bg-forest-950',
    features: [
      {
        title: 'Offline-First Register',
        desc: 'Nurses log maternal and child parameters without internet. Data syncs automatically once online.'
      },
      {
        title: 'Auto-Calibrated Growth Charts',
        desc: 'Plots child weight/height curves instantly against WHO standards, flagging developmental risks.'
      },
      {
        title: 'Central County Dashboards',
        desc: 'Gives public health directors consolidated coverage metrics to prioritize vaccine allocations.'
      }
    ],
    explanation: {
      problem: 'BULKY paper registers are easily lost, leading to immunization drop-offs and administrative delays.',
      solution: 'A unified digital B2B clinic portal that streamlines mother-baby records and generates automated care schedules.',
      impact: 'Reduces vaccine default rates by 40% across Kisii, Nyamira, Nakuru, and Kericho counties.'
    }
  },
  {
    id: 'caregiver',
    tabLabel: '🤱 Mother & B2C App',
    title: 'Mama & Toto Care',
    badge: 'CAREGIVER PORTAL',
    tagline: 'A digital mother-baby card in the palm of your hand.',
    headerText: 'TOTOAFYA DIGITAL · MOBILE COMPANION',
    headline: 'Mama Afya, Toto Imara. Smart Maternal Care.',
    footerText: 'Free for mothers at registered clinics. Visit totoafya.co.ke',
    image: '/images/mother_sms_reminder.png',
    themeColor: 'text-coral-500 border-coral-200 bg-coral-50/50',
    accentColor: 'bg-coral-500',
    bgColor: 'bg-coral-900',
    features: [
      {
        title: 'Automated SMS Alerts',
        desc: 'Sends vaccine and appointment reminders directly in Swahili, Ekegusii, and English.'
      },
      {
        title: 'Digital Health Card',
        desc: 'Replaces fragile paper booklets. Access your baby\'s full medical history from any browser.'
      },
      {
        title: 'AI Health Companion',
        desc: 'Get vetted, clinically accurate answers to maternal wellness queries 24/7.'
      }
    ],
    explanation: {
      problem: 'Physical health cards are easily lost, and caregivers miss critical vaccine intervals due to lack of reminders.',
      solution: 'A mobile web app that sends SMS alerts based on the child\'s DOB, keeping maternal care on track.',
      impact: 'Consistently ensures mothers never miss vaccination check-ups, providing peace of mind.'
    }
  },
  {
    id: 'technology',
    tabLabel: '📱 App Tech & AI',
    title: 'Smarter Maternal Companion',
    badge: 'HEALTH TECH ARCHITECTURE',
    tagline: 'High-performance maternal tech for low-resource clinics.',
    headerText: 'TOTOAFYA DIGITAL · TECHNOLOGY STACK',
    headline: 'Smarter Maternal Care in Your Pocket.',
    footerText: 'Scan the QR code at your local facility or visit totoafya.co.ke',
    image: '/images/offline_sync.png',
    themeColor: 'text-earth-600 border-earth-200 bg-earth-50/50',
    accentColor: 'bg-earth-500',
    bgColor: 'bg-earth-900',
    features: [
      {
        title: 'Lightweight PWA (<3MB)',
        desc: 'Installs instantly from Chrome or Safari. Operates fully offline to conserve data and battery.'
      },
      {
        title: 'Secure Supabase Layer',
        desc: 'Protected by row-level database security. Fully compliant with Kenya Data Protection Act 2019.'
      },
      {
        title: 'Clinically Vetted AI Chat',
        desc: 'Multilingual conversational AI trained on Ministry of Health (MoH) care guidelines.'
      }
    ],
    explanation: {
      problem: 'Heavy mobile apps fail in low-resource settings due to storage limits and poor internet bandwidth.',
      solution: 'A lightweight Progressive Web App utilizing secure offline replication databases.',
      impact: 'Enables 100% offline access to baby registers and health logs on low-end hardware.'
    }
  }
]

export default function Promo() {
  const [activeTab, setActiveTab] = useState<string>('clinical')
  const currentFlyer = flyers.find(f => f.id === activeTab) || flyers[0]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="pt-16 min-h-screen bg-cream-50 print:bg-white print:pt-0">
      {/* ── Header (Hidden on Print) ─────────────────────────── */}
      <section className="section mesh-bg text-center relative overflow-hidden py-16 print:hidden">
        <div className="absolute -right-32 -top-16 w-96 h-96 rounded-[100px_350px_100px_350px] border-[3px] border-forest-100/25 rotate-[25deg] pointer-events-none" />
        <div className="absolute -left-48 bottom-12 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] bg-forest-50/30 rotate-[-15deg] pointer-events-none blur-3xl" />

        <div className="container-tight max-w-3xl mx-auto relative z-10">
          <span className="section-label">Digital Flyers & Posters</span>
          <h1 className="section-heading mt-4 text-4xl lg:text-5xl">
            Posters That Speak
            <br />
            <span className="text-forest-600 italic">For TotoAfya Digital</span>
          </h1>
          <p className="section-subheading mt-4 max-w-2xl mx-auto text-gray-600">
            Below are our B2B and B2C marketing flyers. They are built as clean, high-contrast digital poster cards combining premium artwork with structured, readable copywriting. Use the tabs to toggle, or print/save them.
          </p>
        </div>
      </section>

      {/* ── Tab Selector & Action Controls (Hidden on Print) ──── */}
      <section className="container max-w-4xl mx-auto px-4 -mt-8 relative z-20 print:hidden flex flex-col sm:flex-row gap-4 justify-between items-center">
        {/* Feature Tab Selector */}
        <div className="bg-white rounded-2xl shadow-warm border border-gray-100 p-1.5 flex flex-wrap gap-1.5 w-full sm:w-auto">
          {flyers.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`py-2.5 px-4 rounded-xl font-sans font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === f.id
                  ? 'bg-forest-600 text-white shadow-md'
                  : 'text-gray-500 hover:bg-cream-100 hover:text-forest-700'
              }`}
            >
              {f.tabLabel}
            </button>
          ))}
        </div>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="py-3 px-6 bg-white border border-gray-200 rounded-xl hover:border-forest-400 hover:text-forest-700 font-sans text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm transition-all duration-300 w-full sm:w-auto justify-center"
        >
          <Printer className="w-4 h-4 text-forest-600" />
          Print / Save Flyer PDF
        </button>
      </section>

      {/* ── Main Flyer Presentation Grid ─────────────────────── */}
      <section className="section py-12 container max-w-6xl mx-auto px-4 print:py-0 print:px-0">
        <div className="grid lg:grid-cols-12 gap-12 items-start print:grid-cols-1 print:gap-0">
          
          {/* ── LEFT COLUMN: THE DIGITAL PRINT FLYER ── */}
          <div className="lg:col-span-6 flex flex-col items-center print:w-full">
            {/* The Print Container Card (Aspect ratio 3:4 mimics a standard flyer) */}
            <div 
              id="printable-flyer"
              className="w-full max-w-[480px] aspect-[3/4] bg-white border border-gray-255 rounded-[32px] p-6 shadow-warm-lg flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-2xl print:border-none print:shadow-none print:p-0 print:rounded-none print:max-w-none print:aspect-auto"
            >
              {/* Flyer Header: Brand Logo & Category */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="TotoAfya Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <span className="font-display font-black text-sm text-forest-700 tracking-tight">TotoAfya</span>
                    <span className="font-sans text-[8px] uppercase tracking-wider block font-bold text-earth-600">Digital Care</span>
                  </div>
                </div>
                <span className={`font-sans text-[9px] font-bold px-2.5 py-1 rounded-full ${currentFlyer.themeColor}`}>
                  {currentFlyer.badge}
                </span>
              </div>

              {/* Flyer Visual Asset Frame */}
              <div className="my-4 relative overflow-hidden rounded-2xl aspect-[16/9] border border-gray-100 shadow-inner flex items-center justify-center">
                <img
                  src={currentFlyer.image}
                  alt={currentFlyer.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Flyer Marketing Headline */}
              <div className="space-y-1 text-center">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 leading-tight">
                  {currentFlyer.headline}
                </h3>
                <p className="font-sans text-xs text-gray-500 font-semibold italic">
                  "{currentFlyer.tagline}"
                </p>
              </div>

              {/* Flyer Key Value Points (Clear, legible features on the flyer itself) */}
              <div className="my-4 space-y-3">
                {currentFlyer.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 bg-cream-100/50 p-2.5 rounded-xl border border-gray-150/40">
                    <div className={`w-6 h-6 rounded-lg ${currentFlyer.accentColor} text-white flex items-center justify-center flex-shrink-0 text-xs font-bold`}>
                      {i + 1}
                    </div>
                    <div className="leading-tight">
                      <h4 className="font-display font-bold text-xs text-gray-900">{feat.title}</h4>
                      <p className="font-sans text-[10px] text-gray-500 mt-0.5 leading-normal">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Flyer Footer: Call to Action */}
              <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-[10px] font-sans text-gray-500 font-bold">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
                  Kenya Ministry of Health Compliant
                </span>
                <span>{currentFlyer.footerText}</span>
              </div>
            </div>
            
            <p className="text-gray-400 font-sans text-[10px] mt-4 print:hidden">
              Tip: Click the "Print / Save Flyer PDF" button to print or download a clean A4 flyer layout.
            </p>
          </div>

          {/* ── RIGHT COLUMN: COMPLETE EXPLANATION (Hidden on Print) ── */}
          <div className="lg:col-span-6 space-y-8 bg-white p-8 sm:p-10 rounded-3xl shadow-warm border border-gray-100/50 print:hidden">
            <div>
              <span className="font-sans font-bold text-xs uppercase tracking-wider text-earth-500 bg-earth-50 border border-earth-100 px-3 py-1 rounded-full">
                Value Breakdown
              </span>
              <h2 className="font-display font-bold text-3xl text-gray-900 mt-4 leading-tight">
                Why we built {currentFlyer.title}
              </h2>
              <p className="font-sans text-sm text-gray-500 mt-2 leading-relaxed">
                Marketing materials should connect emotional visual storytelling with logical product capability. Below is the operational narrative behind this flyer's design:
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Problem & Solution Split */}
            <div className="space-y-4">
              <div className="bg-red-50/50 border border-red-100/60 p-5 rounded-2xl space-y-1">
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  The Problem It Solves
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  {currentFlyer.explanation.problem}
                </p>
              </div>

              <div className="bg-forest-50/50 border border-forest-100/60 p-5 rounded-2xl space-y-1">
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-forest-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-600" />
                  The Platform Solution
                </h3>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  {currentFlyer.explanation.solution}
                </p>
              </div>
            </div>

            {/* Real Impact Summary */}
            <div className="bg-amber-50/40 border border-amber-100 p-5 rounded-2xl flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                %
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-amber-800">Proven Operational Impact</h4>
                <p className="font-sans text-xs text-amber-900/80 leading-relaxed">
                  {currentFlyer.explanation.impact}
                </p>
              </div>
            </div>

            {/* B2B / B2C Conversion CTA */}
            <div className="pt-4 flex gap-4">
              <a
                href="mailto:partnerships@totoafya.co.ke"
                className="flex-1 py-3 px-6 bg-forest-600 hover:bg-forest-700 text-white font-sans font-bold text-xs rounded-xl shadow-warm flex items-center justify-center gap-2 transition-all duration-200"
              >
                Inquire About Partnerships
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom Section (Hidden on Print) ─────────────────── */}
      <section className="section bg-forest-900 text-white text-center relative overflow-hidden py-16 print:hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-[100px_350px_100px_350px] border border-white/10 rotate-[20deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-earth-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <Smartphone className="w-12 h-12 text-earth-300 mx-auto" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Ready to Partner With Us?
          </h2>
          <p className="font-sans text-sm sm:text-base text-forest-100 leading-relaxed max-w-xl mx-auto">
            Bring the offline-first TotoAfya Digital platform to your county, hospital network, or community care clinic. Let's make maternal and child health tracking seamless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="mailto:partnerships@totoafya.co.ke"
              className="py-3 px-8 bg-earth-500 hover:bg-earth-600 font-sans font-bold text-sm text-white rounded-full shadow-amber transition-all duration-300"
            >
              Email Partnerships
            </a>
            <a
              href="/contact"
              className="py-3 px-8 bg-transparent hover:bg-white/10 border border-white/30 hover:border-white font-sans font-bold text-sm text-white rounded-full transition-all duration-300"
            >
              Contact Local Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
