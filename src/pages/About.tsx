// ── TotoAfya Digital — About Page ──────────────────────────────
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer, slideLeft, slideRight, hoverScale } from '@/lib/animations'
import { Globe, Shield, Users, Award, CheckCircle } from 'lucide-react'

// ── Team members ─────────────────────────────────────────────────
const team = [
  {
    name:   'Erick Mwangi',
    role:   'Founder & CTO',
    bio:    'Lead architect and developer of TotoAfya Digital. Directs engineering of robust, offline-first health registry infrastructure at TerraSept Solutions Ltd.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=350&q=80',
    tag:    'Engineering & Product',
  }
]

// ── Values ───────────────────────────────────────────────────────
const values = [
  {
    icon: <Globe className="w-6 h-6 text-forest-600" />,
    title: 'Built for Africa',
    desc: 'Every design and architecture decision is grounded in local clinic realities — offline functionality, local languages, and low-end hardware compatibility.',
  },
  {
    icon: <Shield className="w-6 h-6 text-forest-600" />,
    title: 'Security & Compliance',
    desc: 'Patient records are encrypted end-to-end and stored securely, fully aligned with Kenya\'s Data Protection Act 2019 and HIPAA guidelines.',
  },
  {
    icon: <Users className="w-6 h-6 text-forest-600" />,
    title: 'Provider-Driven',
    desc: 'We co-design features alongside clinical nurses, county directors, and community health networks to solve real care bottlenecks.',
  },
  {
    icon: <Award className="w-6 h-6 text-forest-600" />,
    title: 'Evidence-Based',
    desc: 'All growth metrics and immunization tables conform to WHO guidelines and Kenya Ministry of Health NHSSP protocols.',
  },
]

export default function About() {
  const heroRef  = useRef(null)
  const missionRef = useRef(null)
  const teamRef  = useRef(null)
  const valuesRef = useRef(null)
  const awardRef = useRef(null)

  const heroInView    = useInView(heroRef,    { once: true })
  const missionInView = useInView(missionRef, { once: true, margin: '-80px' })
  const teamInView    = useInView(teamRef,    { once: true, margin: '-80px' })
  const valuesInView  = useInView(valuesRef,  { once: true, margin: '-80px' })
  const awardInView   = useInView(awardRef,   { once: true, margin: '-80px' })

  return (
    <div className="pt-16">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="section mesh-bg text-center relative overflow-hidden"
        aria-labelledby="about-heading"
      >
        {/* Curved background line decoration mirroring the hero */}
        <div className="absolute -right-32 -top-16 w-96 h-96 rounded-[100px_350px_100px_350px] border-[3px] border-forest-100/25 rotate-[25deg] pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-48 bottom-12 w-[500px] h-[500px] rounded-[350px_100px_350px_100px] bg-forest-50/30 rotate-[-15deg] pointer-events-none blur-3xl" aria-hidden="true" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          className="container-tight max-w-3xl mx-auto flex flex-col items-center relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-6 flex">
            <img
              src="/logo.png"
              alt="TotoAfya Logo"
              className="h-16 w-auto object-contain"
            />
          </motion.div>
          <motion.span variants={fadeUp} className="section-label">Our Story</motion.span>
          <motion.h1
            variants={fadeUp}
            id="about-heading"
            className="section-heading mt-5 text-5xl lg:text-6xl"
          >
            Maternal care,
            <br />
            <span className="text-forest-600 italic">reimagined for Africa.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="section-subheading mt-5 mx-auto text-center">
            TotoAfya Digital was founded under TerraSept Solutions to bridge the gap between
            preventative maternal health policies and the real-world digital capabilities of
            community clinics and county health systems in Kenya.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section ref={missionRef} className="section bg-white">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
            >
              <span className="section-label">Our Mission</span>
              <h2 className="section-heading mt-4">
                Every child deserves a
                <span className="text-forest-600 italic"> healthy start.</span>
              </h2>
              <p className="section-subheading mt-4">
                Our mission is to reduce preventable infant and maternal mortality
                by putting clinically-grounded digital tools directly into the hands of
                healthcare providers and caregivers — regardless of where they live or
                connectivity constraints.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Reduce vaccine drop-out rates through automated reminders',
                  'Digitize paper registers for perfect care continuity across visits',
                  'Empower mothers with trusted health guidance in local languages',
                  'Give facilities dashboard analytics to prioritize high-risk cases',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center
                                    justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-forest-600" />
                    </div>
                    <span className="font-sans text-sm text-gray-600">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={missionInView ? 'visible' : 'hidden'}
              className="relative"
            >
              <div className="relative rounded-[20px_100px_20px_100px] border-4 border-forest-600 shadow-warm-lg overflow-hidden aspect-square max-w-sm mx-auto bg-white">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80"
                  alt="Nurse providing maternal care in a clinic"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/10 to-transparent" />
              </div>

              {/* Award badge overlay matching Hero StatBadge style */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-xs rounded-2xl
                              p-4 shadow-card-lg border border-gray-100 max-w-[210px] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Award className="w-4.5 h-4.5 stroke-[2]" />
                </div>
                <div className="leading-tight">
                  <div className="font-sans font-bold text-xs text-gray-900">
                    Best Project
                  </div>
                  <div className="font-sans text-[10px] text-gray-500 mt-1 font-semibold">
                    Kisii Innovation Week
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────── */}
      <section ref={teamRef} className="section mesh-bg" aria-labelledby="team-heading">
        <div className="container-tight">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-label">Leadership</motion.span>
            <motion.h2
              variants={fadeUp}
              id="team-heading"
              className="section-heading mt-4"
            >
              The force behind TotoAfya.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            className="max-w-md mx-auto"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                {...hoverScale}
                className="card text-center group border border-gray-100 hover:border-forest-300/80 transition-all duration-300"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover
                             ring-4 ring-forest-50 border border-white group-hover:ring-forest-200
                             transition-all duration-300"
                />
                <div className="mt-5">
                  <span className="bg-amber-50 text-amber-700 border border-amber-100 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">{member.tag}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mt-4">
                  {member.name}
                </h3>
                <p className="font-sans text-xs font-semibold text-forest-600 mb-3">
                  {member.role}
                </p>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────── */}
      <section ref={valuesRef} className="section bg-white" aria-labelledby="values-heading">
        <div className="container-tight">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="section-label">What We Stand For</motion.span>
            <motion.h2
              variants={fadeUp}
              id="values-heading"
              className="section-heading mt-4"
            >
              Our core <span className="text-forest-600 italic">values.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} {...hoverScale} className="card group cursor-default text-center flex flex-col items-center border border-gray-100 hover:border-forest-300/80 transition-all duration-300">
                <div className="w-14 h-14 rounded-[8px_20px_8px_20px] bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Award highlight ───────────────────────────────────── */}
      <section ref={awardRef} className="section bg-forest-900 text-white text-center relative overflow-hidden">
        {/* Curved backdrop outlines echoing the hero leaf */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-[100px_350px_100px_350px] border border-white/10 rotate-[20deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-earth-500/10 blur-[100px] rounded-full" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={awardInView ? 'visible' : 'hidden'}
          className="container-tight max-w-2xl mx-auto flex flex-col items-center relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-4">
            <Award className="w-12 h-12 text-earth-300 mx-auto" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl sm:text-4xl text-white"
          >
            Best Project — Digital Healthcare
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 font-sans font-semibold text-forest-200 text-sm uppercase tracking-wider">
            Kisii Innovation Week · TerraSept Solutions Ltd
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 font-sans text-sm sm:text-base text-forest-100 leading-relaxed">
            TotoAfya Digital was recognized as the best project in the Digital Healthcare
            category at Kisii Innovation Week — validating our approach to
            technology-driven maternal care in East Africa.
          </motion.p>
        </motion.div>
      </section>

    </div>
  )
}

