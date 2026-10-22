'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { BdphoLogo } from './BdphoLogo';
import { BDPHO_METRICS, PARTNERS } from '@/data/bdphoData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Strategic Institutional Partners */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6">
            Supported by Academic, Government & Media Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center items-center">
            {PARTNERS.map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition"
              >
                <div className="font-bold text-slate-900 text-xs mb-0.5">{p.logoText}</div>
                <div className="text-[10px] text-slate-500">{p.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <BdphoLogo size="md" />
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              The Bangladesh Physics Olympiad (BdPhO) is the premier national platform dedicated to nurturing scientific curiosity, rigorous mathematical deduction, and training young scholars to represent Bangladesh at the International Physics Olympiad (IPhO) and Asian Physics Olympiad (APhO).
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-500">
              <span className="text-xs">Affiliation:</span>
              <span className="font-bold text-slate-800">IPhO & APhO Official Member</span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Olympiad Tracks
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/about" className="hover:text-blue-700 transition">
                  About BdPhO
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-blue-700 transition">
                  Category A, B, C, D Details
                </Link>
              </li>
              <li>
                <Link href="/past-papers" className="hover:text-blue-700 transition">
                  Past Question Papers Archive
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="hover:text-blue-700 transition">
                  IPhO-Aligned Syllabus
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-blue-700 transition">
                  International Hall of Fame
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Activities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Student Portals
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/admit-card" className="hover:text-blue-700 transition">
                  Download Admit Card
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-700 transition">
                  Student Portal Login
                </Link>
              </li>
              <li>
                <Link href="/tech-fair" className="hover:text-blue-700 transition">
                  Technology & Invention Fair
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-700 transition">
                  Event Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700 transition">
                  Help Desk & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: National Secretariat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              National Secretariat
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bangladesh Physics Olympiad<br />
              House No. 4/9, Ground Floor<br />
              Block # F, Lalmatia, Dhaka-1207
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${BDPHO_METRICS.contactEmail}`}
                className="text-blue-700 hover:underline font-mono font-semibold"
              >
                {BDPHO_METRICS.contactEmail}
              </a>
            </div>
            <div className="text-[11px] text-slate-500">
              Hours: Sun – Thu, 10 AM – 5 PM (BST)
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2011–2026 Bangladesh Physics Olympiad (BdPhO). All official rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Bilingual Examination System</span>
            <span>•</span>
            <span>Bengali Version Authoritative</span>
            <span>•</span>
            <Link href="/" className="hover:text-slate-900 font-semibold transition">
              Back to Top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
