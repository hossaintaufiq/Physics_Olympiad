'use client';

import React, { useState } from 'react';
import { Users, Building2 } from 'lucide-react';
import { COMMITTEE_MEMBERS } from '@/data/bdphoData';

export const CommitteeSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<string>('all');

  const filteredMembers = COMMITTEE_MEMBERS.filter((m) => {
    if (activeTier === 'all') return true;
    return m.tier.toLowerCase() === activeTier.toLowerCase();
  });

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'Patron':
        return 'পৃষ্ঠপোষক';
      case 'Academic':
        return 'একাডেমিক কাউন্সিল';
      case 'Advisory':
        return 'উপদেষ্টা পরিষদ';
      case 'Executive':
        return 'নির্বাহী পর্ষদ';
      case 'Regional':
        return 'আঞ্চলিক সমন্বয়ক';
      default:
        return tier;
    }
  };

  return (
    <section id="committee" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>একাডেমিক নেতৃত্ব ও পরিচালনা পর্ষদ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            দেশের শীর্ষ পদার্থবিজ্ঞানী ও <br />
            <span className="text-blue-900">
              শিক্ষাবিদদের সার্বিক দিকনির্দেশনা।
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            বাংলাদেশ ফিজিক্যাল সোসাইটির পৃষ্ঠপোষকতায় ঢাকা বিশ্ববিদ্যালয়, বুয়েট, শাবিপ্রবি ও রাজশাহী বিশ্ববিদ্যালয়ের বিশিষ্ট অধ্যাপকদের তত্ত্বাবধানে অলিম্পিয়াডের প্রশ্ন প্রণয়ন, প্রশিক্ষণ ক্যাম্প ও জুরিবোর্ড পরিচালিত হয়।
          </p>
        </div>

        {/* Tier Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { label: 'পূর্ণাঙ্গ কমিটি', value: 'all' },
            { label: 'পৃষ্ঠপোষক ও প্রতিষ্ঠাতা', value: 'Patron' },
            { label: 'একাডেমিক কাউন্সিল', value: 'Academic' },
            { label: 'উপদেষ্টা পরিষদ', value: 'Advisory' },
            { label: 'নির্বাহী পর্ষদ', value: 'Executive' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTier(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition border ${
                activeTier === tab.value
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
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
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-200 group-hover:border-blue-500 transition shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider block w-max mb-1">
                      {getTierLabel(member.tier)}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {member.banglaName || member.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      {member.name}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700 mb-4">
                  <div className="font-semibold text-amber-700">
                    {member.role}
                  </div>
                  <div className="text-slate-500 flex items-start gap-1.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-400 mt-0.5" />
                    <span>{member.institution}</span>
                  </div>
                </div>

                {member.bio && (
                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
