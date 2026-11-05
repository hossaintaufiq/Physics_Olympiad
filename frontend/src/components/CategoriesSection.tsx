'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Clock, HelpCircle, FileText, ChevronRight, CheckCircle2, Lightbulb } from 'lucide-react';
import { CATEGORIES_DATA } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

const CATEGORY_EN: Record<
  string,
  {
    name: string;
    tagline: string;
    targetClasses: string;
    typicalAge: string;
    examDuration: string;
    questionPattern: string;
    keySubjects: string[];
    problem: string;
    answerHint: string;
    tabRange: string;
    tabLevel: string;
  }
> = {
  A: {
    name: 'Category A · Primary / Junior Starter',
    tagline: 'Building scientific curiosity through direct observation of nature',
    targetClasses: 'Classes 5–6 (or equivalent English-medium primary)',
    typicalAge: 'Age 10–12 years',
    examDuration: '1 hour 30 minutes',
    questionPattern: '20 conceptual MCQs and short calculation problems',
    keySubjects: [
      'Measurement & base units',
      'Simple pulleys & levers',
      'Heat & everyday physics',
      'Light: shadows & plane mirrors',
      'Earth & the solar system',
    ],
    problem:
      'At 2:00 pm a vertical stick 1.2 m tall casts a 1.6 m shadow. At the same moment a flagpole casts a 12.0 m shadow. What is the true height of the flagpole?',
    answerHint:
      'Using similar triangles formed by parallel sunlight: height = (1.2 / 1.6) × 12.0 = 9.0 m.',
    tabRange: '5–6',
    tabLevel: 'Primary',
  },
  B: {
    name: 'Category B · Junior',
    tagline: 'Bridging basic kinematics, circuits, and reasoned equation solving',
    targetClasses: 'Classes 7–8 (junior secondary)',
    typicalAge: 'Age 12–14 years',
    examDuration: '2 hours',
    questionPattern: 'Analytical problem solving (step-by-step quantitative reasoning)',
    keySubjects: [
      '1-D kinematics (v–t graphs)',
      "Newton's laws & friction",
      'Work, energy & conversion',
      'Circuit basics (Ohm’s law)',
      "Fluids & Archimedes’ principle",
    ],
    problem:
      'A toy train accelerates uniformly from rest to 15 m/s in 5 s, travels at that speed for 10 s, then decelerates uniformly to rest in 3 s. What total distance does it cover?',
    answerHint:
      'Split into three parts: s1 = 0.5×5×15 = 37.5 m; s2 = 10×15 = 150 m; s3 = 0.5×3×15 = 22.5 m. Total = 210 m.',
    tabRange: '7–8',
    tabLevel: 'Junior',
  },
  C: {
    name: 'Category C · Secondary',
    tagline: 'Deep analysis of Newtonian mechanics, geometric optics, and thermodynamics',
    targetClasses: 'Classes 9–10 (SSC / O-Levels / IGCSE)',
    typicalAge: 'Age 14–16 years',
    examDuration: '2 hours 30 minutes',
    questionPattern: 'Multi-step olympiad problems (calculator allowed)',
    keySubjects: [
      'Projectile & circular motion',
      'Gravity & satellite speed',
      'Wave optics & lens systems',
      'Thermal cycles & calorimetry',
      'Electromagnetic force & DC networks',
    ],
    problem:
      'A particle is projected from an inclined plane of angle α at angle θ to the ground (θ > α) with speed v0. Find the time of flight until it returns to the incline.',
    answerHint:
      'Rotate axes along the incline: a_y = -g cos(α), u_y = v0 sin(θ − α). Setting y(t) = 0 gives t = (2 v0 sin(θ − α)) / (g cos(α)).',
    tabRange: '9–10',
    tabLevel: 'Secondary (SSC/O)',
  },
  D: {
    name: 'Category D · Higher Secondary',
    tagline: 'University-level mechanics, EM fields, relativity, and IPhO preparation',
    targetClasses: 'Classes 11–12 (HSC / A-Levels)',
    typicalAge: 'Age 16–19 years',
    examDuration: '3 hours',
    questionPattern: 'Advanced theory, differential solutions & error analysis',
    keySubjects: [
      'Rigid-body dynamics & angular momentum',
      'Coupled oscillations & normal modes',
      'Faraday’s law & RLC transients',
      'Special relativity (Lorentz transforms)',
      'Quantum phenomena & wave–particle duality',
    ],
    problem:
      'A uniform solid cylinder of mass M and radius R rolls without slipping on a horizontal platform that itself accelerates at constant a0. Find the friction force on the cylinder.',
    answerHint:
      'In the accelerating-platform inertial frame: fictitious force F_pseudo = M a0. Pure rolling yields friction f = (1/3) M a0.',
    tabRange: '11–12',
    tabLevel: 'Higher secondary (HSC/A)',
  },
};

export const CategoriesSection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
  const [activeCategory, setActiveCategory] = useState<'A' | 'B' | 'C' | 'D'>('C');
  const [revealedHints, setRevealedHints] = useState<{ [key: string]: boolean }>({});

  const toggleHint = (catId: string) => {
    setRevealedHints((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const selectedSpec = CATEGORIES_DATA.find((c) => c.id === activeCategory) || CATEGORIES_DATA[2];
  const en = CATEGORY_EN[selectedSpec.id];

  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>{text('একাডেমিক প্রতিযোগিতা স্তর', 'Academic competition tiers')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {text('চারটি প্রতিযোগিতা স্তর।', 'Four competition tiers.')} <br />
            <span className="text-blue-900">
              {text('একটি সমন্বিত পদার্থবিজ্ঞান চেতনা।', 'One unified physics mindset.')}
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {text(
              'প্রাথমিক স্কুলের পর্যবেক্ষণমূলক বিস্ময় থেকে শুরু করে বিশ্ববিদ্যালয় স্তরের ক্যালকুলাস নির্ভর গতিবিদ্যা—বিডিএফও সাজিয়েছে আপনার বয়সের উপযোগী অ্যাকাডেমিক ধাপ।',
              'From primary-school observational wonder to university-level calculus-based dynamics—BdPhO maps academic steps matched to your age.',
            )}
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {CATEGORIES_DATA.map((cat) => {
            const isActive = activeCategory === cat.id;
            const tab = CATEGORY_EN[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isActive
                    ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10 scale-[1.02]'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-extrabold font-mono ${isActive ? 'text-blue-600' : 'text-slate-800'}`}>
                    {text(`ক্যাটাগরি ${cat.id}`, `Category ${cat.id}`)}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {text(
                      cat.id === 'A' ? '৫ম–৬ষ্ঠ' : cat.id === 'B' ? '৭ম–৮ম' : cat.id === 'C' ? '৯ম–১০ম' : '১১শ–১২শ',
                      tab.tabRange,
                    )}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1 font-medium">
                  {text(
                    cat.id === 'A'
                      ? 'প্রাইমারি'
                      : cat.id === 'B'
                        ? 'জুনিয়র'
                        : cat.id === 'C'
                          ? 'সেকেন্ডারি (এসএসসি/ও)'
                          : 'উচ্চ মাধ্যমিক (এইচএসসি/এ)',
                    tab.tabLevel,
                  )}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Category Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 relative overflow-hidden shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Overview & Exam Format */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-2 bg-blue-50 text-blue-700 border border-blue-100">
                  {text(selectedSpec.targetClasses, en.targetClasses)} • {text(selectedSpec.typicalAge, en.typicalAge)}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {text(selectedSpec.name, en.name)}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {text(selectedSpec.tagline, en.tagline)}
                </p>
              </div>

              {/* Exam Specs Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold mb-1">
                    <Clock className="w-4 h-4" /> {text('পরীক্ষার সময়কাল', 'Exam duration')}
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {text(selectedSpec.examDuration, en.examDuration)}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold mb-1">
                    <HelpCircle className="w-4 h-4" /> {text('প্রশ্নকাঠামো ও প্রশ্নের ধরন', 'Question format')}
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {text(selectedSpec.questionPattern, en.questionPattern)}
                  </div>
                </div>
              </div>

              {/* Core Syllabus Pillars */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {text('মূল বৈজ্ঞানিক স্তম্ভসমূহ', 'Core scientific pillars')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSpec.keySubjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      {text(subject, en.keySubjects[idx] || subject)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/past-papers"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 transition shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  {text(
                    `ক্যাটাগরি ${selectedSpec.id} এর বিগত প্রশ্নপত্র`,
                    `Category ${selectedSpec.id} past papers`,
                  )}
                </Link>
                <a
                  href={selectedSpec.syllabusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition border border-slate-200"
                >
                  {text('সিলেবাস PDF ডাউনলোড ↗', 'Download syllabus PDF ↗')}
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Sample Olympiad Problem */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  {text('নমুনা অলিম্পিয়াড সমস্যা', 'Sample olympiad problem')}
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {text(`স্তর ${selectedSpec.id}`, `Level ${selectedSpec.id}`)}
                </span>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed font-sans">
                {text(selectedSpec.sampleQuestion.problem, en.problem)}
              </p>

              {/* Hint Accordion */}
              <div className="pt-2">
                <button
                  onClick={() => toggleHint(selectedSpec.id)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-blue-700 flex items-center justify-between transition shadow-2xs"
                >
                  <span>
                    {revealedHints[selectedSpec.id]
                      ? text('সমাধানের সূত্র লুকান', 'Hide solution hint')
                      : text('সমাধানের সূত্র ও পদ্ধতি দেখুন', 'Show solution hint & method')}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      revealedHints[selectedSpec.id] ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {revealedHints[selectedSpec.id] && (
                  <div className="mt-2.5 p-3.5 rounded-xl bg-blue-50/90 border border-blue-200 text-xs text-blue-900 leading-relaxed animate-fadeIn">
                    <strong className="block text-blue-800 mb-1">
                      {text('বিশ্লেষণাত্মক পদ্ধতি:', 'Analytical method:')}
                    </strong>
                    {text(selectedSpec.sampleQuestion.answerHint, en.answerHint)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
