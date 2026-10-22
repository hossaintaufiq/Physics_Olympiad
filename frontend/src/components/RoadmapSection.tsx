'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, Award, Flag, ChevronRight, School, Globe, Microscope, BookOpen } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'School Registration & Category Selection',
      subtitle: 'Open to Class 5 through Class 12 nationwide',
      icon: School,
      color: 'text-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      description:
        'Students register independently or via their educational institutions. Choose your category (A, B, C, or D) based on your current school class. Access official past papers and study the syllabus guidelines.',
      keyMilestones: [
        'Select Category (A: 5-6, B: 7-8, C: 9-10, D: 11-12)',
        'Receive unique Registration ID and verify student credentials',
        'Download Admit Card before the Regional Round date',
      ],
    },
    {
      step: '02',
      title: 'Regional Round Festivals',
      subtitle: '16 Regional Hubs across 64 Districts',
      icon: Compass,
      color: 'text-cyan-600',
      borderColor: 'border-cyan-200',
      bgColor: 'bg-cyan-50',
      description:
        'Conducted simultaneously at leading universities across Bangladesh (Dhaka, Chittagong, Rajshahi, Khulna, Sylhet, Barisal, Rangpur, Mymensingh, etc.). Includes physics problem solving, science shows, and Q&A sessions with professors.',
      keyMilestones: [
        'Written problem-solving test (90 to 180 mins depending on category)',
        'Bilingual papers with Bengali and English text',
        'Top ~15% qualifiers advance to the National Round in Dhaka',
      ],
    },
    {
      step: '03',
      title: 'National Finals in Dhaka',
      subtitle: 'Curzon Hall, University of Dhaka & BUET',
      icon: BookOpen,
      color: 'text-amber-600',
      borderColor: 'border-amber-200',
      bgColor: 'bg-amber-50',
      description:
        'Over 1,200 of the nation’s sharpest young problem solvers assemble for the high-stakes National Examination. The problems test profound conceptual depth, mathematical creativity, and dimensional analysis.',
      keyMilestones: [
        'National theoretical examination under Bas-academic guidelines',
        'Technology Fair project presentations and judging',
        'National closing ceremony, crests, certificates, and book prizes',
      ],
    },
    {
      step: '04',
      title: 'National Physics Training Camp',
      subtitle: 'Residential intensive theory & laboratory experiments',
      icon: Microscope,
      color: 'text-purple-600',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
      description:
        'The top 30 to 40 national finalists from Category C and D are invited to an intensive 2-to-3 week residential training camp hosted at BUET and Dhaka University. Focuses heavily on experimental apparatus, error analysis, and university-level mechanics and electrodynamics.',
      keyMilestones: [
        'Hands-on experimental physics: Interferometry, circuits, thermodynamics',
        'Advanced problem sessions based on IPhO syllabi & David Morin / Irodov',
        'Lectures by eminent national physicists and international Olympiad coaches',
      ],
    },
    {
      step: '05',
      title: 'Team Selection Tests (TST)',
      subtitle: 'Selecting the Final National Delegates',
      icon: Award,
      color: 'text-emerald-600',
      borderColor: 'border-emerald-200',
      bgColor: 'bg-emerald-50',
      description:
        'Camp participants undergo multiple 5-hour theoretical and 5-hour experimental examinations adhering strictly to the International Physics Olympiad regulations. The scores determine the national squad.',
      keyMilestones: [
        'Top 5 students selected as the official Bangladesh IPhO Delegation',
        'Next 8 top students selected for the Asian Physics Olympiad (APhO)',
        'Intensive pre-departure mentorship and specialized problem sets',
      ],
    },
    {
      step: '06',
      title: 'The World Stage: IPhO & APhO',
      subtitle: 'Competing with 85+ Nations Globally',
      icon: Globe,
      color: 'text-amber-600',
      borderColor: 'border-amber-300',
      bgColor: 'bg-amber-50',
      description:
        'Representing the red and green flag on the global stage. Bangladesh delegates test their skills against the best young physicists worldwide in historic university cities across Europe, Asia, and the Americas.',
      keyMilestones: [
        'Gold, Silver, Bronze Medals & Honorable Mentions',
        'Global academic recognition and admissions to top world universities',
        'Lifelong membership in the international physics community',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Flag className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Olympic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            From the Classroom <br />
            <span className="text-blue-900">
              to the Global Podium.
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Understand how each phase of the Bangladesh Physics Olympiad systematically trains and elevates students to international excellence.
          </p>
        </div>

        {/* Step Selector Horizontal Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {steps.map((item, idx) => {
            const isCurrent = selectedStep === idx;
            const Icon = item.icon;
            return (
              <button
                key={item.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all border ${
                  isCurrent
                    ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10'
                    : 'bg-white/70 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    Step {item.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? item.color : 'text-slate-400'}`} />
                </div>
                <div className={`text-xs font-bold truncate ${isCurrent ? 'text-slate-900' : 'text-slate-700'}`}>
                  {item.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Spotlight Card */}
        {steps[selectedStep] && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden animate-fadeIn">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${steps[selectedStep].bgColor} border ${steps[selectedStep].borderColor} ${steps[selectedStep].color}`}>
                    {React.createElement(steps[selectedStep].icon, { className: 'w-7 h-7' })}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Phase {steps[selectedStep].step} of 06
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {steps[selectedStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {steps[selectedStep].description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    Key Milestones & Deliverables:
                  </span>
                  <div className="space-y-2">
                    {steps[selectedStep].keyMilestones.map((ms, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{ms}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Summary / Next Phase Button */}
              <div className="w-full lg:w-72 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shrink-0">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Roadmap Navigation
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div>Next Target: <span className="font-semibold text-blue-600">17th BdPhO 2026</span></div>
                  <div>Selection Pool: <span className="font-semibold text-slate-900">64 Districts</span></div>
                  <div>Final Squad: <span className="font-semibold text-amber-700">5 IPhO + 8 APhO</span></div>
                </div>

                {selectedStep < steps.length - 1 ? (
                  <button
                    onClick={() => setSelectedStep(selectedStep + 1)}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    View Next Step <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/categories"
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition text-center block shadow-sm"
                  >
                    Choose Your Category
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
