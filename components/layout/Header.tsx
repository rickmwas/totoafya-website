'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const NAV_ITEMS = [
  { name: 'Our Story', href: '/#our-story' },
  { name: 'Infrastructure', href: '/product' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Audited Impact', href: '/#impact' },
  { name: 'County Pilots', href: '/#pilot-program' },
  { name: 'About Us', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] transition-all">
      {/* Top Clinical Strip */}
      <div className="bg-[#006B5F] text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#00574D]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-[#107C41] animate-pulse shrink-0 ring-2 ring-white/30" />
            <span className="font-semibold">Kenya MoH KEPI Protocols Aligned</span>
            <span className="hidden md:inline text-teal-200">|</span>
            <span className="hidden md:inline text-teal-100">
              Incubated at {SITE_CONFIG.governance.incubator}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-[#FFD580] font-medium hidden sm:inline">KDPA 2019 Data Compliant</span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-teal-100 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#FFD580]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Uncontainered, Big, Direct Logo */}
          <Link href="/" className="flex items-center py-2 focus:outline-none group">
            <Image
              src="/logo.png"
              alt="TotoAfya Digital"
              width={220}
              height={64}
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#006B5F] bg-[#E6F4F1] font-bold'
                      : 'text-[#555555] hover:text-[#006B5F] hover:bg-[#F7F5F0]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button (TotoAfya Teal with Savannah Accent) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?type=pilot"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#006B5F] text-white font-semibold text-xs hover:bg-[#00574D] active:scale-[0.98] transition-all shadow-md shadow-[#006B5F]/20"
            >
              <span>Request Pilot Deployment</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E68A00]" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#006B5F] hover:bg-[#F7F5F0] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E5E5] bg-white px-4 pt-4 pb-6 space-y-4 shadow-lg">
          <div className="space-y-1">
            {NAV_ITEMS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#0A0A0A] hover:text-[#006B5F] hover:bg-[#E6F4F1]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E5E5E5] space-y-3">
            <Link
              href="/contact?type=pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#006B5F] text-white font-semibold text-sm shadow-md"
            >
              <span>Request Pilot Deployment</span>
              <ArrowRight className="w-4 h-4 text-[#E68A00]" />
            </Link>
            <div className="text-center text-xs text-[#555555] pt-1">
              <span>{SITE_CONFIG.governance.incubator} • {SITE_CONFIG.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
