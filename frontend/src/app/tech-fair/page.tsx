'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TechFairSection } from '@/components/TechFairSection';
import { Cpu } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function TechFairPage() {
  const { L } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_bg.jpg"
              alt={L('ফলিত পদার্থবিজ্ঞান ও উদ্ভাবন আবহ', 'Applied physics & innovation atmosphere')}
              className="w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200 shadow-xs backdrop-blur-xs">
              <Cpu className="w-3.5 h-3.5 text-cyan-700" />
              <span>{L('ফলিত উদ্ভাবন ও হার্ডওয়্যার প্রদর্শনী', 'Applied innovation & hardware showcase')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {L('বিডিএফও প্রযুক্তি মেলা ও', 'BdPhO tech fair &')}{' '}
              <br className="hidden sm:inline" />
              <span className="text-blue-900">
                {L('বৈজ্ঞানিক উদ্ভাবন প্রদর্শনী', 'scientific innovation exhibition')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {L(
                'জাতীয় পর্বে বিশ্ববিদ্যালয় স্তরের সম্মানিত বিচারকমণ্ডলীর সামনে স্বনির্মিত বৈজ্ঞানিক যন্ত্রপাতি, নবায়নযোগ্য শক্তির প্রোটোটাইপ এবং পদার্থবিজ্ঞান প্রদর্শক প্রদর্শন করুন।',
                'At the national round, present self-built scientific instruments, renewable-energy prototypes, and physics demonstrators before a distinguished university-level jury.',
              )}
            </p>

            {/* Photographic Showcase Card */}
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white text-left group">
              <div className="relative aspect-[21/9] sm:aspect-[24/9] overflow-hidden">
                <img
                  src="/images/tech_showcase.jpg"
                  alt={L('শিক্ষার্থীদের উদ্ভাবনী পদার্থবিজ্ঞান প্রজেক্ট', 'Students’ innovative physics projects')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
                    {L('জাতীয় পর্বে সরাসরি মূল্যায়ন', 'Live evaluation at national round')}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                    {L(
                      'ইন্টারফেরোমিটার, রেজোন্যান্ট কয়েল ও সিগন্যাল অ্যানালাইজার',
                      'Interferometers, resonant coils & signal analysers',
                    )}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-1 sm:line-clamp-2">
                    {L(
                      'ক্ষুদে উদ্ভাবকরা তাদের স্বহস্তে তৈরি হার্ডওয়্যার সরাসরি বিশ্ববিদ্যালয়ের অধ্যাপকদের নিকট উপস্থাপন করছে।',
                      'Young innovators present their handmade hardware directly to university professors.',
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Fair Component */}
        <TechFairSection />
      </main>

      <Footer />
    </div>
  );
}
