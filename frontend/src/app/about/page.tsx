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
              <span>জাতীয় প্রতিষ্ঠান পরিচিতি</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              বিজ্ঞানমনস্ক জাতি গঠনে <br className="hidden sm:inline" />
              <span className="text-blue-900">দেশব্যাপী মেধা অন্বেষণ</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ২০১১ সালে প্রতিষ্ঠিত বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (বিডিএফও) দেশের ৫ম থেকে ১২শ শ্রেণির শিক্ষার্থীদের মেধা আবিষ্কার, লালন ও বিশ্বমঞ্চে প্রতিনিধিত্ব করার একমাত্র জাতীয় স্বীকৃত একাডেমি।
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
                    আমাদের ঐতিহ্য ও যাত্রা
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    তাত্ত্বিক ও ব্যবহারিক পদার্থবিজ্ঞানে দেড় দশকের জাতীয় উৎকর্ষ
                  </h2>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  বিশিষ্ট শিক্ষাবিদ ও লেখক <strong>অধ্যাপক ড. মুহম্মদ জাফর ইকবাল</strong>-এর পৃষ্ঠপোষকতায় এবং বাংলাদেশ ফিজিক্যাল সোসাইটি, ঢাকা বিশ্ববিদ্যালয়, বুয়েট ও শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের প্রথিতযশা অধ্যাপকদের সম্মিলিত প্রচেষ্টায় বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড প্রতিষ্ঠিত হয়।
                </p>

                <p className="text-sm text-slate-700 leading-relaxed">
                  প্রতি বছর ১৬টি আঞ্চলিক ভেন্যুর মাধ্যমে দেশের <strong>৬৪টি জেলায়</strong> অলিম্পিয়াড কার্যক্রম পরিচালিত হয়, যেখানে <strong>১ লাখেরও বেশি শিক্ষার্থী</strong> স্বতঃস্ফূর্তভাবে অংশগ্রহণ করে। আঞ্চলিক বাছাই শেষে বিজয়ীরা ঢাকায় জাতীয় রাউন্ড এবং এরপর কয়েক সপ্তাহের নিবিড় আবাসিক ল্যাব ক্যাম্পে অংশ নেয়, যেখান থেকে <strong>আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO)</strong> এবং <strong>এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO)</strong>-এর ৫ সদস্যের জাতীয় দল নির্বাচিত হয়।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-extrabold text-blue-700 font-mono mb-1">
                      ২০১১
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      প্রতিষ্ঠা বর্ষ
                    </div>
                    <p className="text-xs text-slate-600">
                      আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডের আনুষ্ঠানিক সদস্যপদ লাভ।
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-extrabold text-amber-700 font-mono mb-1">
                      ৪৮+
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      আন্তর্জাতিক সম্মাননা
                    </div>
                    <p className="text-xs text-slate-600">
                      বিশ্বের বিভিন্ন দেশে আইপিএইচও ও এপিএইচও থেকে অর্জিত মেডেল ও সম্মাননা।
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
                      ৫ সদস্যের জাতীয় প্রতিনিধি দল
                    </span>
                  </div>
                  <div className="p-4 bg-white text-slate-900 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900">
                      বিশ্বমঞ্চের পোডিয়ামে বাংলাদেশ
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      ৩টি জাতীয় পরীক্ষা ও আবাসিক প্রশিক্ষণ ক্যাম্প শেষে নির্বাচিত জাতীয় দল।
                    </div>
                  </div>
                </div>

                {/* Institutional Credentials */}
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <BdphoLogo size="sm" showText={false} />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড কমিটি
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        IPhO ও APhO-এর অফিসিয়াল জাতীয় প্রতিনিধি
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-left text-xs text-slate-700 border-t border-slate-200 pt-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) অনুমোদিত</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO)-এর স্থায়ী সদস্য</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>বাংলাদেশ ফিজিক্যাল সোসাইটি ও বিশ্ববিদ্যালয় শিক্ষকমণ্ডলী দ্বারা পরিচালিত</span>
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
                    আবাসিক প্রশিক্ষণ ক্যাম্প
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    ব্যবহারিক ও তাত্ত্বিক গবেষণাগার প্রস্তুতি
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    আন্তর্জাতিক অলিম্পিয়াডে অংশ নেওয়ার পূর্বে জাতীয় দলের সদস্যরা ঢাকা বিশ্ববিদ্যালয় ও বুয়েটের পদার্থবিজ্ঞান বিভাগে বিশেষ প্রশিক্ষণ গ্রহণ করে। শিক্ষার্থীরা হ্যান্ডস-অন অপটিক্যাল ইন্টারফেরোমেট্রি, থার্মোডাইনামিক সাইকেল ও আধুনিক সার্কিট বিশ্লেষণের আন্তর্জাতিক মান অর্জন করে।
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-lg font-extrabold text-slate-900 font-mono">দৈনিক ৫ ঘণ্টা</div>
                      <div className="text-xs text-slate-500">হাতে-কলমে ল্যাব প্র্যাকটিস</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-lg font-extrabold text-blue-700 font-mono">১-অন-১</div>
                      <div className="text-xs text-slate-500">বিশ্ববিদ্যালয় অধ্যাপকদের মেন্টরশিপ</div>
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
                <span>প্রতিযোগিতা ক্যাটাগরি</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                ক্যাটাগরি A, B, C, এবং D-এর শ্রেণিভিত্তিক যোগ্যতা, পরীক্ষার সময় ও নমুনা প্রশ্নাবলি দেখুন।
              </p>
            </Link>

            <Link
              href="/committee"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <ShieldCheck className="w-6 h-6 text-indigo-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition flex items-center justify-between">
                <span>কেন্দ্রীয় একাডেমিক কাউন্সিল</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                অলিম্পিয়াড পরিচালনা ও তত্ত্বাবধানকারী বিশিষ্ট শিক্ষাবিদ ও অধ্যাপকদের তালিকা দেখুন।
              </p>
            </Link>

            <Link
              href="/results"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <Award className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition flex items-center justify-between">
                <span>আন্তর্জাতিক হল অব ফেম</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                বিশ্বমঞ্চের অলিম্পিয়াড আসরে লাল-সবুজ পতাকা ওড়ানো পদকজয়ী শিক্ষার্থীদের সাফল্যগাঁথা।
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
