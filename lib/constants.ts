// Centralized factual content, navigation items, and organizational metadata for TotoAfya Digital

export const SITE_CONFIG = {
  name: 'TotoAfya Digital',
  legalName: 'TerraSept Solutions Ltd',
  tagline: 'Connected Maternal, Newborn & Child Health Platform for Kenya',
  description:
    'TotoAfya Digital connects mothers, community health workers, clinical nurses, and health facilities with offline-first digital registries, KEPI vaccine scheduling, and WHO growth tracking.',
  url: 'https://totoafya.co.ke',
  email: 'hello@totoafya.co.ke',
  partnershipsEmail: 'partnerships@totoafya.co.ke',
  phone: '+254 113 242 983',
  address: 'Kisii Town, Kisii County, Kenya',
  governance: {
    incubator: 'Kisii University Innovation Hub',
    recognition: 'Best Project — Digital Healthcare (Kisii Innovation Week)',
    compliance: [
      'Kenya Data Protection Act 2019 Alignment',
      'Kenya Expanded Programme on Immunization (KEPI) Protocols',
      'WHO Child Growth & Nutrition Standards',
      'Encrypted IndexedDB & PostgreSQL Row-Level Security',
    ],
  },
};

export const NAVIGATION_LINKS = [
  { name: 'Platform', href: '/product' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pilot Framework', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Michael Onyango',
    role: 'CEO, TerraSept Solutions Ltd',
    bio: 'Directs corporate strategy, health system partnerships, and operational expansion for digital healthcare initiatives across Kenya.',
    image: '/mikaells.png',
    tag: 'Executive Leadership',
  },
  {
    name: 'Hyacinth Onchangu',
    role: 'CMO, TerraSept Solutions Ltd',
    bio: 'Leads community health worker outreach, facility stakeholder engagement, and adoption strategies across dispensaries and maternity centers.',
    image: '/character_anchor_best_face.jpg',
    tag: 'Community & Growth',
  },
  {
    name: 'Erick Mwangi',
    role: 'CTO & Project Lead',
    bio: 'Lead architect of TotoAfya Digital. Directs engineering of offline-first health registries, KEPI schedule logic, and clinical data synchronization.',
    image: '/character_anchor_end_frame.jpg',
    tag: 'Technology & Product',
  },
];

export const ECOSYSTEM_PILLARS = [
  {
    id: 'caregivers',
    title: 'Mothers & Caregivers',
    badge: 'Mother PWA & Web Portal',
    summary: 'Mobile-first progressive web app providing continuous pregnancy milestone tracking, automated vaccine SMS reminders, and bilingual health education.',
    capabilities: [
      'Digital ANC booklet & milestone log',
      'Automated KEPI immunization calendar reminders',
      'Swahili & English supportive health education',
      'Offline-capable local storage for low-connectivity regions',
    ],
    image: '/mother_portal_mockup.png',
  },
  {
    id: 'clinicians',
    title: 'Clinical Nurses & CHVs',
    badge: 'Nurse Clinical Web Registry',
    summary: 'Tablet and laptop-optimized clinical workflow registry designed to digitize ANC visits, record vitals, and evaluate child growth metrics.',
    capabilities: [
      'Fast mother & child intake workflow',
      'WHO Weight-for-Age, Height-for-Age & MUAC nutrition staging (Normal, MAM, SAM)',
      'Automated KEPI vaccine visit logging',
      'Red-flag danger sign clinical warnings',
    ],
    image: '/nurse_portal_mockup.png',
  },
  {
    id: 'facilities',
    title: 'Facility Administrators',
    badge: 'Facility Telemetry Desktop App (Tauri)',
    summary: 'Desktop application for facility managers to monitor patient volume, appointment attendance, and export statutory health registers.',
    capabilities: [
      'Facility-level maternal health indicators',
      'Missed visit & vaccine dropout risk registries',
      'Nurse account provisioning and facility sub-partitioning',
      'CSV/Excel patient register export for MoH reporting',
    ],
    image: '/admin_telemetry_trust.png',
  },
  {
    id: 'counties',
    title: 'County & Health Systems',
    badge: 'Centralized Governance Overview',
    summary: 'Multi-facility aggregated analytics for county health departments and development partners to evaluate immunization coverage and maternal indicators.',
    capabilities: [
      'Sub-county public health indicator monitoring',
      'Custom MoH / DHIS2 export schema formatting',
      'Multi-facility deployment & role-based access control',
      'Audit logging and data protection governance',
    ],
    image: '/chv_outreach_trust.png',
  },
];

export const B2B_PRICING_PLANS = [
  {
    name: 'Dispensary Evaluation Tier',
    price: 'KES 0',
    period: 'evaluation phase',
    quota: 'Up to 5 active patient profiles',
    description: 'Designed for rural dispensaries and small clinics to evaluate digital registry workflows and KEPI schedule generation.',
    features: [
      'Single clinical nurse account',
      'Standard ANC care register logs',
      'Automated KEPI immunization calendar',
      'Encrypted local storage sync',
    ],
    cta: 'Discuss Dispensary Pilot',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Basic Facility Pilot',
    price: 'KES 2,500',
    period: 'per month',
    quota: 'Up to 50 active patient profiles',
    description: 'Ideal for independent maternity clinics and community health dispensaries transitioning from paper registers.',
    features: [
      '2 clinical staff accounts',
      'Automated SMS clinic visit reminders',
      'Patient register CSV/Excel data export',
      'Remote technical support',
    ],
    cta: 'Request Pilot Details',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Maternity Hospital Tier',
    price: 'KES 8,000',
    period: 'per month',
    quota: 'Up to 500 active patient profiles',
    description: 'Best for active maternity hospitals and Level 4 facilities requiring multi-nurse coordination and facility telemetry.',
    features: [
      'Unlimited clinical nurse & CHV accounts',
      'Advanced facility telemetry dashboard',
      'Custom SMS Sender ID branding',
      'Dedicated remote staff onboarding session',
      'Priority technical support SLA',
    ],
    cta: 'Discuss Deployment',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'County & Institutional Agreement',
    price: 'Custom Deployment',
    period: 'institutional agreement',
    quota: 'Unlimited patient profiles & facilities',
    description: 'Custom deployment for county health departments, multi-facility hospital networks, and international development partners.',
    features: [
      'Unlimited facilities and county users',
      'Custom DHIS2 / MoH schema export alignment',
      'Onsite training & clinical staff onboarding',
      'Dedicated private server hosting options',
      '24/7 Emergency Technical Support SLA',
    ],
    cta: 'Arrange Institutional Briefing',
    href: '/contact',
    highlighted: false,
  },
];

export const B2C_PRICING_PLANS = [
  {
    name: 'Monthly Caregiver Subscription',
    price: 'KES 150',
    period: 'per month',
    quota: '1 Mother Profile',
    description: 'Affordable monthly access for expectant mothers and caregivers following their clinic evaluation.',
    features: [
      '24/7 Swahili & English Health Companion',
      'WHO-standard growth chart tracking',
      'Automated vaccine SMS compliance alerts',
      'Encrypted cloud backup for device transfers',
    ],
    cta: 'Subscribe via M-Pesa',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Annual Care Continuity Plan',
    price: 'KES 1,000',
    period: 'per year',
    quota: '1 Mother Profile',
    description: 'Annual subscription for complete pregnancy through 24-month child care continuity.',
    features: [
      'All Monthly plan capabilities included',
      'Over 40% annual savings',
      'Downloadable PDF health summary report',
      'Early access to milestone guidance updates',
    ],
    cta: 'Subscribe Annual Plan',
    href: '/contact',
    highlighted: true,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How does TotoAfya handle low or no connectivity in rural dispensaries?',
    answer: 'TotoAfya Digital utilizes an encrypted client-side storage engine (IndexedDB) that permits clinical nurses and CHVs to register patients, log vitals, record ANC parameters, and view KEPI schedules without active internet. When a network connection is detected, data synchronizes to cloud servers automatically.',
  },
  {
    question: 'How does TotoAfya align with the Kenya Data Protection Act 2019?',
    answer: 'Patient records are encrypted at rest (AES-256) and in transit (TLS 1.3). Access controls enforce strict role-based authorization (Mother, Nurse, Facility Lead, County Admin), ensuring health workers only access data for their authorized facility.',
  },
  {
    question: 'Can health facilities process payments via M-Pesa?',
    answer: 'Yes. Facility subscriptions and caregiver plans support Safaricom Lipa na M-Pesa STK push transactions. Institutions can also request formal invoicing for local bank transfers or county check processing.',
  },
  {
    question: 'Does TotoAfya replace clinical diagnosis or medical officers?',
    answer: 'No. TotoAfya Digital is a clinical workflow and supportive educational guidance engine. The 24/7 Health Companion is strictly non-diagnostic, providing educational information based on WHO protocols and directing mothers to their assigned health facility whenever red-flag symptoms arise.',
  },
  {
    question: 'How can county health departments initiate a pilot assessment?',
    answer: 'County health directors and program leads can contact our partnerships team at partnerships@totoafya.co.ke or via our contact form to arrange a technical demonstration and hardware assessment.',
  },
];
