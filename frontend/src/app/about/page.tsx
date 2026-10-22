'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RoadmapSection } from '@/components/RoadmapSection';
import { BdphoLogo } from '@/components/BdphoLogo';
import { Award, Compass, Globe, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_bg.jpg"
              alt="Physics Laboratory Background"
              className="w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 shadow-xs backdrop-blur-xs">
              <Compass className="w-3.5 h-3.5 text-blue-700" />
              <span>About the National Organization</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Inspiring Scientific Curiosity <br className="hidden sm:inline" />
              <span className="text-blue-900">Across Bangladesh.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded in 2011, the Bangladesh Physics Olympiad (BdPhO) is the premier national body entrusted with discovering, nurturing, and mentoring young talent from Class 5 to Class 12 to represent our nation on the global stage.
            </p>
          </div>
        </section>

        {/* Core Mission & Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                    Our Origin & Legacy
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    A Decade of Excellence in Theoretical & Experimental Physics
                  </h2>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  The Bangladesh Physics Olympiad was established under the visionary patronage of eminent scientist and author <strong>Prof. Dr. Muhammed Zafar Iqbal</strong> alongside distinguished professors from the Bangladesh Physical Society, University of Dhaka, BUET, and SUST.
                </p>

                <p className="text-sm text-slate-700 leading-relaxed">
                  Every year, BdPhO organizes competitions across all <strong>64 districts</strong> through 16 regional university hubs, engaging more than <strong>100,000 students</strong>. The most exceptional candidates qualify for the National Round in Dhaka, followed by intensive laboratory camps where the final national delegations for the <strong>International Physics Olympiad (IPhO)</strong> and <strong>Asian Physics Olympiad (APhO)</strong> are selected.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-extrabold text-blue-700 font-mono mb-1">
                      2011
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      Inception Year
                    </div>
                    <p className="text-xs text-slate-600">
                      Formally affiliated with the International Physics Olympiad.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-extrabold text-amber-700 font-mono mb-1">
                      48+
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      International Honors
                    </div>
                    <p className="text-xs text-slate-600">
                      Medals & Honorable Mentions won at IPhO and APhO globally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Delegation Card & Seal */}
              <div className="lg:col-span-5 space-y-5">
                {/* Photo Card: Team Bangladesh at IPhO */}
                <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src="/images/ipho_delegation.jpg"
                      alt="Team Bangladesh at International Physics Olympiad"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      5-Member National Delegation
                    </span>
                  </div>
                  <div className="p-4 bg-white text-slate-900 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900">
                      Team Bangladesh on the World Stage
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Selected after 3 rounds of national testing and an intensive residential training camp.
                    </div>
                  </div>
                </div>

                {/* Institutional Credentials */}
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <BdphoLogo size="sm" showText={false} />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Bangladesh Physics Olympiad Committee
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Official Representative to IPhO & APhO
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-left text-xs text-slate-700 border-t border-slate-200 pt-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Recognized by International Physics Olympiad (IPhO)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Permanent Member of Asian Physics Olympiad (APhO)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Supervised by Bangladesh Physical Society & University Faculty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* University Laboratory Training Spotlight */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src="/images/lab_optics.jpg"
                      alt="Physics Laboratory Camp Training"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                    Residential Training Camp
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Rigorous Experimental & Theoretical Preparation
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prior to departing for the International Olympiad, the national squad spends weeks at the university physics departments of DU and BUET. Students perform hands-on optical interferometry, thermodynamic cycle measurements, and electronic signal analyses to match international experimental standards.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-lg font-extrabold text-slate-900 font-mono">5 Hours</div>
                      <div className="text-xs text-slate-500">Daily Experimental Labs</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-lg font-extrabold text-blue-700 font-mono">1-on-1</div>
                      <div className="text-xs text-slate-500">Mentorship from Professors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 6-Step Olympic Roadmap */}
        <RoadmapSection />

        {/* Quick Links Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/categories"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <GraduationCap className="w-6 h-6 text-blue-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition flex items-center justify-between">
                <span>Competition Categories</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Explore classes, exam durations, and sample problems for Categories A, B, C, and D.
              </p>
            </Link>

            <Link
              href="/committee"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <ShieldCheck className="w-6 h-6 text-indigo-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition flex items-center justify-between">
                <span>Central Academic Council</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Meet the university professors and organizers steering the Olympiad movement.
              </p>
            </Link>

            <Link
              href="/results"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <Award className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition flex items-center justify-between">
                <span>International Hall of Fame</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Read about Bangladesh’s medal winners on international physics podiums.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
