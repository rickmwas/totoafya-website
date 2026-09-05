import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F1B] text-slate-200 pt-16 pb-12 border-t border-[#145244]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#145244]/80">
          {/* Column 1: Institutional Authority & Legal Entity */}
          <div className="lg:col-span-2 space-y-4">
            {/* Direct, Uncontainered, Bigger Logo */}
            <Link href="/" className="inline-block py-1">
              <Image
                src="/logo.png"
                alt="TotoAfya Digital"
                width={200}
                height={58}
                className="h-12 sm:h-14 w-auto object-contain brightness-105"
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Kenya&apos;s connected primary healthcare infrastructure. Uniting mothers, community health promoters, and clinical facilities with offline-first digital registries, automated KEPI immunization schedules, and WHO-standard child growth intelligence.
            </p>

            {/* Incubation & Accreditation Badge with TotoAfya Colors */}
            <div className="p-3.5 rounded-lg bg-[#0F352E] border border-[#1B6B5A] text-xs text-slate-200 space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 text-[#E68A00] font-semibold text-[11px]">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#107C41]" />
                <span>{SITE_CONFIG.governance.incubator}</span>
              </div>
              <p className="text-[11px] text-teal-100">
                {SITE_CONFIG.governance.recognition} • Aligned with KDPA 2019 & MoH Protocols.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00A389] shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00A389] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.partnershipsEmail}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.partnershipsEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00A389] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Health Infrastructure */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#145244] pb-2">
              Infrastructure
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/product#mother-portal" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Mother Web PWA</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/product#nurse-portal" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Nurse Clinical Registry</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/product#facility-pc" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Facility Desktop (Tauri)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/product#offline-engine" className="hover:text-white transition-colors">
                  Offline Sync Engine
                </Link>
              </li>
              <li>
                <Link href="/product#kepi-engine" className="hover:text-white transition-colors">
                  KEPI Vaccine Scheduler
                </Link>
              </li>
              <li>
                <Link href="/product#growth-tracking" className="hover:text-white transition-colors">
                  WHO Growth z-Score Core
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Target Networks */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#145244] pb-2">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/solutions#facilities" className="hover:text-white transition-colors">
                  Primary Care Dispensaries
                </Link>
              </li>
              <li>
                <Link href="/solutions#nurses" className="hover:text-white transition-colors">
                  Frontline Clinical Nurses
                </Link>
              </li>
              <li>
                <Link href="/solutions#chps" className="hover:text-white transition-colors">
                  Community Health Promoters
                </Link>
              </li>
              <li>
                <Link href="/solutions#counties" className="hover:text-white transition-colors">
                  County Health Departments
                </Link>
              </li>
              <li>
                <Link href="/solutions#partners" className="hover:text-white transition-colors">
                  Development Partners & NGOs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Deployment Tiers & Sizing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Governance & Compliance */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#145244] pb-2">
              Governance
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Clinical Safety Framework
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Data Protection (KDPA 2019)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <span className="text-slate-400 block text-[11px] pt-1">
                  MoH Protocol Alignment:
                </span>
                <span className="text-teal-200 block text-[11px] font-mono">
                  MoH 711 • MoH 705 • DHIS2
                </span>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact?type=pilot"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#006B5F] text-white font-semibold text-[11px] hover:bg-[#00574D] transition-colors border border-teal-500/40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E68A00]" />
                  <span>2026 Open Pilot Call</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved. Operating in the Republic of Kenya.
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Non-Diagnostic Notice
            </Link>
            <a href="#top" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
