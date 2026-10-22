'use client';

import React from 'react';
import { Cpu, Lightbulb, ShieldAlert, Award, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export const TechFairSection: React.FC = () => {
  const tracks = [
    {
      title: 'Physics Demonstration Apparatus',
      desc: 'Working hardware explaining fundamental physics phenomena: magnetic levitation, optical interferometry, acoustic resonance, or fluid dynamics.',
      tag: 'Hardware Track',
    },
    {
      title: 'Renewable Energy & Thermodynamics',
      desc: 'Inventions involving thermoelectric harvesting, solar concentration, wind vortices, and high-efficiency thermodynamic cycles.',
      tag: 'Green Tech Track',
    },
    {
      title: 'Electronic Sensor Instrumentation',
      desc: 'Automated data logging systems, low-cost spectrophotometers, astronomical trackers, and micro-controller sensor arrays.',
      tag: 'Instrumentation',
    },
    {
      title: 'Computational Physics & Simulations',
      desc: 'Original numerical simulations of planetary orbits, relativistic trajectories, and quantum potential well wave-packets.',
      tag: 'Software / Algorithmic',
    },
  ];

  const criteria = [
    { name: 'Scientific Validity & Accuracy', weight: '30%' },
    { name: 'Originality & Technical Innovation', weight: '30%' },
    { name: 'Hardware Functionality & Working Proof', weight: '20%' },
    { name: 'Defense, Clarity & Project Poster', weight: '20%' },
  ];

  return (
    <section id="tech-fair" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Applied Innovation & Hardware Exhibition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            BdPhO Technology & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
              Scientific Invention Fair.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Where theoretical physics transforms into tangible prototypes. Open to all registered students showcasing physical inventions and experimental demonstrators.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tracks.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3 inline-block">
                  {t.tag}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition mb-2">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Criteria & Guidelines Dual Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Judging Criteria */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" /> Official Evaluation Criteria
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              How Projects Are Judged
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Judged by university faculty from DU, BUET, and Bangladesh Academy of Sciences during the National Round exhibition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {criteria.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between"
                >
                  <span className="text-xs text-slate-300 font-medium">{c.name}</span>
                  <span className="text-xs font-bold text-cyan-400 font-mono">{c.weight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Submission Rules */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" /> Safety & Submission Protocol
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fair Regulations
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Individual or maximum 2-member teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>No open hazardous chemicals or unregulated high voltages (above 50V AC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Must include a printed A1 technical poster and brief report.</span>
                </li>
              </ul>
            </div>

            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-md shadow-cyan-500/20"
            >
              Submit Project Application ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
