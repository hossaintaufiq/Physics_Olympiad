'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PastPapersArchive } from '@/components/PastPapersArchive';
import { BookOpen, Download, HelpCircle, CheckCircle2 } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export default function PastPapersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              <span>Question Papers & Solutions Repository</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Past Question Papers Archive
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore official past questions from the 1st through the 16th Bangladesh Physics Olympiad editions. Filter by category, round, region, and language to refine your practice.
            </p>
          </div>
        </section>

        {/* The Archive Engine */}
        <PastPapersArchive />

        {/* Study Advice & Solutions Note */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" /> Recommended Olympiad Practice Strategy
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                How to Solve Past Papers Effectively
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">1. First Principles First</div>
                  <p className="text-slate-600">
                    Avoid memorizing formulas. Identify the fundamental conservation laws (energy, linear & angular momentum, charge) at play.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">2. Dimensional Check</div>
                  <p className="text-slate-600">
                    Always verify dimensions and asymptotic limits (e.g. what happens when mass tends to zero or angle reaches 90°?).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">3. Timed Conditions</div>
                  <p className="text-slate-600">
                    Simulate real exam pressure by attempting full sets within the assigned 90 to 180 minute intervals without referencing solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
