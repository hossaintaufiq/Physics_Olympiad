'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { BdphoLogo } from './BdphoLogo';
import { BDPHO_METRICS, PARTNERS } from '@/data/bdphoData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Strategic Institutional Partners */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6">
            একাডেমিক, সরকারি ও মিডিয়া সহযোগী প্রতিষ্ঠানসমূহ
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center items-center">
            {PARTNERS.map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition"
              >
                <div className="font-bold text-slate-900 text-xs mb-0.5">{p.logoText}</div>
                <div className="text-[10px] text-slate-500">{p.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <BdphoLogo size="md" />
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (বিডিএফও) দেশের শিক্ষার্থীদের মধ্যে বৈজ্ঞানিক জিজ্ঞাসা, গাণিতিক যুক্তি ও উদ্ভাবনী চিন্তা বিকাশের জন্য নিবেদিত জাতীয় একাডেমি। আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) এবং এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO)-এ বাংলাদেশের মেধার পতাকা সমুন্নত রাখতে আমরা নিরলসভাবে কাজ করে যাচ্ছি।
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-500">
              <span className="text-xs">অনুমোদন:</span>
              <span className="font-bold text-slate-800">IPhO ও APhO-এর অফিসিয়াল সদস্য</span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              অলিম্পিয়াড তথ্য
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/about" className="hover:text-blue-700 transition">
                  বিডিএফও পরিচিতি
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-blue-700 transition">
                  ক্যাটাগরি A, B, C, D বিবরণ
                </Link>
              </li>
              <li>
                <Link href="/past-papers" className="hover:text-blue-700 transition">
                  বিগত প্রশ্নপত্র ও সমাধান
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="hover:text-blue-700 transition">
                  আইপিএইচও মানসম্পন্ন সিলেবাস
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-blue-700 transition">
                  আন্তর্জাতিক হল অব ফেম
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Activities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              শিক্ষার্থী সেবা
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/admit-card" className="hover:text-blue-700 transition">
                  প্রবেশপত্র ডাউনলোড
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-700 transition">
                  শিক্ষার্থী পোর্টাল লগইন
                </Link>
              </li>
              <li>
                <Link href="/tech-fair" className="hover:text-blue-700 transition">
                  বিজ্ঞান ও প্রযুক্তি মেলা
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-700 transition">
                  আলোকচিত্র গ্যালারি
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700 transition">
                  হেল্প ডেস্ক ও সাধারণ জিজ্ঞাসা (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: National Secretariat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              কেন্দ্রীয় সচিবালয়
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড<br />
              বাড়ি নং ৪/৯, নিচতলা<br />
              ব্লক # এফ, লালমাটিয়া, ঢাকা-১২০৭
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${BDPHO_METRICS.contactEmail}`}
                className="text-blue-700 hover:underline font-mono font-semibold"
              >
                {BDPHO_METRICS.contactEmail}
              </a>
            </div>
            <div className="text-[11px] text-slate-500">
              সময়সূচি: রবি – বৃহস্পতি, সকাল ১০টা – বিকাল ৫টা
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © ২০১১–২০২৬ বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (বিডিএফও)। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-4">
            <span>দ্বিভাষিক প্রশ্নপদ্ধতি</span>
            <span>•</span>
            <span>বাংলা সংস্করণ অগ্রাধিকারযোগ্য</span>
            <span>•</span>
            <Link href="/" className="hover:text-slate-900 font-semibold transition">
              উপরে যান ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
