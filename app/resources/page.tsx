import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore TotoAfya product information, privacy details, technology notes and clinical guidance.',
};

const resources = [
  ['Product features', 'A practical overview of pregnancy, antenatal care, immunisation, growth monitoring and facility workflows.', '/product'],
  ['How TotoAfya works', 'Follow the care journey and see how the tools fit together.', '/how-it-works'],
  ['Technology & security', 'Learn about offline-capable workflows and where to find data handling information.', '/technology'],
  ['Privacy policy', 'Read how personal and health information is handled.', '/privacy'],
  ['Clinical disclaimer', 'Understand the intended role and limits of TotoAfya.', '/disclaimer'],
  ['Terms of service', 'Review the terms for using TotoAfya.', '/terms'],
];

export default function ResourcesPage() {
  return (
    <div className="info-page">
      <section className="section-shell how-hero">
        <span className="section-kicker">Resources</span>
        <h1>Clear answers.<br /><em>Useful information.</em></h1>
        <p>Explore TotoAfya features, understand how information is handled and find important product and clinical details.</p>
      </section>
      <section className="section-shell resource-list">
        {resources.map(([title, description, href], index) => (
          <Link href={href} className="resource-row" key={href}>
            <span>0{index + 1}</span>
            <div><h2>{title}</h2><p>{description}</p></div>
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </section>
    </div>
  );
}
