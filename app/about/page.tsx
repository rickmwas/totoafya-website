import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About TotoAfya',
  description: 'Learn about TotoAfya, a maternal, newborn and child healthcare platform built in Kenya.',
};

export default function AboutPage() {
  return (
    <div className="info-page">
      <section className="section-shell how-hero">
        <span className="section-kicker">About TotoAfya</span>
        <h1>Connected care,<br /><em>built around people.</em></h1>
        <p>TotoAfya is a maternal, newborn and child healthcare platform built by {SITE_CONFIG.legalName} in {SITE_CONFIG.address}.</p>
      </section>
      <section className="about-statement">
        <div className="section-shell about-statement-inner">
          <span className="section-kicker section-kicker-light">Our purpose</span>
          <h2>Help keep every step of care connected.</h2>
          <p>Pregnancy, clinic visits, immunisation and growth are all part of a longer journey. TotoAfya brings digital tools together to support families and the healthcare teams caring for them.</p>
        </div>
      </section>
      <section className="section-shell about-links">
        <div>
          <span className="section-kicker">Learn more</span>
          <h2>See what we’re building.</h2>
        </div>
        <Link href="/product">Explore features <ArrowRight size={16} /></Link>
        <Link href="/how-it-works">How it works <ArrowRight size={16} /></Link>
        <Link href="/contact">Get in touch <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
