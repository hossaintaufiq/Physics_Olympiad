'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HallOfFameSection } from '@/components/HallOfFameSection';
import { Trophy, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function ResultsPage() {
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
              alt={L('পদার্থবিজ্ঞান গবেষণাগারের আবহ', 'Physics laboratory atmosphere')}
              className="w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200 shadow-xs backdrop-blur-xs">
              <Trophy className="w-3.5 h-3.5 text-amber-700" />
              <span>{L('জাতীয় ফলাফল ও বিশ্বমঞ্চের গৌরব', 'National results & world-stage glory')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {L('ফলাফল ও', 'Results &')}{' '}
              <span className="text-blue-900">
                {L('আন্তর্জাতিক হল অব ফেম', 'international hall of fame')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {L(
                'আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO), এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO) এবং জাতীয় পর্বে বাংলাদেশের ক্ষুদে বিজ্ঞানীদের অবিস্মরণীয় অর্জন।',
                'Unforgettable achievements by Bangladesh’s young scientists at the International Physics Olympiad (IPhO), Asian Physics Olympiad (APhO), and the national round.',
              )}
            </p>

            {/* Visual Celebration Photo Banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/award_ceremony.jpg"
                    alt={L(
                      'জাতীয় পদার্থবিজ্ঞান অলিম্পিয়াডের পুরস্কার বিতরণী',
                      'National Physics Olympiad award ceremony',
                    )}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    {L('জাতীয় মহোৎসব সমাপনী', 'National festival closing')}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {L('স্বর্ণপদক ও ট্রফি প্রদান', 'Gold medals & trophy presentation')}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {L(
                      'অধ্যাপক ড. মুহম্মদ জাফর ইকবাল ও বিজ্ঞান গবেষকবৃন্দ শীর্ষ মেধাবীদের সম্মাননা ও পদক প্রদান করছেন।',
                      'Prof. Dr. Muhammed Zafar Iqbal and science researchers honour and medal the top talent.',
                    )}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/ipho_delegation.jpg"
                    alt={L(
                      'আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডে বাংলাদেশ দল',
                      'Bangladesh team at the International Physics Olympiad',
                    )}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    {L('৫৪তম IPhO বিশ্বমঞ্চ', '54th IPhO world stage')}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {L('বাংলাদেশ জাতীয় প্রতিনিধি দল', 'Bangladesh national delegation')}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {L(
                      '৮৫টি দেশের সাথে প্রতিযোগিতায় তাত্ত্বিক ও ব্যবহারিক পদার্থবিজ্ঞানে লড়াই করে বাংলাদেশের লাল-সবুজ পতাকা সমুন্নত রাখা।',
                      'Competing with 85 countries in theoretical and experimental physics while flying Bangladesh’s red-and-green flag high.',
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hall of Fame Component */}
        <HallOfFameSection />

        {/* National Round Results Portal Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {L('জাতীয় পর্বের মেধা তালিকা ও প্রকাশনা', 'National round merit lists & publications')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {L(
                  'অফিসিয়াল স্কোরকার্ড, শিক্ষাপ্রতিষ্ঠানভিত্তিক ফলাফল এবং জাতীয় ক্যাম্পের আমন্ত্রণ পত্র।',
                  'Official scorecards, institution-wise results, and national camp invitation letters.',
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wider">
                  {L('প্রকাশিত ফলাফল', 'Published results')}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {L(
                    '১৬তম বিডিএফও জাতীয় চূড়ান্ত মেধা তালিকা (২০২৫)',
                    '16th BdPhO national final merit list (2025)',
                  )}
                </h3>
                <p className="text-xs text-slate-600">
                  {L(
                    'ক্যাটাগরি এ, বি, সি এবং ডি এর পূর্ণাঙ্গ মেধা তালিকা এবং বুয়েটে আয়োজিত জাতীয় প্রশিক্ষণ ক্যাম্পের জন্য নির্বাচিত ৩৫ জনের নাম।',
                    'Full merit lists for Categories A, B, C, and D, plus the 35 students selected for the national training camp at BUET.',
                  )}
                </p>
                <a
                  href="https://www.bdpho.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition pt-1"
                >
                  {L('অফিসিয়াল মেধা তালিকা PDF', 'Official merit list PDF')}{' '}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  {L('প্রকাশিত ফলাফল', 'Published results')}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {L(
                    '১৬তম বিডিএফও আঞ্চলিক পর্বের বিজয়ী তালিকা',
                    '16th BdPhO regional round winners list',
                  )}
                </h3>
                <p className="text-xs text-slate-600">
                  {L(
                    'ঢাকা, চট্টগ্রাম, রাজশাহী, খুলনা, সিলেট, বরিশাল, রংপুর এবং ময়মনসিংহ আঞ্চলিক উৎসবের মেধা তালিকা।',
                    'Merit lists from the Dhaka, Chattogram, Rajshahi, Khulna, Sylhet, Barishal, Rangpur, and Mymensingh regional festivals.',
                  )}
                </p>
                <a
                  href="https://www.bdpho.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition pt-1"
                >
                  {L('আঞ্চলিক ফলাফল দেখুন', 'View regional results')}{' '}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
