'use client';

import React, { useState } from 'react';
import { Trophy, Award, MapPin, School, ExternalLink } from 'lucide-react';
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
      colors: ['#2563eb', '#d97706', '#059669', '#7c3aed', '#0284c7'],
    });
  };

  const filteredMedalists = HALL_OF_FAME.filter((m) => {
    if (filterCompetition === 'all') return true;
    return m.competition === filterCompetition;
  });

  const getAwardBadge = (award: Medalist['award']) => {
    switch (award) {
      case 'Bronze':
        return { label: 'ব্রোঞ্জ পদক', style: 'bg-amber-50 text-amber-800 border-amber-300 font-bold' };
      case 'Silver':
        return { label: 'রৌপ্য পদক', style: 'bg-slate-100 text-slate-800 border-slate-300 font-bold' };
      case 'Gold':
        return { label: 'স্বর্ণ পদক', style: 'bg-yellow-50 text-yellow-800 border-yellow-300 font-bold' };
      case 'Honorable Mention':
      default:
        return { label: 'অনারেবল মেনশন', style: 'bg-blue-50 text-blue-800 border-blue-200 font-bold' };
    }
  };

  return (
    <section id="hall-of-fame" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>আন্তর্জাতিক স্বীকৃতি ও গৌরব</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              আন্তর্জাতিক হল অব ফেম। <br />
              <span className="text-blue-900">
                বিশ্বমঞ্চে বাংলাদেশের পতাকা বাহকগণ।
              </span>
            </h2>
            <p className="text-slate-600 text-base">
              যেসব তরুণ শিক্ষার্থী বিশ্বের কঠিনতম পদার্থবিজ্ঞান মঞ্চে লাল-সবুজ পতাকাকে গর্বের সাথে সমুন্নত রেখেছেন, তাদের পরিচিতি ও সাফল্য।
            </p>
          </div>

          {/* Confetti Trigger & Competition Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={triggerConfetti}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-2 transition shadow-sm"
            >
              <Award className="w-4 h-4 text-blue-200" />
              <span>জাতীয় দলকে অভিনন্দন!</span>
            </button>

            <div className="flex gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setFilterCompetition('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filterCompetition === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                সকল ইভেন্ট
              </button>
              <button
                onClick={() => setFilterCompetition('IPhO')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filterCompetition === 'IPhO'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                IPhO
              </button>
              <button
                onClick={() => setFilterCompetition('APhO')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  filterCompetition === 'APhO'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                APhO
              </button>
            </div>
          </div>
        </div>

        {/* Medalists Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {filteredMedalists.map((m) => {
            const badge = getAwardBadge(m.award);
            return (
              <div
                key={m.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {m.edition} • {m.year}
                    </span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${badge.style}`}>
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition mb-1">
                    {m.studentName}
                  </h3>

                  <div className="text-xs text-slate-600 space-y-1 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <School className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{m.school}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>ভেন্যু: {m.hostLocation}</span>
                    </div>
                  </div>

                  {m.quote && (
                    <p className="text-xs text-slate-700 italic p-3 rounded-xl bg-slate-50 border border-slate-200 leading-relaxed mb-4">
                      "{m.quote}"
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>বাংলাদেশ প্রতিনিধি</span>
                  <span className="font-semibold text-emerald-700">স্বীকৃত মেধা</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Results & Rankings Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              জাতীয় ও আঞ্চলিক পর্বের মেধা তালিকা
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              ১৬তম ও ১৭তম বিডিএফও এর ফলাফল খুঁজছেন?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              অফিসিয়াল স্কোরকার্ড, জেলাভিত্তিক মেধা তালিকা, সনদপত্র ডাউনলোড ও জাতীয় প্রশিক্ষণ ক্যাম্পের নোটিশ অফিসিয়াল রেজাল্ট সার্ভার থেকে যাচাই করুন।
            </p>
          </div>
          <a
            href="https://www.bdpho.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 flex items-center gap-2 transition shadow-sm"
          >
            অফিসিয়াল রেজাল্ট পোর্টাল <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
