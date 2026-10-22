'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CommitteeSection } from '@/components/CommitteeSection';
import { Users, Building2, ExternalLink } from 'lucide-react';

export default function CommitteePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Users className="w-3.5 h-3.5 text-blue-700" />
              <span>Academic Leadership & Governance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Central Committee & Academic Mentors
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Distinguished professors, researchers, and educators from leading universities across Bangladesh guiding the national physics movement.
            </p>
          </div>
        </section>

        {/* Committee Section Component */}
        <CommitteeSection />
      </main>

      <Footer />
    </div>
  );
}
