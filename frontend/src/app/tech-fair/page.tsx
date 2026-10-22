'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TechFairSection } from '@/components/TechFairSection';
import { Cpu, Lightbulb, ExternalLink, ShieldCheck } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export default function TechFairPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
              <Cpu className="w-3.5 h-3.5 text-cyan-700" />
              <span>Applied Innovation & Hardware Exhibition</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              BdPhO Technology & Invention Fair
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Showcase working scientific demonstrators, renewable energy prototypes, and hardware instruments before university judges at the National Round.
            </p>
          </div>
        </section>

        {/* Tech Fair Component */}
        <TechFairSection />
      </main>

      <Footer />
    </div>
  );
}
