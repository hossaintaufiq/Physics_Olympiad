'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SyllabusSection } from '@/components/SyllabusSection';
import { BookOpen, Download, Bookmark, CheckCircle2 } from 'lucide-react';

export default function SyllabusPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
              <BookOpen className="w-3.5 h-3.5 text-purple-700" />
              <span>একাডেমিক পাঠ্যসূচি ও নির্দেশিকা</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              অফিসিয়াল অলিম্পিয়াড সিলেবাস
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) নীতিমালার সাথে সামঞ্জস্যপূর্ণ। বিষয়ভিত্তিক উপ-শাখা, মূল সমীকরণ ও আন্তর্জাতিক বইয়ের তালিকা অন্বেষণ করুন।
            </p>
          </div>
        </section>

        {/* The Syllabus Explorer */}
        <SyllabusSection />

        {/* Official Reference Books Summary */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                বিডিএফও ও আইপিএইচও প্রস্তুতির সহায়ক পাঠ্যবই তালিকা
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                উচ্চতর তাত্ত্বিক ও গাণিতিক সমস্যা সমাধানে জাতীয় একাডেমিক কাউন্সিল কর্তৃক সুপারিশকৃত আন্তর্জাতিক গ্রন্থাবলি।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Fundamentals of Physics</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">ক্যাটাগরি B, C ও D</span>
                </div>
                <div className="text-xs text-slate-500">লেখক: ডেভিড হ্যালিডে, রবার্ট রেসনিক ও জিয়ার্ল ওয়াকার</div>
                <p className="text-xs text-slate-600">
                  উচ্চ বিদ্যালয় স্তরের পদার্থবিজ্ঞানের ভিত্তি। বলবিদ্যা, তরঙ্গ ও স্থির তড়িৎবিজ্ঞানের গভীর ধারণার জন্য অপরিহার্য।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Introduction to Classical Mechanics</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">ক্যাটাগরি C ও D</span>
                </div>
                <div className="text-xs text-slate-500">লেখক: ডেভিড মরিন (হার্ভার্ড বিশ্ববিদ্যালয়)</div>
                <p className="text-xs text-slate-600">
                  অলিম্পিয়াড মেকানিক্সের সেরা বই হিসেবে স্বীকৃত। জটিল অ-জড় ফ্রেম ও আপেক্ষিক গতির গভীর সমস্যা সমৃদ্ধ।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Problems in General Physics</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">IPhO সিলেকশন</span>
                </div>
                <div className="text-xs text-slate-500">লেখক: আই. ই. ইরোদভ</div>
                <p className="text-xs text-slate-600">
                  চিরায়ত সোভিয়েত সমস্যা সংকলন—যা শিক্ষার্থীদের গাণিতিক দক্ষতা, থার্মোডাইনামিক চক্র ও তড়িচ্চৌম্বকীয় আবেশের চরম গভীরতা পরীক্ষা করে।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">Electricity and Magnetism</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">ক্যাটাগরি D ও IPhO</span>
                </div>
                <div className="text-xs text-slate-500">লেখক: এডওয়ার্ড এম. পার্সেল ও ডেভিড জে. মরিন (বার্কলে সিরিজ)</div>
                <p className="text-xs text-slate-600">
                  বিশেষ আপেক্ষিকতা ও চার্জ অপরিবর্তনশীলতা থেকে চৌম্বক ক্ষেত্রের বিকাশ। জাতীয় ক্যাম্পের শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
