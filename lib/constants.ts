// Centralized factual content, navigation items, and organizational metadata for TotoAfya Digital

export const SITE_CONFIG = {
  name: 'TotoAfya Digital',
  legalName: 'TerraSept Solutions Ltd',
  tagline: 'Connected Maternal, Newborn & Child Health Ecosystem for Kenya',
  description:
    'TotoAfya Digital connects mothers, community health workers, clinical nurses, and facility administrators with offline-first digital health registries, KEPI vaccine scheduling, and WHO-standard growth tracking.',
  url: 'https://totoafya.co.ke',
  email: 'hello@totoafya.co.ke',
  partnershipsEmail: 'partnerships@totoafya.co.ke',
  phone: '+254 113 242 983',
  address: 'Kisii Town, Kisii County, Kenya',
  portals: {
    marketing: 'https://totoafya.co.ke',
    mother: 'https://mother.totoafya.co.ke',
    nurse: 'https://nurse.totoafya.co.ke',
    facility: 'https://facility.totoafya.co.ke',
  },
  governance: {
    incubator: 'Kisii University Innovation Hub',
    recognition: 'Best Project — Digital Healthcare (Kisii Innovation Week)',
    compliance: [
      "Kenya Data Protection Act 2019",
      "Kenya Expanded Programme on Immunization (KEPI) Protocols",
      "WHO Child Growth & Nutrition Standards",
      "HIPAA Security Alignment & Encrypted IndexedDB",
    ],
  },
};

export const NAVIGATION_LINKS = [
  { name: 'Ecosystem', href: '/#ecosystem' },
  { name: 'Product Architecture', href: '/product' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing & Pilot', href: '/pricing' },
  { name: 'About Us', href: '/about' },
  { name: 'Resources & FAQ', href: '/resources' },
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Michael Onyango',
    role: 'CEO, TerraSept Solutions Ltd',
    bio: 'Directs corporate strategy, health system partnerships, and operations for digital healthcare expansion across Kenya.',
    image: '/mikaells.png',
    tag: 'Executive Leadership',
  },
  {
    name: 'Hyacinth Onchangu',
    role: 'CMO, TerraSept Solutions Ltd',
    bio: 'Leads community health worker outreach, facility stakeholder engagement, and adoption strategies across dispensaries and referral hospitals.',
    image: '/character_anchor_best_face.jpg',
    tag: 'Community & Growth',
  },
  {
    name: 'Erick Mwangi',
    role: 'CTO & Project Lead',
    bio: 'Lead architect and developer of TotoAfya Digital. Directs engineering of offline-first health registries, KEPI schedule logic, and clinical sync infrastructure.',
    image: '/character_anchor_end_frame.jpg',
    tag: 'Technology & Product',
  },
];

export const ECOSYSTEM_PILLARS = [
  {
    id: 'caregivers',
    title: 'Mothers & Caregivers',
    badge: 'Mother Web & PWA Portal',
    portalUrl: 'https://mother.totoafya.co.ke',
    summary: 'Mobile-first PWA providing continuous pregnancy tracking, automated vaccine SMS reminders, ANC book synchronization, and bilingual supportive health education.',
    capabilities: [
      'Digital ANC booklet & pregnancy milestone log',
      'Automated KEPI immunization calendar reminders',
      '24/7 Swahili & English supportive health companion',
      'Encrypted offline access for low-connectivity regions',
    ],
    image: '/mother_portal_mockup.png',
  },
  {
    id: 'clinicians',
    title: 'Clinical Nurses & CHVs',
    badge: 'Nurse Clinical Web Portal',
    portalUrl: 'https://nurse.totoafya.co.ke',
    summary: 'Tablet and laptop-optimized clinical workflow registry designed to digitize ANC visits, record vitals & dangerous signs, and track child growth.',
    capabilities: [
      'Under-2-minute mother & child registration workflow',
      'WHO Weight-for-Age, Height-for-Age & MUAC nutrition staging (Normal, MAM, SAM)',
      'Automated KEPI vaccine visit logging & batch entry',
      'Red-flag danger sign clinical warnings',
    ],
    image: '/nurse_portal_mockup.png',
  },
  {
    id: 'facilities',
    title: 'Facility Administrators',
    badge: 'Facility PC App (Tauri)',
    portalUrl: 'https://facility.totoafya.co.ke',
    summary: 'Desktop application for hospital managers and facility leads to monitor patient volume, appointment attendance, and staff account management.',
    capabilities: [
      'Facility-level MNCH performance telemetry',
      'Missed visit & vaccine dropout risk registries',
      'Nurse account provisioning and facility sub-partitioning',
      'CSV/Excel patient register export for MoH reporting',
    ],
    image: '/admin_telemetry_trust.png',
  },
  {
    id: 'counties',
    title: 'County & Health Partners',
    badge: 'Centralized Governance Portal',
    portalUrl: 'https://facility.totoafya.co.ke',
    summary: 'Multi-facility aggregated analytics for county health departments and development partners to evaluate immunization coverage and maternal health indicators.',
    capabilities: [
      'County-wide public health indicator monitoring',
      'Custom MoH / DHIS2 export schema formatting',
      'Multi-facility deployment & role-based access control',
      'Audit logging and data protection compliance',
    ],
    image: '/chv_outreach_trust.png',
  },
];

export const B2B_PRICING_PLANS = [
  {
    name: 'Evaluation Tier',
    price: 'KES 0',
    period: 'forever',
    quota: 'Up to 5 active patient profiles',
    description: 'Designed for dispensaries and small clinics to evaluate digital registry workflows and KEPI schedule generation.',
    features: [
      'Single clinical nurse account',
      'Standard ANC care register logs',
      'Automated KEPI immunization calendar',
      'Encrypted local storage sync',
    ],
    cta: 'Explore Evaluation Tier',
    href: '/contact?plan=evaluation',
    highlighted: false,
  },
  {
    name: 'Basic Clinic',
    price: 'KES 2,500',
    period: 'per month',
    quota: 'Up to 50 active patient profiles',
    description: 'Ideal for independent maternity clinics and community health dispensaries going paperless.',
    features: [
      '2 clinical staff accounts',
      'Automated SMS clinic visit reminders',
      'Patient register CSV/Excel data export',
      'Remote technical support',
    ],
    cta: 'Get Started',
    href: '/contact?plan=basic',
    highlighted: false,
  },
  {
    name: 'Premium Facility',
    price: 'KES 8,000',
    period: 'per month',
    quota: 'Up to 500 active patient profiles',
    description: 'Best for active maternity hospitals and Level 4 facilities requiring multi-nurse coordination and advanced telemetry.',
    features: [
      'Unlimited clinical nurse & CHV accounts',
      'Advanced facility telemetry dashboard',
      'Custom SMS Sender ID branding',
      'Dedicated remote staff onboarding session',
      'Priority technical support SLA',
    ],
    cta: 'Onboard Facility',
    href: '/contact?plan=premium',
    highlighted: true,
  },
  {
    name: 'County Enterprise',
    price: 'Custom Quote',
    period: 'institutional agreement',
    quota: 'Unlimited patient profiles & facilities',
    description: 'Custom deployment for county health departments, multi-facility hospital networks, and international NGO partners.',
    features: [
      'Unlimited facilities and county users',
      'Custom DHIS2 / MoH schema export alignment',
      'Onsite training & clinical staff onboarding',
      'Dedicated private server hosting option',
      '24/7 Emergency Technical Support SLA',
    ],
    cta: 'Request Consultation',
    href: '/contact?plan=enterprise',
    highlighted: false,
  },
];

export const B2C_PRICING_PLANS = [
  {
    name: 'Monthly Caregiver Plan',
    price: 'KES 150',
    period: 'per month',
    quota: '1 Mother Profile',
    description: 'Affordable monthly access for expectant mothers and caregivers following their clinic evaluation.',
    features: [
      '24/7 Swahili & English AI Care Companion',
      'WHO-standard growth chart tracking',
      'Automated vaccine SMS compliance alerts',
      'Encrypted cloud backup for device transfers',
    ],
    cta: 'Subscribe via M-Pesa',
    href: '/contact?plan=b2c_monthly',
    highlighted: false,
  },
  {
    name: 'Annual Family Protection',
    price: 'KES 1,000',
    period: 'per year',
    quota: '1 Mother Profile',
    description: 'Save over 40% with annual subscription for complete pregnancy through 24-month child care continuity.',
    features: [
      'All Monthly plan capabilities included',
      'Over 40% annual savings',
      'Downloadable PDF health summary report',
      'Early access to milestone guidance updates',
    ],
    cta: 'Subscribe Annual Plan',
    href: '/contact?plan=b2c_annual',
    highlighted: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How does TotoAfya handle offline environments in rural clinics?',
    answer: 'TotoAfya Digital utilizes an encrypted client-side storage engine (IndexedDB) that permits clinical nurses and CHVs to register patients, log vitals, record ANC parameters, and view KEPI schedules without internet connectivity. Once a mobile network connection is detected, data synchronizes to cloud servers through a background sync queue.',
  },
  {
    question: 'Is TotoAfya compliant with Kenya Data Protection Act 2019?',
    answer: 'Yes. Patient records are encrypted in transit and at rest. Access controls enforce strict role-based authorization (Mother, Nurse, Facility Lead, County Admin), ensuring health workers only access data for their authorized facility.',
  },
  {
    question: 'Can health facilities pay using Safaricom M-Pesa?',
    answer: 'Yes. Facility subscriptions and caregiver plans support Lipa na M-Pesa STK push transactions. Institutions can also request formal invoicing for local bank transfers or county check processing.',
  },
  {
    question: 'Does TotoAfya replace clinical diagnosis or doctors?',
    answer: 'No. TotoAfya Digital is a clinical workflow and supportive guidance engine. The 24/7 AI Health Companion is strictly non-diagnostic, offering educational information based on WHO protocols and directing mothers to their assigned health facility whenever red-flag symptoms arise.',
  },
  {
    question: 'How can county health departments pilot TotoAfya?',
    answer: 'County health directors and program leads can contact our partnerships team at partnerships@totoafya.co.ke or via our contact form to arrange a pilot demonstration and custom deployment assessment.',
  },
];
