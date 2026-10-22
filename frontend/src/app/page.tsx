'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnnouncementTicker } from '@/components/AnnouncementTicker';
import { ProblemOfTheWeek } from '@/components/ProblemOfTheWeek';
import { BdphoLogo } from '@/components/BdphoLogo';
import { 
  ArrowRight, Download, BookOpen, Trophy, FileText, 
  ExternalLink, Compass, ShieldCheck, CheckCircle2, School, 
  Calendar, Layers, Cpu, Award 
} from 'lucide-react';
import { BDPHO_METRICS, NOTICES, CATEGORIES_DATA } from '@/data/bdphoData';

export default function Home() {
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
                  <span>অফিসিয়াল জাতীয় প্ল্যাটফর্ম • ১৭তম আসর ২০২৬</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.14]">
                  বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড
                </h1>

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                  আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (<strong className="text-slate-950 font-semibold">IPhO</strong>) এবং এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (<strong className="text-slate-950 font-semibold">APhO</strong>)-এ বাংলাদেশের প্রতিনিধি নির্বাচন ও নিবিড় প্রশিক্ষণের জাতীয় একাডেমি। দেশের ৬৪ জেলার ৫ম থেকে ১২শ শ্রেণির তরুণ বিজ্ঞানীদের মেধা বিকাশের উন্মুক্ত মঞ্চ।
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={BDPHO_METRICS.officialPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-sm"
                  >
                    <span>অনলাইন নিবন্ধন ২০২৬</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                  </a>

                  <Link
                    href="/admit-card"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition border border-slate-300 shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-blue-700" />
                    <span>প্রবেশপত্র ডাউনলোড</span>
                  </Link>

                  <Link
                    href="/past-papers"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition border border-slate-300 shadow-2xs"
                  >
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <span>বিগত প্রশ্ন আর্কাইভ</span>
                  </Link>
                </div>

                {/* Key Statistics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-950 font-mono">৬৪ জেলা</span>
                    <span className="text-[11px] text-slate-600 font-medium">দেশব্যাপী আঞ্চলিক পর্ব</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-blue-700 font-mono">১ লাখ+</span>
                    <span className="text-[11px] text-slate-600 font-medium">অংশগ্রহণকারী শিক্ষার্থী</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-950 font-mono">৪ ক্যাটাগরি</span>
                    <span className="text-[11px] text-slate-600 font-medium">৫ম থেকে ১২শ শ্রেণি</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-emerald-700 font-mono">৪৮+ পদক</span>
                    <span className="text-[11px] text-slate-600 font-medium">আন্তর্জাতিক সম্মাননা</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Countdown Card & Handcrafted Seal */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-xs border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/50 space-y-5 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      ১৭তম জাতীয় ফাইনালের সময়সূচি
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      ১৫ মার্চ, ২০২৬
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">দিন</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">ঘণ্টা</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">মিনিট</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 shadow-2xs">
                      <span className="block text-xl sm:text-3xl font-extrabold text-amber-700 font-mono">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-amber-800 uppercase">সেকেন্ড</span>
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
                        প্রবেশপত্র ডাউনলোড পোর্টাল
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    <Link
                      href="/login"
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 transition"
                    >
                      <span className="flex items-center gap-2">
                        <School className="w-4 h-4 text-indigo-600" />
                        শিক্ষার্থী মার্কশিট ও ফলাফল পোর্টাল
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
                    জাতীয় উৎকর্ষের অগ্রযাত্রা
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    শ্রেণিকক্ষ থেকে বিশ্বমঞ্চের দিগন্তে
                  </h2>
                </div>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition group"
                >
                  <span>পূর্ণাঙ্গ ফটো গ্যালারি দেখুন</span>
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
                      জাতীয় পদার্থবিজ্ঞান ক্যাম্প
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug mb-1 text-white">
                      বিশ্ববিদ্যালয় গবেষণাগারে প্রায়োগিক আলোকবিজ্ঞান ও লেজার পরীক্ষা
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2">
                      জাতীয় পর্যায়ের শীর্ষ শিক্ষার্থীরা ঢাকা বিশ্ববিদ্যালয় ও বুয়েটের গবেষণাগারে আধুনিক অপটিক্যাল বেঞ্চ ও ইলেকট্রনিক ইন্টারফেরোমিটার ব্যবহারে উচ্চতর প্রশিক্ষণ লাভ করে।
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
                        বিশ্বমঞ্চে প্রতিনিধিত্ব
                      </span>
                      <h3 className="text-sm sm:text-base font-bold leading-tight text-white mb-0.5">
                        আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডে (IPhO) বাংলাদেশ জাতীয় দল
                      </h3>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        ১৭ কোটি মানুষের স্বপ্ন বুকে নিয়ে বৈশ্বিক অলিম্পিক আসরে লাল-সবুজের প্রতিনিধিরা।
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
                        জাতীয় সম্মাননা
                      </span>
                      <h3 className="text-sm sm:text-base font-bold leading-tight text-white mb-0.5">
                        বার্ষিক জাতীয় ফাইনাল ও পদক বিতরণ অনুষ্ঠান
                      </h3>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        অধ্যাপক ড. মুহম্মদ জাফর ইকবাল ও জাতীয় শিক্ষকমণ্ডলী বিজয়ীদের হাতে মেডেল তুলে দিচ্ছেন।
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
                  অফিসিয়াল বুলেটিন
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  সর্বশেষ বিজ্ঞপ্তি ও প্রশাসনিক সার্কুলার
                </h2>
              </div>
              <Link
                href="/notices"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 transition"
              >
                <span>সকল অফিসিয়াল সার্কুলার দেখুন</span>
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
                        {notice.category}
                      </span>
                      <span>{notice.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {notice.banglaTitle || notice.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {notice.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-400 font-mono">{notice.officialRef || 'জাতীয় সার্কুলার'}</span>
                    <Link href="/notices" className="text-blue-700 font-bold hover:underline">
                      সার্কুলার পড়ুন →
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
                  প্রতিযোগিতার কাঠামো
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  চারটি প্রতিযোগিতা ক্যাটাগরি (ক্যাটাগরি A, B, C, D)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                  প্রাথমিক বিদ্যালয়ের পর্যবেক্ষণমূলক আনন্দ ও কৌতূহল থেকে শুরু করে উচ্চমাধ্যমিকের ক্যালকুলাস-ভিত্তিক কঠিন বিশ্লেষণ—শিক্ষার্থীদের মেধার গভীরতা বিকাশে স্তরভিত্তিক প্রশ্ন বিন্যাস।
                </p>
              </div>

              <Link
                href="/categories"
                className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition shrink-0 inline-flex items-center gap-1 border border-blue-200"
              >
                <span>ক্যাটাগরি নির্দেশিকা ও নমুনা প্রশ্ন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CATEGORIES_DATA.map((cat) => (
                <div
                  key={cat.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between shadow-xs group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-blue-700 font-mono">
                        ক্যাটাগরি {cat.id}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {cat.id === 'A' ? '৫ম – ৬ষ্ঠ শ্রেণি' : cat.id === 'B' ? '৭ম – ৮ম শ্রেণি' : cat.id === 'C' ? '৯ম – ১০ম শ্রেণি' : '১১শ – ১২শ শ্রেণি'}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900">
                      {cat.id === 'A' ? 'প্রাইমারি / প্রাক-জুনিয়র' : cat.id === 'B' ? 'জুনিয়র সেকেন্ডারি' : cat.id === 'C' ? 'সেকেন্ডারি (এসএসসি / ও-লেভেল)' : 'হায়ার সেকেন্ডারি (এইচএসসি / এ-লেভেল)'}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {cat.id === 'A'
                        ? 'ভৌত পরিমাপের কৌতূহল, সরল যন্ত্র, আলো ও ছায়ার ধর্ম এবং দৈনন্দিন প্রাকৃতিক নিয়মের সহজ বিশ্লেষণ।'
                        : cat.id === 'B'
                        ? 'বল ও গতি, প্রাথমিক বিদ্যুৎ ও বর্তনী, আলো ও তরঙ্গ এবং যুক্তিনির্ভর গাণিতিক অনুসন্ধান।'
                        : cat.id === 'C'
                        ? 'নিউটনিয়ান বলবিদ্যা, তাপগতিবিদ্যা, জ্যামিতিক আলোকবিজ্ঞান ও উচ্চতর সমস্যা সমাধান।'
                        : 'ক্যালকুলাস-ভিত্তিক বলবিদ্যা, তড়িচ্চৌম্বকীয় তত্ত্ব, কোয়ান্টাম ভিত্তি ও আইপিএইচও প্রস্তুতি।'}
                    </p>

                    <div className="text-[11px] text-slate-500 pt-2 space-y-1 border-t border-slate-100">
                      <div><strong className="text-slate-700">সময়সীমা:</strong> {cat.examDuration === '1 Hour 30 Minutes' ? '১ ঘণ্টা ৩০ মিনিট' : cat.examDuration === '2 Hours' ? '২ ঘণ্টা' : '২ ঘণ্টা ৩০ মিনিট'}</div>
                      <div><strong className="text-slate-700">প্রশ্নপদ্ধতি:</strong> {cat.id === 'A' ? '২০টি বহুনির্বাচনী ও সংক্ষিপ্ত সংখ্যাগত প্রশ্ন' : 'বিশ্লেষণাত্মক ও গাণিতিক সমস্যা'}</div>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100">
                    <Link
                      href="/categories"
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 transition flex items-center justify-between"
                    >
                      <span>ক্যাটাগরি {cat.id} বিস্তারিত দেখুন</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Olympic Pathway: The 6 Stages to IPhO */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                  অলিম্পিয়াড পরিক্রমা
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  একজন শিক্ষার্থী যেভাবে আন্তর্জাতিক অলিম্পিয়াডে পৌঁছায়
                </h2>
              </div>
              <Link
                href="/about"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1"
              >
                <span>ইতিহাস ও গভর্ন্যান্স জানুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {[
                { step: '০১', title: 'স্কুল ও অনলাইন নিবন্ধন', desc: '৬৪ জেলায় উন্মুক্ত রেজিস্ট্রেশন' },
                { step: '০২', title: 'আঞ্চলিক পর্ব পরীক্ষা', desc: '১৬টি আঞ্চলিক বিশ্ববিদ্যালয় ভেন্যু' },
                { step: '০৩', title: 'জাতীয় ফাইনাল', desc: 'কার্জন হলে ১,২০০ বিজয়ীর মহোৎসব' },
                { step: '০৪', title: 'নিবিড় প্রশিক্ষণ ক্যাম্প', desc: 'বুয়েট ও ঢাবিতে ৩ সপ্তাহের ল্যাব' },
                { step: '০৫', title: 'চূড়ান্ত দল নির্বাচন', desc: 'IPhO ও APhO বাছাই পরীক্ষা' },
                { step: '০৬', title: 'বিশ্বমঞ্চের পোডিয়াম', desc: 'আন্তর্জাতিক অঙ্গনে পদক বিজয়' },
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="text-xs font-mono font-bold text-blue-700">ধাপ {s.step}</div>
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
                  ধাপ ০৩ • জাতীয় ফাইনালের রোমাঞ্চ
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  যেখানে দেশের সেরা ১,২০০ তরুণ পদার্থবিজ্ঞানীর মিলনমেলা বসে
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-4 max-w-xl">
                  প্রতি বছর ৬৪ জেলার আঞ্চলিক বিজয়ীরা ঢাকা বিশ্ববিদ্যালয়ের কার্জন হলে ৩ ঘণ্টার তাত্ত্বিক পরীক্ষায় অবতীর্ণ হয়—যা তাদের চিন্তার মৌলিকতা, গাণিতিক নৈপুণ্য ও যুক্তিবোধ পরীক্ষা করে।
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/past-papers"
                    className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition shadow-sm"
                  >
                    জাতীয় প্রশ্নপত্র দেখুন ↗
                  </Link>
                  <Link
                    href="/gallery"
                    className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur-xs transition"
                  >
                    অনুষ্ঠানের ফটো গ্যালারি
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
                <span>বিগত প্রশ্ন ও মডেল সমাধান</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                ১ম থেকে ১৬তম আসরের আঞ্চলিক ও জাতীয় পরীক্ষার প্রশ্নপত্র এবং অনুমোদিত সমাধান ডাউনলোড করুন।
              </p>
            </Link>

            <Link
              href="/syllabus"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
            >
              <BookOpen className="w-6 h-6 text-purple-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition flex items-center justify-between">
                <span>অফিসিয়াল সিলেবাস নির্দেশিকা</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                আন্তর্জাতিক মানসম্পন্ন টপিক বিন্যাস, সমীকরণ ও সহায়ক আন্তর্জাতিক পাঠ্যবই তালিকা পর্যালোচনা করুন।
              </p>
            </Link>

            <Link
              href="/results"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
            >
              <Trophy className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition flex items-center justify-between">
                <span>আন্তর্জাতিক হল অব ফেম</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                টোকিও, ইস্পাহান, লিসবন ও জুরিখের পোডিয়ামে দেশের পতাকা ওড়ানো পদকজয়ী তরুণদের পরিচিতি।
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
