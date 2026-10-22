'use client';

import React, { useState } from 'react';
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
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Academic Competition Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Four Levels of Rigor. <br />
            <span className="bg-gradient-to-r from-sky-400 to-amber-300 bg-clip-text text-transparent">
              One Unified Love for Physics.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
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
                    ? 'glass-panel bg-slate-900 border-sky-400 shadow-xl shadow-sky-500/10 scale-[1.02]'
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-extrabold font-mono ${isActive ? 'text-sky-300' : 'text-slate-300'}`}>
                    Category {cat.id}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cat.badgeColor}`}>
                    {cat.id === 'A' ? 'Classes 5-6' : cat.id === 'B' ? 'Classes 7-8' : cat.id === 'C' ? 'Classes 9-10' : 'Classes 11-12'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-1 font-medium">
                  {cat.id === 'A' ? 'Primary' : cat.id === 'B' ? 'Junior' : cat.id === 'C' ? 'Secondary (SSC/O)' : 'Higher Secondary (HSC/A)'}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Category Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 radial-glow-cyan pointer-events-none opacity-30 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Overview & Exam Format */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-2 bg-white/10 text-sky-300">
                  {selectedSpec.targetClasses} • {selectedSpec.typicalAge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedSpec.name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedSpec.tagline}
                </p>
              </div>

              {/* Exam Specs Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold mb-1">
                    <Clock className="w-4 h-4" /> Exam Duration
                  </div>
                  <div className="text-base font-bold text-white">
                    {selectedSpec.examDuration}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                    <HelpCircle className="w-4 h-4" /> Question Structure
                  </div>
                  <div className="text-base font-bold text-white">
                    {selectedSpec.questionPattern}
                  </div>
                </div>
              </div>

              {/* Core Syllabus Pillars */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Scientific Pillars
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSpec.keySubjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-700/70 text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href="#papers"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center gap-1.5 transition shadow-md shadow-sky-500/20"
                >
                  <FileText className="w-4 h-4" />
                  View Category {selectedSpec.id} Past Papers
                </a>
                <a
                  href={selectedSpec.syllabusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition border border-slate-700"
                >
                  Download Syllabus PDF ↗
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Sample Olympiad Problem */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  Sample Olympiad Problem
                </div>
                <span className="text-[11px] font-mono text-slate-500">Tier {selectedSpec.id}</span>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                {selectedSpec.sampleQuestion.problem}
              </p>

              {/* Hint Accordion */}
              <div className="pt-2">
                <button
                  onClick={() => toggleHint(selectedSpec.id)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-sky-300 flex items-center justify-between transition"
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
                  <div className="mt-2 p-3 rounded-lg bg-sky-950/40 border border-sky-500/30 text-xs text-sky-200/90 leading-relaxed animate-fadeIn">
                    <strong className="block text-sky-300 mb-1">Analytical Approach:</strong>
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
