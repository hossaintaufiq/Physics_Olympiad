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
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Intermediate':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Advanced':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'IPhO Level':
        return 'bg-purple-50 text-purple-700 border-purple-200';
    }
  };

  return (
    <section id="papers" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>National Physics Problem Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Past Question Papers & <br />
            <span className="text-blue-900">
              Model Solution Guides.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Master the problem-solving patterns that differentiate regional qualifiers from international medalists. Filter past examination papers by category, round, year, and region.
          </p>
        </div>

        {/* Filter Bar & Control Dashboard */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 mb-8 space-y-6 shadow-xs">
          {/* Quick Round Filter Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All Rounds', value: 'all' },
                { label: 'Regional Round', value: 'regional' },
                { label: 'National Finals', value: 'national' },
                { label: 'Training Camp', value: 'camp' },
                { label: 'Selection Tests', value: 'selection' },
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
              Reset All Filters
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, edition (e.g. 16th), region (Dhaka, Chittagong), or concept (Optics, Mechanics)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition shadow-2xs"
            />
          </div>

          {/* Dropdown Filters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label htmlFor="catSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                Category
              </label>
              <select
                id="catSelectArchiveLight"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as OlympiadCategory)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">All Categories (A, B, C, D)</option>
                <option value="A">Category A (Classes 5-6)</option>
                <option value="B">Category B (Classes 7-8)</option>
                <option value="C">Category C (Classes 9-10)</option>
                <option value="D">Category D (Classes 11-12)</option>
              </select>
            </div>

            <div>
              <label htmlFor="regSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                Region / Cluster
              </label>
              <select
                id="regSelectArchiveLight"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">All Regions / National</option>
                <option value="Dhaka">Dhaka Cluster</option>
                <option value="Chittagong">Chittagong Cluster</option>
                <option value="Rajshahi">Rajshahi Cluster</option>
                <option value="Khulna">Khulna Cluster</option>
                <option value="Sylhet">Sylhet Cluster</option>
                <option value="Barisal">Barisal Cluster</option>
                <option value="Rangpur">Rangpur Cluster</option>
                <option value="Mymensingh">Mymensingh Cluster</option>
              </select>
            </div>

            <div>
              <label htmlFor="setSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                Paper Set
              </label>
              <select
                id="setSelectArchiveLight"
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="all">All Paper Sets</option>
                <option value="1">Set 1</option>
                <option value="2">Set 2</option>
                <option value="3">Set 3</option>
                <option value="4">Set 4</option>
                <option value="6">Set 6</option>
              </select>
            </div>

            <div>
              <label htmlFor="langSelectArchiveLight" className="block text-slate-600 font-medium mb-1">
                Language Version
              </label>
              <select
                id="langSelectArchiveLight"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as LanguageOption)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 outline-none focus:border-blue-500 transition shadow-2xs"
              >
                <option value="both">Bilingual (বাংলা + English)</option>
                <option value="bn">Bengali Version</option>
                <option value="en">English Version</option>
              </select>
            </div>
          </div>

          {/* Bilingual Authoritative Directive */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <p>
              <strong>Official Language Note:</strong> All past and upcoming BdPhO question papers are structured bilingually in Bengali and English. In the event of any scientific or linguistic discrepancy, the <strong>Bengali version</strong> remains the final governing reference.
            </p>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-sm font-semibold text-slate-700">
            Showing <span className="text-blue-600 font-mono font-bold">{filteredPapers.length}</span> matching archive resource{filteredPapers.length === 1 ? '' : 's'}
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Direct downloads hosted on official BdPhO infrastructure
          </span>
        </div>

        {/* Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPapers.map((paper) => (
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
                          {paper.edition} • {paper.round.toUpperCase()}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                          {paper.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getDifficultyBadge(paper.difficulty)}`}>
                      {paper.difficulty}
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
                    Set {paper.set} • {paper.language === 'both' ? 'Bilingual' : paper.language.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewPaper(paper)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition"
                    >
                      Quick Info
                    </button>
                    <a
                      href={paper.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition flex items-center gap-1 shadow-xs"
                    >
                      Download <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No matching question papers found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-5">
              Try broadening your search term or resetting the region/round filters to view all past editions.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        )}

        {/* Paper Quick Preview Modal */}
        {previewPaper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
              <button
                onClick={() => setPreviewPaper(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
              >
                ✕
              </button>
              <div className="text-xs font-bold uppercase text-blue-600 mb-1">
                Paper Specifications
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{previewPaper.title}</h3>
              <p className="text-xs text-slate-500 mb-4">{previewPaper.subtitle}</p>

              <div className="space-y-2 text-xs text-slate-700 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Year / Edition:</span>
                  <span className="font-semibold text-slate-900">{previewPaper.year} ({previewPaper.edition})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Round Level:</span>
                  <span className="font-semibold text-slate-900 capitalize">{previewPaper.round} Round</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-semibold text-blue-600">Category {previewPaper.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Classes:</span>
                  <span className="font-semibold text-slate-900">
                    {previewPaper.category === 'A' ? 'Classes 5-6' : previewPaper.category === 'B' ? 'Classes 7-8' : previewPaper.category === 'C' ? 'Classes 9-10' : 'Classes 11-12'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Language:</span>
                  <span className="font-semibold text-slate-900">Bilingual (Bengali & English)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Official Solutions:</span>
                  <span className="font-semibold text-emerald-600">Available</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={previewPaper.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Full Question PDF ↗
                </a>
                <button
                  onClick={() => setPreviewPaper(null)}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
