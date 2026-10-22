'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, Award, Flag, ChevronRight, School, Globe, Microscope, BookOpen } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      step: '০১',
      title: 'স্কুল ও কলেজ পর্যায়ের প্রাথমিক নিবন্ধন',
      subtitle: 'দেশব্যাপী ৫ম থেকে ১২শ শ্রেণির শিক্ষার্থীদের জন্য উন্মুক্ত',
      icon: School,
      color: 'text-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      description:
        'শিক্ষার্থীরা প্রাতিষ্ঠানিকভাবে কিংবা স্বতন্ত্রভাবে অনলাইনে নিবন্ধন করে। নিজের শ্রেণি অনুযায়ী উপযুক্ত ক্যাটাগরি (এ, বি, সি বা ডি) নির্বাচন করে এবং অফিসিয়াল বিগত প্রশ্নপত্র ও সিলেবাস নির্দেশিকা সংগ্রহ করে।',
      keyMilestones: [
        'ক্যাটাগরি নির্বাচন (এ: ৫ম-৬ষ্ঠ, বি: ৭ম-৮ম, সি: ৯ম-১০ম, ডি: ১১শ-১২শ)',
        'ইউনিক রেজিস্ট্রেশন নম্বর গ্রহণ ও তথ্য যাচাইকরণ',
        'আঞ্চলিক পরীক্ষার পূর্বে অফিশিয়াল প্রবেশপত্র ডাউনলোড',
      ],
    },
    {
      step: '০২',
      title: 'আঞ্চলিক অলিম্পিয়াড উৎসব',
      subtitle: '৬৪ জেলার সমন্বয়ে ১৬টি আঞ্চলিক হাব ও বিশ্ববিদ্যালয়',
      icon: Compass,
      color: 'text-cyan-600',
      borderColor: 'border-cyan-200',
      bgColor: 'bg-cyan-50',
      description:
        'দেশের শীর্ষস্থানীয় বিশ্ববিদ্যালয়সমূহে (ঢাকা, চট্টগ্রাম, রাজশাহী, খুলনা, সিলেট, বরিশাল, রংপুর, ময়মনসিংহ প্রভৃতি) একই সাথে অনুষ্ঠিত হয়। এতে থাকে লিখিত পদার্থবিজ্ঞান পরীক্ষা, বিজ্ঞান প্রদর্শনী এবং অধ্যাপকদের প্রশ্নোত্তর পর্ব।',
      keyMilestones: [
        'লিখিত সমস্যা সমাধান পরীক্ষা (ক্যাটাগরিভেদে ৯০ থেকে ১৮০ মিনিট)',
        'বাংলা ও ইংরেজি উভয় ভাষার দ্বিভাষিক প্রশ্নপত্র',
        'শীর্ষ প্রায় ১৫% উত্তীর্ণ শিক্ষার্থী ঢাকায় জাতীয় ফাইনালের জন্য নির্বাচিত',
      ],
    },
    {
      step: '০৩',
      title: 'ঢাকায় জাতীয় ফাইনাল পরীক্ষা',
      subtitle: 'কার্জন হল, ঢাকা বিশ্ববিদ্যালয় ও বুয়েট প্রাঙ্গণ',
      icon: BookOpen,
      color: 'text-amber-600',
      borderColor: 'border-amber-200',
      bgColor: 'bg-amber-50',
      description:
        'সারাদেশ থেকে উত্তীর্ণ ১,২০০ জনেরও বেশি সেরা সমস্যা-সমাধানকারী একত্রিত হয় মর্যাদাপূর্ণ জাতীয় পরীক্ষার জন্য। এতে থাকে গভীর তাত্ত্বিক বিশ্লেষণ, মাত্রার যাচাই ও গাণিতিক সৃজনশীলতার পরীক্ষা।',
      keyMilestones: [
        'বিজ্ঞান একাডেমির মানদণ্ডে জাতীয় তাত্ত্বিক পরীক্ষা',
        'প্রযুক্তি মেলা ও উদ্ভাবনী হার্ডওয়্যার প্রদর্শনী',
        'জাতীয় সমাপনী উৎসব, মেডেল, ট্রফি, সনদপত্র ও বই উপহার',
      ],
    },
    {
      step: '০৪',
      title: 'জাতীয় পদার্থবিজ্ঞান প্রশিক্ষণ ক্যাম্প',
      subtitle: 'বুয়েট ও ঢাবিতে আবাসিক নিবিড় তত্ত্ব ও ল্যাবরেটরি পরীক্ষণ',
      icon: Microscope,
      color: 'text-purple-600',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
      description:
        'ক্যাটাগরি সি ও ডি-এর জাতীয় চূড়ান্ত পর্বে উত্তীর্ণ সেরা ৩০ থেকে ৪০ জন শিক্ষার্থীকে বুয়েট ও ঢাকা বিশ্ববিদ্যালয়ে ২ থেকে ৩ সপ্তাহের আবাসিক প্রশিক্ষণ ক্যাম্পে আমন্ত্রণ জানানো হয়। এখানে বিশ্ববিদ্যালয়ের বলবিদ্যা, অপটিক্স ও আধুনিক পদার্থবিজ্ঞানের সাথে সরাসরি ল্যাবরেটরি এক্সপেরিমেন্টেশন করানো হয়।',
      keyMilestones: [
        'হাতে-কলমে ল্যাবরেটরি পদার্থবিজ্ঞান: ইন্টারফেরোমেট্রি, আরএলসি সার্কিট ও ত্রুটি বিশ্লেষণ',
        'IPhO সিলেবাস, ডেভিড মরিন ও ইরোদভের উন্নত সমস্যা সমাধানের ক্লাস',
        'আন্তর্জাতিক অলিম্পিয়াড প্রশিক্ষক ও খ্যাতনামা অধ্যাপকদের নিবিড় বক্তৃতা',
      ],
    },
    {
      step: '০৫',
      title: 'টিম সিলেকশন টেস্ট (TST)',
      subtitle: 'আন্তর্জাতিক দলের জন্য চূড়ান্ত প্রতিনিধি নির্বাচন',
      icon: Award,
      color: 'text-emerald-600',
      borderColor: 'border-emerald-200',
      bgColor: 'bg-emerald-50',
      description:
        'ক্যাম্পের শিক্ষার্থীরা আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডের কঠোর নীতিমালায় একাধিক ৫ ঘণ্টার তাত্ত্বিক এবং ৫ ঘণ্টার ব্যবহারিক ল্যাব পরীক্ষায় অংশ নেয়। এই পরীক্ষার ফলের ভিত্তিতে জাতীয় স্কোয়াড চূড়ান্ত হয়।',
      keyMilestones: [
        'শীর্ষ ৫ জন শিক্ষার্থী বাংলাদেশ IPhO জাতীয় দলের প্রতিনিধি হিসেবে নির্বাচিত',
        'পরবর্তী শীর্ষ ৮ জন এশিয়ান ফিজিক্স অলিম্পিয়াডের (APhO) জন্য নির্বাচিত',
        'দেশত্যাগের পূর্বে নিবিড় মেন্টরশিপ ও বিশেষায়িত প্রবলেম সলভিং',
      ],
    },
    {
      step: '০৬',
      title: 'বিশ্বমঞ্চ: IPhO ও APhO প্রতিযোগিতা',
      subtitle: 'বিশ্বের ৮৫+ দেশের সাথে প্রতিদ্বন্দ্বিতা',
      icon: Globe,
      color: 'text-amber-600',
      borderColor: 'border-amber-300',
      bgColor: 'bg-amber-50',
      description:
        'আন্তর্জাতিক মঞ্চে লাল-সবুজের পতাকাবাহী হয়ে লড়াই। ইউরোপ, এশিয়া এবং আমেরিকার ঐতিহাসিক বিশ্ববিদ্যালয় শহরে বিশ্বের সেরা তরুণদের সাথে প্রতিযোগিতা করে সম্মান বয়ে আনা।',
      keyMilestones: [
        'স্বর্ণ, রৌপ্য, ব্রোঞ্জ পদক ও সম্মাননা (Honorable Mention)',
        'বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়ে উচ্চশিক্ষার সুবর্ণ সুযোগ',
        'আন্তর্জাতিক বিজ্ঞানী ও গবেষক সম্প্রদায়ের সাথে আজীবন সংযোগ',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Flag className="w-3.5 h-3.5 text-emerald-600" />
            <span>অলিম্পিয়াড পরিক্রমা</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            শ্রেণিকক্ষ থেকে শুরু করে <br />
            <span className="text-blue-900">
              আন্তর্জাতিক পোডিয়াম পর্যন্ত।
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াডের প্রতিটি স্তর শিক্ষার্থীদের কীভাবে ধাপে ধাপে গড়ে তোলে ও বৈশ্বিক মানে উন্নীত করে তা জেনে নিন।
          </p>
        </div>

        {/* Step Selector Horizontal Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {steps.map((item, idx) => {
            const isCurrent = selectedStep === idx;
            const Icon = item.icon;
            return (
              <button
                key={item.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all border ${
                  isCurrent
                    ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10'
                    : 'bg-white/70 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    ধাপ {item.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? item.color : 'text-slate-400'}`} />
                </div>
                <div className={`text-xs font-bold truncate ${isCurrent ? 'text-slate-900' : 'text-slate-700'}`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Spotlight Card */}
        {steps[selectedStep] && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden animate-fadeIn">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${steps[selectedStep].bgColor} border ${steps[selectedStep].borderColor} ${steps[selectedStep].color}`}>
                    {React.createElement(steps[selectedStep].icon, { className: 'w-7 h-7' })}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      পর্ব {steps[selectedStep].step} / ০৬
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {steps[selectedStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {steps[selectedStep].description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    মূল লক্ষ্য ও মাইলফলকসমূহ:
                  </span>
                  <div className="space-y-2">
                    {steps[selectedStep].keyMilestones.map((ms, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{ms}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Summary / Next Phase Button */}
              <div className="w-full lg:w-72 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shrink-0">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  অলিম্পিয়াড নেভিগেশন
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div>আসন্ন লক্ষ্য: <span className="font-semibold text-blue-600">১৭তম বিডিএফও ২০২৬</span></div>
                  <div>নির্বাচন পরিধি: <span className="font-semibold text-slate-900">৬৪ জেলা</span></div>
                  <div>চূড়ান্ত দল: <span className="font-semibold text-amber-700">৫ জন IPhO + ৮ জন APhO</span></div>
                </div>

                {selectedStep < steps.length - 1 ? (
                  <button
                    onClick={() => setSelectedStep(selectedStep + 1)}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    পরবর্তী ধাপ দেখুন <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/categories"
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition text-center block shadow-sm"
                  >
                    আপনার ক্যাটাগরি বেছে নিন
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
