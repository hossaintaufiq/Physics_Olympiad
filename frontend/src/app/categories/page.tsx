'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CategoriesSection } from '@/components/CategoriesSection';
import { Layers, FileText, CheckCircle2, AlertCircle, ArrowRight, Calculator } from 'lucide-react';
import { CATEGORIES_DATA } from '@/data/bdphoData';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_bg.jpg"
              alt="Physics Categories Background"
              className="w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 shadow-xs backdrop-blur-xs">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>Academic Competition Tracks</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Categories & <span className="text-blue-900">Eligibility Guidelines</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              BdPhO organizes competitions across four distinct academic tiers, ensuring every student faces rigorous challenges calibrated to their grade level.
            </p>
          </div>
        </section>

        {/* Categories Interactive Showcase */}
        <CategoriesSection />

        {/* Calculator Policy & Exam Regulations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calculator Policy Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <span>Official Calculator Policy</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Which Calculators Are Permitted?
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">Category A & Category B:</strong>
                    Calculators are <strong>strictly prohibited</strong> to foster mental estimation, dimensional analysis, and algebraic intuition.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <strong className="text-slate-900 block mb-0.5">Category C & Category D:</strong>
                    Non-programmable scientific calculators (up to Casio fx-991ES Plus, fx-991EX, or equivalent) are allowed. Programmable, graphic, or wireless calculators are strictly barred.
                  </div>
                </div>
              </div>

              {/* Language Precedence Card */}
              <div className="p-8 rounded-3xl bg-amber-50/60 border border-amber-200 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>Language of Examination</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Bilingual Question Papers
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  All question papers across Categories A, B, C, and D are printed in both <strong>Bengali (বাংলা)</strong> and <strong>English</strong>. Students are free to write their solutions and numerical steps in either language.
                </p>
                <div className="p-3.5 rounded-xl bg-white border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
                  <strong>Academic Directive:</strong> In the event of any linguistic divergence or typographical disparity between the two texts, the <strong>Bengali version</strong> remains the authoritative reference.
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/past-papers"
                className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center gap-2 transition shadow-sm"
              >
                <FileText className="w-4 h-4" />
                Browse Past Papers by Category
              </Link>
              <Link
                href="/syllabus"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2 transition border border-slate-200"
              >
                <span>View Full Olympiad Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
