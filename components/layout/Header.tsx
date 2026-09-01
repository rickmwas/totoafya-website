'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const NAV_ITEMS = [
  { name: 'Platform', href: '/product' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Impact', href: '/#impact' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D4E7EC] transition-all">
      {/* Top Institutional Credibility Strip */}
      <div className="bg-[#063B4C] text-[#EAF6F9] text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#084D63]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#159A9C] shrink-0" />
            <span>
              Digital Health Infrastructure by <strong className="text-white font-semibold">{SITE_CONFIG.legalName}</strong>
            </span>
            <span className="hidden md:inline text-[#084D63]">|</span>
            <span className="hidden md:inline text-[#C4E2EA]">
              {SITE_CONFIG.governance.incubator}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-[#159A9C] font-medium">{SITE_CONFIG.governance.recognition}</span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hidden lg:flex items-center gap-1.5 text-[#EAF6F9] hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#159A9C]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 overflow-hidden rounded-lg bg-[#EAF6F9] border border-[#C4E2EA] p-1 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="TotoAfya Digital Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg sm:text-xl text-[#063B4C] tracking-tight leading-none group-hover:text-[#087EA4] transition-colors">
                TotoAfya<span className="text-[#087EA4] font-medium ml-1">Digital</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5E7078] mt-0.5">
                Maternal & Child Health Infrastructure
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#063B4C] bg-[#EAF6F9] font-bold'
                      : 'text-[#5E7078] hover:text-[#063B4C] hover:bg-[#F8FAFA]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?type=pilot"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#087EA4] text-white font-semibold text-xs hover:bg-[#066989] active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#5E7078] hover:text-[#063B4C] hover:bg-[#EAF6F9] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4E7EC] bg-white px-4 pt-4 pb-6 space-y-4 shadow-lg">
          <div className="space-y-1">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-md text-sm font-semibold text-[#102027] hover:text-[#087EA4] hover:bg-[#EAF6F9]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EAF6F9] space-y-3">
            <Link
              href="/contact?type=pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#087EA4] text-white font-semibold text-sm shadow-sm"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-[#5E7078] pt-1">
              <span>{SITE_CONFIG.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
