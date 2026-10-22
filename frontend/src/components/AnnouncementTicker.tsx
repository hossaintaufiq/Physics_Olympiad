'use client';

import React from 'react';
import { Bell, AlertCircle, ArrowUpRight } from 'lucide-react';
import { NOTICES } from '@/data/bdphoData';

export const AnnouncementTicker: React.FC = () => {
  return (
    <div className="w-full bg-slate-950/90 border-y border-white/10 py-3 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Label Badge */}
        <div className="flex items-center gap-2 bg-sky-500/10 text-sky-400 border border-sky-500/30 px-3 py-1 rounded-lg text-xs font-bold shrink-0 z-10 mr-4 shadow-sm">
          <Bell className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
          <span className="uppercase tracking-wider">Live Updates</span>
        </div>

        {/* Scrolling Ticker Line */}
        <div className="overflow-hidden flex-1 relative mask-fade-edges">
          <div className="animate-ticker flex items-center gap-8 text-xs sm:text-sm text-slate-300">
            {NOTICES.concat(NOTICES).map((notice, idx) => (
              <a
                key={`${notice.id}-${idx}`}
                href="#notices"
                className="inline-flex items-center gap-2 hover:text-sky-300 transition shrink-0 group"
              >
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-slate-300 border border-white/10 group-hover:border-sky-400">
                  {notice.category}
                </span>
                <span className="font-medium text-slate-200 group-hover:text-white">
                  {notice.title}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-xs">{notice.date}</span>
                <ArrowUpRight className="w-3 h-3 text-sky-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
