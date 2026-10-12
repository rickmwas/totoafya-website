import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const footerGroups = [
  {
    title: 'Explore',
    links: [
      ['Features', '/product'],
      ['How it works', '/how-it-works'],
      ['For mothers', '/mothers'],
      ['For facilities', '/facilities'],
    ],
  },
  {
    title: 'Learn',
    links: [
      ['About TotoAfya', '/about'],
      ['Resources', '/resources'],
      ['Technology & security', '/technology'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Important information',
    links: [
      ['Privacy policy', '/privacy'],
      ['Terms of service', '/terms'],
      ['Clinical disclaimer', '/disclaimer'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="TotoAfya home">
              <Image src="/logo-horizontal.png" alt="TotoAfya" width={190} height={58} />
            </Link>
            <p>Connected care for mothers, babies and the people who care for them.</p>
            <a href={`mailto:${SITE_CONFIG.email}`} className="footer-email">{SITE_CONFIG.email}</a>
          </div>
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, href]) => (
                <Link href={href} key={href}>{label}<ArrowUpRight size={14} /></Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</span>
          <span>Designed around the care journey.</span>
        </div>
      </div>
    </footer>
  );
}
