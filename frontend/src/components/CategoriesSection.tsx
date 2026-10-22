'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Clock, HelpCircle, FileText, ChevronRight, CheckCircle2, Lightbulb } from 'lucide-react';
import { CATEGORIES_DATA } from '@/data/bdphoData';

export const CategoriesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'A' | 'B' | 'C' | 'D'>('C');
  const [revealedHints, setRevealedHints] = useState<{ [key: string]: boolean }>({});

  const toggleHint = (catId: string) => {
    setRevealedHints((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const selectedSpec = CATEGORIES_DATA.find((c) => c.id === activeCategory) || CATEGORIES_DATA[2];

  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Academic Competition Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Four Levels of Rigor. <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              One Unified Love for Physics.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From the observational wonder of primary school to elite calculus-based university physics, BdPhO structures competitions that align with your intellectual journey.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {CATEGORIES_DATA.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isActive
                    ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10 scale-[1.02]'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-extrabold font-mono ${isActive ? 'text-blue-600' : 'text-slate-800'}`}>
                    Category {cat.id}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {cat.id === 'A' ? 'Classes 5-6' : cat.id === 'B' ? 'Classes 7-8' : cat.id === 'C' ? 'Classes 9-10' : 'Classes 11-12'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 font-medium">
                  {cat.id === 'A' ? 'Primary' : cat.id === 'B' ? 'Junior' : cat.id === 'C' ? 'Secondary (SSC/O)' : 'Higher Secondary (HSC/A)'}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Category Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 relative overflow-hidden shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Overview & Exam Format */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-2 bg-blue-50 text-blue-700 border border-blue-100">
                  {selectedSpec.targetClasses} • {selectedSpec.typicalAge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {selectedSpec.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {selectedSpec.tagline}
                </p>
              </div>

              {/* Exam Specs Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold mb-1">
                    <Clock className="w-4 h-4" /> Exam Duration
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {selectedSpec.examDuration}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold mb-1">
                    <HelpCircle className="w-4 h-4" /> Question Structure
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {selectedSpec.questionPattern}
                  </div>
                </div>
              </div>

              {/* Core Syllabus Pillars */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Core Scientific Pillars
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSpec.keySubjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/past-papers"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 transition shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  View Category {selectedSpec.id} Past Papers
                </Link>
                <a
                  href={selectedSpec.syllabusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition border border-slate-200"
                >
                  Download Syllabus PDF ↗
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Sample Olympiad Problem */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  Sample Olympiad Problem
                </div>
                <span className="text-[11px] font-mono text-slate-400">Tier {selectedSpec.id}</span>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed font-sans">
                {selectedSpec.sampleQuestion.problem}
              </p>

              {/* Hint Accordion */}
              <div className="pt-2">
                <button
                  onClick={() => toggleHint(selectedSpec.id)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-blue-700 flex items-center justify-between transition shadow-2xs"
                >
                  <span>
                    {revealedHints[selectedSpec.id] ? 'Hide Solution Hint' : 'Reveal Solution Hint'}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      revealedHints[selectedSpec.id] ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {revealedHints[selectedSpec.id] && (
                  <div className="mt-2.5 p-3.5 rounded-xl bg-blue-50/90 border border-blue-200 text-xs text-blue-900 leading-relaxed animate-fadeIn">
                    <strong className="block text-blue-800 mb-1">Analytical Approach:</strong>
                    {selectedSpec.sampleQuestion.answerHint}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
