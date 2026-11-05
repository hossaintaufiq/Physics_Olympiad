'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnnouncementTicker } from '@/components/AnnouncementTicker';
import { ProblemOfTheWeek } from '@/components/ProblemOfTheWeek';
import { 
  ArrowRight, Download, BookOpen, Trophy, FileText, 
  ExternalLink, School
} from 'lucide-react';
import { BDPHO_METRICS, NOTICES, CATEGORIES_DATA } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

const NOTICE_CATEGORY_EN: Record<string, string> = {
  'প্রবেশপত্র': 'Admit Card',
  'সাধারণ': 'General',
  'আঞ্চলিক পর্ব': 'Regional Round',
  'নিবন্ধন': 'Registration',
  'ক্যাম্প ও আন্তর্জাতিক': 'Camp & International',
};

const NOTICE_DATE_EN: Record<string, string> = {
  '১৮ ফেব্রুয়ারি, ২০২৬': '18 February 2026',
  '১০ ফেব্রুয়ারি, ২০২৬': '10 February 2026',
  '২৮ জানুয়ারি, ২০২৬': '28 January 2026',
  '১৫ জানুয়ারি, ২০২৬': '15 January 2026',
  '২০ ডিসেম্বর, ২০২৫': '20 December 2025',
};

const NOTICE_TITLE_EN: Record<string, string> = {
  n1: 'Publication of admit cards for the 17th BdPhO Regional Round',
  n2: 'Bilingual question papers and priority of the Bangla version',
  n3: 'Calculator use and examination regulations',
  n4: 'Technology & scientific innovation exhibition',
  n5: 'Bangladesh’s achievements on the world stage',
};

const NOTICE_SUMMARY_EN: Record<string, string> = {
  n1: 'All registered students across the 16 regional clusters can now download their admit cards using their unique registration ID.',
  n2: 'Question papers for all categories (A, B, C, D) will be printed in both Bangla and English. If any theoretical ambiguity or terminology difference arises, the Bangla version shall be final.',
  n3: 'Non-programmable scientific calculators (e.g. fx-991ES Plus or equivalent) are permitted only for Categories C and D. Calculators are neither required nor allowed in Categories A and B.',
  n4: 'Young researchers from schools and colleges may showcase hardware prototypes and innovative physics projects. The top 15 projects will be exhibited at the national stage.',
  n5: 'Competing alongside 85 countries, all five members of Team Bangladesh earned bronze medals and honorable mentions in both the theoretical and practical examinations.',
};

const NOTICE_REF_EN: Record<string, string> = {
  'বিডিএফও/২০২৬/রেগ-০৪': 'BdPhO/2026/Reg-04',
  'বিডিএফও/২০২৬/একাড-০১': 'BdPhO/2026/Acad-01',
  'বিডিএফও/২০২৬/পরীক্ষা-০৩': 'BdPhO/2026/Exam-03',
  'বিডিএফও/২০২৬/টেক-০১': 'BdPhO/2026/Tech-01',
};

const CATEGORY_META: Record<
  string,
  { gradesBn: string; gradesEn: string; nameBn: string; nameEn: string; descBn: string; descEn: string; patternBn: string; patternEn: string }
> = {
  A: {
    gradesBn: '৫ম – ৬ষ্ঠ শ্রেণি',
    gradesEn: 'Classes 5 – 6',
    nameBn: 'প্রাইমারি / প্রাক-জুনিয়র',
    nameEn: 'Primary / Pre-Junior',
    descBn: 'ভৌত পরিমাপের কৌতূহল, সরল যন্ত্র, আলো ও ছায়ার ধর্ম এবং দৈনন্দিন প্রাকৃতিক নিয়মের সহজ বিশ্লেষণ।',
    descEn: 'Curiosity about physical measurement, simple machines, properties of light and shadow, and easy analysis of everyday natural laws.',
    patternBn: '২০টি বহুনির্বাচনী ও সংক্ষিপ্ত সংখ্যাগত প্রশ্ন',
    patternEn: '20 multiple-choice and short numerical questions',
  },
  B: {
    gradesBn: '৭ম – ৮ম শ্রেণি',
    gradesEn: 'Classes 7 – 8',
    nameBn: 'জুনিয়র সেকেন্ডারি',
    nameEn: 'Junior Secondary',
    descBn: 'বল ও গতি, প্রাথমিক বিদ্যুৎ ও বর্তনী, আলো ও তরঙ্গ এবং যুক্তিনির্ভর গাণিতিক অনুসন্ধান।',
    descEn: 'Force and motion, introductory electricity and circuits, light and waves, and reasoning-based mathematical inquiry.',
    patternBn: 'বিশ্লেষণাত্মক ও গাণিতিক সমস্যা',
    patternEn: 'Analytical and mathematical problems',
  },
  C: {
    gradesBn: '৯ম – ১০ম শ্রেণি',
    gradesEn: 'Classes 9 – 10',
    nameBn: 'সেকেন্ডারি (এসএসসি / ও-লেভেল)',
    nameEn: 'Secondary (SSC / O-Level)',
    descBn: 'নিউটনিয়ান বলবিদ্যা, তাপগতিবিদ্যা, জ্যামিতিক আলোকবিজ্ঞান ও উচ্চতর সমস্যা সমাধান।',
    descEn: 'Newtonian mechanics, thermodynamics, geometric optics, and advanced problem solving.',
    patternBn: 'বিশ্লেষণাত্মক ও গাণিতিক সমস্যা',
    patternEn: 'Analytical and mathematical problems',
  },
  D: {
    gradesBn: '১১শ – ১২শ শ্রেণি',
    gradesEn: 'Classes 11 – 12',
    nameBn: 'হায়ার সেকেন্ডারি (এইচএসসি / এ-লেভেল)',
    nameEn: 'Higher Secondary (HSC / A-Level)',
    descBn: 'ক্যালকুলাস-ভিত্তিক বলবিদ্যা, তড়িচ্চৌম্বকীয় তত্ত্ব, কোয়ান্টাম ভিত্তি ও আইপিএইচও প্রস্তুতি।',
    descEn: 'Calculus-based mechanics, electromagnetic theory, quantum foundations, and IPhO preparation.',
    patternBn: 'বিশ্লেষণাত্মক ও গাণিতিক সমস্যা',
    patternEn: 'Analytical and mathematical problems',
  },
};

export default function Home() {
  const { t, L } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 18,
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-15T09:00:00+06:00').getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pathwaySteps = [
    {
      stepLabel: L('ধাপ ০১', 'Step 01'),
      title: L('স্কুল ও অনলাইন নিবন্ধন', 'School & online registration'),
      desc: L('৬৪ জেলায় উন্মুক্ত রেজিস্ট্রেশন', 'Open registration across 64 districts'),
    },
    {
      stepLabel: L('ধাপ ০২', 'Step 02'),
      title: L('আঞ্চলিক পর্ব পরীক্ষা', 'Regional round exams'),
      desc: L('১৬টি আঞ্চলিক বিশ্ববিদ্যালয় ভেন্যু', '16 regional university venues'),
    },
    {
      stepLabel: L('ধাপ ০৩', 'Step 03'),
      title: L('জাতীয় ফাইনাল', 'National Final'),
      desc: L('কার্জন হলে ১,২০০ বিজয়ীর মহোৎসব', 'Celebration of 1,200 finalists at Curzon Hall'),
    },
    {
      stepLabel: L('ধাপ ০৪', 'Step 04'),
      title: L('নিবিড় প্রশিক্ষণ ক্যাম্প', 'Intensive training camp'),
      desc: L('বুয়েট ও ঢাবিতে ৩ সপ্তাহের ল্যাব', '3-week labs at BUET & DU'),
    },
    {
      stepLabel: L('ধাপ ০৫', 'Step 05'),
      title: L('চূড়ান্ত দল নির্বাচন', 'Final team selection'),
      desc: L('IPhO ও APhO বাছাই পরীক্ষা', 'IPhO & APhO selection exams'),
    },
    {
      stepLabel: L('ধাপ ০৬', 'Step 06'),
      title: L('বিশ্বমঞ্চের পোডিয়াম', 'World-stage podium'),
      desc: L('আন্তর্জাতিক অঙ্গনে পদক বিজয়', 'Medal wins on the international stage'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. Official Institutional Hero Header */}
        <section className="relative bg-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
          {/* Panoramic Physics Laboratory Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_bg.jpg"
              alt="Physics Quantum and Optics Research Laboratory"
              className="w-full h-full object-cover object-center opacity-85"
            />
            {/* Smooth directional white wash ensuring text on left is super sharp while lab lasers and blackboard are clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Official Declaration */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>{t.heroBadge}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.14]">
                  {t.heroTitle}
                </h1>

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                  {t.heroLead}
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={BDPHO_METRICS.officialPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-sm"
                  >
                    <span>{t.heroRegister}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                  </a>

                  <Link
                    href="/admit-card"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition border border-slate-300 shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-blue-700" />
                    <span>{t.heroAdmit}</span>
                  </Link>

                  <Link
                    href="/past-papers"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition border border-slate-300 shadow-2xs"
                  >
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <span>{t.heroArchive}</span>
                  </Link>
                </div>

                {/* Key Statistics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-950 font-mono">{t.statDistricts}</span>
                    <span className="text-[11px] text-slate-600 font-medium">{t.statDistrictsSub}</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-blue-700 font-mono">{t.statStudents}</span>
                    <span className="text-[11px] text-slate-600 font-medium">{t.statStudentsSub}</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-950 font-mono">{t.statCategories}</span>
                    <span className="text-[11px] text-slate-600 font-medium">{t.statCategoriesSub}</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-emerald-700 font-mono">{t.statMedals}</span>
                    <span className="text-[11px] text-slate-600 font-medium">{t.statMedalsSub}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Countdown Card & Handcrafted Seal */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-xs border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/50 space-y-5 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {L('১৭তম জাতীয় ফাইনালের সময়সূচি', '17th National Final schedule')}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      {L('১৫ মার্চ, ২০২৬', '15 March 2026')}
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        {L('দিন', 'Days')}
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        {L('ঘণ্টা', 'Hours')}
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        {L('মিনিট', 'Minutes')}
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 shadow-2xs">
                      <span className="block text-xl sm:text-3xl font-extrabold text-amber-700 font-mono">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-amber-800 uppercase">
                        {L('সেকেন্ড', 'Seconds')}
                      </span>
                    </div>
                  </div>

                  {/* Institutional Quick Portal Jump */}
                  <div className="space-y-2 pt-2">
                    <Link
                      href="/admit-card"
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 transition"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-blue-600" />
                        {L('প্রবেশপত্র ডাউনলোড পোর্টাল', 'Admit card download portal')}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    <Link
                      href="/login"
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 transition"
                    >
                      <span className="flex items-center gap-2">
                        <School className="w-4 h-4 text-indigo-600" />
                        {L('শিক্ষার্থী মার্কশিট ও ফলাফল পোর্টাল', 'Student marksheet & results portal')}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Moments of Academic & National Pride Gallery Preview */}
            <div className="mt-14 pt-10 border-t border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                    {L('জাতীয় উৎকর্ষের অগ্রযাত্রা', 'Journey of national excellence')}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    {L('শ্রেণিকক্ষ থেকে বিশ্বমঞ্চের দিগন্তে', 'From the classroom to the world stage')}
                  </h2>
                </div>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition group"
                >
                  <span>{L('পূর্ণাঙ্গ ফটো গ্যালারি দেখুন', 'View the full photo gallery')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Card 1: Large Featured - Optics Lab */}
                <div className="md:col-span-7 group relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src="/images/lab_optics.jpg"
                      alt="University of Dhaka and BUET Physics Lab Training"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
                      {L('জাতীয় পদার্থবিজ্ঞান ক্যাম্প', 'National Physics Camp')}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug mb-1 text-white">
                      {L(
                        'বিশ্ববিদ্যালয় গবেষণাগারে প্রায়োগিক আলোকবিজ্ঞান ও লেজার পরীক্ষা',
                        'Applied optics and laser experiments in university laboratories'
                      )}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2">
                      {L(
                        'জাতীয় পর্যায়ের শীর্ষ শিক্ষার্থীরা ঢাকা বিশ্ববিদ্যালয় ও বুয়েটের গবেষণাগারে আধুনিক অপটিক্যাল বেঞ্চ ও ইলেকট্রনিক ইন্টারফেরোমিটার ব্যবহারে উচ্চতর প্রশিক্ষণ লাভ করে।',
                        'Top national-level students receive advanced training on modern optical benches and electronic interferometers in the laboratories of the University of Dhaka and BUET.'
                      )}
                    </p>
                  </div>
                </div>

                {/* Right Column: 2 Stacked Cards */}
                <div className="md:col-span-5 flex flex-col gap-5">
                  {/* Card 2: Team Bangladesh at IPhO */}
                  <div className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md flex-1">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src="/images/ipho_delegation.jpg"
                        alt="Team Bangladesh at International Physics Olympiad"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-xs">
                        {L('বিশ্বমঞ্চে প্রতিনিধিত্ব', 'Representation on the world stage')}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold leading-tight text-white mb-0.5">
                        {L(
                          'আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডে (IPhO) বাংলাদেশ জাতীয় দল',
                          'Team Bangladesh at the International Physics Olympiad (IPhO)'
                        )}
                      </h3>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        {L(
                          '১৭ কোটি মানুষের স্বপ্ন বুকে নিয়ে বৈশ্বিক অলিম্পিক আসরে লাল-সবুজের প্রতিনিধিরা।',
                          'Bearing the dreams of 170 million people, the red-and-green representatives take the global Olympic stage.'
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Award Ceremony */}
                  <div className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md flex-1">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src="/images/award_ceremony.jpg"
                        alt="National Physics Olympiad Award Ceremony"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 backdrop-blur-xs">
                        {L('জাতীয় সম্মাননা', 'National honours')}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold leading-tight text-white mb-0.5">
                        {L(
                          'বার্ষিক জাতীয় ফাইনাল ও পদক বিতরণ অনুষ্ঠান',
                          'Annual National Final and medal ceremony'
                        )}
                      </h3>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        {L(
                          'অধ্যাপক ড. মুহম্মদ জাফর ইকবাল ও জাতীয় শিক্ষকমণ্ডলী বিজয়ীদের হাতে মেডেল তুলে দিচ্ছেন।',
                          'Professor Dr. Muhammed Zafar Iqbal and the national faculty present medals to the winners.'
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Urgent Announcements Ticker */}
        <AnnouncementTicker />

        {/* 3. Official Notices Spotlight Bar */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                  {L('অফিসিয়াল বুলেটিন', 'Official bulletin')}
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  {L('সর্বশেষ বিজ্ঞপ্তি ও প্রশাসনিক সার্কুলার', 'Latest notices & administrative circulars')}
                </h2>
              </div>
              <Link
                href="/notices"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 transition"
              >
                <span>{L('সকল অফিসিয়াল সার্কুলার দেখুন', 'View all official circulars')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {NOTICES.slice(0, 3).map((notice) => (
                <div
                  key={notice.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold border border-blue-100">
                        {L(notice.category, NOTICE_CATEGORY_EN[notice.category] ?? notice.category)}
                      </span>
                      <span>{L(notice.date, NOTICE_DATE_EN[notice.date] ?? notice.date)}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {L(
                        notice.banglaTitle || notice.title,
                        NOTICE_TITLE_EN[notice.id] ?? notice.title
                      )}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {L(notice.summary, NOTICE_SUMMARY_EN[notice.id] ?? notice.summary)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-400 font-mono">
                      {notice.officialRef
                        ? L(notice.officialRef, NOTICE_REF_EN[notice.officialRef] ?? notice.officialRef)
                        : L('জাতীয় সার্কুলার', 'National circular')}
                    </span>
                    <Link href="/notices" className="text-blue-700 font-bold hover:underline">
                      {L('সার্কুলার পড়ুন →', 'Read circular →')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Competition Categories Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                  {L('প্রতিযোগিতার কাঠামো', 'Competition structure')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {L(
                    'চারটি প্রতিযোগিতা ক্যাটাগরি (ক্যাটাগরি A, B, C, D)',
                    'Four competition categories (Categories A, B, C, D)'
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                  {L(
                    'প্রাথমিক বিদ্যালয়ের পর্যবেক্ষণমূলক আনন্দ ও কৌতূহল থেকে শুরু করে উচ্চমাধ্যমিকের ক্যালকুলাস-ভিত্তিক কঠিন বিশ্লেষণ—শিক্ষার্থীদের মেধার গভীরতা বিকাশে স্তরভিত্তিক প্রশ্ন বিন্যাস।',
                    'From primary-school observational wonder and curiosity to calculus-based analysis at higher secondary—a tiered question design that deepens students’ talent.'
                  )}
                </p>
              </div>

              <Link
                href="/categories"
                className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition shrink-0 inline-flex items-center gap-1 border border-blue-200"
              >
                <span>{L('ক্যাটাগরি নির্দেশিকা ও নমুনা প্রশ্ন', 'Category guide & sample questions')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CATEGORIES_DATA.map((cat) => {
                const meta = CATEGORY_META[cat.id];
                const durationEn =
                  cat.examDuration === '1 Hour 30 Minutes' || cat.examDuration === '১ ঘণ্টা ৩০ মিনিট'
                    ? '1 hour 30 minutes'
                    : cat.examDuration === '2 Hours' || cat.examDuration === '২ ঘণ্টা'
                    ? '2 hours'
                    : '2 hours 30 minutes';
                const durationBn =
                  cat.examDuration === '1 Hour 30 Minutes' || cat.examDuration === '১ ঘণ্টা ৩০ মিনিট'
                    ? '১ ঘণ্টা ৩০ মিনিট'
                    : cat.examDuration === '2 Hours' || cat.examDuration === '২ ঘণ্টা'
                    ? '২ ঘণ্টা'
                    : '২ ঘণ্টা ৩০ মিনিট';

                return (
                  <div
                    key={cat.id}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-extrabold text-blue-700 font-mono">
                          {L(`ক্যাটাগরি ${cat.id}`, `Category ${cat.id}`)}
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {L(meta.gradesBn, meta.gradesEn)}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900">
                        {L(meta.nameBn, meta.nameEn)}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {L(meta.descBn, meta.descEn)}
                      </p>

                      <div className="text-[11px] text-slate-500 pt-2 space-y-1 border-t border-slate-100">
                        <div>
                          <strong className="text-slate-700">{L('সময়সীমা:', 'Duration:')}</strong>{' '}
                          {L(durationBn, durationEn)}
                        </div>
                        <div>
                          <strong className="text-slate-700">{L('প্রশ্নপদ্ধতি:', 'Question format:')}</strong>{' '}
                          {L(meta.patternBn, meta.patternEn)}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-3 border-t border-slate-100">
                      <Link
                        href="/categories"
                        className="text-xs font-bold text-blue-700 hover:text-blue-800 transition flex items-center justify-between"
                      >
                        <span>
                          {L(`ক্যাটাগরি ${cat.id} বিস্তারিত দেখুন`, `View Category ${cat.id} details`)}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Olympic Pathway: The 6 Stages to IPhO */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                  {L('অলিম্পিয়াড পরিক্রমা', 'Olympiad pathway')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {L(
                    'একজন শিক্ষার্থী যেভাবে আন্তর্জাতিক অলিম্পিয়াডে পৌঁছায়',
                    'How a student reaches the International Olympiad'
                  )}
                </h2>
              </div>
              <Link
                href="/about"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1"
              >
                <span>{L('ইতিহাস ও গভর্ন্যান্স জানুন', 'Learn our history & governance')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {pathwaySteps.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="text-xs font-mono font-bold text-blue-700">{s.stepLabel}</div>
                  <div className="text-xs font-bold text-slate-900">{s.title}</div>
                  <div className="text-[11px] text-slate-500 leading-tight">{s.desc}</div>
                </div>
              ))}
            </div>

            {/* National Exam Hall Feature Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 mt-6">
              <div className="relative aspect-[21/9] sm:aspect-[24/8] overflow-hidden">
                <img
                  src="/images/national_exam_hall.jpg"
                  alt="National Examination Hall at Curzon Hall"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent" />
              </div>
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center max-w-2xl text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-xs w-max">
                  {L('ধাপ ০৩ • জাতীয় ফাইনালের রোমাঞ্চ', 'Step 03 • Thrill of the National Final')}
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  {L(
                    'যেখানে দেশের সেরা ১,২০০ তরুণ পদার্থবিজ্ঞানীর মিলনমেলা বসে',
                    'Where the nation’s top 1,200 young physicists gather'
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-4 max-w-xl">
                  {L(
                    'প্রতি বছর ৬৪ জেলার আঞ্চলিক বিজয়ীরা ঢাকা বিশ্ববিদ্যালয়ের কার্জন হলে ৩ ঘণ্টার তাত্ত্বিক পরীক্ষায় অবতীর্ণ হয়—যা তাদের চিন্তার মৌলিকতা, গাণিতিক নৈপুণ্য ও যুক্তিবোধ পরীক্ষা করে।',
                    'Every year regional winners from 64 districts sit a 3-hour theory exam at Curzon Hall, University of Dhaka—testing originality of thought, mathematical skill, and reasoned judgment.'
                  )}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/past-papers"
                    className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition shadow-sm"
                  >
                    {L('জাতীয় প্রশ্নপত্র দেখুন ↗', 'View national papers ↗')}
                  </Link>
                  <Link
                    href="/gallery"
                    className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur-xs transition"
                  >
                    {L('অনুষ্ঠানের ফটো গ্যালারি', 'Event photo gallery')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Problem of the Week Challenge */}
        <ProblemOfTheWeek />

        {/* 7. Institutional Quick Links Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/past-papers"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
            >
              <FileText className="w-6 h-6 text-blue-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition flex items-center justify-between">
                <span>{L('বিগত প্রশ্ন ও মডেল সমাধান', 'Past papers & model solutions')}</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {L(
                  '১ম থেকে ১৬তম আসরের আঞ্চলিক ও জাতীয় পরীক্ষার প্রশ্নপত্র এবং অনুমোদিত সমাধান ডাউনলোড করুন।',
                  'Download regional and national exam papers and approved solutions from the 1st through 16th editions.'
                )}
              </p>
            </Link>

            <Link
              href="/syllabus"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
            >
              <BookOpen className="w-6 h-6 text-purple-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition flex items-center justify-between">
                <span>{L('অফিসিয়াল সিলেবাস নির্দেশিকা', 'Official syllabus guide')}</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {L(
                  'আন্তর্জাতিক মানসম্পন্ন টপিক বিন্যাস, সমীকরণ ও সহায়ক আন্তর্জাতিক পাঠ্যবই তালিকা পর্যালোচনা করুন।',
                  'Review the internationally aligned topic map, equations, and recommended international textbooks.'
                )}
              </p>
            </Link>

            <Link
              href="/results"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
            >
              <Trophy className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition flex items-center justify-between">
                <span>{L('আন্তর্জাতিক হল অব ফেম', 'International Hall of Fame')}</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {L(
                  'টোকিও, ইস্পাহান, লিসবন ও জুরিখের পোডিয়ামে দেশের পতাকা ওড়ানো পদকজয়ী তরুণদের পরিচিতি।',
                  'Meet the medalists who raised the national flag on podiums in Tokyo, Isfahan, Lisbon, and Zurich.'
                )}
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
