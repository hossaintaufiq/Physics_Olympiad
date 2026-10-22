'use client';

import React, { useState, useMemo } from 'react';
import { Search, FileText, Download, RotateCcw, ExternalLink, Info, BookOpen } from 'lucide-react';
import { PAST_PAPERS } from '@/data/bdphoData';
import { OlympiadCategory, OlympiadRound, LanguageOption, PastPaper } from '@/types';

export const PastPapersArchive: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<OlympiadCategory>('all');
  const [selectedRound, setSelectedRound] = useState<OlympiadRound>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedSet, setSelectedSet] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>('both');
  const [previewPaper, setPreviewPaper] = useState<PastPaper | null>(null);

  // Filter logic
  const filteredPapers = useMemo(() => {
    return PAST_PAPERS.filter((paper) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.subtitle.toLowerCase().includes(q) ||
        paper.edition.toLowerCase().includes(q) ||
        paper.region.toLowerCase().includes(q) ||
        paper.topics.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === 'all' || paper.category === selectedCategory || paper.category === 'all';

      const matchesRound =
        selectedRound === 'all' || paper.round === selectedRound;

      const matchesRegion =
        selectedRegion === 'all' ||
        paper.region.toLowerCase() === selectedRegion.toLowerCase() ||
        paper.region.toLowerCase() === 'all' ||
        paper.region.toLowerCase() === 'national';

      const matchesSet =
        selectedSet === 'all' || paper.set === selectedSet || paper.set === 'all';

      const matchesLanguage =
        selectedLanguage === 'both' ||
        paper.language === selectedLanguage ||
        paper.language === 'both';

      return matchesQuery && matchesCategory && matchesRound && matchesRegion && matchesSet && matchesLanguage;
    });
  }, [searchQuery, selectedCategory, selectedRound, selectedRegion, selectedSet, selectedLanguage]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedRound('all');
    setSelectedRegion('all');
    setSelectedSet('all');
    setSelectedLanguage('both');
  };

  const getDifficultyBadge = (diff: PastPaper['difficulty']) => {
    switch (diff) {
      case 'Elementary':
        return { label: 'প্রাথমিক স্তর', style: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'Intermediate':
        return { label: 'মধ্যবর্তী স্তর', style: 'bg-sky-50 text-sky-700 border-sky-200' };
      case 'Advanced':
        return { label: 'উচ্চতর স্তর', style: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'IPhO Level':
        return { label: 'IPhO মান', style: 'bg-purple-50 text-purple-700 border-purple-200' };
    }
  };

  const getRoundLabel = (r: OlympiadRound) => {
    switch (r) {
      case 'regional':
        return 'আঞ্চলিক পর্ব';
      case 'national':
        return 'জাতীয় ফাইনাল';
      case 'camp':
        return 'প্রশিক্ষণ ক্যাম্প';
      case 'selection':
        return 'সিলেকশন টেস্ট';
      default:
        return r;
    }
  };

  return (
    <section id="papers" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>জাতীয় পদার্থবিজ্ঞান প্রশ্ন আর্কাইভ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            বিগত প্রশ্নপত্র ও <br />
            <span className="text-blue-900">
              মডেল সমাধান নির্দেশিকা।
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            ক্যাটাগরি, পরীক্ষা পর্ব, সাল এবং অঞ্চল অনুযায়ী অতীতের প্রশ্নপত্রসমূহ পর্যালোচনা করুন। নিজস্ব গতিতে অনুশীলন করে অলিম্পিয়াড মঞ্চের জন্য নিজেকে প্রস্তুত করুন।
          </p>
        </div>

        {/* Filter Bar & Control Dashboard */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 mb-8 space-y-6 shadow-xs">
          {/* Quick Round Filter Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'সকল রাউন্ড', value: 'all' },
                { label: 'আঞ্চলিক পর্ব', value: 'regional' },
                { label: 'জাতীয় ফাইনাল', value: 'national' },
                { label: 'প্রশিক্ষণ ক্যাম্প', value: 'camp' },
                { label: 'টিম সিলেকশন টেস্ট', value: 'selection' },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedRound(tab.value as OlympiadRound)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition border ${
                    selectedRound === tab.value
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 flex items-center gap-1.5 transition shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              ফিল্টার রিসেট
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="বিষয়, আসর (যেমন: ১৬তম), অঞ্চল (ঢাকা, চট্টগ্রাম) অথবা টপিক (আলোকবিজ্ঞান, বলবিদ্যা) দিয়ে খুঁজুন..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition shadow-2xs"
            />
          </div>

          {/* Dropdown Filters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label htmlFor="catSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                ক্যাটাগরি
              </label>
              <select
                id="catSelectArchiveLight"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as OlympiadCategory)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">সকল ক্যাটাগরি (A, B, C, D)</option>
                <option value="A">ক্যাটাগরি এ (৫ম-৬ষ্ঠ শ্রেণি)</option>
                <option value="B">ক্যাটাগরি বি (৭ম-৮ম শ্রেণি)</option>
                <option value="C">ক্যাটাগরি সি (৯ম-১০ম শ্রেণি)</option>
                <option value="D">ক্যাটাগরি ডি (১১শ-১২শ শ্রেণি)</option>
              </select>
            </div>

            <div>
              <label htmlFor="regSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                অঞ্চল / ক্লাস্টার
              </label>
              <select
                id="regSelectArchiveLight"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">সকল অঞ্চল / জাতীয়</option>
                <option value="Dhaka">ঢাকা ক্লাস্টার</option>
                <option value="Chittagong">চট্টগ্রাম ক্লাস্টার</option>
                <option value="Rajshahi">রাজশাহী ক্লাস্টার</option>
                <option value="Khulna">খুলনা ক্লাস্টার</option>
                <option value="Sylhet">সিলেট ক্লাস্টার</option>
                <option value="Barisal">বরিশাল ক্লাস্টার</option>
                <option value="Rangpur">রংপুর ক্লাস্টার</option>
                <option value="Mymensingh">ময়মনসিংহ ক্লাস্টার</option>
              </select>
            </div>

            <div>
              <label htmlFor="setSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                প্রশ্ন সেট
              </label>
              <select
                id="setSelectArchiveLight"
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">সকল সেট</option>
                <option value="1">সেট ১</option>
                <option value="2">সেট ২</option>
                <option value="3">সেট ৩</option>
                <option value="4">সেট ৪</option>
                <option value="6">সেট ৬</option>
              </select>
            </div>

            <div>
              <label htmlFor="langSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                প্রশ্নপত্রের ভাষা
              </label>
              <select
                id="langSelectArchiveLight"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as LanguageOption)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="both">দ্বিভাষিক (বাংলা + ইংরেজি)</option>
                <option value="bn">বাংলা সংস্করণ</option>
                <option value="en">ইংরেজি সংস্করণ</option>
              </select>
            </div>
          </div>

          {/* Bilingual Authoritative Directive */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <p>
              <strong>দ্বিভাষিক প্রশ্ন নীতিমালা:</strong> বিডিএফও এর সকল প্রশ্নপত্র বাংলা ও ইংরেজি উভয় ভাষায় মুদ্রিত। তাত্ত্বিক বা ভাষাগত কোনো বৈষম্য দেখা দিলে <strong>বাংলা সংস্করণটিই</strong> প্রামাণ্য ভিত্তি হিসেবে বিবেচিত হবে।
            </p>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-sm font-semibold text-slate-700">
            মোট <span className="text-blue-600 font-mono font-bold">{filteredPapers.length}</span> টি প্রশ্নপত্র ও সমাধান পাওয়া গেছে
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            বিডিএফও কেন্দ্রীয় সার্ভার থেকে সরাসরি ডাউনলোডযোগ্য
          </span>
        </div>

        {/* Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPapers.map((paper) => {
              const diffBadge = getDifficultyBadge(paper.difficulty);
              return (
                <div
                  key={paper.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-xs font-mono">
                          PDF
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            {paper.edition} • {getRoundLabel(paper.round)}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                            {paper.title}
                          </h3>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffBadge.style}`}>
                        {diffBadge.label}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mb-3 pl-11">
                      {paper.subtitle}
                    </p>

                    {/* Topics Tags */}
                    <div className="flex flex-wrap gap-1.5 pl-11 mb-4">
                      {paper.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      সেট {paper.set} • {paper.language === 'both' ? 'দ্বিভাষিক' : paper.language === 'bn' ? 'বাংলা' : 'English'}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPreviewPaper(paper)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
                      >
                        বিবরণ
                      </button>
                      <a
                        href={paper.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-1.5 transition shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        প্রশ্ন PDF
                      </a>
                      {paper.hasSolution && (
                        <a
                          href={paper.solutionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 border border-emerald-200 transition"
                          title="সমাধান গাইড দেখুন"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl space-y-3">
            <div className="p-3 w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              কোনো প্রশ্নপত্র পাওয়া যায়নি
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              অনুসন্ধানের ফিল্টার পরিবর্তন করুন অথবা রিসেট বাটনে ক্লিক করে সকল প্রশ্নপত্র দেখুন।
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
            >
              ফিল্টার রিসেট করুন
            </button>
          </div>
        )}

        {/* Quick Details Modal */}
        {previewPaper && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn"
            onClick={() => setPreviewPaper(null)}
          >
            <div
              className="relative max-w-lg w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {previewPaper.edition} • ক্যাটাগরি {previewPaper.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {previewPaper.title}
                  </h3>
                </div>
                <button
                  onClick={() => setPreviewPaper(null)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {previewPaper.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs py-2 bg-slate-50 rounded-2xl p-3 border border-slate-200">
                <div>
                  <span className="text-slate-400 block">পরীক্ষার রাউন্ড:</span>
                  <span className="font-semibold text-slate-800">{getRoundLabel(previewPaper.round)}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">অঞ্চল / ক্লাস্টার:</span>
                  <span className="font-semibold text-slate-800">{previewPaper.region}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">ভাষা সংস্করণ:</span>
                  <span className="font-semibold text-slate-800">
                    {previewPaper.language === 'both' ? 'দ্বিভাষিক (বাংলা ও ইংরেজি)' : previewPaper.language.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">প্রশ্ন সেট:</span>
                  <span className="font-semibold text-slate-800">সেট {previewPaper.set}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  পরীক্ষিত মূল বৈজ্ঞানিক টপিকসমূহ:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {previewPaper.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <a
                  href={previewPaper.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  প্রশ্ন PDF ডাউনলোড
                </a>
                {previewPaper.hasSolution && (
                  <a
                    href={previewPaper.solutionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition border border-emerald-200"
                  >
                    সমাধান গাইড ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
