'use client';

import React from 'react';
import { Bell, ArrowUpRight } from 'lucide-react';
import { NOTICES } from '@/data/bdphoData';

import Link from 'next/link';

export const AnnouncementTicker: React.FC = () => {
  return (
    <div className="w-full bg-slate-50/90 border-y border-slate-200 py-3 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Label Badge */}
        <div className="flex items-center gap-2 bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-lg text-xs font-bold shrink-0 z-10 mr-4 shadow-xs">
          <Bell className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
          <span className="uppercase tracking-wider">Live Updates</span>
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
                  {notice.category}
                </span>
                <span className="font-semibold text-slate-900 group-hover:text-blue-600">
                  {notice.title}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 text-xs">{notice.date}</span>
                <ArrowUpRight className="w-3 h-3 text-blue-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
