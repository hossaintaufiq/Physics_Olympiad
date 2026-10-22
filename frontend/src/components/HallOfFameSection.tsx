'use client';

import React, { useState } from 'react';
import { Trophy, Award, Sparkles, MapPin, School, Star, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HALL_OF_FAME } from '@/data/bdphoData';
import { Medalist } from '@/types';

export const HallOfFameSection: React.FC = () => {
  const [filterCompetition, setFilterCompetition] = useState<'all' | 'IPhO' | 'APhO'>('all');

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#f59e0b', '#34d399', '#a855f7', '#fbbf24'],
    });
  };

  const filteredMedalists = HALL_OF_FAME.filter((m) => {
    if (filterCompetition === 'all') return true;
    return m.competition === filterCompetition;
  });

  const getAwardBadge = (award: Medalist['award']) => {
    switch (award) {
      case 'Bronze':
        return 'bg-amber-600/20 text-amber-300 border-amber-500/40';
      case 'Silver':
        return 'bg-slate-300/20 text-slate-200 border-slate-300/40';
      case 'Gold':
        return 'bg-yellow-400/20 text-yellow-300 border-yellow-400/40';
      case 'Honorable Mention':
      default:
        return 'bg-sky-500/20 text-sky-300 border-sky-400/40';
    }
  };

  return (
    <section id="hall-of-fame" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>International Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              International Hall of Fame. <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-sky-300 bg-clip-text text-transparent">
                Honoring Bangladesh's Pride.
              </span>
            </h2>
            <p className="text-slate-400 text-base">
              Meet the high school prodigies who carried the national flag onto international physics podiums across Asia and Europe.
            </p>
          </div>

          {/* Confetti Trigger & Competition Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={triggerConfetti}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 flex items-center gap-2 transition shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              Celebrate Team BD ✦
            </button>

            <div className="flex gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => setFilterCompetition('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filterCompetition === 'all'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setFilterCompetition('IPhO')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filterCompetition === 'IPhO'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                IPhO
              </button>
              <button
                onClick={() => setFilterCompetition('APhO')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filterCompetition === 'APhO'
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                APhO
              </button>
            </div>
          </div>
        </div>

        {/* Medalists Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {filteredMedalists.map((m) => (
            <div
              key={m.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {m.edition} • {m.year}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getAwardBadge(m.award)}`}>
                    {m.award}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition mb-1">
                  {m.studentName}
                </h3>

                <div className="text-xs text-slate-300 space-y-1 mb-4">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <School className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{m.school}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Host: {m.hostLocation}</span>
                  </div>
                </div>

                {m.quote && (
                  <p className="text-xs text-slate-300/90 italic p-3 rounded-xl bg-slate-950/60 border border-slate-800 leading-relaxed mb-4">
                    "{m.quote}"
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Represented Bangladesh</span>
                <span className="font-semibold text-emerald-400">Honored</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Results & Rankings Banner */}
        <div className="p-8 rounded-3xl glass-panel bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
              National & Regional Round Rankings
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Looking for 16th and 17th BdPhO National Merit Lists?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Official scorecards, district merit rankings, certificate downloads, and national training camp call-up notices are authenticated on the official results server.
            </p>
          </div>
          <a
            href="https://www.bdpho.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-2 transition shadow-lg shadow-sky-500/20"
          >
            Check Official Results & News <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
