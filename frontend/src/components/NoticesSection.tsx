'use client';

import React, { useState } from 'react';
import { Bell, AlertCircle, FileText, ExternalLink, Pin, Calendar, Tag } from 'lucide-react';
import { NOTICES } from '@/data/bdphoData';
import { Notice } from '@/types';

export const NoticesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filteredNotices = NOTICES.filter((n) => {
    if (selectedFilter === 'All') return true;
    return n.category === selectedFilter;
  });

  return (
    <section id="notices" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Bell className="w-3.5 h-3.5" />
              <span>Official Circulars & Directives</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Latest Notices & <br />
              <span className="bg-gradient-to-r from-amber-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Administrative Circulars.
              </span>
            </h2>
            <p className="text-slate-400 text-base">
              Stay informed with official circulars regarding exam schedules, admit card updates, category guidelines, and regional center allocations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 self-start md:self-auto">
            {['All', 'Admit Card', 'Registration', 'Regional Round', 'General'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedFilter === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
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
              className={`p-6 rounded-2xl glass-panel border transition-all flex flex-col justify-between group shadow-lg ${
                notice.isPinned
                  ? 'border-amber-500/40 bg-slate-900/90'
                  : 'border-white/10 hover:border-sky-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-slate-300 border border-white/10">
                      {notice.category}
                    </span>
                    {notice.isPinned && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                        <Pin className="w-2.5 h-2.5" /> Pinned
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {notice.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition mb-1">
                  {notice.title}
                </h3>

                {notice.banglaTitle && (
                  <p className="text-xs text-amber-200/80 mb-3 font-sans">
                    {notice.banglaTitle}
                  </p>
                )}

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {notice.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                {notice.officialRef ? (
                  <span className="font-mono text-[10px] text-slate-500">
                    Ref: {notice.officialRef}
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-500">National Council</span>
                )}

                {notice.linkUrl && (
                  <a
                    href={notice.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 transition"
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
