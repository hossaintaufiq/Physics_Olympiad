'use client';

import React from 'react';
import { Atom, ExternalLink, Heart, Shield, Globe } from 'lucide-react';
import { BDPHO_METRICS, PARTNERS } from '@/data/bdphoData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Partners & Institutional Sponsors Strip */}
        <div className="p-6 rounded-2xl glass-panel border border-white/10">
          <div className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">
            Supported by Government, Academic & Media Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center items-center">
            {PARTNERS.map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 transition"
              >
                <div className="font-bold text-white text-xs mb-0.5">{p.logoText}</div>
                <div className="text-[10px] text-slate-400">{p.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Atom className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white font-mono">
                BdPhO <span className="text-xs font-sans text-sky-400">17th Edition</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The Bangladesh Physics Olympiad (BdPhO) is the premier academic initiative dedicated to inspiring scientific curiosity, rigorous mathematical deduction, and training young scholars to represent Bangladesh at the International Physics Olympiad (IPhO) and Asian Physics Olympiad (APhO).
            </p>
            <div className="flex items-center gap-2 pt-2 text-slate-400">
              <span className="text-xs">Affiliated with:</span>
              <span className="font-semibold text-white">IPhO & APhO</span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#papers" className="hover:text-sky-300 transition">
                  Past Question Papers Archive
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-sky-300 transition">
                  Category A, B, C, D Guidelines
                </a>
              </li>
              <li>
                <a href="#syllabus" className="hover:text-sky-300 transition">
                  Official IPhO-Aligned Syllabus
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-sky-300 transition">
                  The 6-Step Olympic Roadmap
                </a>
              </li>
              <li>
                <a href="#tech-fair" className="hover:text-sky-300 transition">
                  Technology & Invention Fair
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Student Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Student Portals
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={BDPHO_METRICS.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition inline-flex items-center gap-1"
                >
                  Online Registration 2026 <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={BDPHO_METRICS.admitCardPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition inline-flex items-center gap-1"
                >
                  Download Admit Cards <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={BDPHO_METRICS.loginPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition inline-flex items-center gap-1"
                >
                  Student Marksheet Portal <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#hall-of-fame" className="hover:text-sky-300 transition">
                  International Medalists Roll
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-300 transition">
                  Rules & Calculator Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: National Secretariat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              National Secretariat
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bangladesh Physics Olympiad<br />
              House No. 4/9, Ground Floor<br />
              Block # F, Lalmatia, Dhaka-1207
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${BDPHO_METRICS.contactEmail}`}
                className="text-sky-400 hover:underline font-mono"
              >
                {BDPHO_METRICS.contactEmail}
              </a>
            </div>
            <div className="text-[11px] text-slate-500">
              Hours: Sun – Thu, 10 AM – 5 PM
            </div>
          </div>
        </div>

        {/* Bottom Legal / Attributions Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2011–2026 Bangladesh Physics Olympiad (BdPhO). All official rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Bilingual Examination System</span>
            <span>•</span>
            <span>Bengali Version Authoritative</span>
            <span>•</span>
            <a href="#home" className="hover:text-slate-300 transition">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
