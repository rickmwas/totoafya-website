'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, ArrowRight, PhoneCall } from 'lucide-react';
import { NAVIGATION_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Institutional Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              Official MNCH Platform by <strong className="text-white font-medium">{SITE_CONFIG.legalName}</strong>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">
              {SITE_CONFIG.governance.incubator}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-emerald-400 font-medium">{SITE_CONFIG.governance.recognition}</span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 overflow-hidden rounded-xl bg-slate-50 border border-slate-200/60 p-1 transition-transform group-hover:scale-105">
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
              <span className="font-sans font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-emerald-800 transition-colors">
                TotoAfya<span className="text-emerald-700 font-semibold ml-1">Digital</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500 mt-0.5">
                Maternal & Child Health
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-emerald-800 bg-emerald-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?type=demo"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-800 text-white font-semibold text-xs hover:bg-emerald-900 active:scale-[0.98] transition-all shadow-sm shadow-emerald-950/10"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Link
              href="/contact?type=demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-800 text-white font-semibold text-sm shadow-sm"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-slate-500 pt-1">
              <span>{SITE_CONFIG.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
