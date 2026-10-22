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
                  <span>Official National Academic Platform • 17th Edition 2026</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.14]">
                  Bangladesh Physics Olympiad
                </h1>

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                  The official national competition selecting and training Bangladesh delegates for the{' '}
                  <strong className="text-slate-950 font-semibold">International Physics Olympiad (IPhO)</strong> and{' '}
                  <strong className="text-slate-950 font-semibold">Asian Physics Olympiad (APhO)</strong>. Empowering young scientists from Class 5 to Class 12 across all 64 districts.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={BDPHO_METRICS.officialPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-sm"
                  >
                    <span>Online Registration 2026</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                  </a>

                  <Link
                    href="/admit-card"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition border border-slate-300 shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-blue-700" />
                    <span>Download Admit Card</span>
                  </Link>

                  <Link
                    href="/past-papers"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition border border-slate-300 shadow-2xs"
                  >
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <span>Past Papers Archive</span>
                  </Link>
                </div>

                {/* Key Statistics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-950 font-mono">64</span>
                    <span className="text-[11px] text-slate-600 font-medium">Districts Covered</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-blue-700 font-mono">100k+</span>
                    <span className="text-[11px] text-slate-600 font-medium">Annual Students</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-slate-950 font-mono">4 Tiers</span>
                    <span className="text-[11px] text-slate-600 font-medium">Class 5 to 12</span>
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-extrabold text-emerald-700 font-mono">48+</span>
                    <span className="text-[11px] text-slate-600 font-medium">IPhO/APhO Honors</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Countdown Card & Handcrafted Seal */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-xs border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-200/50 space-y-5 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      17th National Finals Schedule
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                      March 15, 2026
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Days</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Hours</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <span className="block text-xl sm:text-3xl font-extrabold text-blue-700 font-mono">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Mins</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 shadow-2xs">
                      <span className="block text-xl sm:text-3xl font-extrabold text-amber-700 font-mono">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold text-amber-800 uppercase">Secs</span>
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
                        Admit Card Download Portal
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    <Link
                      href="/login"
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800 transition"
                    >
                      <span className="flex items-center gap-2">
                        <School className="w-4 h-4 text-indigo-600" />
                        Official Student Marksheet Portal
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
                    National Excellence In Action
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    From Classrooms to the World Stage
                  </h2>
                </div>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition group"
                >
                  <span>Browse Full Photo Wall</span>
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
                      National Physics Training Camp
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold leading-snug mb-1 text-white">
                      Experimental Optics & Laser Refraction at University Laboratories
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2">
                      Top national qualifiers undergo rigorous experimental training on precision optical benches and advanced electronic interferometers under university faculty supervision.
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
                        Global Representation
                      </span>
                      <h3 className="text-sm sm:text-base font-bold leading-tight text-white mb-0.5">
                        Team Bangladesh at the International Physics Olympiad (IPhO)
                      </h3>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        Representing 170 million citizens on international Olympic podiums worldwide.
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
                        National Recognition
                      </span>
                      <h3 className="text-sm sm:text-base font-bold leading-tight text-white mb-0.5">
                        Annual National Finals & Gold Medal Conferment
                      </h3>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        Prof. Dr. Muhammed Zafar Iqbal and academic leaders honoring national champions.
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
                  Official Bulletin
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Current Circulars & Academic Directives
                </h2>
              </div>
              <Link
                href="/notices"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 transition"
              >
                <span>View All Official Circulars</span>
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
                      {notice.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {notice.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-400 font-mono">{notice.officialRef || 'National'}</span>
                    <Link href="/notices" className="text-blue-700 font-bold hover:underline">
                      Read Circular →
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
                  Competition Structure
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Four Competition Categories (A, B, C, D)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                  Calibrated precisely by school grade, from observational and descriptive science in primary school to rigorous calculus-based derivations in higher secondary.
                </p>
              </div>

              <Link
                href="/categories"
                className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition shrink-0 inline-flex items-center gap-1 border border-blue-200"
              >
                <span>Category Guidelines & Sample Problems</span>
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
                        Category {cat.id}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {cat.id === 'A' ? 'Classes 5-6' : cat.id === 'B' ? 'Classes 7-8' : cat.id === 'C' ? 'Classes 9-10' : 'Classes 11-12'}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900">
                      {cat.name.split('·')[1]}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {cat.tagline}
                    </p>

                    <div className="text-[11px] text-slate-500 pt-2 space-y-1 border-t border-slate-100">
                      <div><strong className="text-slate-700">Duration:</strong> {cat.examDuration}</div>
                      <div><strong className="text-slate-700">Pattern:</strong> {cat.questionPattern.split('(')[0]}</div>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100">
                    <Link
                      href="/categories"
                      className="text-xs font-bold text-blue-700 hover:text-blue-800 transition flex items-center justify-between"
                    >
                      <span>Explore Category {cat.id}</span>
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
                  The Olympic Pathway
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  How a Student Reaches the International Physics Olympiad
                </h2>
              </div>
              <Link
                href="/about"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1"
              >
                <span>Read Full History & Governance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {[
                { step: '01', title: 'School Registration', desc: 'Online signup across 64 districts' },
                { step: '02', title: 'Regional Round', desc: '16 Regional university clusters' },
                { step: '03', title: 'National Finals', desc: '1,200 qualifiers at Curzon Hall DU' },
                { step: '04', title: 'Training Camp', desc: '3-week intensive BUET theory & lab' },
                { step: '05', title: 'Selection Tests', desc: 'IPhO & APhO qualification exams' },
                { step: '06', title: 'World Stage', desc: 'Representing Bangladesh globally' },
              ].map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <div className="text-xs font-mono font-bold text-blue-700">Stage {s.step}</div>
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
                  Stage 03 • National Finals Atmosphere
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
                  Where 1,200 of the Nation&apos;s Best Young Physicists Meet
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-4 max-w-xl">
                  Every year, regional qualifiers from 64 districts gather in Dhaka for the official 3-hour theoretical competition, testing problem-solving elegance, physical insight, and calculus rigor.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/past-papers"
                    className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition shadow-sm"
                  >
                    View National Question Papers ↗
                  </Link>
                  <Link
                    href="/gallery"
                    className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur-xs transition"
                  >
                    See Event Photo Gallery
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
                <span>Past Question Papers</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Filter past examination question sets from the 1st through 16th editions with verified solutions.
              </p>
            </Link>

            <Link
              href="/syllabus"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
            >
              <BookOpen className="w-6 h-6 text-purple-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition flex items-center justify-between">
                <span>Official Olympiad Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Explore topic boundaries, governing equations, and international reading lists for all tiers.
              </p>
            </Link>

            <Link
              href="/results"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition group"
            >
              <Trophy className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition flex items-center justify-between">
                <span>International Hall of Fame</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Meet Bangladesh’s bronze and silver medalists from IPhO Tokyo, Isfahan, Lisbon, and Zurich.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
