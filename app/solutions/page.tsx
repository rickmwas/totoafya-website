import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions — Connected Maternal and Child Healthcare',
  description: 'See how TotoAfya supports mothers, healthcare workers, facilities and health programmes across the care journey.',
};

const groups = [
  {
    id: 'caregivers',
    eyebrow: 'For mothers and families',
    title: 'Care that is easier to follow.',
    detail: 'Keep pregnancy, clinic visits and your child’s care journey together from antenatal care through early childhood.',
    link: '/mothers',
  },
  {
    id: 'nurses',
    eyebrow: 'For healthcare workers',
    title: 'A clearer way to keep care moving.',
    detail: 'Support everyday maternal and child health workflows, including antenatal records, immunisation and growth monitoring.',
    link: '/product#nurse-portal',
  },
  {
    id: 'chps',
    eyebrow: 'For community health teams',
    title: 'Stay connected to the care journey.',
    detail: 'Support continuity between families and the healthcare teams involved in their maternal and child health care.',
    link: '/how-it-works',
  },
  {
    id: 'facilities',
    eyebrow: 'For health facilities',
    title: 'Bring records and workflows together.',
    detail: 'Give facility teams a shared view of maternal and child health visits, records and follow-up.',
    link: '/facilities',
  },
  {
    id: 'counties',
    eyebrow: 'For health programmes',
    title: 'Support coordinated care across facilities.',
    detail: 'Explore how connected records and reporting can support programme teams working across care settings.',
    link: '/contact',
  },
  {
    id: 'partners',
    eyebrow: 'For institutional partners',
    title: 'Explore a connected approach to care.',
    detail: 'Talk with our team about TotoAfya, your care setting and the needs of the communities you support.',
    link: '/contact',
  },
];

export default function SolutionsPage() {
  return (
    <div className="solutions-page">
      <section className="section-shell how-hero">
        <span className="section-kicker">Solutions</span>
        <h1>Care works best<br />when we work <em>together.</em></h1>
        <p>TotoAfya supports the people and teams around maternal, newborn and child healthcare.</p>
      </section>
      <div className="section-shell solution-list">
        {groups.map((group, index) => (
          <section id={group.id} className="solution-row" key={group.id}>
            <span className="solution-index">0{index + 1}</span>
            <div>
              <span className="section-kicker">{group.eyebrow}</span>
              <h2>{group.title}</h2>
              <p>{group.detail}</p>
            </div>
            <Link href={group.link} aria-label={`Explore ${group.eyebrow}`}><ArrowRight size={18} /></Link>
          </section>
        ))}
      </div>
      <section className="section-shell product-cta">
        <h2>Let’s talk about the care you provide.</h2>
        <Link className="button button-primary" href="/contact">Contact our team <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
