'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GallerySection } from '@/components/GallerySection';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>ঐতিহাসিক মুহূর্ত ও স্মৃতিচারণ</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              অফিসিয়াল অলিম্পিয়াড ফটো গ্যালারি
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              দেশব্যাপী আঞ্চলিক বিজ্ঞান উৎসব, বুয়েট ও ঢাকা বিশ্ববিদ্যালয়ের পরীক্ষাগার অনুসন্ধান, কার্জন হলের সমাপনী এবং আন্তর্জাতিক IPhO অভিযানের স্মরণীয় মুহূর্তসমূহ।
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />
      </main>

      <Footer />
    </div>
  );
}
