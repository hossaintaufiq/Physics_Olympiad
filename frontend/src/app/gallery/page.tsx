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
              <span>Visual History & Milestones</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Official Olympiad Photo Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Memories from nationwide regional festivals, laboratory investigations at BUET, national award ceremonies at Curzon Hall, and international IPhO expeditions.
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
