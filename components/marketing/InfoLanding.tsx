import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

type InfoLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
  linkHref: string;
  linkLabel: string;
};

export default function InfoLanding({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  points,
  linkHref,
  linkLabel,
}: InfoLandingProps) {
  return (
    <div className="info-page">
      <section className="info-hero section-shell">
        <div className="info-copy">
          <span className="section-kicker">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link href={linkHref} className="button button-primary">{linkLabel}<ArrowRight size={16} /></Link>
        </div>
        <div className="info-image-wrap">
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 760px) 100vw, 50vw" className="info-image" />
        </div>
      </section>
      <section className="info-details">
        <div className="section-shell info-details-layout">
          <div>
            <span className="section-kicker">Designed around everyday care</span>
            <h2>Keep the important things <em>in view.</em></h2>
          </div>
          <ul>
            {points.map((point) => (
              <li key={point}><Check size={17} />{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="info-next section-shell">
        <div>
          <span className="section-kicker">See the bigger picture</span>
          <h2>Connected care, from one visit to the next.</h2>
        </div>
        <p>TotoAfya supports maternal and child health care from pregnancy through early childhood. Explore the product or talk with our team about your needs.</p>
        <div className="info-next-links">
          <Link href="/how-it-works">How it works <ArrowRight size={16} /></Link>
          <Link href="/contact">Talk to our team <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
