'use client';

import React, { useState } from 'react';
import { BookOpen, Sparkles, Atom, Zap, Flame, Radio, ExternalLink, Check, Bookmark } from 'lucide-react';
import { SYLLABUS_DOMAINS } from '@/data/bdphoData';

export const SyllabusSection: React.FC = () => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('mechanics');

  const activeDomain =
    SYLLABUS_DOMAINS.find((d) => d.id === selectedDomainId) || SYLLABUS_DOMAINS[0];

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="syllabus" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum & Recommended Reading</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Physics Knowledge Base. <br />
            <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
              Built on International Standards.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Aligned with the official International Physics Olympiad (IPhO) syllabus. Explore subtopics, key mathematical formulations, and master reading recommendations.
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
          {SYLLABUS_DOMAINS.map((domain) => {
            const isSelected = selectedDomainId === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-purple-600/30 text-purple-200 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                {getDomainIcon(domain.icon)}
                <span>{domain.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Panel */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  {activeDomain.weightage}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeDomain.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md md:text-right">
              {activeDomain.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Subtopics Listing */}
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Detailed Topic Breakdown & Governing Equations
              </h4>

              {activeDomain.subtopics.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-purple-500/30 transition space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-white font-sans">
                      {sub.name}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {sub.categories.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-slate-300 border border-white/10"
                        >
                          Cat {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sub.description}
                  </p>

                  {sub.formulas && sub.formulas.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {sub.formulas.map((form, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-sky-300 font-mono text-[11px]"
                        >
                          {form}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Recommended International Books Column */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Recommended Textbooks
              </h4>

              <div className="space-y-3">
                {activeDomain.recommendedBooks.map((book, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2"
                  >
                    <div className="flex items-start gap-2.5">
                      <Bookmark className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">{book.title}</div>
                        <div className="text-[11px] text-slate-400">By {book.author}</div>
                      </div>
                    </div>
                    <div className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 inline-block">
                      Level: {book.level}
                    </div>
                  </div>
                ))}
              </div>

              {/* Official Syllabus CTA Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-950 border border-purple-500/30 text-center space-y-3">
                <span className="text-xs font-bold text-white block">
                  Looking for the Official 2026 PDF?
                </span>
                <p className="text-[11px] text-slate-300">
                  Download the formal Bangladesh Physics Olympiad Academic Syllabus issued by the National Committee.
                </p>
                <a
                  href="https://www.bdpho.org/syllabus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  Download Full PDF ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
