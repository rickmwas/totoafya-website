import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 p-1 border border-white/20">
                <Image
                  src="/logo.png"
                  alt="TotoAfya Digital"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg text-white tracking-tight">
                  TotoAfya<span className="text-emerald-400 font-semibold ml-1">Digital</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Care Continuity Infrastructure
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connected maternal, newborn, and child health infrastructure for Kenya. Digitizing clinical registries, KEPI vaccine scheduling, and WHO growth tracking across dispensaries and county health systems.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Incorporated under <strong>{SITE_CONFIG.legalName}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Architecture */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/product#mother-portal" className="hover:text-white transition-colors">
                  Mother PWA Portal
                </Link>
              </li>
              <li>
                <Link href="/product#nurse-portal" className="hover:text-white transition-colors">
                  Nurse Clinical Registry
                </Link>
              </li>
              <li>
                <Link href="/product#facility-app" className="hover:text-white transition-colors">
                  Facility Telemetry App
                </Link>
              </li>
              <li>
                <Link href="/product#offline-sync" className="hover:text-white transition-colors">
                  Offline Sync Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/solutions#facilities" className="hover:text-white transition-colors">
                  Dispensaries & Clinics
                </Link>
              </li>
              <li>
                <Link href="/solutions#counties" className="hover:text-white transition-colors">
                  County Health Departments
                </Link>
              </li>
              <li>
                <Link href="/solutions#ngos" className="hover:text-white transition-colors">
                  NGOs & Donors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Pilot Tiers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Governance & Legal</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Technical Documentation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Data Protection Brief
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <div>
            <span>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-slate-300 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
