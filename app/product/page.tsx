import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features — Pregnancy, Immunisation and Growth',
  description:
    'Explore TotoAfya features for pregnancy and antenatal care, child immunisation, growth monitoring, facility workflows and offline care.',
};

const features = [
  {
    id: 'mother-portal',
    eyebrow: 'For families',
    title: 'Pregnancy and antenatal care',
    copy: 'Keep pregnancy details, antenatal visits and next steps together across the journey.',
    image: '/mother_portal_realistic.jpg',
    alt: 'TotoAfya maternal care interface',
  },
  {
    id: 'kepi-engine',
    eyebrow: 'For child health',
    title: 'Immunisation visits',
    copy: 'Keep a child’s immunisation record and upcoming visits easy to follow.',
    image: '/baby.jpg',
    alt: 'A baby being cared for',
  },
  {
    id: 'growth-tracking',
    eyebrow: 'For growing children',
    title: 'Growth monitoring',
    copy: 'Bring child growth measurements together across visits for a clearer view over time.',
    image: '/nurse_clinical_realistic.jpg',
    alt: 'A healthcare worker supporting child care',
  },
  {
    id: 'nurse-portal',
    eyebrow: 'For care teams',
    title: 'Clinical workflows',
    copy: 'Support maternal and child health records, visit documentation and follow-up in the clinic.',
    image: '/nurse_portal_mockup.png',
    alt: 'TotoAfya healthcare worker interface',
  },
  {
    id: 'facility-pc',
    eyebrow: 'For facilities',
    title: 'A connected facility view',
    copy: 'Give facility teams a shared view of maternal and child care workflows and records.',
    image: '/facility_pc_realistic.jpg',
    alt: 'TotoAfya facility dashboard',
  },
  {
    id: 'offline-engine',
    eyebrow: 'For changing connections',
    title: 'Care when connectivity is unreliable',
    copy: 'TotoAfya is designed to support care teams when a stable internet connection is not always available.',
    image: '/hero_clinic_bg.jpg',
    alt: 'A healthcare clinic setting',
  },
];

export default function ProductPage() {
  return (
    <div className="feature-page">
      <section className="section-shell how-hero">
        <span className="section-kicker">TotoAfya features</span>
        <h1>Care information that stays <em>connected.</em></h1>
        <p>Explore the tools that support mothers, healthcare workers and facilities across the maternal and child health journey.</p>
      </section>
      <div className="section-shell feature-list">
        {features.map((feature, index) => (
          <section key={feature.id} id={feature.id} className={`feature-row ${index % 2 ? 'feature-row-reverse' : ''}`}>
            <div className="feature-row-copy">
              <span className="section-kicker">{feature.eyebrow}</span>
              <h2>{feature.title}</h2>
              <p>{feature.copy}</p>
              {feature.id === 'offline-engine' && (
                <Link href="/technology#offline-care" className="text-link">How offline care works <ArrowRight size={16} /></Link>
              )}
            </div>
            <div className="feature-row-image">
              <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
          </section>
        ))}
      </div>
      <section className="section-shell product-cta">
        <h2>See how TotoAfya could support your care setting.</h2>
        <Link className="button button-primary" href="/contact">Talk to our team <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
