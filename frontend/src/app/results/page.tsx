'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HallOfFameSection } from '@/components/HallOfFameSection';
import { Trophy, FileText, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              <Trophy className="w-3.5 h-3.5 text-amber-700" />
              <span>National Results & Global Honors</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Results & International Hall of Fame
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Celebrating the academic triumphs of Bangladesh’s students at the International Physics Olympiad (IPhO), Asian Physics Olympiad (APhO), and National Rounds.
            </p>
          </div>
        </section>

        {/* Hall of Fame Component */}
        <HallOfFameSection />

        {/* National Round Results Portal Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Official National Round Result Publications
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Official ranking lists, school-wise distributions, and camp invitation letters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wider">
                  Published Result
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  16th BdPhO National Finals Merit List (2025)
                </h3>
                <p className="text-xs text-slate-600">
                  Includes full category rank lists for Categories A, B, C, and D, as well as the list of 35 qualifiers invited to the National Physics Camp at BUET.
                </p>
                <a
                  href="https://www.bdpho.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition pt-1"
                >
                  View Official Merit PDF <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  Published Result
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  16th BdPhO Regional Round Selection Lists
                </h3>
                <p className="text-xs text-slate-600">
                  Cluster-wise selection lists for Dhaka, Chittagong, Rajshahi, Khulna, Sylhet, Barisal, Rangpur, and Mymensingh regional examinations.
                </p>
                <a
                  href="https://www.bdpho.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition pt-1"
                >
                  Browse Regional Results <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
