'use client';

import React from 'react';
import { Cpu, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';
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
    <section id="tech-fair" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>Applied Innovation & Hardware Exhibition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            BdPhO Technology & <br />
            <span className="bg-gradient-to-r from-cyan-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Scientific Invention Fair.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Where theoretical physics transforms into tangible prototypes. Open to all registered students showcasing physical inventions and experimental demonstrators.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tracks.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 mb-3 inline-block">
                  {t.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition mb-2">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Criteria & Guidelines Dual Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Judging Criteria */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-4">
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" /> Official Evaluation Criteria
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              How Projects Are Judged
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Judged by university faculty from DU, BUET, and Bangladesh Academy of Sciences during the National Round exhibition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {criteria.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                >
                  <span className="text-xs text-slate-700 font-medium">{c.name}</span>
                  <span className="text-xs font-bold text-cyan-700 font-mono">{c.weight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Submission Rules */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" /> Safety & Submission Protocol
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Fair Regulations
              </h3>
              <ul className="text-xs text-slate-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Individual or maximum 2-member teams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>No open hazardous chemicals or unregulated high voltages (above 50V AC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Must include a printed A1 technical poster and brief report.</span>
                </li>
              </ul>
            </div>

            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              Submit Project Application ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
