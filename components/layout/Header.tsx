'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { NAVIGATION_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFloatingHeroHeader = isHomePage && !isScrolled;

  return (
    <header
      className={`${
        isFloatingHeroHeader
          ? 'absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10'
          : 'sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg'
      } transition-all duration-300`}
    >
      {/* High-Tech Top Governance Bar */}
      <div className="bg-slate-950/60 backdrop-blur-md text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="text-slate-300">
              Connected Maternal & Child Health Infrastructure by <strong className="text-emerald-400 font-bold">{SITE_CONFIG.legalName}</strong>
            </span>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="hidden md:inline text-slate-400 font-medium">
              {SITE_CONFIG.governance.incubator}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-emerald-400 font-bold">
              {SITE_CONFIG.governance.recognition}
            </span>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Clean Brand Logo without container or background */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <Image
              src="/logo.png"
              alt="TotoAfya Digital Logo"
              width={44}
              height={44}
              className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">
                TotoAfya<span className="gradient-text-emerald font-bold ml-1">Digital</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mt-1">
                Care Infrastructure Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 shadow-xs'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Vibrant Primary Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact?type=demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 active:scale-[0.98] transition-all"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-emerald-400 hover:bg-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              href="/contact?type=demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/20"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

