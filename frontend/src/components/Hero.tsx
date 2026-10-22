'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, BookOpen, Trophy, Compass, ShieldCheck } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';
import { PhysicsSimulation } from './PhysicsSimulation';

interface HeroProps {
  onOpenAdmitModal: () => void;
  onOpenRegisterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmitModal, onOpenRegisterModal }) => {
  // Countdown to 17th National Round (target: March 15, 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 18,
  });

  useEffect(() => {
    // Dynamic countdown timer
    const targetDate = new Date('2026-03-15T09:00:00+06:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Interactive Physics Orbit Canvas Background */}
      <PhysicsSimulation />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] radial-glow-cyan pointer-events-none opacity-40 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] radial-glow-gold pointer-events-none opacity-30 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel bg-slate-900/80 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-lg shadow-sky-500/10 animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>17th National Edition • Affiliated with IPhO & APhO</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-amber-300 font-bold">2026 Season Active</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Discover the Laws That <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
            Shape the Universe.
          </span>
        </h1>

        {/* Hero Narrative Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          The official national platform of the{' '}
          <strong className="text-white font-semibold">Bangladesh Physics Olympiad</strong>.
          We identify, nurture, and train talented minds from Class 5 to Class 12, forging the next generation of researchers, innovators, and international medalists for the{' '}
          <span className="text-sky-300 font-medium">International Physics Olympiad (IPhO)</span>.
        </p>

        {/* Live Countdown Timer Card */}
        <div className="inline-block mb-10 p-4 sm:p-5 rounded-2xl glass-panel bg-slate-950/70 border border-white/10 shadow-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Countdown to 17th National Round Examination</span>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="block text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Days</span>
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="block text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Hours</span>
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="block text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Mins</span>
            </div>
            <div className="px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="block text-2xl sm:text-4xl font-extrabold text-amber-400 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Secs</span>
            </div>
          </div>
        </div>

        {/* Primary Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenRegisterModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group text-base"
          >
            <Sparkles className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
            <span>Register for 17th BdPhO</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#papers"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-sky-400/50 transition-all shadow-lg flex items-center justify-center gap-2 text-base"
          >
            <BookOpen className="w-5 h-5 text-sky-400" />
            <span>Explore Past Papers Archive</span>
          </a>

          <button
            onClick={onOpenAdmitModal}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sky-300 hover:text-white bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400 transition-all flex items-center justify-center gap-2 text-base"
          >
            <Download className="w-5 h-5 text-sky-400" />
            <span>Admit Card ↗</span>
          </button>
        </div>

        {/* National & Global Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-4 border-t border-white/10 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl glass-panel text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono">
              64
            </span>
            <span className="text-xs text-slate-400 font-medium">Districts Covered</span>
          </div>

          <div className="p-4 rounded-xl glass-panel text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">
              100,000+
            </span>
            <span className="text-xs text-slate-400 font-medium">Participants Trained</span>
          </div>

          <div className="p-4 rounded-xl glass-panel text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
              4 Categories
            </span>
            <span className="text-xs text-slate-400 font-medium">Class 5 to Class 12</span>
          </div>

          <div className="p-4 rounded-xl glass-panel text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              48+
            </span>
            <span className="text-xs text-slate-400 font-medium">IPhO & APhO Honors</span>
          </div>
        </div>
      </div>
    </section>
  );
};
