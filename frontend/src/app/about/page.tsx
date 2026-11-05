'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RoadmapSection } from '@/components/RoadmapSection';
import { BdphoLogo } from '@/components/BdphoLogo';
import { Award, Compass, Globe, GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function AboutPage() {
  const { L } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="relative bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="/images/hero_bg.jpg"
              alt={L('পদার্থবিজ্ঞান গবেষণাগারের পটভূমি', 'Physics laboratory background')}
              className="w-full h-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 text-blue-900 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 shadow-xs backdrop-blur-xs">
              <Compass className="w-3.5 h-3.5 text-blue-700" />
              <span>{L('জাতীয় প্রতিষ্ঠান পরিচিতি', 'National institution overview')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {L('বিজ্ঞানমনস্ক জাতি গঠনে', 'Building a science-minded nation through')}{' '}
              <br className="hidden sm:inline" />
              <span className="text-blue-900">
                {L('দেশব্যাপী মেধা অন্বেষণ', 'nationwide talent discovery')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {L(
                '২০১১ সালে প্রতিষ্ঠিত বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (বিডিএফও) দেশের ৫ম থেকে ১২শ শ্রেণির শিক্ষার্থীদের মেধা আবিষ্কার, লালন ও বিশ্বমঞ্চে প্রতিনিধিত্ব করার একমাত্র জাতীয় স্বীকৃত একাডেমি।',
                'Founded in 2011, the Bangladesh Physics Olympiad (BdPhO) is the nation’s only officially recognised academy for discovering, nurturing, and representing students from classes 5–12 on the world stage.',
              )}
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
                    {L('আমাদের ঐতিহ্য ও যাত্রা', 'Our heritage & journey')}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {L(
                      'তাত্ত্বিক ও ব্যবহারিক পদার্থবিজ্ঞানে দেড় দশকের জাতীয় উৎকর্ষ',
                      'Over a decade and a half of national excellence in theoretical and experimental physics',
                    )}
                  </h2>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {L(
                    'বিশিষ্ট শিক্ষাবিদ ও লেখক অধ্যাপক ড. মুহম্মদ জাফর ইকবাল-এর পৃষ্ঠপোষকতায় এবং বাংলাদেশ ফিজিক্যাল সোসাইটি, ঢাকা বিশ্ববিদ্যালয়, বুয়েট ও শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের প্রথিতযশা অধ্যাপকদের সম্মিলিত প্রচেষ্টায় বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড প্রতিষ্ঠিত হয়।',
                    'Under the patronage of distinguished educator and author Prof. Dr. Muhammed Zafar Iqbal, and through the combined efforts of leading professors from the Bangladesh Physical Society, the University of Dhaka, BUET, and Shahjalal University of Science and Technology, the Bangladesh Physics Olympiad was founded.',
                  )}
                </p>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {L(
                    'প্রতি বছর ১৬টি আঞ্চলিক ভেন্যুর মাধ্যমে দেশের ৬৪টি জেলায় অলিম্পিয়াড কার্যক্রম পরিচালিত হয়, যেখানে ১ লাখেরও বেশি শিক্ষার্থী স্বতঃস্ফূর্তভাবে অংশগ্রহণ করে। আঞ্চলিক বাছাই শেষে বিজয়ীরা ঢাকায় জাতীয় রাউন্ড এবং এরপর কয়েক সপ্তাহের নিবিড় আবাসিক ল্যাব ক্যাম্পে অংশ নেয়, যেখান থেকে আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) এবং এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO)-এর ৫ সদস্যের জাতীয় দল নির্বাচিত হয়।',
                    'Each year the Olympiad runs across 64 districts through 16 regional venues, with more than 100,000 students taking part. After regional selection, winners join the national round in Dhaka and then an intensive multi-week residential lab camp, from which the five-member national teams for the International Physics Olympiad (IPhO) and Asian Physics Olympiad (APhO) are chosen.',
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-extrabold text-blue-700 font-mono mb-1">
                      {L('২০১১', '2011')}
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      {L('প্রতিষ্ঠা বর্ষ', 'Year founded')}
                    </div>
                    <p className="text-xs text-slate-600">
                      {L(
                        'আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডের আনুষ্ঠানিক সদস্যপদ লাভ।',
                        'Formal membership of the International Physics Olympiad.',
                      )}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-extrabold text-amber-700 font-mono mb-1">
                      {L('৪৮+', '48+')}
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      {L('আন্তর্জাতিক সম্মাননা', 'International honours')}
                    </div>
                    <p className="text-xs text-slate-600">
                      {L(
                        'বিশ্বের বিভিন্ন দেশে আইপিএইচও ও এপিএইচও থেকে অর্জিত মেডেল ও সম্মাননা।',
                        'Medals and honours earned at IPhO and APhO around the world.',
                      )}
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
                      alt={L(
                        'আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডে বাংলাদেশ দল',
                        'Team Bangladesh at the International Physics Olympiad',
                      )}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {L('৫ সদস্যের জাতীয় প্রতিনিধি দল', 'Five-member national delegation')}
                    </span>
                  </div>
                  <div className="p-4 bg-white text-slate-900 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900">
                      {L('বিশ্বমঞ্চের পোডিয়ামে বাংলাদেশ', 'Bangladesh on the world podium')}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {L(
                        '৩টি জাতীয় পরীক্ষা ও আবাসিক প্রশিক্ষণ ক্যাম্প শেষে নির্বাচিত জাতীয় দল।',
                        'The national team selected after three national exams and a residential training camp.',
                      )}
                    </div>
                  </div>
                </div>

                {/* Institutional Credentials */}
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-3">
                    <BdphoLogo size="sm" showText={false} />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {L(
                          'বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড কমিটি',
                          'Bangladesh Physics Olympiad Committee',
                        )}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {L(
                          'IPhO ও APhO-এর অফিসিয়াল জাতীয় প্রতিনিধি',
                          'Official national body for IPhO & APhO',
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-left text-xs text-slate-700 border-t border-slate-200 pt-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        {L(
                          'আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) অনুমোদিত',
                          'Approved by the International Physics Olympiad (IPhO)',
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        {L(
                          'এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO)-এর স্থায়ী সদস্য',
                          'Standing member of the Asian Physics Olympiad (APhO)',
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        {L(
                          'বাংলাদেশ ফিজিক্যাল সোসাইটি ও বিশ্ববিদ্যালয় শিক্ষকমণ্ডলী দ্বারা পরিচালিত',
                          'Run by the Bangladesh Physical Society and university faculty',
                        )}
                      </span>
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
                      alt={L('পদার্থবিজ্ঞান ল্যাব ক্যাম্প প্রশিক্ষণ', 'Physics laboratory camp training')}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-mono">
                    {L('আবাসিক প্রশিক্ষণ ক্যাম্প', 'Residential training camp')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {L(
                      'ব্যবহারিক ও তাত্ত্বিক গবেষণাগার প্রস্তুতি',
                      'Experimental and theoretical laboratory preparation',
                    )}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {L(
                      'আন্তর্জাতিক অলিম্পিয়াডে অংশ নেওয়ার পূর্বে জাতীয় দলের সদস্যরা ঢাকা বিশ্ববিদ্যালয় ও বুয়েটের পদার্থবিজ্ঞান বিভাগে বিশেষ প্রশিক্ষণ গ্রহণ করে। শিক্ষার্থীরা হ্যান্ডস-অন অপটিক্যাল ইন্টারফেরোমেট্রি, থার্মোডাইনামিক সাইকেল ও আধুনিক সার্কিট বিশ্লেষণের আন্তর্জাতিক মান অর্জন করে।',
                      'Before international Olympiads, national team members receive specialised training in the physics departments of the University of Dhaka and BUET. Students reach international standards in hands-on optical interferometry, thermodynamic cycles, and modern circuit analysis.',
                    )}
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-lg font-extrabold text-slate-900 font-mono">
                        {L('দৈনিক ৫ ঘণ্টা', '5 hours daily')}
                      </div>
                      <div className="text-xs text-slate-500">
                        {L('হাতে-কলমে ল্যাব প্র্যাকটিস', 'Hands-on lab practice')}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-lg font-extrabold text-blue-700 font-mono">
                        {L('১-অন-১', '1-on-1')}
                      </div>
                      <div className="text-xs text-slate-500">
                        {L('বিশ্ববিদ্যালয় অধ্যাপকদের মেন্টরশিপ', 'Mentorship by university professors')}
                      </div>
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
                <span>{L('প্রতিযোগিতা ক্যাটাগরি', 'Competition categories')}</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {L(
                  'ক্যাটাগরি A, B, C, এবং D-এর শ্রেণিভিত্তিক যোগ্যতা, পরীক্ষার সময় ও নমুনা প্রশ্নাবলি দেখুন।',
                  'See class-based eligibility, exam duration, and sample questions for Categories A, B, C, and D.',
                )}
              </p>
            </Link>

            <Link
              href="/committee"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <ShieldCheck className="w-6 h-6 text-indigo-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition flex items-center justify-between">
                <span>{L('কেন্দ্রীয় একাডেমিক কাউন্সিল', 'Central academic council')}</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {L(
                  'অলিম্পিয়াড পরিচালনা ও তত্ত্বাবধানকারী বিশিষ্ট শিক্ষাবিদ ও অধ্যাপকদের তালিকা দেখুন।',
                  'Meet the distinguished educators and professors who run and oversee the Olympiad.',
                )}
              </p>
            </Link>

            <Link
              href="/results"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
            >
              <Award className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition flex items-center justify-between">
                <span>{L('আন্তর্জাতিক হল অব ফেম', 'International hall of fame')}</span>
                <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {L(
                  'বিশ্বমঞ্চের অলিম্পিয়াড আসরে লাল-সবুজ পতাকা ওড়ানো পদকজয়ী শিক্ষার্থীদের সাফল্যগাঁথা।',
                  'The success stories of medallists who raised the red-and-green flag on the world Olympiad stage.',
                )}
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
