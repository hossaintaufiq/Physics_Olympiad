'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, FileText, Download, RotateCcw, ExternalLink, CheckCircle, Info, Sparkles, BookOpen } from 'lucide-react';
import { PAST_PAPERS, BDPHO_METRICS } from '@/data/bdphoData';
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
      // Query search
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.subtitle.toLowerCase().includes(q) ||
        paper.edition.toLowerCase().includes(q) ||
        paper.region.toLowerCase().includes(q) ||
        paper.topics.some((t) => t.toLowerCase().includes(q));

      // Category
      const matchesCategory =
        selectedCategory === 'all' || paper.category === selectedCategory || paper.category === 'all';

      // Round
      const matchesRound =
        selectedRound === 'all' || paper.round === selectedRound;

      // Region
      const matchesRegion =
        selectedRegion === 'all' ||
        paper.region.toLowerCase() === selectedRegion.toLowerCase() ||
        paper.region.toLowerCase() === 'all' ||
        paper.region.toLowerCase() === 'national';

      // Set
      const matchesSet =
        selectedSet === 'all' || paper.set === selectedSet || paper.set === 'all';

      // Language
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
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Advanced':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'IPhO Level':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <section id="papers" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>National Physics Problem Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Past Question Papers & <br />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Model Solution Guides.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Master the problem-solving patterns that differentiate regional qualifiers from international medalists. Filter past examination papers by category, round, year, and region.
          </p>
        </div>

        {/* Filter Bar & Control Dashboard */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-8 space-y-6">
          {/* Quick Round Filter Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
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
                      ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-md shadow-sky-500/20'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-1.5 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, edition (e.g. 16th), region (Dhaka, Chittagong), or concept (Optics, Mechanics)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white placeholder-slate-500 text-sm outline-none transition"
            />
          </div>

          {/* Dropdown Filters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {/* Category Filter */}
            <div>
              <label htmlFor="catSelectArchive" className="block text-slate-400 font-medium mb-1">
                Category
              </label>
              <select
                id="catSelectArchive"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as OlympiadCategory)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-sky-400 transition"
              >
                <option value="all">All Categories (A, B, C, D)</option>
                <option value="A">Category A (Classes 5-6)</option>
                <option value="B">Category B (Classes 7-8)</option>
                <option value="C">Category C (Classes 9-10)</option>
                <option value="D">Category D (Classes 11-12)</option>
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <label htmlFor="regSelectArchive" className="block text-slate-400 font-medium mb-1">
                Region / Cluster
              </label>
              <select
                id="regSelectArchive"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-sky-400 transition"
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

            {/* Paper Set */}
            <div>
              <label htmlFor="setSelectArchive" className="block text-slate-400 font-medium mb-1">
                Paper Set
              </label>
              <select
                id="setSelectArchive"
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-sky-400 transition"
              >
                <option value="all">All Paper Sets</option>
                <option value="1">Set 1</option>
                <option value="2">Set 2</option>
                <option value="3">Set 3</option>
                <option value="4">Set 4</option>
                <option value="6">Set 6</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label htmlFor="langSelectArchive" className="block text-slate-400 font-medium mb-1">
                Language Version
              </label>
              <select
                id="langSelectArchive"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as LanguageOption)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 outline-none focus:border-sky-400 transition"
              >
                <option value="both">Bilingual (বাংলা + English)</option>
                <option value="bn">Bengali Version</option>
                <option value="en">English Version</option>
              </select>
            </div>
          </div>

          {/* Bilingual Authoritative Directive */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
            <p>
              <strong>Official Language Note:</strong> All past and upcoming BdPhO question papers are structured bilingually in Bengali and English. In the event of any scientific or linguistic discrepancy, the <strong>Bengali version</strong> remains the final governing reference.
            </p>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-sm font-semibold text-slate-300">
            Showing <span className="text-sky-400 font-mono font-bold">{filteredPapers.length}</span> matching archive resource{filteredPapers.length === 1 ? '' : 's'}
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
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs font-mono">
                        PDF
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          {paper.edition} • {paper.round.toUpperCase()}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                          {paper.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getDifficultyBadge(paper.difficulty)}`}>
                      {paper.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-3 pl-11">
                    {paper.subtitle}
                  </p>

                  {/* Topics Tags */}
                  <div className="flex flex-wrap gap-1.5 pl-11 mb-4">
                    {paper.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                  <span className="text-slate-500 font-mono text-[11px]">
                    Set {paper.set} • {paper.language === 'both' ? 'Bilingual' : paper.language.toUpperCase()}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPreviewPaper(paper)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition"
                    >
                      Quick Info
                    </button>
                    <a
                      href={paper.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition flex items-center gap-1 shadow-sm"
                    >
                      Download <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl glass-panel border border-slate-800">
            <FileText className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No matching question papers found</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-5">
              Try broadening your search term or resetting the region/round filters to view all past editions.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        )}

        {/* Paper Quick Preview Modal */}
        {previewPaper && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg p-6 rounded-2xl glass-panel bg-slate-900/95 border border-sky-500/30 shadow-2xl">
              <button
                onClick={() => setPreviewPaper(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                ✕
              </button>
              <div className="text-xs font-bold uppercase text-sky-400 mb-1">
                Paper Specifications
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{previewPaper.title}</h3>
              <p className="text-xs text-slate-300 mb-4">{previewPaper.subtitle}</p>

              <div className="space-y-2 text-xs text-slate-300 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Year / Edition:</span>
                  <span className="font-semibold text-white">{previewPaper.year} ({previewPaper.edition})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Round Level:</span>
                  <span className="font-semibold text-white capitalize">{previewPaper.round} Round</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-sky-400">Category {previewPaper.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Classes:</span>
                  <span className="font-semibold text-white">
                    {previewPaper.category === 'A' ? 'Classes 5-6' : previewPaper.category === 'B' ? 'Classes 7-8' : previewPaper.category === 'C' ? 'Classes 9-10' : 'Classes 11-12'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Language:</span>
                  <span className="font-semibold text-white">Bilingual (Bengali & English)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Official Solutions:</span>
                  <span className="font-semibold text-emerald-400">Available</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={previewPaper.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <Download className="w-4 h-4" />
                  Download Full Question PDF ↗
                </a>
                <button
                  onClick={() => setPreviewPaper(null)}
                  className="py-2.5 px-4 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs transition"
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
