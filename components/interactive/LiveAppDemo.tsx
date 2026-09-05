'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Download,
  Smartphone,
  Tablet,
  Laptop,
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function LiveAppDemo() {
  const [activeDevice, setActiveDevice] = useState<'tablet' | 'mobile' | 'desktop'>('tablet');
  const [activeTab, setActiveTab] = useState<'vitals' | 'kepi' | 'growth'>('vitals');

  return (
    <div className="w-full bg-white rounded-2xl border border-[#E5E5E5] shadow-xl shadow-teal-900/5 overflow-hidden">
      {/* Top Device Switcher Bar */}
      <div className="bg-[#F7F5F0] px-4 py-3 border-b border-[#E5E5E5] flex flex-wrap items-center justify-between gap-3">
        {/* Device Switcher Pills */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E5E5E5] shadow-sm">
          <button
            onClick={() => setActiveDevice('tablet')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDevice === 'tablet'
                ? 'bg-[#006B5F] text-white shadow-sm'
                : 'text-[#555555] hover:text-[#0A0A0A] hover:bg-[#F7F5F0]'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Nurse Tablet Registry</span>
          </button>
          <button
            onClick={() => setActiveDevice('mobile')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDevice === 'mobile'
                ? 'bg-[#006B5F] text-white shadow-sm'
                : 'text-[#555555] hover:text-[#0A0A0A] hover:bg-[#F7F5F0]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mother Mobile PWA</span>
          </button>
          <button
            onClick={() => setActiveDevice('desktop')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDevice === 'desktop'
                ? 'bg-[#006B5F] text-white shadow-sm'
                : 'text-[#555555] hover:text-[#0A0A0A] hover:bg-[#F7F5F0]'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Facility Superintendent PC</span>
          </button>
        </div>

        {/* Live System Status Pill with TotoAfya Health Green */}
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0FAF5] text-[#107C41] border border-[#BDE8D3] font-medium text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#107C41] animate-pulse" />
            <span>Offline-Ready (IndexedDB Sync)</span>
          </span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* DEVICE SCREEN 1: NURSE CLINICAL TABLET REGISTRY                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeDevice === 'tablet' && (
        <div className="p-4 sm:p-6 bg-[#F7F5F0]/60">
          {/* Patient Banner */}
          <div className="bg-white rounded-xl border border-[#E5E5E5] p-4 shadow-sm mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E6F4F1] border border-[#BCE2DA] flex items-center justify-center text-[#006B5F] font-bold text-base">
                  AM
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base text-[#0A0A0A]">Amina Mwangi</h4>
                    <span className="px-2 py-0.5 rounded-full bg-[#F0FAF5] text-[#107C41] border border-[#BDE8D3] text-[10px] font-bold uppercase">
                      Active Pregnancy
                    </span>
                  </div>
                  <p className="text-xs text-[#555555] mt-0.5">
                    26 yrs • Gravida 2, Para 1 • ANC ID: <span className="font-mono text-[#0A0A0A] font-semibold">KIS-2026-089</span> • Kisii Level 4 Facility
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-right hidden sm:block">
                  <span className="text-[11px] text-[#A0A0A0] uppercase tracking-wider block">Gestation</span>
                  <span className="font-bold text-sm text-[#006B5F]">Week 28 (ANC-3)</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#E6F4F1] border border-[#BCE2DA] text-xs font-bold text-[#006B5F]">
                  Due: 14 Nov 2026
                </div>
              </div>
            </div>
          </div>

          {/* Sub-tabs for clinical workflows */}
          <div className="flex items-center gap-2 mb-4 border-b border-[#E5E5E5] pb-2">
            <button
              onClick={() => setActiveTab('vitals')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'vitals'
                  ? 'bg-[#E6F4F1] text-[#006B5F]'
                  : 'text-[#555555] hover:text-[#0A0A0A]'
              }`}
            >
              1. Antenatal Vitals & Triage
            </button>
            <button
              onClick={() => setActiveTab('kepi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'kepi'
                  ? 'bg-[#E6F4F1] text-[#006B5F]'
                  : 'text-[#555555] hover:text-[#0A0A0A]'
              }`}
            >
              2. KEPI Immunization Schedule
            </button>
            <button
              onClick={() => setActiveTab('growth')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'growth'
                  ? 'bg-[#E6F4F1] text-[#006B5F]'
                  : 'text-[#555555] hover:text-[#0A0A0A]'
              }`}
            >
              3. WHO Growth Monitoring
            </button>
          </div>

          {/* Tab 1: Antenatal Vitals */}
          {activeTab === 'vitals' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-[#E5E5E5] shadow-sm">
                <span className="text-[11px] text-[#555555] font-medium">Blood Pressure</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-bold text-lg text-[#0A0A0A]">116/74</span>
                  <span className="text-[11px] text-[#A0A0A0]">mmHg</span>
                </div>
                <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-[#107C41] bg-[#F0FAF5] px-2 py-0.5 rounded-full border border-[#BDE8D3]">
                  <Check className="w-3 h-3" /> Normal
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#E5E5E5] shadow-sm">
                <span className="text-[11px] text-[#555555] font-medium">Fundal Height</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-bold text-lg text-[#0A0A0A]">28</span>
                  <span className="text-[11px] text-[#A0A0A0]">cm</span>
                </div>
                <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-[#107C41] bg-[#F0FAF5] px-2 py-0.5 rounded-full border border-[#BDE8D3]">
                  <Check className="w-3 h-3" /> Matches Gestation
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#E5E5E5] shadow-sm">
                <span className="text-[11px] text-[#555555] font-medium">Hemoglobin (Hb)</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-bold text-lg text-[#0A0A0A]">12.4</span>
                  <span className="text-[11px] text-[#A0A0A0]">g/dL</span>
                </div>
                <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-[#107C41] bg-[#F0FAF5] px-2 py-0.5 rounded-full border border-[#BDE8D3]">
                  <Check className="w-3 h-3" /> No Anemia
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#E5E5E5] shadow-sm">
                <span className="text-[11px] text-[#555555] font-medium">Fetal Heart Rate</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-bold text-lg text-[#0A0A0A]">142</span>
                  <span className="text-[11px] text-[#A0A0A0]">bpm</span>
                </div>
                <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-[#107C41] bg-[#F0FAF5] px-2 py-0.5 rounded-full border border-[#BDE8D3]">
                  <Check className="w-3 h-3" /> Strong & Regular
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: KEPI Immunization Schedule Table */}
          {activeTab === 'kepi' && (
            <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#E6F4F1]/60 border-b border-[#BCE2DA] text-[#0A0A0A] font-bold">
                  <tr>
                    <th className="py-2.5 px-3">Vaccine</th>
                    <th className="py-2.5 px-3">Protocol Target</th>
                    <th className="py-2.5 px-3">Scheduled Date</th>
                    <th className="py-2.5 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#0A0A0A]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">Tetanus-Diphtheria (Td1)</td>
                    <td className="py-2.5 px-3 text-[#555555]">First Contact ANC</td>
                    <td className="py-2.5 px-3 font-mono">12 May 2026</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F0FAF5] text-[#107C41] border border-[#BDE8D3] font-bold text-[10px]">
                        <Check className="w-3 h-3" /> Administered
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">Tetanus-Diphtheria (Td2)</td>
                    <td className="py-2.5 px-3 text-[#555555]">4 Weeks Post-Td1</td>
                    <td className="py-2.5 px-3 font-mono">16 Jun 2026</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F0FAF5] text-[#107C41] border border-[#BDE8D3] font-bold text-[10px]">
                        <Check className="w-3 h-3" /> Administered
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold">Infant BCG & OPV 0</td>
                    <td className="py-2.5 px-3 text-[#555555]">At Birth</td>
                    <td className="py-2.5 px-3 font-mono">14 Nov 2026 (Est.)</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E6F4F1] text-[#006B5F] border border-[#BCE2DA] font-bold text-[10px]">
                        <Clock className="w-3 h-3" /> Auto-Queued
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 3: WHO Growth */}
          {activeTab === 'growth' && (
            <div className="bg-white p-4 rounded-xl border border-[#E5E5E5] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-xs text-[#0A0A0A]">WHO Weight-for-Age Growth Curve</span>
                <span className="text-[11px] text-[#107C41] bg-[#F0FAF5] px-2 py-0.5 rounded-full border border-[#BDE8D3] font-semibold">
                  Green Zone (Normal: +0.2 z-score)
                </span>
              </div>
              <div className="h-28 w-full bg-[#F7F5F0]/50 rounded-lg border border-[#E5E5E5] flex items-center justify-center p-3">
                <svg className="w-full h-full" viewBox="0 0 400 100">
                  <path d="M 0 80 Q 200 40 400 20" fill="none" stroke="#BCE2DA" strokeWidth="2" strokeDasharray="4" />
                  <path d="M 0 60 Q 200 30 400 10" fill="none" stroke="#BCE2DA" strokeWidth="2" strokeDasharray="4" />
                  <path d="M 0 70 Q 200 35 400 15" fill="none" stroke="#107C41" strokeWidth="3" />
                  <circle cx="280" cy="30" r="5" fill="#006B5F" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#555555] mt-2">
                <span>Gestational Week 20</span>
                <span className="font-bold text-[#006B5F]">Current: Week 28 (Estimated Fetal Wt: 1,180g)</span>
                <span>Term (Week 40)</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* DEVICE SCREEN 2: MOTHER MOBILE PWA COMPANION                        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeDevice === 'mobile' && (
        <div className="p-4 sm:p-6 bg-[#F7F5F0]/60 flex items-center justify-center">
          <div className="w-full max-w-sm bg-white rounded-3xl border-4 border-slate-800 p-4 shadow-2xl">
            <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

            {/* App Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center text-[#006B5F] font-bold text-xs">
                  AM
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#0A0A0A]">Habari, Amina</h5>
                  <p className="text-[10px] text-[#555555]">Maternity Care Card</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#E6F4F1] text-[#006B5F] font-bold text-[10px]">
                Kisii County
              </span>
            </div>

            {/* Pregnancy Countdown Card with TotoAfya Teal & Savannah Ochre */}
            <div className="my-3 p-3.5 rounded-2xl bg-gradient-to-br from-[#006B5F] to-[#00574D] text-white shadow-md shadow-teal-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-teal-100 font-medium">Ujauzito Wiki ya 28</span>
                  <h4 className="font-extrabold text-lg mt-0.5">84 Days Remaining</h4>
                  <p className="text-[10px] text-teal-200">Expected Due Date: 14 Nov 2026</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-[#E68A00] flex items-center justify-center font-bold text-xs bg-white/10 text-white">
                  70%
                </div>
              </div>
            </div>

            {/* Next Clinic Date Reminder */}
            <div className="p-3 rounded-xl bg-[#F0FAF5] border border-[#BDE8D3] mb-3 flex items-start gap-2.5 text-xs">
              <Calendar className="w-4 h-4 text-[#107C41] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#0A0A0A] block text-[11px]">Next Clinical ANC Visit</span>
                <span className="text-[#374151] text-[11px]">Tuesday, 18 Aug @ 09:00 AM • Kisii Level 4 Hospital</span>
              </div>
            </div>

            {/* Bilingual Quick Help Action */}
            <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#E5E5E5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E68A00]" />
                <span className="font-semibold text-[#0A0A0A] text-[11px]">Uliza Swali (MamaCare Companion)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* DEVICE SCREEN 3: FACILITY SUPERINTENDENT PC DESKTOP                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {activeDevice === 'desktop' && (
        <div className="p-4 sm:p-6 bg-[#F7F5F0]/60">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="bg-white p-4 rounded-xl border border-[#E5E5E5] shadow-sm">
              <span className="text-[11px] text-[#555555] font-medium">Active Cohort (Antenatal & Postnatal)</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-extrabold text-[#0A0A0A]">1,842</span>
                <span className="text-xs font-bold text-[#107C41]">+12% this month</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E5E5E5] shadow-sm">
              <span className="text-[11px] text-[#555555] font-medium">On-Time KEPI Immunization Rate</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-extrabold text-[#006B5F]">94.2%</span>
                <span className="text-xs font-bold text-[#107C41]">Above MoH Benchmark</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E5E5E5] shadow-sm">
              <span className="text-[11px] text-[#555555] font-medium">Missed Clinic Visits Flagged</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-extrabold text-[#E68A00]">14</span>
                <span className="text-xs text-[#555555]">Auto-SMS Reminders Dispatched</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E5E5] p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
              <div>
                <h5 className="font-bold text-xs text-[#0A0A0A]">Sub-County Facility Network Telemetry</h5>
                <p className="text-[11px] text-[#555555]">Live data reconciliation from 4 peripheral dispensaries</p>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E6F4F1] text-[#006B5F] border border-[#BCE2DA] text-xs font-bold hover:bg-[#d5eee8] transition-colors">
                <Download className="w-3.5 h-3.5" />
                <span>Export MoH 711 Monthly Report</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F7F5F0] text-[#0A0A0A] font-bold border-b border-[#E5E5E5]">
                  <tr>
                    <th className="py-2 px-3">Dispensary</th>
                    <th className="py-2 px-3">Active Mothers</th>
                    <th className="py-2 px-3">KEPI Coverage</th>
                    <th className="py-2 px-3">Defaulters</th>
                    <th className="py-2 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#0A0A0A]">
                  <tr>
                    <td className="py-2 px-3 font-semibold">Kisii Central Dispensary</td>
                    <td className="py-2 px-3">548</td>
                    <td className="py-2 px-3 font-bold text-[#107C41]">96.4%</td>
                    <td className="py-2 px-3">2</td>
                    <td className="py-2 px-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-[#F0FAF5] text-[#107C41] font-bold text-[10px]">
                        Synchronized
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold">Nyamataro Health Centre</td>
                    <td className="py-2 px-3">495</td>
                    <td className="py-2 px-3 font-bold text-[#107C41]">93.8%</td>
                    <td className="py-2 px-3">4</td>
                    <td className="py-2 px-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-[#F0FAF5] text-[#107C41] font-bold text-[10px]">
                        Synchronized
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold">Suneka Maternity Wing</td>
                    <td className="py-2 px-3">408</td>
                    <td className="py-2 px-3 font-bold text-[#107C41]">95.1%</td>
                    <td className="py-2 px-3">3</td>
                    <td className="py-2 px-3 text-right">
                      <span className="px-2 py-0.5 rounded-full bg-[#F0FAF5] text-[#107C41] font-bold text-[10px]">
                        Synchronized
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
