'use client';

import React, { useState } from 'react';
import { Trophy, Award, MapPin, School, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HALL_OF_FAME } from '@/data/bdphoData';
import { Medalist } from '@/types';
import { useLanguage } from '@/i18n/LanguageProvider';

const HOF_EN: Record<
  string,
  {
    edition: string;
    studentName: string;
    school: string;
    hostLocation: string;
    quote?: string;
  }
> = {
  'hof-2024-1': {
    edition: '54th IPhO',
    studentName: 'Ahsanul Kabir',
    school: 'Notre Dame College, Dhaka',
    hostLocation: 'Isfahan, Iran',
    quote:
      'Intensive BdPhO camp training taught me to grasp nature’s fundamental symmetries rather than memorise formulas.',
  },
  'hof-2024-2': {
    edition: '54th IPhO',
    studentName: 'Tanvir Ahmed',
    school: 'Rajshahi College',
    hostLocation: 'Isfahan, Iran',
  },
  'hof-2023-1': {
    edition: '53rd IPhO',
    studentName: 'Soumya Sarkar',
    school: 'Dhaka Residential Model College',
    hostLocation: 'Tokyo, Japan',
    quote:
      'Three weeks of laboratory experimentation at the national camp played a crucial role in the international contest.',
  },
  'hof-2023-2': {
    edition: '53rd IPhO',
    studentName: 'Mahir Faiyaz',
    school: 'Chittagong Collegiate School',
    hostLocation: 'Tokyo, Japan',
  },
  'hof-2022-1': {
    edition: '52nd IPhO',
    studentName: 'Fahim Morshed',
    school: 'Notre Dame College',
    hostLocation: 'Zurich, Switzerland (online)',
  },
  'hof-2021-1': {
    edition: '51st IPhO',
    studentName: 'Arafat Hossain',
    school: 'Sylhet Cadet College',
    hostLocation: 'Vilnius, Lithuania',
  },
  'hof-2019-1': {
    edition: '50th IPhO',
    studentName: 'Rashiduzzaman Khan',
    school: 'St. Joseph Higher Secondary School',
    hostLocation: 'Tel Aviv, Israel',
  },
  'hof-2018-1': {
    edition: '49th IPhO',
    studentName: 'Nafis Sadik',
    school: 'Notre Dame College',
    hostLocation: 'Lisbon, Portugal',
  },
};

export const HallOfFameSection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
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
        return {
          label: text('ব্রোঞ্জ পদক', 'Bronze medal'),
          style: 'bg-amber-50 text-amber-800 border-amber-300 font-bold',
        };
      case 'Silver':
        return {
          label: text('রৌপ্য পদক', 'Silver medal'),
          style: 'bg-slate-100 text-slate-800 border-slate-300 font-bold',
        };
      case 'Gold':
        return {
          label: text('স্বর্ণ পদক', 'Gold medal'),
          style: 'bg-yellow-50 text-yellow-800 border-yellow-300 font-bold',
        };
      case 'Honorable Mention':
      default:
        return {
          label: text('অনারেবল মেনশন', 'Honorable Mention'),
          style: 'bg-blue-50 text-blue-800 border-blue-200 font-bold',
        };
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
              <span>{text('আন্তর্জাতিক স্বীকৃতি ও গৌরব', 'International recognition & pride')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              {text('আন্তর্জাতিক হল অব ফেম।', 'International hall of fame.')} <br />
              <span className="text-blue-900">
                {text('বিশ্বমঞ্চে বাংলাদেশের পতাকা বাহকগণ।', 'Bangladesh’s flag-bearers on the world stage.')}
              </span>
            </h2>
            <p className="text-slate-600 text-base">
              {text(
                'যেসব তরুণ শিক্ষার্থী বিশ্বের কঠিনতম পদার্থবিজ্ঞান মঞ্চে লাল-সবুজ পতাকাকে গর্বের সাথে সমুন্নত রেখেছেন, তাদের পরিচিতি ও সাফল্য।',
                'Profiles and achievements of young students who proudly raised the red-and-green flag on the world’s toughest physics stage.',
              )}
            </p>
          </div>

          {/* Confetti Trigger & Competition Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={triggerConfetti}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-2 transition shadow-sm"
            >
              <Award className="w-4 h-4 text-blue-200" />
              <span>{text('জাতীয় দলকে অভিনন্দন!', 'Congratulate the national team!')}</span>
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
                {text('সকল ইভেন্ট', 'All events')}
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
            const en = HOF_EN[m.id];
            return (
              <div
                key={m.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {text(m.edition, en?.edition || m.edition)} • {m.year}
                    </span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${badge.style}`}>
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition mb-1">
                    {text(m.studentName, en?.studentName || m.studentName)}
                  </h3>

                  <div className="text-xs text-slate-600 space-y-1 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <School className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="truncate">{text(m.school, en?.school || m.school)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>
                        {text('ভেন্যু:', 'Venue:')}{' '}
                        {text(m.hostLocation, en?.hostLocation || m.hostLocation)}
                      </span>
                    </div>
                  </div>

                  {m.quote && (
                    <p className="text-xs text-slate-700 italic p-3 rounded-xl bg-slate-50 border border-slate-200 leading-relaxed mb-4">
                      &quot;{text(m.quote, en?.quote || m.quote)}&quot;
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{text('বাংলাদেশ প্রতিনিধি', 'Bangladesh delegate')}</span>
                  <span className="font-semibold text-emerald-700">
                    {text('স্বীকৃত মেধা', 'Recognised talent')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Results & Rankings Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              {text('জাতীয় ও আঞ্চলিক পর্বের মেধা তালিকা', 'National & regional merit lists')}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
              {text(
                '১৬তম ও ১৭তম বিডিএফও এর ফলাফল খুঁজছেন?',
                'Looking for 16th & 17th BdPhO results?',
              )}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              {text(
                'অফিসিয়াল স্কোরকার্ড, জেলাভিত্তিক মেধা তালিকা, সনদপত্র ডাউনলোড ও জাতীয় প্রশিক্ষণ ক্যাম্পের নোটিশ অফিসিয়াল রেজাল্ট সার্ভার থেকে যাচাই করুন।',
                'Check official scorecards, district merit lists, certificate downloads and national training-camp notices on the official results server.',
              )}
            </p>
          </div>
          <a
            href="https://www.bdpho.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 flex items-center gap-2 transition shadow-sm"
          >
            {text('অফিসিয়াল রেজাল্ট পোর্টাল', 'Official results portal')}{' '}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
