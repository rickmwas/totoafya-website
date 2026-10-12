'use client';

import { useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  Baby,
  CalendarDays,
  Check,
  Heart,
  HeartPulse,
  LockKeyhole,
  RefreshCw,
  Wifi,
  WifiOff,
} from 'lucide-react';

const productViews = [
  {
    name: 'Pregnancy',
    eyebrow: 'A little more reassurance',
    title: 'Know what comes next.',
    description:
      'Keep pregnancy details and antenatal visits together, so the next step is easier to see.',
    label: 'Pregnancy overview',
    primary: '28 weeks',
    secondary: 'Next ANC visit',
    detail: '20 October',
    icon: Heart,
  },
  {
    name: 'ANC visits',
    eyebrow: 'Care that keeps moving',
    title: 'Make every visit count.',
    description:
      'Give care teams a clearer view of antenatal records and upcoming appointments.',
    label: 'Antenatal care',
    primary: 'Visit 3',
    secondary: 'Next appointment',
    detail: '20 October',
    icon: CalendarDays,
  },
  {
    name: 'Baby vaccines',
    eyebrow: 'A record that grows with them',
    title: 'Keep little milestones in sight.',
    description:
      'See a child’s immunisation visits and what is coming up next in their care.',
    label: 'Amani’s immunisations',
    primary: 'Pentavalent 2',
    secondary: 'Next visit',
    detail: 'Due soon',
    icon: Baby,
  },
  {
    name: 'Growth',
    eyebrow: 'Growing, one visit at a time',
    title: 'Follow the whole story.',
    description:
      'Bring child growth measurements together across visits for a clearer picture over time.',
    label: 'Growth record',
    primary: '8.4 kg',
    secondary: 'Last recorded',
    detail: 'This month',
    icon: HeartPulse,
  },
  {
    name: 'Facilities',
    eyebrow: 'A clearer view for care teams',
    title: 'Keep the day in view.',
    description:
      'Bring facility workflows and maternal and child health records into one place.',
    label: 'Facility overview',
    primary: 'Today',
    secondary: 'Care records',
    detail: 'Together',
    icon: CalendarDays,
  },
  {
    name: 'Offline care',
    eyebrow: 'Care that carries on',
    title: 'No internet? Keep caring.',
    description:
      'Designed to support care teams in places where connectivity can be unreliable.',
    label: 'Facility status',
    primary: 'Ready',
    secondary: 'Connection',
    detail: 'Can vary',
    icon: WifiOff,
  },
];

const careStages = [
  ['01', 'Pregnancy', 'Follow the journey'],
  ['02', 'ANC visits', 'Keep visits in view'],
  ['03', 'Delivery', 'Continue the record'],
  ['04', 'Newborn care', 'Start with the little things'],
  ['05', 'Immunisation', 'See what is next'],
  ['06', 'Growth', 'Follow each milestone'],
  ['07', 'Early childhood', 'Care that keeps going'],
];

const audiences = [
  {
    name: 'For mothers',
    heading: 'Your care, easier to follow.',
    details: ['Follow pregnancy', 'Remember clinic visits', 'Keep baby’s care close'],
    icon: Heart,
    visual: 'A care journey that stays with you.',
  },
  {
    name: 'For health workers',
    heading: 'Less time searching. More time caring.',
    details: ['Record ANC visits', 'Follow immunisation schedules', 'Track child growth'],
    icon: HeartPulse,
    visual: 'The next step, in the patient record.',
  },
  {
    name: 'For facilities',
    heading: 'A more connected view of care.',
    details: ['Keep records together', 'Support day-to-day workflows', 'See facility activity'],
    icon: CalendarDays,
    visual: 'A shared view for the care team.',
  },
  {
    name: 'For programmes',
    heading: 'Support connected care across facilities.',
    details: ['Bring care records together', 'Support programme monitoring', 'Make reporting easier'],
    icon: RefreshCw,
    visual: 'A clearer picture across the care journey.',
  },
];

function handleTabKeyDown(
  event: KeyboardEvent<HTMLButtonElement>,
  length: number,
  setSelected: (index: number) => void,
) {
  let nextIndex: number | undefined;

  if (event.key === 'ArrowRight') nextIndex = (Number(event.currentTarget.dataset.index) + 1) % length;
  if (event.key === 'ArrowLeft') nextIndex = (Number(event.currentTarget.dataset.index) - 1 + length) % length;
  if (event.key === 'Home') nextIndex = 0;
  if (event.key === 'End') nextIndex = length - 1;
  if (nextIndex === undefined) return;

  event.preventDefault();
  setSelected(nextIndex);
  event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
}

function SampleRecord({ productIndex }: { productIndex: number }) {
  const product = productViews[productIndex];
  const Icon = product.icon;

  return (
    <div className="sample-record" aria-label={`Example ${product.name.toLowerCase()} interface`}>
      <div className="sample-record-top">
        <span className="sample-mark">t</span>
        <span>TotoAfya</span>
        <span className="sample-record-menu" aria-hidden="true">•••</span>
      </div>
      <div className="sample-record-body">
        <div className="sample-profile">
          <span className="sample-avatar">AM</span>
          <span><strong>Amina & Amani</strong><small>Example care profile</small></span>
        </div>
        <div className="sample-feature">
          <span className="sample-feature-icon"><Icon size={18} /></span>
          <span><small>{product.label}</small><strong>{product.primary}</strong></span>
        </div>
        <div className="sample-next">
          <span>{product.secondary}</span>
          <strong>{product.detail}</strong>
          <span className="sample-next-check"><Check size={16} /></span>
        </div>
        <div className="sample-progress" aria-hidden="true"><span /></div>
        <p className="sample-record-foot">Care information in one place</p>
      </div>
    </div>
  );
}

export default function HomeExperience() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeAudience, setActiveAudience] = useState(0);
  const [connected, setConnected] = useState(true);
  const audience = audiences[activeAudience];
  const AudienceIcon = audience.icon;

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <span className="section-kicker"><span className="kicker-dot" /> Maternal, newborn and child health</span>
            <h1>Every step of motherhood.<br /><em>Connected.</em></h1>
            <p>
              TotoAfya brings mothers and healthcare providers together through pregnancy, birth and a child’s early years.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#explore">Explore TotoAfya <ArrowRight size={17} /></a>
              <Link className="button button-secondary" href="/facilities">For health facilities</Link>
            </div>
            <span className="hero-note">For families. For the people who care for them.</span>
          </div>
          <div className="home-hero-visual">
            <div className="hero-photo">
              <Image
                src="/images/hero-mother-child.jpg"
                alt="A mother holding her young child"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 52vw"
                className="hero-photo-image"
              />
            </div>
            <div className="hero-note-card">
              <span className="note-card-icon"><CalendarDays size={17} /></span>
              <span><small>Next clinic visit</small><strong>Coming up</strong></span>
              <ArrowDownRight size={18} className="note-card-arrow" />
            </div>
            <span className="hero-caption">Care, connected at every stage.</span>
          </div>
        </div>
      </section>

      <section className="product-explorer" id="explore">
        <div className="section-shell">
          <div className="section-heading section-heading-row">
            <div>
              <span className="section-kicker">A closer look</span>
              <h2>One journey. <em>Many ways to care.</em></h2>
            </div>
            <p>Choose a moment in the journey to see how TotoAfya helps keep care connected.</p>
          </div>
          <div className="product-tabs" role="tablist" aria-label="Explore TotoAfya">
            {productViews.map((product, index) => (
              <button
                key={product.name}
                type="button"
                role="tab"
                id={`product-tab-${index}`}
                data-index={index}
                tabIndex={activeProduct === index ? 0 : -1}
                aria-selected={activeProduct === index}
                aria-controls="product-panel"
                onClick={() => setActiveProduct(index)}
                onKeyDown={(event) => handleTabKeyDown(event, productViews.length, setActiveProduct)}
              >
                {product.name}
              </button>
            ))}
          </div>
          <div key={`product-${activeProduct}`} className="product-demo" role="tabpanel" id="product-panel" tabIndex={0} aria-labelledby={`product-tab-${activeProduct}`}>
            <div className="product-demo-copy">
              <span className="section-kicker">{productViews[activeProduct].eyebrow}</span>
              <h3>{productViews[activeProduct].title}</h3>
              <p>{productViews[activeProduct].description}</p>
              <Link href={activeProduct === 4 ? '/facilities' : '/product'} className="text-link">
                Explore the features <ArrowRight size={16} />
              </Link>
            </div>
            <div className="product-demo-visual">
              <div className="demo-orbit" aria-hidden="true" />
              <SampleRecord productIndex={activeProduct} />
              <div className="demo-side-note">
                <span className="note-check"><Check size={15} /></span>
                <span><small>Example interface</small><strong>Designed around care</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="section-shell">
          <span className="section-kicker section-kicker-light">A connected care journey</span>
          <h2>From pregnancy<br />to <em>early childhood.</em></h2>
          <p className="journey-intro">Care does not happen in a single visit. TotoAfya helps keep important moments connected along the way.</p>
          <ol className="journey-line">
            {careStages.map(([number, name, detail]) => (
              <li key={number}>
                <span className="journey-number">{number}</span>
                <span className="journey-point" aria-hidden="true" />
                <strong>{name}</strong>
                <small>{detail}</small>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="journey-link">See how it works <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="mother-section">
        <div className="section-shell mother-layout">
          <div className="mother-photo-wrap">
            <Image
              src="/mama_photo.jpg"
              alt="A mother and child sharing a quiet moment"
              width={840}
              height={960}
              sizes="(max-width: 760px) 100vw, 45vw"
              className="mother-photo"
              loading="lazy"
            />
            <span className="photo-caption">Care is a journey shared.</span>
          </div>
          <div className="mother-copy">
            <span className="section-kicker">Built around mother and child</span>
            <h2>Care information should stay <em>within reach.</em></h2>
            <p>From an antenatal visit to a child’s next milestone, important health information deserves to be easy to find and follow.</p>
            <ul className="benefit-list">
              <li><span>01</span><strong>Know what comes next.</strong><ArrowRight size={18} /></li>
              <li><span>02</span><strong>Keep baby’s care on track.</strong><ArrowRight size={18} /></li>
              <li><span>03</span><strong>Keep important records together.</strong><ArrowRight size={18} /></li>
            </ul>
            <Link href="/mothers" className="text-link">For mothers and families <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-shell">
          <div className="section-heading">
            <span className="section-kicker">Care works better together</span>
            <h2>Made for the people<br />around <em>every child.</em></h2>
          </div>
          <div className="audience-layout">
            <div className="audience-tabs" role="tablist" aria-label="Explore by audience">
              {audiences.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  id={`audience-tab-${index}`}
                  data-index={index}
                  tabIndex={activeAudience === index ? 0 : -1}
                  aria-selected={activeAudience === index}
                  aria-controls="audience-panel"
                  onClick={() => setActiveAudience(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, audiences.length, setActiveAudience)}
                >
                  {item.name}<ArrowRight size={17} />
                </button>
              ))}
            </div>
            <div key={`audience-${activeAudience}`} className="audience-panel" role="tabpanel" id="audience-panel" tabIndex={0} aria-labelledby={`audience-tab-${activeAudience}`}>
              <div className="audience-panel-icon"><AudienceIcon size={22} /></div>
              <span className="section-kicker">{audience.visual}</span>
              <h3>{audience.heading}</h3>
              <ul>{audience.details.map((detail) => <li key={detail}><Check size={16} />{detail}</li>)}</ul>
              <Link href={activeAudience === 0 ? '/mothers' : activeAudience === 2 ? '/facilities' : '/solutions'} className="text-link">
                Explore this solution <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="facility-section">
        <div className="section-shell facility-layout">
          <div className="facility-copy">
            <span className="section-kicker">For the people providing care</span>
            <h2>Better connected records.<br /><em>More room for care.</em></h2>
            <p>Help healthcare teams keep maternal and child health records, visits and follow-up together in their daily work.</p>
            <div className="facility-points">
              <span><Check size={16} /> Maternal and child records</span>
              <span><Check size={16} /> Antenatal and immunisation visits</span>
              <span><Check size={16} /> Growth monitoring</span>
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href="/facilities">Explore for facilities <ArrowRight size={17} /></Link>
              <Link className="text-link" href="/contact">Request a demo <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="facility-visual">
            <Image
              src="/facility_pc_realistic.jpg"
              alt="TotoAfya facility dashboard shown on a computer"
              width={1100}
              height={760}
              sizes="(max-width: 760px) 100vw, 52vw"
              loading="lazy"
              className="facility-image"
            />
            <span className="facility-image-caption"><span className="kicker-dot" /> A look at the facility experience</span>
          </div>
        </div>
      </section>

      <section className="offline-section">
        <div className="section-shell offline-layout">
          <div className="offline-copy">
            <span className="section-kicker section-kicker-light">Designed for everyday realities</span>
            <h2>No internet?<br /><em>Keep caring.</em></h2>
            <p>Connectivity can be unreliable. TotoAfya is designed to help care teams continue their work and keep records ready to sync when the connection returns.</p>
            <button
              type="button"
              className="offline-toggle"
              aria-pressed={!connected}
              onClick={() => setConnected((wasConnected) => !wasConnected)}
            >
              {connected ? <Wifi size={17} /> : <WifiOff size={17} />}
              {connected ? 'Simulate connection loss' : 'Restore connection'}
            </button>
          </div>
          <div className="offline-demo" aria-live="polite">
            <div className="offline-demo-head">
              <span>Care team workspace</span>
              <span className={`connection-state ${connected ? 'is-connected' : 'is-offline'}`}>
                {connected ? <Wifi size={15} /> : <WifiOff size={15} />}
                {connected ? 'Connected' : 'Offline'}
              </span>
            </div>
            <div className="offline-demo-body">
              <span className="offline-demo-label">Example visit record</span>
              <strong>ANC visit saved</strong>
              <span>Maternal care · Today</span>
              <div className={`sync-message ${connected ? 'sync-online' : 'sync-offline'}`}>
                {connected ? <RefreshCw size={16} /> : <Check size={16} />}
                {connected ? 'Connection restored. Ready to sync.' : 'Saved on this device. Care continues.'}
              </div>
            </div>
            <div className="offline-demo-foot"><LockKeyhole size={14} /> Demonstration data only</div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="section-shell trust-layout">
          <div>
            <span className="section-kicker">Clarity builds trust</span>
            <h2>Health information deserves <em>care.</em></h2>
          </div>
          <div className="trust-copy">
            <p>TotoAfya is a digital tool to support care—not a substitute for a qualified healthcare professional. Learn how information is handled and where to find the important details.</p>
            <div className="trust-links">
              <Link href="/technology">Technology &amp; security <ArrowRight size={16} /></Link>
              <Link href="/privacy">Privacy policy <ArrowRight size={16} /></Link>
              <Link href="/disclaimer">Clinical disclaimer <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="section-shell closing-inner">
          <span className="section-kicker section-kicker-light">The next step starts here</span>
          <h2>Let’s keep care <em>connected.</em></h2>
          <p>See how TotoAfya can support your family, your care team or your facility.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/contact">Talk to our team <ArrowRight size={17} /></Link>
            <Link className="button button-outline-light" href="/how-it-works">How it works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
