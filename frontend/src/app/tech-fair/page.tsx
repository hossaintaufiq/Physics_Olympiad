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
        <section className="relative bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_bg.jpg"
              alt="Applied Physics Innovation Background"
              className="w-full h-full object-cover object-center animate-breath-zoom opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200 hover-vibrate cursor-pointer backdrop-blur-xs">
              <Cpu className="w-3.5 h-3.5 text-cyan-700 animate-pulse" />
              <span>Applied Innovation & Hardware Exhibition</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              BdPhO Technology & <br className="hidden sm:inline" />
              <span className="vibrant-gradient-text">Invention Fair</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Showcase working scientific demonstrators, renewable energy prototypes, and hardware instruments before university judges at the National Round.
            </p>

            {/* Photographic Showcase Card */}
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white text-left group">
              <div className="relative aspect-[21/9] sm:aspect-[24/9] overflow-hidden">
                <img
                  src="/images/tech_showcase.jpg"
                  alt="Student Experimental Physics Demonstration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
                    Live Evaluation at National Finals
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                    Interferometers, Resonant Coils & Signal Analyzers
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-1 sm:line-clamp-2">
                    Young researchers presenting working physics hardware prototypes directly to faculty evaluators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Fair Component */}
        <TechFairSection />
      </main>

      <Footer />
    </div>
  );
}
