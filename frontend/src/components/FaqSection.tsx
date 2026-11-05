'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { FAQS } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

const FAQ_EN: Record<string, { question: string; answer: string; category: string }> = {
  'faq-1': {
    question: 'Who can take part in the Bangladesh Physics Olympiad?',
    answer:
      'Any student from class 5 to class 12 (or A-Level Year 2) at an approved school or college in Bangladesh (Bangla medium, English version or English medium) may enter their designated category: A (5–6), B (7–8), C (9–10) and D (11–12). University students are not eligible.',
    category: 'Eligibility',
  },
  'faq-2': {
    question: 'In which language are the papers set, and which language prevails if there is a mismatch?',
    answer:
      'All four categories use fully bilingual papers printed in Bangla and English together. Students may write answers in either Bangla or English. Per official academic policy, if any terminology or wording is unclear, the Bangla version is final and authoritative.',
    category: 'Exam & rules',
  },
  'faq-3': {
    question: 'Are scientific calculators allowed in the exam?',
    answer:
      'To build mental arithmetic, order-of-magnitude checks and geometric intuition, calculators are fully banned in Categories A and B. Categories C and D may use ordinary non-programmable scientific calculators (e.g. Casio fx-991ES Plus, fx-991EX or equivalent). Programmable calculators with memory and mobile phones are fully banned.',
    category: 'Exam & rules',
  },
  'faq-4': {
    question: 'What are the steps toward the International Physics Olympiad (IPhO)?',
    answer:
      'The journey has five main stages: (1) regional olympiad festivals across 16 regional clusters; (2) the national final exam in Dhaka; (3) the national camp (2–3 weeks of intensive theory and lab at BUET for the top 30–40 from Categories C & D); (4) Team Selection Test (TST); and (5) the top 5 students represent Bangladesh at IPhO and the next 8 at the Asian Physics Olympiad (APhO).',
    category: 'General',
  },
  'faq-5': {
    question: 'How do I download the admit card?',
    answer:
      'Open the admit-card menu, choose your exam round (regional or national), enter the unique registration ID from signup, verify, then download and print the PDF with your name, centre and roll. On exam day you must bring this printed admit card and your original school ID.',
    category: 'Admit card & portal',
  },
  'faq-6': {
    question: 'What is the BdPhO Tech Fair & scientific innovation exhibition?',
    answer:
      'Alongside theoretical problem solving, a tech fair at the national round encourages practical innovation. Students may show solar energy, robotics, physics hardware and scientific projects. Top projects receive special fellowships and awards at the national closing ceremony.',
    category: 'General',
  },
};

const CATEGORY_FILTERS: { value: string; en: string }[] = [
  { value: 'সব', en: 'All' },
  { value: 'সাধারণ', en: 'General' },
  { value: 'যোগ্যতা', en: 'Eligibility' },
  { value: 'পরীক্ষা ও নিয়ম', en: 'Exam & rules' },
  { value: 'প্রবেশপত্র ও পোর্টাল', en: 'Admit card & portal' },
];

export const FaqSection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
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
    const en = FAQ_EN[faq.id];
    const matchesQuery =
      !q ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      (en &&
        (en.question.toLowerCase().includes(q) || en.answer.toLowerCase().includes(q)));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{text('কোনো প্রশ্ন আছে?', 'Have a question?')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {text('সচরাচর জিজ্ঞাসিত প্রশ্নাবলী।', 'Frequently asked questions.')}
          </h2>
          <p className="text-slate-600 text-base">
            {text(
              'যোগ্যতা, দ্বিভাষিক প্রশ্নপত্র, ক্যালকুলেটর ব্যবহারের নিয়মাবলী, সিলেবাসের পরিধি এবং আন্তর্জাতিক দল নির্বাচন সম্পর্কিত সাধারণ প্রশ্নের উত্তর।',
              'Answers on eligibility, bilingual papers, calculator rules, syllabus scope and international team selection.',
            )}
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
              placeholder={text(
                'প্রশ্ন অনুসন্ধান করুন (যেমন: ক্যালকুলেটর, ভাষা, প্রবেশপত্র, যোগ্যতা)...',
                'Search questions (e.g. calculator, language, admit card, eligibility)...',
              )}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none transition shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat.value
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-2xs'
                }`}
              >
                {text(cat.value, cat.en)}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const en = FAQ_EN[faq.id];
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
                      {text(faq.question, en?.question || faq.question)}
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
                      {text(faq.answer, en?.answer || faq.answer)}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500 bg-white border border-slate-200 rounded-2xl">
              {text(
                `"${searchQuery}" সম্পর্কিত কোনো প্রশ্ন পাওয়া যায়নি।`,
                `No questions found for "${searchQuery}".`,
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
