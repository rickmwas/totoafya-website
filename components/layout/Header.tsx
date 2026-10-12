'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

const menus = {
  Products: [
    { label: 'Pregnancy & antenatal care', href: '/mothers' },
    { label: 'Child immunisation', href: '/product#kepi-engine' },
    { label: 'Growth monitoring', href: '/product#growth-tracking' },
    { label: 'Facility workflows', href: '/facilities' },
    { label: 'Care when offline', href: '/technology#offline-care' },
  ],
  Solutions: [
    { label: 'For mothers and families', href: '/mothers' },
    { label: 'For healthcare workers', href: '/solutions#nurses' },
    { label: 'For health facilities', href: '/facilities' },
    { label: 'For health programmes', href: '/solutions#counties' },
  ],
  'Sign in': [
    { label: 'Mother and family portal', href: 'https://mother.totoafya.co.ke' },
    { label: 'Healthcare worker portal', href: 'https://nurse.totoafya.co.ke' },
    { label: 'Facility portal', href: 'https://facility.totoafya.co.ke' },
  ],
};
const primaryMenus = ['Products', 'Solutions'] as const;

export default function Header() {
  const [openMenu, setOpenMenu] = useState<keyof typeof menus | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-link" aria-label="TotoAfya home">
          <Image src="/logo.png" alt="TotoAfya" width={210} height={82} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {primaryMenus.map((name) => (
            <div className="nav-menu-wrap" key={name}>
              <button
                type="button"
                className={`nav-trigger ${openMenu === name ? 'nav-trigger-open' : ''}`}
                aria-expanded={openMenu === name}
                aria-controls={`menu-${name.toLowerCase()}`}
                onClick={() => setOpenMenu(openMenu === name ? null : name)}
              >
                {name}<ChevronDown size={15} />
              </button>
              {openMenu === name && (
                <div className="nav-popover" id={`menu-${name.toLowerCase()}`}>
                  <span className="nav-popover-label">Explore {name.toLowerCase()}</span>
                  {menus[name].map((item) => (
                    <Link href={item.href} key={item.href} onClick={() => setOpenMenu(null)} target={item.href.startsWith('https:') ? '_blank' : undefined} rel={item.href.startsWith('https:') ? 'noreferrer' : undefined}>
                      {item.label}<ArrowRight size={15} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/how-it-works" className="nav-link">How it works</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <div className="header-actions">
          <div className="nav-menu-wrap desktop-signin">
            <button
              type="button"
              className={`nav-trigger ${openMenu === 'Sign in' ? 'nav-trigger-open' : ''}`}
              aria-expanded={openMenu === 'Sign in'}
              aria-controls="menu-sign-in"
              onClick={() => setOpenMenu(openMenu === 'Sign in' ? null : 'Sign in')}
            >
              Sign in<ChevronDown size={15} />
            </button>
            {openMenu === 'Sign in' && (
              <div className="nav-popover nav-popover-right" id="menu-sign-in">
                <span className="nav-popover-label">Choose your TotoAfya portal</span>
                {menus['Sign in'].map((item) => (
                  <Link href={item.href} key={item.href} target="_blank" rel="noreferrer" onClick={() => setOpenMenu(null)}>
                    {item.label}<ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="header-cta">Request a demo <ArrowRight size={16} /></Link>
          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setOpenMenu(null);
              setMobileMenuOpen((open) => !open);
            }}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {primaryMenus.map((name) => (
            <div className="mobile-nav-group" key={name}>
              <button
                type="button"
                className="mobile-nav-toggle"
                aria-expanded={openMenu === name}
                onClick={() => setOpenMenu(openMenu === name ? null : name)}
              >
                {name}<ChevronDown size={16} />
              </button>
              {openMenu === name && menus[name].map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="mobile-nav-sub-link"
                  target={item.href.startsWith('https:') ? '_blank' : undefined}
                  rel={item.href.startsWith('https:') ? 'noreferrer' : undefined}
                  onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/how-it-works" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
          <Link href="/resources" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
          <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-expanded={openMenu === 'Sign in'}
              onClick={() => setOpenMenu(openMenu === 'Sign in' ? null : 'Sign in')}
            >
              Sign in<ChevronDown size={16} />
            </button>
            {openMenu === 'Sign in' && menus['Sign in'].map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="mobile-nav-sub-link"
                target="_blank"
                rel="noreferrer"
                onClick={() => { setMobileMenuOpen(false); setOpenMenu(null); }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="mobile-nav-demo" onClick={() => setMobileMenuOpen(false)}>Request a demo <ArrowRight size={17} /></Link>
        </nav>
      )}
    </header>
  );
}
