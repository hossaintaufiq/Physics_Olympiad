'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { FAQS } from '@/data/bdphoData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('সব');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'সব' || faq.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>কোনো প্রশ্ন আছে?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            সচরাচর জিজ্ঞাসিত প্রশ্নাবলী।
          </h2>
          <p className="text-slate-600 text-base">
            যোগ্যতা, দ্বিভাষিক প্রশ্নপত্র, ক্যালকুলেটর ব্যবহারের নিয়মাবলী, সিলেবাসের পরিধি এবং আন্তর্জাতিক দল নির্বাচন সম্পর্কিত সাধারণ প্রশ্নের উত্তর।
          </p>
        </div>

        {/* Filter Controls */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="প্রশ্ন অনুসন্ধান করুন (যেমন: ক্যালকুলেটর, ভাষা, প্রবেশপত্র, যোগ্যতা)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none transition shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {['সব', 'সাধারণ', 'যোগ্যতা', 'পরীক্ষা ও নিয়ম', 'প্রবেশপত্র ও পোর্টাল'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span className="p-1.5 rounded-lg bg-slate-100 text-blue-600 shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500 bg-white border border-slate-200 rounded-2xl">
              "{searchQuery}" সম্পর্কিত কোনো প্রশ্ন পাওয়া যায়নি।
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
