'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { NoticesSection } from '@/components/NoticesSection';
import { Bell, Info } from 'lucide-react';

export default function NoticesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              <Bell className="w-3.5 h-3.5 text-amber-700" />
              <span>Official Circulars & Announcements</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Notices & Administrative Directives
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Stay updated with authoritative notices regarding round dates, admit card availability, calculator allowances, and regional cluster allocations.
            </p>
          </div>
        </section>

        {/* Notices Board Component */}
        <NoticesSection />
      </main>

      <Footer />
    </div>
  );
}
