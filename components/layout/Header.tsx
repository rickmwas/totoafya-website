'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAVIGATION_LINKS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-md'
          : 'bg-slate-950 border-b border-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Identity Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <Image
              src="/logo.png"
              alt="TotoAfya Digital Logo"
              width={40}
              height={40}
              className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-base sm:text-lg text-white tracking-tight leading-none">
                TotoAfya<span className="text-emerald-400 font-bold ml-1">Digital</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-400 mt-1">
                Connected Care Platform
              </span>
            </div>
          </Link>

          {/* Desktop Corporate Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-white bg-slate-800/90 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-sm transition-all active:scale-[0.98]"
            >
              <span>Request a demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Intentionally Designed Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-900 bg-slate-950 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-white bg-slate-800 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-900">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-emerald-700 text-white font-bold text-sm shadow-sm"
            >
              <span>Request a demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
