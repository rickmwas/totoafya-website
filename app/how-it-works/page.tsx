import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How TotoAfya Works',
  description: 'See how TotoAfya connects maternal, newborn and child healthcare across visits and care teams.',
};

const steps = [
  ['01', 'Start with a care record', 'Bring the information needed for pregnancy and child health care together.'],
  ['02', 'Keep visits in view', 'Support antenatal visits, immunisation and growth monitoring over time.'],
  ['03', 'Continue across care', 'Help families and healthcare teams stay connected from pregnancy through early childhood.'],
  ['04', 'Keep working when offline', 'TotoAfya is designed to support care workflows when internet access is unreliable.'],
];

export default function HowItWorksPage() {
  return (
    <div className="info-page">
      <section className="section-shell how-hero">
        <span className="section-kicker">How TotoAfya works</span>
        <h1>One connected journey.<br /><em>From pregnancy to childhood.</em></h1>
        <p>Bring people, visits and important care information closer together—one step at a time.</p>
      </section>
      <section className="how-steps">
        <div className="section-shell how-steps-inner">
          {steps.map(([number, title, detail]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h2>{title}</h2><p>{detail}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-shell info-next">
        <div><span className="section-kicker">Take a closer look</span><h2>See the care journey in TotoAfya.</h2></div>
        <p>Explore the features or speak to our team about how TotoAfya may fit your care setting.</p>
        <div className="info-next-links">
          <Link href="/product">Explore features <ArrowRight size={16} /></Link>
          <Link href="/contact">Request a demo <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
