'use client';

import React from 'react';
import { Cpu, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

export const TechFairSection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);

  const tracks = [
    {
      title: text('পদার্থবিজ্ঞান প্রদর্শক যন্ত্রপাতি', 'Physics demonstration apparatus'),
      desc: text(
        'মৌলিক বৈজ্ঞানিক ঘটনা ব্যাখ্যাদানকারী হার্ডওয়্যার: চৌম্বকীয় লেভিটেশন, অপটিক্যাল ইন্টারফেরোমেট্রি, অ্যাকোস্টিক রেজোন্যান্স বা প্রবাহী গতিবিদ্যা।',
        'Hardware that explains fundamental phenomena: magnetic levitation, optical interferometry, acoustic resonance or fluid dynamics.',
      ),
      tag: text('হার্ডওয়্যার ট্র্যাক', 'Hardware track'),
    },
    {
      title: text('নবায়নযোগ্য শক্তি ও তাপগতিবিদ্যা', 'Renewable energy & thermodynamics'),
      desc: text(
        'থার্মোইলেক্ট্রিক শক্তি সংগ্রহ, সোলার কনসেন্ট্রেশন সিস্টেম, উইন্ড ভর্টেক্স এবং উচ্চ-দক্ষ তাপীয় রূপান্তর চক্র।',
        'Thermoelectric energy harvesting, solar concentration, wind vortices and high-efficiency thermal conversion cycles.',
      ),
      tag: text('গ্রিন টেক ট্র্যাক', 'Green tech track'),
    },
    {
      title: text('ইলেকট্রনিক সেন্সর ও পরিমাপক', 'Electronic sensors & instruments'),
      desc: text(
        'স্বয়ংক্রিয় ডাটা লগার, স্বল্পমূল্যের স্পেকট্রোফটোমিটার, জ্যোতির্বৈজ্ঞানিক ট্র্যাকার এবং মাইক্রো-কন্ট্রোলার সেন্সর অ্যারে।',
        'Automatic data loggers, low-cost spectrophotometers, astronomical trackers and microcontroller sensor arrays.',
      ),
      tag: text('ইন্সট্রুমেন্টেশন', 'Instrumentation'),
    },
    {
      title: text('কম্পিউটেশনাল পদার্থবিজ্ঞান ও সিমুলেশন', 'Computational physics & simulation'),
      desc: text(
        'গ্রহীয় কক্ষপথ, আপেক্ষিকীয় গতিপথ এবং কোয়ান্টাম ওয়েভ-প্যাকেটের নিজস্ব কোডিং নির্ভর নির্ভুল সিমুলেশন মডেল।',
        'Self-coded high-accuracy simulations of planetary orbits, relativistic trajectories and quantum wave packets.',
      ),
      tag: text('সফটওয়্যার / অ্যালগরিদমিক', 'Software / algorithmic'),
    },
  ];

  const criteria = [
    {
      name: text('তাত্ত্বিক যথার্থতা ও বৈজ্ঞানিক নির্ভুলতা', 'Theoretical accuracy & scientific rigour'),
      weight: text('৩০%', '30%'),
    },
    {
      name: text('মৌলিকত্ব ও প্রযুক্তিগত উদ্ভাবন', 'Originality & technical innovation'),
      weight: text('৩০%', '30%'),
    },
    {
      name: text('কার্যকর প্রোটোটাইপ ও বাস্তব প্রমাণ', 'Working prototype & real evidence'),
      weight: text('২০%', '20%'),
    },
    {
      name: text('উপস্থাপন, পোস্টার ও মৌখিক ডিফেন্স', 'Presentation, poster & oral defence'),
      weight: text('২০%', '20%'),
    },
  ];

  return (
    <section id="tech-fair" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>{text('ফলিত উদ্ভাবন ও হার্ডওয়্যার প্রদর্শনী', 'Applied innovation & hardware showcase')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {text('বিডিএফও প্রযুক্তি মেলা ও', 'BdPhO Tech Fair &')} <br />
            <span className="text-blue-900">
              {text('বৈজ্ঞানিক উদ্ভাবন প্রদর্শনী।', 'scientific innovation exhibition.')}
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {text(
              'যেখানে তাত্ত্বিক পদার্থবিজ্ঞান রূপ নেয় বাস্তব প্রোটোটাইপে। নিবন্ধিত সকল শিক্ষার্থী তাদের নিজস্ব উদ্ভাবন ও পরীক্ষণ প্রদর্শন করতে পারবে।',
              'Where theoretical physics becomes real prototypes. All registered students may exhibit their own inventions and experiments.',
            )}
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tracks.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs"
            >
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 mb-3 inline-block">
                  {t.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition mb-2">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Criteria & Guidelines Dual Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-4">
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" /> {text('অফিশিয়াল মূল্যায়ন মাপকাঠি', 'Official judging criteria')}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {text('প্রজেক্ট মূল্যায়নের নিয়মাবলী', 'Project evaluation rules')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {text(
                'ঢাকা বিশ্ববিদ্যালয়, বুয়েট এবং বিজ্ঞান একাডেমির প্রথিতযশা গবেষক ও অধ্যাপকদের সমন্বয়ে গঠিত বিচারকমণ্ডলী দ্বারা মূল্যায়িত হবে।',
                'Judged by a panel of distinguished researchers and professors from Dhaka University, BUET and the Academy of Sciences.',
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {criteria.map((c, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                >
                  <span className="text-xs text-slate-700 font-medium">{c.name}</span>
                  <span className="text-xs font-bold text-cyan-700 font-mono">{c.weight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" /> {text('নিরাপত্তা ও আবেদন নীতিমালা', 'Safety & application policy')}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {text('মেলার বিধিবিধান', 'Fair regulations')}
              </h3>
              <ul className="text-xs text-slate-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    {text(
                      'একক বা সর্বোচ্চ ২ সদস্যের দল হিসেবে অংশগ্রহণযোগ্য।',
                      'Open to individuals or teams of at most 2 members.',
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    {text(
                      'কোনো ক্ষতিকর রাসায়নিক বা অনিরাপদ উচ্চ ভোল্টেজ (৫০ ভোল্ট এসির বেশি) নিষিদ্ধ।',
                      'Hazardous chemicals and unsafe high voltage (above 50 V AC) are banned.',
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    {text(
                      'একটি মুদ্রিত A1 সাইজ টেকনিক্যাল পোস্টার ও সংক্ষিপ্ত প্রতিবেদন সাথে থাকতে হবে।',
                      'A printed A1 technical poster and a short report must accompany the project.',
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              {text('প্রজেক্ট আবেদনপত্র জমা দিন ↗', 'Submit project application ↗')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
