import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology and Security',
  description: 'Learn about TotoAfya’s offline-capable care workflows, data practices and privacy information.',
};

export default function TechnologyPage() {
  return (
    <div className="info-page">
      <section className="section-shell how-hero">
        <span className="section-kicker">Technology &amp; security</span>
        <h1>Technology should support care.<br /><em>Quietly and reliably.</em></h1>
        <p>TotoAfya is designed for maternal and child health workflows, including care settings where internet connectivity is not always available.</p>
      </section>
      <section className="technology-details">
        <div className="section-shell technology-grid">
          <article id="offline-care">
            <span className="section-kicker">Continuity</span>
            <h2>Designed for unreliable connections.</h2>
            <p>Care teams can continue working in supported offline workflows. When a connection is available, records can sync with the connected system.</p>
          </article>
          <article id="data-care">
            <span className="section-kicker">Responsible data practices</span>
            <h2>Health information deserves care.</h2>
            <p>Read the privacy policy for details on the information handled by TotoAfya and the ways it is used. Contact the team if you have a data protection question.</p>
          </article>
        </div>
      </section>
      <section className="section-shell technology-links">
        <Link href="/privacy">Read the privacy policy <ArrowRight size={16} /></Link>
        <Link href="/terms">Read the terms of service <ArrowRight size={16} /></Link>
        <Link href="/disclaimer">Read the clinical disclaimer <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
