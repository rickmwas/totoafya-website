import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#063B4C] text-[#EAF6F9] pt-16 pb-12 border-t border-[#084D63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#084D63]">
          {/* Column 1: Brand & Institutional Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 p-1 border border-white/20">
                <Image
                  src="/logo.png"
                  alt="TotoAfya Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-sans font-bold text-xl text-white tracking-tight">
                  TotoAfya<span className="text-[#159A9C] font-semibold ml-1">Digital</span>
                </span>
                <p className="text-[10px] uppercase tracking-wider text-[#C4E2EA]">
                  {SITE_CONFIG.legalName}
                </p>
              </div>
            </Link>
            <p className="text-xs text-[#C4E2EA] leading-relaxed max-w-md">
              {SITE_CONFIG.description}
            </p>
            <div className="p-3.5 rounded-lg bg-[#084D63]/60 border border-[#0A5C77] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#159A9C] font-semibold text-[11px]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.governance.recognition}</span>
              </div>
              <p className="text-[#EAF6F9] text-[11px]">
                Incubated at {SITE_CONFIG.governance.incubator} to advance digital maternal & child health across Kenya.
              </p>
            </div>
          </div>

          {/* Column 2: Platform Architecture */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Ecosystem & Product
            </h3>
            <ul className="space-y-2 text-xs text-[#C4E2EA]">
              <li>
                <Link href="/product#mother-pwa" className="hover:text-white transition-colors">
                  Mother PWA & Care Portal
                </Link>
              </li>
              <li>
                <Link href="/product#nurse-portal" className="hover:text-white transition-colors">
                  Nurse Clinical Registry
                </Link>
              </li>
              <li>
                <Link href="/product#facility-pc" className="hover:text-white transition-colors">
                  Facility App (Tauri Desktop)
                </Link>
              </li>
              <li>
                <Link href="/product#offline-engine" className="hover:text-white transition-colors">
                  Offline Sync & Local Storage
                </Link>
              </li>
              <li>
                <Link href="/product#kepi-engine" className="hover:text-white transition-colors">
                  KEPI Immunization Scheduler
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Audiences */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs text-[#C4E2EA]">
              <li>
                <Link href="/solutions#facilities" className="hover:text-white transition-colors">
                  Maternity Clinics & Dispensaries
                </Link>
              </li>
              <li>
                <Link href="/solutions#nurses" className="hover:text-white transition-colors">
                  Clinical Nurses & CHVs
                </Link>
              </li>
              <li>
                <Link href="/solutions#counties" className="hover:text-white transition-colors">
                  County Health Departments
                </Link>
              </li>
              <li>
                <Link href="/solutions#ngos" className="hover:text-white transition-colors">
                  NGOs & Development Partners
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  B2B & B2C Pricing Tiers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional & Governance */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Governance & Contact
            </h3>
            <ul className="space-y-2 text-xs text-[#C4E2EA]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About TerraSept Solutions
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Documentation & FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Data Protection Act 2019 Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Clinical AI Guardrails Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#C4E2EA] border-b border-[#084D63] pb-8">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#159A9C] shrink-0" />
            <span>{SITE_CONFIG.address}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#159A9C] shrink-0" />
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#159A9C] shrink-0" />
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        {/* Copyright & Clinical Disclaimer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#C4E2EA]/70">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <p className="max-w-xl text-center sm:text-right">
            TotoAfya Digital is a supportive clinical registry and workflow platform. It does not provide automated medical diagnoses or replace licensed clinical judgment.
          </p>
        </div>
      </div>
    </footer>
  );
}
