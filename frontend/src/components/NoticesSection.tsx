'use client';

import React, { useState } from 'react';
import { Bell, ExternalLink, Pin, Calendar } from 'lucide-react';
import { NOTICES } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

const NOTICE_EN: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    summary: string;
    linkText?: string;
    officialRef?: string;
  }
> = {
  n1: {
    title: 'Notice on release of admit cards for the 17th BdPhO regional round',
    date: '18 February 2026',
    category: 'Admit card',
    summary:
      'All registered students across 16 regional clusters can now download admit cards using their unique registration ID.',
    linkText: 'Download admit card',
    officialRef: 'BdPhO/2026/Reg-04',
  },
  n2: {
    title: 'Policy on bilingual papers and priority of the Bangla version',
    date: '10 February 2026',
    category: 'General',
    summary:
      'Papers for all categories (A, B, C, D) will be printed in both Bangla and English. If any theoretical ambiguity or terminology difference arises, the Bangla version is final.',
    officialRef: 'BdPhO/2026/Acad-01',
  },
  n3: {
    title: 'Approved calculators and syllabus guidance for Categories C & D',
    date: '28 January 2026',
    category: 'Regional round',
    summary:
      'Non-programmable scientific calculators (e.g. fx-991ES Plus or equivalent) are allowed only for Categories C & D. Calculators are unnecessary and banned in Categories A & B.',
    linkText: 'Detailed guidelines',
    officialRef: 'BdPhO/2026/Exam-03',
  },
  n4: {
    title: 'Call for applications: BdPhO Tech Fair & Science Innovation Contest 2026',
    date: '15 January 2026',
    category: 'Registration',
    summary:
      'School and college young researchers may exhibit hardware prototypes and innovative physics projects. The top 15 projects will be shown at the national round.',
    linkText: 'Tech fair rules',
    officialRef: 'BdPhO/2026/Tech-01',
  },
  n5: {
    title: 'Glorious success of the Bangladesh team at the International Physics Olympiad (IPhO)',
    date: '20 December 2025',
    category: 'Camp & international',
    summary:
      'Competing with 85 countries, all five members of the Bangladesh national team earned bronze medals and honourable mentions in both theoretical and practical exams.',
    linkText: 'International honours list',
  },
};

const FILTERS: { value: string; en: string }[] = [
  { value: 'সব', en: 'All' },
  { value: 'প্রবেশপত্র', en: 'Admit card' },
  { value: 'নিবন্ধন', en: 'Registration' },
  { value: 'আঞ্চলিক পর্ব', en: 'Regional round' },
  { value: 'সাধারণ', en: 'General' },
];

export const NoticesSection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
  const [selectedFilter, setSelectedFilter] = useState<string>('সব');

  const filteredNotices = NOTICES.filter((n) => {
    if (selectedFilter === 'সব') return true;
    return n.category === selectedFilter;
  });

  return (
    <section id="notices" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <Bell className="w-3.5 h-3.5 text-amber-600" />
              <span>{text('অফিসিয়াল সার্কুলার ও দিকনির্দেশনা', 'Official circulars & guidance')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              {text('সাম্প্রতিক নোটিশ ও', 'Recent notices &')} <br />
              <span className="text-blue-900">
                {text('প্রশাসনিক প্রজ্ঞাপনসমূহ।', 'administrative announcements.')}
              </span>
            </h2>
            <p className="text-slate-600 text-base">
              {text(
                'পরীক্ষার সময়সূচি, প্রবেশপত্রের হালনাগাদ, ক্যাটাগরি নির্দেশিকা ও আঞ্চলিক ভেন্যু সম্পর্কিত সর্বশেষ তথ্যের সাথে অবগত থাকুন।',
                'Stay up to date on exam schedules, admit-card updates, category guidance and regional venues.',
              )}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
            {FILTERS.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedFilter(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedFilter === cat.value
                    ? 'bg-amber-500 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {text(cat.value, cat.en)}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => {
            const en = NOTICE_EN[notice.id];
            return (
              <div
                key={notice.id}
                className={`p-6 rounded-2xl bg-white border transition-all flex flex-col justify-between group shadow-xs hover:shadow-md ${
                  notice.isPinned
                    ? 'border-amber-300 bg-amber-50/20'
                    : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        {text(notice.category, en?.category || notice.category)}
                      </span>
                      {notice.isPinned && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 px-2 py-0.5 rounded bg-amber-100 border border-amber-200">
                          <Pin className="w-2.5 h-2.5" /> {text('পিনযুক্ত', 'Pinned')}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {text(notice.date, en?.date || notice.date)}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition mb-2 leading-snug">
                    {text(notice.title, en?.title || notice.title)}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {text(notice.summary, en?.summary || notice.summary)}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  {notice.officialRef ? (
                    <span className="font-mono text-[10px] text-slate-400">
                      {text('স্মারক:', 'Ref:')}{' '}
                      {text(notice.officialRef, en?.officialRef || notice.officialRef)}
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400">
                      {text('জাতীয় সচিবালয়', 'National secretariat')}
                    </span>
                  )}

                  {notice.linkUrl && (
                    <a
                      href={notice.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition"
                    >
                      {text(
                        notice.linkText || 'বিস্তারিত',
                        en?.linkText || 'Details',
                      )}{' '}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
