'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Sparkles, BookOpen, Compass } from 'lucide-react';
import { PhysicsSimulation } from './PhysicsSimulation';

interface HeroProps {
  onOpenAdmitModal: () => void;
  onOpenRegisterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmitModal, onOpenRegisterModal }) => {
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
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Clearly Visible Panoramic Hero Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_bg.jpg"
          alt="Physics Quantum and Optics Research Laboratory"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
      </div>

      {/* Light Physics Orbit Canvas */}
      <PhysicsSimulation />

      {/* Atmospheric Soft Radials */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] radial-glow-cyan pointer-events-none opacity-60 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] radial-glow-gold pointer-events-none opacity-40 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>17th National Edition • Affiliated with IPhO & APhO</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="hidden sm:inline text-amber-600 font-bold">2026 Season Active</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
          Discover the Laws That <br className="hidden sm:inline" />
          <span className="vibrant-gradient-text">
            Shape the Universe.
          </span>
        </h1>

        {/* Hero Narrative Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
          The official national platform of the{' '}
          <strong className="text-slate-900 font-semibold">Bangladesh Physics Olympiad</strong>.
          We identify, nurture, and train talented minds from Class 5 to Class 12, forging the next generation of researchers, innovators, and international medalists for the{' '}
          <span className="text-blue-600 font-medium">International Physics Olympiad (IPhO)</span>.
        </p>

        {/* Live Countdown Timer Card */}
        <div className="inline-block mb-10 p-5 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Countdown to 17th National Round Examination</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="block text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-semibold">Days</span>
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="block text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-semibold">Hours</span>
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="block text-2xl sm:text-4xl font-extrabold text-blue-600 font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-semibold">Mins</span>
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="block text-2xl sm:text-4xl font-extrabold text-amber-600 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 uppercase font-semibold">Secs</span>
            </div>
          </div>
        </div>

        {/* Primary Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenRegisterModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group text-base"
          >
            <Sparkles className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>Register for 17th BdPhO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            href="/past-papers"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 transition-all shadow-sm flex items-center justify-center gap-2 text-base"
          >
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Explore Past Papers Archive</span>
          </Link>

          <Link
            href="/admit-card"
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center justify-center gap-2 text-base"
          >
            <Download className="w-5 h-5 text-blue-600" />
            <span>Admit Card ↗</span>
          </Link>
        </div>

        {/* National & Global Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-6 border-t border-slate-200 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
              64
            </span>
            <span className="text-xs text-slate-500 font-medium">Districts Covered</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono">
              100,000+
            </span>
            <span className="text-xs text-slate-500 font-medium">Participants Trained</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-600 font-mono">
              4 Categories
            </span>
            <span className="text-xs text-slate-500 font-medium">Class 5 to Class 12</span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">
              48+
            </span>
            <span className="text-xs text-slate-500 font-medium">IPhO & APhO Honors</span>
          </div>
        </div>
      </div>
    </section>
  );
};
