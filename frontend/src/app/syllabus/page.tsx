'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SyllabusSection } from '@/components/SyllabusSection';
import { BookOpen, Download, Bookmark, CheckCircle2 } from 'lucide-react';

export default function SyllabusPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
              <BookOpen className="w-3.5 h-3.5 text-purple-700" />
              <span>Academic Curriculum & Directives</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Official Olympiad Syllabus
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Standardized with the International Physics Olympiad (IPhO) syllabus. Explore subtopics, key governing formulas, and recommended international textbooks.
            </p>
          </div>
        </section>

        {/* The Syllabus Explorer */}
        <SyllabusSection />

        {/* Official Reference Books Summary */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Standard Reading List for BdPhO & IPhO Preparation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Recommended by the National Academic Committee for deep theoretical and mathematical problem solving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Fundamentals of Physics</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Cat B, C & D</span>
                </div>
                <div className="text-xs text-slate-500">By David Halliday, Robert Resnick & Jearl Walker</div>
                <p className="text-xs text-slate-600">
                  The foundational bedrock for high school physics. Essential for conceptual clarity and dimensional rigor across mechanics, waves, and electrostatics.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Introduction to Classical Mechanics</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Cat C & D</span>
                </div>
                <div className="text-xs text-slate-500">By David Morin (Harvard University)</div>
                <p className="text-xs text-slate-600">
                  Widely regarded as the golden standard for Olympiad mechanics. Features hundreds of limericks and deep problems in non-inertial frames and relativistic collisions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Problems in General Physics</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">IPhO Selection</span>
                </div>
                <div className="text-xs text-slate-500">By I.E. Irodov</div>
                <p className="text-xs text-slate-600">
                  Classic Soviet problem collection designed to push mathematical agility, thermodynamic cycles, and electromagnetic induction to the absolute limit.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Electricity and Magnetism</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Category D & IPhO</span>
                </div>
                <div className="text-xs text-slate-500">By Edward M. Purcell & David J. Morin (Berkeley Series)</div>
                <p className="text-xs text-slate-600">
                  Develops magnetic fields from special relativity and charge invariance. Crucial for advanced camp candidates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
