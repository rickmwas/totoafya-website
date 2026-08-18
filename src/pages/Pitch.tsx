import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw, 
  BookOpen, 
  Users, 
  WifiOff, 
  TrendingUp, 
  Heart, 
  Check, 
  X, 
  Clock, 
  HelpCircle, 
  Compass, 
  Smartphone, 
  Monitor, 
  Info,
  ChevronLeft,
  ChevronRight,
  Shield,
  Activity,
  Layers,
  Award
} from 'lucide-react';

interface Slide {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  duration: number; // Target duration in seconds
  notes: string;
  grandmaChecklist: string[];
  partnerChecklist: string[];
}

export default function Pitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeMockupTab, setActiveMockupTab] = useState<'mother' | 'nurse'>('mother');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      id: 1,
      category: "THE OPPORTUNITY",
      title: "Ending the Maternal and Child Health Data Blackout",
      subtitle: "Offline-first clinical registry and caregiver support networks for Sub-Saharan Africa",
      duration: 15,
      notes: "Every 90 seconds, a mother dies during childbirth in Sub-Saharan Africa. 80% of these deaths could be prevented with basic clinical tracking. But there is a data blackout. 60% of rural clinics go offline daily, forcing nurses to rely on paper logbooks that leave mothers in the dark. TotoAfya ends this blackout with our offline-first care platform.",
      grandmaChecklist: ["What does TotoAfya do?", "Who is it for?"],
      partnerChecklist: ["What do you do?", "Who has this problem?"]
    },
    {
      id: 2,
      category: "THE PROBLEM",
      title: "Amina's Journey: The Care Gap",
      subtitle: "Siloed data and offline outages compromise maternal care safety",
      duration: 30,
      notes: "Meet Amina, a mother-to-be in a rural community. In her pregnancy: A CHV visits her home and knows her living conditions, she goes for clinic visits where a nurse checks her health, then another nurse at delivery sees only her latest record. Each sees only a piece of her story. When something critical happens – like high blood pressure – it's often too late to catch. TotoAfya bridges those pieces.",
      grandmaChecklist: ["Why is it needed?"],
      partnerChecklist: ["Why is this a real problem?", "Who else is doing this?"]
    },
    {
      id: 3,
      category: "COMPETITIVE LANDSCAPE",
      title: "Existing Solutions Leave Care Fragmented",
      subtitle: "Why mHealth apps, SMS campaigns, and legacy EMRs fall short on the ground",
      duration: 30,
      notes: "You might say, aren’t there many maternal health tools already? There are pregnancy apps and SMS programs (like mPlus in Nairobi, or PROMPTS by Jacaranda for SMS reminders), and even national systems (DHIS2, Kenya’s open-source health info system) for reporting stats. Each has strengths – education, reminders or reporting – but none provides continuity of care. Nurses and CHVs typically still use paper or stand-alone tools. The data flows up to dashboards, but doesn’t flow back to help each mother in real time.",
      grandmaChecklist: ["Why is it better?"],
      partnerChecklist: ["Why are they not enough?", "Why will people switch?"]
    },
    {
      id: 4,
      category: "THE PRODUCT",
      title: "TotoAfya: Connected, Resilient Care",
      subtitle: "Multi-portal system synchronised across caregivers, volunteers, and clinics",
      duration: 30,
      notes: "TotoAfya is an offline-first maternal care coordination platform. In simple terms, it's WhatsApp meets health record: Mothers get tailored reminders and can message healthcare workers. CHVs use an app to track their households' pregnancies, schedule visits, and record vital signs. Nurses/Facilities see an integrated view of each mother (history, missed visits, risk flags). No doctor replaces or doubles their work – TotoAfya connects their workflows. If Mama Akinyi’s blood pressure is high, her CHV or nurse gets an alert and can intervene early.",
      grandmaChecklist: ["What does TotoAfya do?", "Why is it better?"],
      partnerChecklist: ["What do you do?", "Why are you different?"]
    },
    {
      id: 5,
      category: "THE MOAT",
      title: "Our Defensibility & Timing",
      subtitle: "Capitalising on national digital mandates with database-level offline sync",
      duration: 30,
      notes: "The timing is right. Kenya has just launched a national eCHIS strategy, aiming to digitise community health data. County health departments are hungry for tools that can work offline in rural areas. Yet most solutions assume constant internet or focus on data reporting. We built TotoAfya for the realities on the ground: intermittent connectivity, overworked CHVs, and busy clinics. Our team combines clinical, tech, and local expertise. We’ve trained CHVs in Naivasha (where maternal mortality is high) and know their workflows. We’re embedded in the community we serve, not distant developers.",
      grandmaChecklist: ["Why will it succeed?"],
      partnerChecklist: ["Why now?", "Why are you the team to build it?"]
    },
    {
      id: 6,
      category: "VALIDATION",
      title: "Traction & County Pilot Setup",
      subtitle: "Structured 12-week deployment with local county clinic partnerships",
      duration: 30,
      notes: "We’ve validated the problem and interest. To date: User research: 30 CHVs and 20 nurses interviewed in Naivasha (they say this gap affects their work every day). Pilots: In discussion with local clinics to pilot TotoAfya next quarter. Aimed metrics: improve facility antenatal visit compliance by 30%. Benchmarks: Similar Kenyan initiatives (e.g. Jacaranda's PROMPTS SMS) show even simple reminders can boost care-seeking. We expect a more comprehensive tool to exceed that impact.",
      grandmaChecklist: ["Why will it succeed?"],
      partnerChecklist: ["What proof do you have?", "Who has this problem?"]
    },
    {
      id: 7,
      category: "BUSINESS MODEL",
      title: "Market Size & Sustainable Revenue",
      subtitle: "$1.2B addressable market, scaling through facility SaaS and county data API licenses",
      duration: 30,
      notes: "Our initial customers are County health departments and NGOs. Kenya funds digital maternal programs via donors and now via value-based contracts (like Britam Lea Mama). Counties pay per CHV or per mother in program. The maternal care market is large: ~2 million pregnancies/year in Kenya (and ~30M in sub-Saharan Africa). Even reaching 5% of Kenya’s mothers is a >100,000 user opportunity. TotoAfya’s SaaS licensing and training fees are a tiny fraction of the cost of one maternal death, so it’s affordable. Over time we envision integration with national systems like DHIS2 and scaling across East Africa.",
      grandmaChecklist: ["Why will it succeed?"],
      partnerChecklist: ["Who pays?", "How big can this become?"]
    },
    {
      id: 8,
      category: "THE FUTURE",
      title: "Our Vision: Universal Maternal Care",
      subtitle: "Raising $1.5M Seed to scale product sync pipelines and regulatory clearances",
      duration: 30,
      notes: "Our vision: empower every pregnant woman in Kenya with a digital care network, so that her journey – from pregnancy through childbirth – is fully coordinated and safe. TotoAfya isn’t just another app; it’s the operational backbone for maternal care. With your support, we will save lives by turning fragmented information into continuous care.",
      grandmaChecklist: ["What does TotoAfya do?", "Why will it succeed?"],
      partnerChecklist: ["Why are you the team to build it?", "How big can this become?"]
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Autoplay slideshow
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, slides[currentSlide].duration * 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  // Timer logic
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const cumulativeTarget = slides.slice(0, currentSlide + 1).reduce((acc, s) => acc + s.duration, 0);
  const timeDifference = elapsedTime - cumulativeTarget;

  const getPacingText = () => {
    if (elapsedTime === 0) return { text: "Click play on timer to track pacing", color: "text-gray-400" };
    if (Math.abs(timeDifference) <= 5) return { text: "On track! Perfect Pace.", color: "text-[#107C41]" };
    if (timeDifference > 5) return { text: `Slowing down (+${timeDifference}s) - speed up!`, color: "text-[#D13438]" };
    return { text: `Running fast (${timeDifference}s) - slow down!`, color: "text-[#E68A00]" };
  };

  const pacing = getPacingText();

  // Slide content render functions
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0: // Cover
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full text-left">
            <div className="space-y-6 pr-4">
              <span className="bg-[#006B5F]/10 text-[#006B5F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase font-sans">
                YC Pitch Presentation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A0A0A] leading-tight font-bold">
                Ending the Maternal <br />
                <span className="text-[#006B5F] font-serif italic">Data Blackout</span>
              </h1>
              <p className="text-base md:text-lg text-[#555555] font-sans leading-relaxed">
                An offline-first clinical and caregiver ecosystem digitising maternal and child healthcare (MNCH) across East Africa.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="bg-[#F7F5F0] border border-gray-150 rounded-xl p-4 shadow-sm flex items-center gap-3 flex-1">
                  <div className="p-2.5 bg-[#FFF5F5] rounded-lg">
                    <Heart className="w-6 h-6 text-[#D13438]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-sans text-gray-800">355</div>
                    <div className="text-[10px] text-gray-500 font-sans uppercase font-bold tracking-wider">Maternal deaths per 100k</div>
                  </div>
                </div>
                <div className="bg-[#F7F5F0] border border-gray-150 rounded-xl p-4 shadow-sm flex items-center gap-3 flex-1">
                  <div className="p-2.5 bg-[#FFFBEB] rounded-lg">
                    <WifiOff className="w-6 h-6 text-[#E68A00]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-sans text-gray-800">60%</div>
                    <div className="text-[10px] text-gray-500 font-sans uppercase font-bold tracking-wider">Clinics offline daily</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-premium border border-gray-200 h-80 md:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent z-10" />
              <img 
                src="/clinical_nurse_pilot.png" 
                alt="Clinical Nurse and Mother in Kenyan Health Clinic" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20 text-white font-sans">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#FFB900]">TotoAfya Pilot Deployment</div>
                <div className="text-sm font-bold">Continuous Care under supervised clinical use.</div>
              </div>
            </div>
          </div>
        );

      case 1: // The Problem
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-full text-left">
            <div className="md:col-span-3 space-y-5">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0A0A0A] font-bold">
                The Care Gap: <span className="text-[#D13438] font-serif">Amina's Journey</span>
              </h2>
              <p className="text-sm md:text-base text-[#555555] font-sans leading-relaxed">
                Maternal healthcare is broken because clinical information is highly fragmented. Each provider only sees a siloed piece of the story, leading to unflagged pregnancy risks and missed vaccinations.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { title: "Home Check", desc: "CHVs log maternal health offline; clinic is blind to data.", color: "border-l-4 border-blue-500" },
                  { title: "Clinic Intake", desc: "Nurses check physical cards, unaware of village history.", color: "border-l-4 border-[#006B5F]" },
                  { title: "Delivery Room", desc: "Birth clinician is blind to antenatal parameters.", color: "border-l-4 border-[#E68A00]" },
                  { title: "Danger Signs", desc: "Severe pre-eclampsia or fever indicators missed.", color: "border-l-4 border-[#D13438]" }
                ].map((step, idx) => (
                  <div key={idx} className={`bg-gray-50 p-3 rounded-lg border border-gray-150 ${step.color}`}>
                    <h3 className="font-bold font-sans text-xs text-gray-800">{step.title}</h3>
                    <p className="text-[10px] text-gray-500 font-sans leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-premium border border-gray-200 h-80 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img 
                src="/chv_outreach_trust.png" 
                alt="CHV outreach checking pregnant mother" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20 text-white font-sans">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#FFB900]">Community Outreach</div>
                <div className="text-sm font-bold">CHV validating symptoms in Nakuru village.</div>
              </div>
            </div>
          </div>
        );

      case 2: // Existing Solutions & Gap
        return (
          <div className="flex flex-col justify-center h-full text-left space-y-4">
            <h2 className="text-3xl font-serif text-[#0A0A0A] font-bold">
              Existing Solutions Leave Care Fragmented
            </h2>
            <p className="text-sm text-[#555555] font-sans">
              While SMS campaigns have scale and cloud EMRs have depth, none support the complete caregiver-to-nurse offline-first loop.
            </p>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse font-sans text-xs shadow-sm rounded-xl overflow-hidden border border-gray-150">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-gray-600 font-semibold uppercase">
                    <th className="py-3 px-4">Solution</th>
                    <th className="py-3 px-4">Target User</th>
                    <th className="py-3 px-4">Offline Capacity</th>
                    <th className="py-3 px-4">Mother PWA</th>
                    <th className="py-3 px-4">CHV Mobile</th>
                    <th className="py-3 px-4">Nurse Registry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700 bg-white">
                  <tr>
                    <td className="py-3 px-4 font-bold text-gray-800">mPlus / SMS Programs</td>
                    <td className="py-3 px-4 text-gray-500">Mothers only</td>
                    <td className="py-3 px-4 text-rose-500 flex items-center gap-1 font-semibold"><X className="w-4 h-4" /> Cloud-only</td>
                    <td className="py-3 px-4"><Check className="w-4.5 h-4.5 text-emerald-600" /></td>
                    <td className="py-3 px-4"><X className="w-4.5 h-4.5 text-rose-500" /></td>
                    <td className="py-3 px-4"><X className="w-4.5 h-4.5 text-rose-500" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-gray-800">Lea Mama (Britam)</td>
                    <td className="py-3 px-4 text-gray-500">Policyholders</td>
                    <td className="py-3 px-4 text-rose-500 flex items-center gap-1 font-semibold"><X className="w-4 h-4" /> Cloud-only</td>
                    <td className="py-3 px-4"><Check className="w-4.5 h-4.5 text-emerald-600" /></td>
                    <td className="py-3 px-4"><Check className="w-4.5 h-4.5 text-emerald-600" /></td>
                    <td className="py-3 px-4"><X className="w-4.5 h-4.5 text-rose-500" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-gray-800">KenyaEMR / OpenMRS</td>
                    <td className="py-3 px-4 text-gray-500">Clinicians</td>
                    <td className="py-3 px-4 text-amber-500 flex items-center gap-1 font-semibold"><Info className="w-4 h-4" /> Server Required</td>
                    <td className="py-3 px-4"><X className="w-4.5 h-4.5 text-rose-500" /></td>
                    <td className="py-3 px-4"><X className="w-4.5 h-4.5 text-rose-500" /></td>
                    <td className="py-3 px-4"><Check className="w-4.5 h-4.5 text-emerald-600" /></td>
                  </tr>
                  <tr className="bg-[#006B5F]/5">
                    <td className="py-3 px-4 font-extrabold text-[#006B5F] flex items-center gap-1.5">
                      <Award className="w-4 h-4" /> TotoAfya (Us)
                    </td>
                    <td className="py-3 px-4 font-bold text-gray-800">Entire Care Chain</td>
                    <td className="py-3 px-4 text-emerald-600 font-bold flex items-center gap-1"><Check className="w-4 h-4" /> Fully Offline-First</td>
                    <td className="py-3 px-4"><Check className="w-4.5 h-4.5 text-emerald-600" /></td>
                    <td className="py-3 px-4"><Check className="w-4.5 h-4.5 text-emerald-600" /></td>
                    <td className="py-3 px-4"><Check className="w-4.5 h-4.5 text-emerald-600" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#555555] font-sans mt-1 bg-amber-50 border-l-4 border-[#E68A00] p-2.5 rounded-r-lg">
              <strong>The Unique Insight:</strong> Care fails at the handoffs. By creating a database coordination layer that works offline on the ground, we connect the entire chain of maternal health.
            </p>
          </div>
        );

      case 3: // The Solution / Product
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center h-full text-left">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl font-serif text-[#0A0A0A] font-bold">
                TotoAfya: Connected Care
              </h2>
              <p className="text-sm text-[#555555] font-sans leading-relaxed">
                A multi-portal, offline-first health record system that brings mothers, volunteers, and clinics into database alignment.
              </p>
              <div className="flex gap-2 p-1 bg-gray-100 rounded-lg max-w-xs font-sans text-xs font-semibold shadow-inner">
                <button 
                  onClick={() => setActiveMockupTab('mother')}
                  className={`flex-1 py-2 px-3 rounded-md transition-all ${activeMockupTab === 'mother' ? 'bg-[#006B5F] text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Caregiver PWA
                </button>
                <button 
                  onClick={() => setActiveMockupTab('nurse')}
                  className={`flex-1 py-2 px-3 rounded-md transition-all ${activeMockupTab === 'nurse' ? 'bg-[#006B5F] text-white shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Nurse Portal
                </button>
              </div>
              <div className="bg-gray-50 border border-gray-150 rounded-xl p-4 space-y-2.5">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">
                  {activeMockupTab === 'mother' ? 'Caregiver Features' : 'Clinical Features'}
                </h4>
                <ul className="space-y-2 text-xs text-gray-600 font-sans">
                  {activeMockupTab === 'mother' ? (
                    <>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#006B5F] shrink-0" /> 4-digit PIN bypass for low-literacy lockouts.</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#006B5F] shrink-0" /> Real-time infant vaccination compliance schedules.</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#006B5F] shrink-0" /> Bilingual Swahili/English learning hub.</li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#006B5F] shrink-0" /> Gestational Age & EDD Naegele calculations.</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#006B5F] shrink-0" /> Automated child growth weight-for-age WHO curves.</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#006B5F] shrink-0" /> RED highlights for clinical maternal danger signs.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="md:col-span-3 flex justify-center items-center relative h-80 bg-gray-50 rounded-2xl border border-gray-150 p-4 shadow-inner">
              <AnimatePresence mode="wait">
                {activeMockupTab === 'mother' ? (
                  <motion.div 
                    key="mother-mockup"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <img 
                      src="/mother_portal_mockup.png" 
                      alt="Caregiver PWA Mockup" 
                      className="max-h-full max-w-full rounded-lg object-contain shadow-premium"
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="nurse-mockup"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex justify-center items-center"
                  >
                    <img 
                      src="/nurse_portal_mockup.png" 
                      alt="Nurse Tablet Dashboard Mockup" 
                      className="max-h-full max-w-full rounded-lg object-contain shadow-premium"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 4: // Why Now & Why Us (Moat)
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-[#0A0A0A] font-bold">Why Now?</h2>
              <ul className="space-y-4 font-sans text-sm text-[#555555]">
                <li className="flex gap-3">
                  <div className="p-1.5 bg-[#E6F4F1] rounded-lg h-fit text-[#006B5F]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">National eCHIS Strategy</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Kenya's Ministry of Health is actively driving the digitization of all community health data, making county health networks open for structured data integrations.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="p-1.5 bg-[#FFFBEB] rounded-lg h-fit text-[#E68A00]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Low-Cost Device Expansion</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Sub-$60 Android tablets in clinics and 60%+ smartphone penetration in families make a client-based application model feasible today.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-serif text-[#006B5F] font-semibold border-b border-gray-100 pb-2 flex items-center gap-1.5">
                <Shield className="w-5 h-5 text-[#006B5F]" />
                Our Moat: Uncopiable Advantage
              </h3>
              <ul className="space-y-3 font-sans text-xs text-gray-600">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Database Offline-First Sync:</strong> Custom `@totoafya/api-client` keeps tables functional offline on local devices and coordinates conflict-free background pushes when connectivity returns.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Multi-Tenant Security:</strong> Postgres Row-Level Security (RLS) partition policies isolate clinical logs by facility, meeting strict national data safety acts.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>MoH Calendar Alignment:</strong> Built-in business calculations automate the 7-visit vaccine timeline and ANC milestones out of the box.</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 5: // Validation / Traction
        return (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-full text-left">
            <div className="md:col-span-3 space-y-5">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0A0A0A] font-bold">
                Traction & County Pilot Setup
              </h2>
              <p className="text-sm md:text-base text-[#555555] font-sans leading-relaxed">
                Our code features are complete. We are starting a structured 12-week clinical pilot in Nakuru, Machakos, and Kiambu counties to validate the caregiver PWA and nurse tablet synchronisation workflows.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white border border-gray-150 rounded-xl p-4 shadow-sm space-y-1">
                  <div className="text-xs font-bold text-[#E68A00] font-sans uppercase">facilities</div>
                  <div className="text-2xl font-bold font-serif text-gray-800">2 Clinics</div>
                  <p className="text-[10px] text-gray-500 font-sans leading-relaxed">Local Level 3/4 health facilities.</p>
                </div>
                <div className="bg-white border border-gray-150 rounded-xl p-4 shadow-sm space-y-1">
                  <div className="text-xs font-bold text-[#006B5F] font-sans uppercase">clinic staff</div>
                  <div className="text-2xl font-bold font-serif text-gray-800">16 Staff</div>
                  <p className="text-[10px] text-gray-500 font-sans leading-relaxed">Trained nurses and health volunteers.</p>
                </div>
                <div className="bg-white border border-gray-150 rounded-xl p-4 shadow-sm space-y-1">
                  <div className="text-xs font-bold text-blue-600 font-sans uppercase">moms & babies</div>
                  <div className="text-2xl font-bold font-serif text-gray-800">350+ Users</div>
                  <p className="text-[10px] text-gray-500 font-sans leading-relaxed">Caregivers registered on the PWA.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-premium border border-gray-200 h-80 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img 
                src="/admin_telemetry_trust.png" 
                alt="Clinic director reviewing health analytics dashboard" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20 text-white font-sans">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#FFB900]">Data Governance</div>
                <div className="text-sm font-bold">Facility dashboard tracking sync operations.</div>
              </div>
            </div>
          </div>
        );

      case 6: // Market & Business Model
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full text-left">
            <div className="space-y-5">
              <h2 className="text-3xl font-serif text-[#0A0A0A] font-bold">Market Opportunity</h2>
              <div className="space-y-3 font-sans text-sm">
                <div className="flex justify-between border-b border-gray-150 pb-2">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#006B5F]/20 border border-[#006B5F]"></span>
                    TAM (Sub-Saharan Africa):
                  </span>
                  <span className="font-bold text-[#006B5F]">$1.2 Billion</span>
                </div>
                <div className="flex justify-between border-b border-gray-150 pb-2">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-200 border border-gray-400"></span>
                    SAM (East Africa):
                  </span>
                  <span className="font-bold text-gray-800">$180 Million</span>
                </div>
                <div className="flex justify-between border-b border-gray-150 pb-2">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E68A00]/20 border border-[#E68A00]"></span>
                    SOM (Kenya Initial):
                  </span>
                  <span className="font-bold text-[#E68A00]">$15 Million</span>
                </div>
              </div>
              <p className="text-xs text-[#555555] font-sans leading-relaxed">
                Kenya alone represents 1.5M births/year and 10,000+ facilities. Digitising clinical registries represents substantial SaaS growth potential.
              </p>
            </div>
            <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-serif text-[#0A0A0A] border-b border-gray-100 pb-2 font-semibold">Business Model</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#006B5F]/10 text-[#006B5F] flex items-center justify-center font-bold shrink-0 font-sans text-sm border border-[#006B5F]/20">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 font-sans">Facility SaaS Subscription</h4>
                    <p className="text-xs text-gray-500 font-sans font-medium mt-0.5">$49/month per clinic for registries, dashboards, and offline sync logs.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E68A00]/10 text-[#E68A00] flex items-center justify-center font-bold shrink-0 font-sans text-sm border border-[#E68A00]/20">
                    G
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-800 font-sans">B2G County Licensing</h4>
                    <p className="text-xs text-gray-500 font-sans font-medium mt-0.5">Value-based data telemetry API integrations for public health ministries and county teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Vision / The Ask
        return (
          <div className="flex flex-col justify-center h-full text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0A0A0A] font-bold">
              Universal Maternal Care
            </h2>
            <p className="text-base md:text-lg text-[#555555] font-sans leading-relaxed">
              We want to empower every pregnant mother in Kenya with a digital care network, turning fragmented data silos into continuous, life-saving care.
            </p>
            <div className="py-5 border-y border-gray-150 bg-gray-50 rounded-xl px-6">
              <div className="text-xs font-bold text-gray-400 font-sans tracking-widest uppercase">The Ask</div>
              <div className="text-4xl font-extrabold font-serif text-[#006B5F] mt-1">$1.5 Million Seed</div>
              <p className="text-xs text-gray-500 mt-2 font-sans font-medium">
                Scaling database-level offline synchronisation engine, and securing MOH regulatory approvals.
              </p>
            </div>
            <div className="flex justify-center gap-3 pt-2 text-xs font-bold font-sans">
              <span className="px-3.5 py-1.5 bg-[#006B5F]/10 text-[#006B5F] rounded-full border border-[#006B5F]/20">50% R&D / Engineering</span>
              <span className="px-3.5 py-1.5 bg-[#E68A00]/10 text-[#E68A00] rounded-full border border-[#E68A00]/20">30% Pilot Scaling</span>
              <span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">20% Regulatory Clearance</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Investor Pitch Deck — Executive Summary & Product Roadmap"
        description="Executive pitch deck for TotoAfya Digital maternal healthcare platform."
        canonicalPath="/pitch"
        noindex={true}
      />
      <div className="min-h-screen bg-[#F7F5F0] flex flex-col p-6 font-sans">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src="/logo-horizontal.png" alt="TotoAfya Logo" className="h-8 object-contain" />
            <span className="text-xs bg-[#E68A00]/10 text-[#E68A00] font-sans px-2.5 py-0.5 rounded-full font-bold border border-[#E68A00]/20">
              PITCH DECK
            </span>
          </div>
          
          {/* Rehearsal timer widget */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 font-sans font-bold text-sm text-gray-700">
              <Clock className="w-4 h-4 text-[#006B5F]" />
              <span>Rehearsal: {formatTime(elapsedTime)}</span>
            </div>
            <button onClick={toggleTimer} className="p-1 text-[#006B5F] hover:text-[#004D44] rounded-md transition-colors">
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button onClick={resetTimer} className="p-1 text-gray-400 hover:text-gray-600 rounded-md transition-colors">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Split: Slide & Presenter Notes */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch min-h-[500px]">
          
          {/* Slide Window */}
          <div className={`${showNotes ? 'lg:col-span-3' : 'lg:col-span-4'} flex flex-col items-stretch transition-all duration-300`}>
            
            {/* The 16:9 Slide Canvas */}
            <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-premium p-8 relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              
              {/* Header inside slide - category and logo */}
              <div className="absolute top-6 left-8 right-8 flex justify-between items-center border-b border-gray-100 pb-3 z-30">
                <span className="text-[10px] font-bold tracking-widest text-[#E68A00] font-sans bg-[#E68A00]/5 px-2.5 py-0.5 rounded-full border border-[#E68A00]/10">
                  {slides[currentSlide].category}
                </span>
                <img src="/logo-horizontal.png" alt="Logo" className="h-6 object-contain opacity-80" />
              </div>

              {/* Main content viewport */}
              <div className="mt-8 mb-2 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {renderSlideContent()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress bar inside slide container */}
              <div className="absolute bottom-0 left-0 w-full bg-gray-100 h-1.5">
                <div 
                  className="bg-[#006B5F] h-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex justify-between items-center mt-4 px-2">
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide} 
                  disabled={currentSlide === 0}
                  className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 disabled:opacity-50 transition shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm font-sans font-semibold text-gray-600">
                  {currentSlide + 1} of {slides.length}
                </span>
                <button 
                  onClick={nextSlide} 
                  disabled={currentSlide === slides.length - 1}
                  className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 disabled:opacity-50 transition shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 text-xs font-semibold font-sans">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex items-center gap-1.5 px-3 py-2 border rounded-lg shadow-sm transition ${isPlaying ? 'bg-[#E68A00] text-white border-[#E68A00]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Autoplay: On' : 'Autoplay'}</span>
                </button>
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className={`flex items-center gap-1.5 px-3 py-2 border rounded-lg shadow-sm transition ${showNotes ? 'bg-[#006B5F]/10 text-[#006B5F] border-[#006B5F]/20' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Presenter Notes</span>
                </button>
              </div>
            </div>
          </div>

          {/* Speaker Panel / Presenter Notes */}
          {showNotes && (
            <div className="lg:col-span-1 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col items-stretch space-y-4 overflow-y-auto max-h-[600px] lg:max-h-none">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <h3 className="font-bold text-[#0A0A0A] font-serif text-sm flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#006B5F]" />
                  Speaker Script
                </h3>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded font-bold font-sans text-gray-500">
                  Slide {currentSlide + 1}
                </span>
              </div>

              {/* Timed pacing indicator */}
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-150 space-y-1.5">
                <div className="flex justify-between text-xs text-gray-500 font-sans">
                  <span>Slide Target: <strong>{slides[currentSlide].duration}s</strong></span>
                  <span>Cumulative: <strong>{cumulativeTarget}s</strong></span>
                </div>
                <div className={`text-xs font-bold font-sans ${pacing.color}`}>
                  {pacing.text}
                </div>
              </div>

              {/* Speech notes text */}
              <div className="flex-1 space-y-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans">Speech notes</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-sans bg-[#F7F5F0] p-3.5 rounded-xl border border-gray-100 font-medium whitespace-pre-line">
                  {slides[currentSlide].notes}
                </p>
              </div>

              {/* Checklist verification items */}
              <div className="space-y-3 pt-3 border-t border-gray-100">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans mb-1 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-[#E68A00]" />
                    Grandma Test
                  </h4>
                  <ul className="space-y-1 font-sans text-[11px] text-gray-500">
                    {slides[currentSlide].grandmaChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded border border-gray-300 flex items-center justify-center text-gray-300 bg-white shrink-0">☐</div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-sans mb-1 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-[#006B5F]" />
                    YC Partner Test
                  </h4>
                  <ul className="space-y-1 font-sans text-[11px] text-gray-500">
                    {slides[currentSlide].partnerChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded border border-gray-300 flex items-center justify-center text-gray-300 bg-white shrink-0">☐</div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
