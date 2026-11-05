'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, Award, Flag, ChevronRight, School, Globe, Microscope, BookOpen } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';

export const RoadmapSection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const steps = [
    {
      step: text('০১', '01'),
      title: text(
        'স্কুল ও কলেজ পর্যায়ের প্রাথমিক নিবন্ধন',
        'School & college primary registration',
      ),
      subtitle: text(
        'দেশব্যাপী ৫ম থেকে ১২শ শ্রেণির শিক্ষার্থীদের জন্য উন্মুক্ত',
        'Open nationwide to students in classes 5–12',
      ),
      icon: School,
      color: 'text-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      description: text(
        'শিক্ষার্থীরা প্রাতিষ্ঠানিকভাবে কিংবা স্বতন্ত্রভাবে অনলাইনে নিবন্ধন করে। নিজের শ্রেণি অনুযায়ী উপযুক্ত ক্যাটাগরি (এ, বি, সি বা ডি) নির্বাচন করে এবং অফিসিয়াল বিগত প্রশ্নপত্র ও সিলেবাস নির্দেশিকা সংগ্রহ করে।',
        'Students register online individually or through their institution, pick the category (A, B, C or D) for their class, and collect official past papers and syllabus guides.',
      ),
      keyMilestones: [
        text(
          'ক্যাটাগরি নির্বাচন (এ: ৫ম-৬ষ্ঠ, বি: ৭ম-৮ম, সি: ৯ম-১০ম, ডি: ১১শ-১২শ)',
          'Category selection (A: 5–6, B: 7–8, C: 9–10, D: 11–12)',
        ),
        text(
          'ইউনিক রেজিস্ট্রেশন নম্বর গ্রহণ ও তথ্য যাচাইকরণ',
          'Receive a unique registration number and verify details',
        ),
        text(
          'আঞ্চলিক পরীক্ষার পূর্বে অফিশিয়াল প্রবেশপত্র ডাউনলোড',
          'Download the official admit card before the regional exam',
        ),
      ],
    },
    {
      step: text('০২', '02'),
      title: text('আঞ্চলিক অলিম্পিয়াড উৎসব', 'Regional olympiad festival'),
      subtitle: text(
        '৬৪ জেলার সমন্বয়ে ১৬টি আঞ্চলিক হাব ও বিশ্ববিদ্যালয়',
        '16 regional hubs & universities across 64 districts',
      ),
      icon: Compass,
      color: 'text-cyan-600',
      borderColor: 'border-cyan-200',
      bgColor: 'bg-cyan-50',
      description: text(
        'দেশের শীর্ষস্থানীয় বিশ্ববিদ্যালয়সমূহে (ঢাকা, চট্টগ্রাম, রাজশাহী, খুলনা, সিলেট, বরিশাল, রংপুর, ময়মনসিংহ প্রভৃতি) একই সাথে অনুষ্ঠিত হয়। এতে থাকে লিখিত পদার্থবিজ্ঞান পরীক্ষা, বিজ্ঞান প্রদর্শনী এবং অধ্যাপকদের প্রশ্নোত্তর পর্ব।',
        'Held simultaneously at leading universities (Dhaka, Chittagong, Rajshahi, Khulna, Sylhet, Barisal, Rangpur, Mymensingh and more), with a written physics exam, science exhibition and faculty Q&A.',
      ),
      keyMilestones: [
        text(
          'লিখিত সমস্যা সমাধান পরীক্ষা (ক্যাটাগরিভেদে ৯০ থেকে ১৮০ মিনিট)',
          'Written problem-solving exam (90–180 minutes by category)',
        ),
        text(
          'বাংলা ও ইংরেজি উভয় ভাষার দ্বিভাষিক প্রশ্নপত্র',
          'Bilingual papers in Bangla and English',
        ),
        text(
          'শীর্ষ প্রায় ১৫% উত্তীর্ণ শিক্ষার্থী ঢাকায় জাতীয় ফাইনালের জন্য নির্বাচিত',
          'Top ~15% advance to the national final in Dhaka',
        ),
      ],
    },
    {
      step: text('০৩', '03'),
      title: text('ঢাকায় জাতীয় ফাইনাল পরীক্ষা', 'National final exam in Dhaka'),
      subtitle: text(
        'কার্জন হল, ঢাকা বিশ্ববিদ্যালয় ও বুয়েট প্রাঙ্গণ',
        'Curzon Hall, University of Dhaka & BUET campus',
      ),
      icon: BookOpen,
      color: 'text-amber-600',
      borderColor: 'border-amber-200',
      bgColor: 'bg-amber-50',
      description: text(
        'সারাদেশ থেকে উত্তীর্ণ ১,২০০ জনেরও বেশি সেরা সমস্যা-সমাধানকারী একত্রিত হয় মর্যাদাপূর্ণ জাতীয় পরীক্ষার জন্য। এতে থাকে গভীর তাত্ত্বিক বিশ্লেষণ, মাত্রার যাচাই ও গাণিতিক সৃজনশীলতার পরীক্ষা।',
        'Over 1,200 top problem-solvers from across the country gather for the prestigious national exam—deep theory, order-of-magnitude checks and mathematical creativity.',
      ),
      keyMilestones: [
        text(
          'বিজ্ঞান একাডেমির মানদণ্ডে জাতীয় তাত্ত্বিক পরীক্ষা',
          'National theoretical exam to Academy of Sciences standards',
        ),
        text(
          'প্রযুক্তি মেলা ও উদ্ভাবনী হার্ডওয়্যার প্রদর্শনী',
          'Tech fair & innovative hardware showcase',
        ),
        text(
          'জাতীয় সমাপনী উৎসব, মেডেল, ট্রফি, সনদপত্র ও বই উপহার',
          'National closing festival with medals, trophies, certificates & books',
        ),
      ],
    },
    {
      step: text('০৪', '04'),
      title: text('জাতীয় পদার্থবিজ্ঞান প্রশিক্ষণ ক্যাম্প', 'National physics training camp'),
      subtitle: text(
        'বুয়েট ও ঢাবিতে আবাসিক নিবিড় তত্ত্ব ও ল্যাবরেটরি পরীক্ষণ',
        'Residential intensive theory & lab at BUET and DU',
      ),
      icon: Microscope,
      color: 'text-purple-600',
      borderColor: 'border-purple-200',
      bgColor: 'bg-purple-50',
      description: text(
        'ক্যাটাগরি সি ও ডি-এর জাতীয় চূড়ান্ত পর্বে উত্তীর্ণ সেরা ৩০ থেকে ৪০ জন শিক্ষার্থীকে বুয়েট ও ঢাকা বিশ্ববিদ্যালয়ে ২ থেকে ৩ সপ্তাহের আবাসিক প্রশিক্ষণ ক্যাম্পে আমন্ত্রণ জানানো হয়। এখানে বিশ্ববিদ্যালয়ের বলবিদ্যা, অপটিক্স ও আধুনিক পদার্থবিজ্ঞানের সাথে সরাসরি ল্যাবরেটরি এক্সপেরিমেন্টেশন করানো হয়।',
        'The top 30–40 Category C & D national finalists are invited to a 2–3 week residential camp at BUET and Dhaka University covering university mechanics, optics, modern physics and hands-on laboratory work.',
      ),
      keyMilestones: [
        text(
          'হাতে-কলমে ল্যাবরেটরি পদার্থবিজ্ঞান: ইন্টারফেরোমেট্রি, আরএলসি সার্কিট ও ত্রুটি বিশ্লেষণ',
          'Hands-on lab physics: interferometry, RLC circuits & error analysis',
        ),
        text(
          'IPhO সিলেবাস, ডেভিড মরিন ও ইরোদভের উন্নত সমস্যা সমাধানের ক্লাস',
          'IPhO syllabus classes with advanced Morin & Irodov problems',
        ),
        text(
          'আন্তর্জাতিক অলিম্পিয়াড প্রশিক্ষক ও খ্যাতনামা অধ্যাপকদের নিবিড় বক্তৃতা',
          'Intensive lectures by international olympiad coaches and renowned professors',
        ),
      ],
    },
    {
      step: text('০৫', '05'),
      title: text('টিম সিলেকশন টেস্ট (TST)', 'Team Selection Test (TST)'),
      subtitle: text(
        'আন্তর্জাতিক দলের জন্য চূড়ান্ত প্রতিনিধি নির্বাচন',
        'Final selection of international team delegates',
      ),
      icon: Award,
      color: 'text-emerald-600',
      borderColor: 'border-emerald-200',
      bgColor: 'bg-emerald-50',
      description: text(
        'ক্যাম্পের শিক্ষার্থীরা আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াডের কঠোর নীতিমালায় একাধিক ৫ ঘণ্টার তাত্ত্বিক এবং ৫ ঘণ্টার ব্যবহারিক ল্যাব পরীক্ষায় অংশ নেয়। এই পরীক্ষার ফলের ভিত্তিতে জাতীয় স্কোয়াড চূড়ান্ত হয়।',
        'Camp students sit multiple 5-hour theory and 5-hour practical lab exams under IPhO-style rules. Results decide the national squad.',
      ),
      keyMilestones: [
        text(
          'শীর্ষ ৫ জন শিক্ষার্থী বাংলাদেশ IPhO জাতীয় দলের প্রতিনিধি হিসেবে নির্বাচিত',
          'Top 5 selected as Bangladesh’s IPhO national team',
        ),
        text(
          'পরবর্তী শীর্ষ ৮ জন এশিয়ান ফিজিক্স অলিম্পিয়াডের (APhO) জন্য নির্বাচিত',
          'Next top 8 selected for the Asian Physics Olympiad (APhO)',
        ),
        text(
          'দেশত্যাগের পূর্বে নিবিড় মেন্টরশিপ ও বিশেষায়িত প্রবলেম সলভিং',
          'Intensive mentorship and specialised problem solving before departure',
        ),
      ],
    },
    {
      step: text('০৬', '06'),
      title: text('বিশ্বমঞ্চ: IPhO ও APhO প্রতিযোগিতা', 'World stage: IPhO & APhO'),
      subtitle: text(
        'বিশ্বের ৮৫+ দেশের সাথে প্রতিদ্বন্দ্বিতা',
        'Competing with 85+ countries worldwide',
      ),
      icon: Globe,
      color: 'text-amber-600',
      borderColor: 'border-amber-300',
      bgColor: 'bg-amber-50',
      description: text(
        'আন্তর্জাতিক মঞ্চে লাল-সবুজের পতাকাবাহী হয়ে লড়াই। ইউরোপ, এশিয়া এবং আমেরিকার ঐতিহাসিক বিশ্ববিদ্যালয় শহরে বিশ্বের সেরা তরুণদের সাথে প্রতিযোগিতা করে সম্মান বয়ে আনা।',
        'Carrying the red-and-green flag on the international stage—competing with the world’s best young talent in historic university cities across Europe, Asia and the Americas.',
      ),
      keyMilestones: [
        text(
          'স্বর্ণ, রৌপ্য, ব্রোঞ্জ পদক ও সম্মাননা (Honorable Mention)',
          'Gold, silver, bronze medals & Honorable Mentions',
        ),
        text(
          'বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়ে উচ্চশিক্ষার সুবর্ণ সুযোগ',
          'Pathways to higher study at world-leading universities',
        ),
        text(
          'আন্তর্জাতিক বিজ্ঞানী ও গবেষক সম্প্রদায়ের সাথে আজীবন সংযোগ',
          'Lifelong links with the international science and research community',
        ),
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
            <span>{text('অলিম্পিয়াড পরিক্রমা', 'Olympiad pathway')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {text('শ্রেণিকক্ষ থেকে শুরু করে', 'From the classroom to')} <br />
            <span className="text-blue-900">
              {text('আন্তর্জাতিক পোডিয়াম পর্যন্ত।', 'the international podium.')}
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {text(
              'বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াডের প্রতিটি স্তর শিক্ষার্থীদের কীভাবে ধাপে ধাপে গড়ে তোলে ও বৈশ্বিক মানে উন্নীত করে তা জেনে নিন।',
              'See how each stage of the Bangladesh Physics Olympiad builds students step by step toward a global standard.',
            )}
          </p>
        </div>

        {/* Step Selector Horizontal Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {steps.map((item, idx) => {
            const isCurrent = selectedStep === idx;
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => setSelectedStep(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all border ${
                  isCurrent
                    ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10'
                    : 'bg-white/70 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {text('ধাপ', 'Step')} {item.step}
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
                      {text('পর্ব', 'Stage')} {steps[selectedStep].step} / {text('০৬', '06')}
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
                    {text('মূল লক্ষ্য ও মাইলফলকসমূহ:', 'Key goals & milestones:')}
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

              <div className="w-full lg:w-72 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shrink-0">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {text('অলিম্পিয়াড নেভিগেশন', 'Olympiad navigation')}
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div>
                    {text('আসন্ন লক্ষ্য:', 'Upcoming goal:')}{' '}
                    <span className="font-semibold text-blue-600">
                      {text('১৭তম বিডিএফও ২০২৬', '17th BdPhO 2026')}
                    </span>
                  </div>
                  <div>
                    {text('নির্বাচন পরিধি:', 'Selection scope:')}{' '}
                    <span className="font-semibold text-slate-900">
                      {text('৬৪ জেলা', '64 districts')}
                    </span>
                  </div>
                  <div>
                    {text('চূড়ান্ত দল:', 'Final team:')}{' '}
                    <span className="font-semibold text-amber-700">
                      {text('৫ জন IPhO + ৮ জন APhO', '5 IPhO + 8 APhO')}
                    </span>
                  </div>
                </div>

                {selectedStep < steps.length - 1 ? (
                  <button
                    onClick={() => setSelectedStep(selectedStep + 1)}
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
                  >
                    {text('পরবর্তী ধাপ দেখুন', 'View next step')} <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/categories"
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition text-center block shadow-sm"
                  >
                    {text('আপনার ক্যাটাগরি বেছে নিন', 'Choose your category')}
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
