'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PastPapersArchive } from '@/components/PastPapersArchive';
import { BookOpen, Download, HelpCircle, CheckCircle2 } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export default function PastPapersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_bg.jpg"
              alt="Physics Papers Archive Background"
              className="w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 shadow-xs backdrop-blur-xs">
              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
              <span>প্রশ্নপত্র ও সমাধান ভাণ্ডার</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              বিগত প্রশ্নপত্র ও <span className="text-blue-900">মডেল সমাধান আর্কাইভ</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ১ম থেকে ১৬তম বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াডের সকল অফিসিয়াল প্রশ্নপত্র। ক্যাটাগরি, রাউন্ড, অঞ্চল ও ভাষা অনুসারে ফিল্টার করে অনুশীলন করুন।
            </p>
          </div>
        </section>

        {/* The Archive Engine */}
        <PastPapersArchive />

        {/* Study Advice & Solutions Note */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" /> অলিম্পিয়াড অনুশীলনের কার্যকর কৌশল
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                বিগত প্রশ্নপত্র কীভাবে সঠিকভাবে সমাধান করবেন
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">১. মৌলিক নীতির প্রয়োগ</div>
                  <p className="text-slate-600">
                    সূত্র মুখস্থ না করে সমস্যার পেছনের সংরক্ষণশীল নীতিগুলো (শক্তি, রৈখিক ও কৌণিক ভরবেগ, চার্জ) শনাক্ত করুন।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">২. মাত্রা ও প্রান্তীয় সীমা পরীক্ষা</div>
                  <p className="text-slate-600">
                    সমীকরণের উভয় পাশের মাত্রা এবং চরম সীমা (যেমন ভর শূন্য হলে বা কোণ ৯০° হলে কী ঘটে) যাচাই করুন।
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1">৩. সময় মেপে বাস্তব মক টেস্ট</div>
                  <p className="text-slate-600">
                    সমাধান না দেখে নির্ধারিত ৯০ বা ১২০ মিনিটের মধ্যে সম্পূর্ণ প্রশ্ন সেট সমাধানের অনুশীলন করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
