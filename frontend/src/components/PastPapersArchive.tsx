'use client';

import React, { useState, useMemo } from 'react';
import { Search, FileText, Download, RotateCcw, ExternalLink, Info, BookOpen } from 'lucide-react';
import { PAST_PAPERS } from '@/data/bdphoData';
import { OlympiadCategory, OlympiadRound, LanguageOption, PastPaper } from '@/types';
import { useLanguage } from '@/i18n/LanguageProvider';

const PAPER_EN: Record<
  string,
  { edition: string; title: string; subtitle: string; topics: string[]; set: string }
> = {
  'p-16-a-reg-1': {
    edition: '16th BdPhO',
    title: '16th BdPhO · Category A · Set 1',
    subtitle: 'Regional cluster Dhaka · Classes 5–6 · Bilingual paper',
    topics: ['Shadow geometry', 'Balance equilibrium', 'Temperature scales', 'Elementary kinematics'],
    set: '1',
  },
  'p-16-b-reg-2': {
    edition: '16th BdPhO',
    title: '16th BdPhO · Category B · Set 2',
    subtitle: 'Regional cluster Chittagong · Classes 7–8 · Bilingual paper',
    topics: ['Work–energy theorem', 'Resistor ladder circuits', 'Hydrostatic pressure'],
    set: '2',
  },
  'p-16-c-nat-1': {
    edition: '16th BdPhO',
    title: '16th BdPhO · Category C · National round',
    subtitle: 'Curzon Hall, University of Dhaka · Classes 9–10 · Full solutions',
    topics: ['Projectile motion on incline', 'Calorimetric phase change', 'Magnetic deflection'],
    set: '1',
  },
  'p-16-d-nat-1': {
    edition: '16th BdPhO',
    title: '16th BdPhO · Category D · National round',
    subtitle: 'Curzon Hall, University of Dhaka · Classes 11–12 · International standard',
    topics: ['Rotation & slipping', 'RLC resonance', 'Lorentz transforms', 'Photoelectric intro'],
    set: '1',
  },
  'p-15-c-nat-3': {
    edition: '15th BdPhO',
    title: '15th BdPhO · Category C · Set 3',
    subtitle: 'National round · Classes 9–10 · With model solutions',
    topics: ['Escape speed & orbital energy', 'Thin-prism optics', 'Elastic collisions'],
    set: '3',
  },
  'p-15-d-camp-1': {
    edition: '15th BdPhO',
    title: '15th BdPhO · National training camp theoretical exam',
    subtitle: 'IPhO/APhO selection camp BUET · 5-hour advanced theory',
    topics: ['Lagrangian mechanics', 'Faraday homopolar generator', 'Relativistic Doppler effect'],
    set: '1',
  },
  'p-14-a-reg-1': {
    edition: '14th BdPhO',
    title: '14th BdPhO · Category A · Set 1',
    subtitle: 'Regional cluster Rajshahi · Classes 5–6',
    topics: ["Archimedes’ principle", 'Speed & distance', 'Luminous sources & shadows'],
    set: '1',
  },
  'p-14-d-nat-4': {
    edition: '14th BdPhO',
    title: '14th BdPhO · Category D · Set 4',
    subtitle: 'National round · Higher secondary · Bilingual edition',
    topics: ['Non-inertial frames', 'Magnetic monopole analogy', 'Thermodynamic Otto cycle'],
    set: '4',
  },
  'p-13-c-nat-3': {
    edition: '13th BdPhO',
    title: '13th BdPhO · Category C · Set 3',
    subtitle: 'National round · Classes 9–10 · Bangla & English editions',
    topics: ['Lens immersed in water', 'Friction energy loss', 'Induced charge'],
    set: '3',
  },
  'p-11-a-sel-1': {
    edition: '11th BdPhO',
    title: '11th BdPhO · Category A · Set 1',
    subtitle: 'Selection archive · Classes 5–6 · Bilingual edition',
    topics: ['Basic density rules', 'Lunar & solar eclipses', 'Simple lever equilibrium'],
    set: '1',
  },
};

export const PastPapersArchive: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<OlympiadCategory>('all');
  const [selectedRound, setSelectedRound] = useState<OlympiadRound>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedSet, setSelectedSet] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>('both');
  const [previewPaper, setPreviewPaper] = useState<PastPaper | null>(null);

  const filteredPapers = useMemo(() => {
    return PAST_PAPERS.filter((paper) => {
      const q = searchQuery.toLowerCase().trim();
      const en = PAPER_EN[paper.id];
      const matchesQuery =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.subtitle.toLowerCase().includes(q) ||
        paper.edition.toLowerCase().includes(q) ||
        paper.region.toLowerCase().includes(q) ||
        paper.topics.some((t) => t.toLowerCase().includes(q)) ||
        (en &&
          (en.title.toLowerCase().includes(q) ||
            en.subtitle.toLowerCase().includes(q) ||
            en.topics.some((t) => t.toLowerCase().includes(q))));

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
        return { label: text('প্রাথমিক স্তর', 'Elementary'), style: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'Intermediate':
        return { label: text('মধ্যবর্তী স্তর', 'Intermediate'), style: 'bg-sky-50 text-sky-700 border-sky-200' };
      case 'Advanced':
        return { label: text('উচ্চতর স্তর', 'Advanced'), style: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'IPhO Level':
        return { label: text('IPhO মান', 'IPhO level'), style: 'bg-purple-50 text-purple-700 border-purple-200' };
    }
  };

  const getRoundLabel = (r: OlympiadRound) => {
    switch (r) {
      case 'regional':
        return text('আঞ্চলিক পর্ব', 'Regional round');
      case 'national':
        return text('জাতীয় ফাইনাল', 'National final');
      case 'camp':
        return text('প্রশিক্ষণ ক্যাম্প', 'Training camp');
      case 'selection':
        return text('সিলেকশন টেস্ট', 'Selection test');
      default:
        return r;
    }
  };

  const regionLabel = (region: string) => {
    const map: Record<string, string> = {
      Dhaka: text('ঢাকা', 'Dhaka'),
      Chittagong: text('চট্টগ্রাম', 'Chittagong'),
      Rajshahi: text('রাজশাহী', 'Rajshahi'),
      Khulna: text('খুলনা', 'Khulna'),
      Sylhet: text('সিলেট', 'Sylhet'),
      Barisal: text('বরিশাল', 'Barisal'),
      Rangpur: text('রংপুর', 'Rangpur'),
      Mymensingh: text('ময়মনসিংহ', 'Mymensingh'),
      National: text('জাতীয়', 'National'),
    };
    return map[region] || region;
  };

  const roundTabs = [
    { label: text('সকল রাউন্ড', 'All rounds'), value: 'all' },
    { label: text('আঞ্চলিক পর্ব', 'Regional round'), value: 'regional' },
    { label: text('জাতীয় ফাইনাল', 'National final'), value: 'national' },
    { label: text('প্রশিক্ষণ ক্যাম্প', 'Training camp'), value: 'camp' },
    { label: text('টিম সিলেকশন টেস্ট', 'Team selection test'), value: 'selection' },
  ];

  return (
    <section id="papers" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{text('জাতীয় পদার্থবিজ্ঞান প্রশ্ন আর্কাইভ', 'National physics paper archive')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {text('বিগত প্রশ্নপত্র ও', 'Past papers &')} <br />
            <span className="text-blue-900">
              {text('মডেল সমাধান নির্দেশিকা।', 'model solution guides.')}
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {text(
              'ক্যাটাগরি, পরীক্ষা পর্ব, সাল এবং অঞ্চল অনুযায়ী অতীতের প্রশ্নপত্রসমূহ পর্যালোচনা করুন। নিজস্ব গতিতে অনুশীলন করে অলিম্পিয়াড মঞ্চের জন্য নিজেকে প্রস্তুত করুন।',
              'Browse past papers by category, round, year and region. Practise at your own pace and prepare for the olympiad stage.',
            )}
          </p>
        </div>

        {/* Filter Bar & Control Dashboard */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 mb-8 space-y-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {roundTabs.map((tab) => (
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
              {text('ফিল্টার রিসেট', 'Reset filters')}
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={text(
                'বিষয়, আসর (যেমন: ১৬তম), অঞ্চল (ঢাকা, চট্টগ্রাম) অথবা টপিক (আলোকবিজ্ঞান, বলবিদ্যা) দিয়ে খুঁজুন...',
                'Search by edition (e.g. 16th), region (Dhaka, Chittagong) or topic (optics, mechanics)...',
              )}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition shadow-2xs"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label htmlFor="catSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                {text('ক্যাটাগরি', 'Category')}
              </label>
              <select
                id="catSelectArchiveLight"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as OlympiadCategory)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">{text('সকল ক্যাটাগরি (A, B, C, D)', 'All categories (A, B, C, D)')}</option>
                <option value="A">{text('ক্যাটাগরি এ (৫ম-৬ষ্ঠ শ্রেণি)', 'Category A (Classes 5–6)')}</option>
                <option value="B">{text('ক্যাটাগরি বি (৭ম-৮ম শ্রেণি)', 'Category B (Classes 7–8)')}</option>
                <option value="C">{text('ক্যাটাগরি সি (৯ম-১০ম শ্রেণি)', 'Category C (Classes 9–10)')}</option>
                <option value="D">{text('ক্যাটাগরি ডি (১১শ-১২শ শ্রেণি)', 'Category D (Classes 11–12)')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="regSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                {text('অঞ্চল / ক্লাস্টার', 'Region / cluster')}
              </label>
              <select
                id="regSelectArchiveLight"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">{text('সকল অঞ্চল / জাতীয়', 'All regions / national')}</option>
                <option value="Dhaka">{text('ঢাকা ক্লাস্টার', 'Dhaka cluster')}</option>
                <option value="Chittagong">{text('চট্টগ্রাম ক্লাস্টার', 'Chittagong cluster')}</option>
                <option value="Rajshahi">{text('রাজশাহী ক্লাস্টার', 'Rajshahi cluster')}</option>
                <option value="Khulna">{text('খুলনা ক্লাস্টার', 'Khulna cluster')}</option>
                <option value="Sylhet">{text('সিলেট ক্লাস্টার', 'Sylhet cluster')}</option>
                <option value="Barisal">{text('বরিশাল ক্লাস্টার', 'Barisal cluster')}</option>
                <option value="Rangpur">{text('রংপুর ক্লাস্টার', 'Rangpur cluster')}</option>
                <option value="Mymensingh">{text('ময়মনসিংহ ক্লাস্টার', 'Mymensingh cluster')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="setSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                {text('প্রশ্ন সেট', 'Question set')}
              </label>
              <select
                id="setSelectArchiveLight"
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">{text('সকল সেট', 'All sets')}</option>
                <option value="1">{text('সেট ১', 'Set 1')}</option>
                <option value="2">{text('সেট ২', 'Set 2')}</option>
                <option value="3">{text('সেট ৩', 'Set 3')}</option>
                <option value="4">{text('সেট ৪', 'Set 4')}</option>
                <option value="6">{text('সেট ৬', 'Set 6')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="langSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                {text('প্রশ্নপত্রের ভাষা', 'Paper language')}
              </label>
              <select
                id="langSelectArchiveLight"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as LanguageOption)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="both">{text('দ্বিভাষিক (বাংলা + ইংরেজি)', 'Bilingual (Bangla + English)')}</option>
                <option value="bn">{text('বাংলা সংস্করণ', 'Bangla edition')}</option>
                <option value="en">{text('ইংরেজি সংস্করণ', 'English edition')}</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <p>
              <strong>{text('দ্বিভাষিক প্রশ্ন নীতিমালা:', 'Bilingual paper policy:')}</strong>{' '}
              {text(
                'বিডিএফও এর সকল প্রশ্নপত্র বাংলা ও ইংরেজি উভয় ভাষায় মুদ্রিত। তাত্ত্বিক বা ভাষাগত কোনো বৈষম্য দেখা দিলে',
                'All BdPhO papers are printed in both Bangla and English. If any theoretical or linguistic discrepancy arises,',
              )}{' '}
              <strong>{text('বাংলা সংস্করণটিই', 'the Bangla edition')}</strong>{' '}
              {text('প্রামাণ্য ভিত্তি হিসেবে বিবেচিত হবে।', 'is treated as authoritative.')}
            </p>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-sm font-semibold text-slate-700">
            {text('মোট', 'Total')}{' '}
            <span className="text-blue-600 font-mono font-bold">{filteredPapers.length}</span>{' '}
            {text('টি প্রশ্নপত্র ও সমাধান পাওয়া গেছে', 'papers & solutions found')}
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            {text(
              'বিডিএফও কেন্দ্রীয় সার্ভার থেকে সরাসরি ডাউনলোডযোগ্য',
              'Directly downloadable from the BdPhO central server',
            )}
          </span>
        </div>

        {/* Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPapers.map((paper) => {
              const diffBadge = getDifficultyBadge(paper.difficulty);
              const en = PAPER_EN[paper.id];
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
                            {text(paper.edition, en?.edition || paper.edition)} • {getRoundLabel(paper.round)}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                            {text(paper.title, en?.title || paper.title)}
                          </h3>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffBadge.style}`}>
                        {diffBadge.label}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mb-3 pl-11">
                      {text(paper.subtitle, en?.subtitle || paper.subtitle)}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pl-11 mb-4">
                      {paper.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {text(t, en?.topics[idx] || t)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      {text(`সেট ${paper.set}`, `Set ${en?.set || paper.set}`)} •{' '}
                      {paper.language === 'both'
                        ? text('দ্বিভাষিক', 'Bilingual')
                        : paper.language === 'bn'
                          ? text('বাংলা', 'Bangla')
                          : 'English'}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPreviewPaper(paper)}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
                      >
                        {text('বিবরণ', 'Details')}
                      </button>
                      <a
                        href={paper.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-1.5 transition shadow-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                        {text('প্রশ্ন PDF', 'Paper PDF')}
                      </a>
                      {paper.hasSolution && (
                        <a
                          href={paper.solutionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 border border-emerald-200 transition"
                          title={text('সমাধান গাইড দেখুন', 'View solution guide')}
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
              {text('কোনো প্রশ্নপত্র পাওয়া যায়নি', 'No papers found')}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {text(
                'অনুসন্ধানের ফিল্টার পরিবর্তন করুন অথবা রিসেট বাটনে ক্লিক করে সকল প্রশ্নপত্র দেখুন।',
                'Change search filters or click reset to view all papers.',
              )}
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
            >
              {text('ফিল্টার রিসেট করুন', 'Reset filters')}
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
              {(() => {
                const en = PAPER_EN[previewPaper.id];
                return (
                  <>
                    <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                          {text(previewPaper.edition, en?.edition || previewPaper.edition)} •{' '}
                          {text(`ক্যাটাগরি ${previewPaper.category}`, `Category ${previewPaper.category}`)}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          {text(previewPaper.title, en?.title || previewPaper.title)}
                        </h3>
                      </div>
                      <button
                        onClick={() => setPreviewPaper(null)}
                        className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                        aria-label={text('বন্ধ করুন', 'Close')}
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {text(previewPaper.subtitle, en?.subtitle || previewPaper.subtitle)}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs py-2 bg-slate-50 rounded-2xl p-3 border border-slate-200">
                      <div>
                        <span className="text-slate-400 block">{text('পরীক্ষার রাউন্ড:', 'Exam round:')}</span>
                        <span className="font-semibold text-slate-800">{getRoundLabel(previewPaper.round)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{text('অঞ্চল / ক্লাস্টার:', 'Region / cluster:')}</span>
                        <span className="font-semibold text-slate-800">{regionLabel(previewPaper.region)}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{text('ভাষা সংস্করণ:', 'Language edition:')}</span>
                        <span className="font-semibold text-slate-800">
                          {previewPaper.language === 'both'
                            ? text('দ্বিভাষিক (বাংলা ও ইংরেজি)', 'Bilingual (Bangla & English)')
                            : previewPaper.language.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">{text('প্রশ্ন সেট:', 'Question set:')}</span>
                        <span className="font-semibold text-slate-800">
                          {text(`সেট ${previewPaper.set}`, `Set ${en?.set || previewPaper.set}`)}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-700 block mb-2">
                        {text('পরীক্ষিত মূল বৈজ্ঞানিক টপিকসমূহ:', 'Core scientific topics tested:')}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {previewPaper.topics.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                          >
                            {text(t, en?.topics[idx] || t)}
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
                        {text('প্রশ্ন PDF ডাউনলোড', 'Download paper PDF')}
                      </a>
                      {previewPaper.hasSolution && (
                        <a
                          href={previewPaper.solutionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition border border-emerald-200"
                        >
                          {text('সমাধান গাইড ↗', 'Solution guide ↗')}
                        </a>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
