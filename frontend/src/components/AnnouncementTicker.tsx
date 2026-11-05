'use client';

import React from 'react';
import { Bell, ArrowUpRight } from 'lucide-react';
import { NOTICES } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

import Link from 'next/link';

const NOTICE_CATEGORY_EN: Record<string, string> = {
  'প্রবেশপত্র': 'Admit Card',
  'সাধারণ': 'General',
  'আঞ্চলিক পর্ব': 'Regional Round',
  'নিবন্ধন': 'Registration',
  'ক্যাম্প ও আন্তর্জাতিক': 'Camp & International',
};

const NOTICE_TITLE_EN: Record<string, string> = {
  n1: 'Notice on publication of admit cards for the 17th BdPhO Regional Round',
  n2: 'Policy on bilingual question papers and priority of the Bangla version',
  n3: 'Approved calculators and syllabus guidelines for Categories C & D',
  n4: 'Call for applications: BdPhO Tech Fair & Science Innovation Contest 2026',
  n5: 'Glorious success of Team Bangladesh at the International Physics Olympiad (IPhO)',
};

const NOTICE_DATE_EN: Record<string, string> = {
  '১৮ ফেব্রুয়ারি, ২০২৬': '18 February 2026',
  '১০ ফেব্রুয়ারি, ২০২৬': '10 February 2026',
  '২৮ জানুয়ারি, ২০২৬': '28 January 2026',
  '১৫ জানুয়ারি, ২০২৬': '15 January 2026',
  '২০ ডিসেম্বর, ২০২৫': '20 December 2025',
};

export const AnnouncementTicker: React.FC = () => {
  const { L } = useLanguage();

  return (
    <div className="w-full bg-slate-50/90 border-y border-slate-200 py-3 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Label Badge */}
        <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1 rounded-md text-xs font-bold shrink-0 z-10 mr-4">
          <Bell className="w-3.5 h-3.5 text-amber-400" />
          <span className="uppercase tracking-wider">
            {L('জরুরি সার্কুলার', 'Urgent Circulars')}
          </span>
        </div>

        {/* Scrolling Ticker Line */}
        <div className="overflow-hidden flex-1 relative mask-fade-edges">
          <div className="animate-ticker flex items-center gap-8 text-xs sm:text-sm text-slate-700">
            {NOTICES.concat(NOTICES).map((notice, idx) => (
              <Link
                key={`${notice.id}-${idx}`}
                href="/notices"
                className="inline-flex items-center gap-2 hover:text-blue-600 transition shrink-0 group"
              >
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-slate-700 border border-slate-200 group-hover:border-blue-400 shadow-2xs">
                  {L(notice.category, NOTICE_CATEGORY_EN[notice.category] ?? notice.category)}
                </span>
                <span className="font-semibold text-slate-900 group-hover:text-blue-600">
                  {L(notice.title, NOTICE_TITLE_EN[notice.id] ?? notice.title)}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 text-xs">
                  {L(notice.date, NOTICE_DATE_EN[notice.date] ?? notice.date)}
                </span>
                <ArrowUpRight className="w-3 h-3 text-blue-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
