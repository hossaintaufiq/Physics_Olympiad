'use client';

import React, { useState } from 'react';
import { Bell, ExternalLink, Pin, Calendar } from 'lucide-react';
import { NOTICES } from '@/data/bdphoData';

export const NoticesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredNotices = NOTICES.filter((n) => {
    if (selectedFilter === 'All') return true;
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
              <span>Official Circulars & Directives</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Latest Notices & <br />
              <span className="bg-gradient-to-r from-amber-600 via-blue-700 to-emerald-700 bg-clip-text text-transparent">
                Administrative Circulars.
              </span>
            </h2>
            <p className="text-slate-600 text-base">
              Stay informed with official circulars regarding exam schedules, admit card updates, category guidelines, and regional center allocations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
            {['All', 'Admit Card', 'Registration', 'Regional Round', 'General'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedFilter === cat
                    ? 'bg-amber-500 text-white font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice) => (
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
                      {notice.category}
                    </span>
                    {notice.isPinned && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 px-2 py-0.5 rounded bg-amber-100 border border-amber-200">
                        <Pin className="w-2.5 h-2.5" /> Pinned
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {notice.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition mb-1">
                  {notice.title}
                </h3>

                {notice.banglaTitle && (
                  <p className="text-xs text-amber-800 mb-3 font-sans font-medium">
                    {notice.banglaTitle}
                  </p>
                )}

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                {notice.officialRef ? (
                  <span className="font-mono text-[10px] text-slate-400">
                    Ref: {notice.officialRef}
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400">National Council</span>
                )}

                {notice.linkUrl && (
                  <a
                    href={notice.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition"
                  >
                    {notice.linkText || 'Details'} <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
