'use client';

import React, { useState } from 'react';
import { Users, Building2, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { COMMITTEE_MEMBERS } from '@/data/bdphoData';

export const CommitteeSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<string>('all');

  const filteredMembers = COMMITTEE_MEMBERS.filter((m) => {
    if (activeTier === 'all') return true;
    return m.tier.toLowerCase() === activeTier.toLowerCase();
  });

  return (
    <section id="committee" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Academic Leadership & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Guided by Bangladesh’s <br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Foremost Physicists & Mentors.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Under the patronage of the Bangladesh Physical Society, eminent university professors from DU, BUET, and SUST oversee problem formulation, training camps, and national jury deliberations.
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'Full Committee', value: 'all' },
            { label: 'Patrons & Founders', value: 'Patron' },
            { label: 'Academic Council', value: 'Academic' },
            { label: 'Advisory Panel', value: 'Advisory' },
            { label: 'Executive Team', value: 'Executive' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTier(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition border ${
                activeTier === tab.value
                  ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-sky-400/30 group-hover:border-sky-400 transition shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase tracking-wider block w-max mb-1">
                      {member.tier}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                      {member.name}
                    </h3>
                    {member.banglaName && (
                      <p className="text-xs text-slate-400 font-sans">
                        {member.banglaName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 mb-4">
                  <div className="font-semibold text-amber-300">
                    {member.role}
                  </div>
                  <div className="text-slate-400 flex items-start gap-1.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-500 mt-0.5" />
                    <span>{member.institution}</span>
                  </div>
                </div>

                {member.bio && (
                  <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Committee Link Footer */}
        <div className="text-center">
          <a
            href="https://www.bdpho.org/central-committee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-white text-xs font-semibold transition"
          >
            <span>View Full 40+ Member Central Directory on Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
