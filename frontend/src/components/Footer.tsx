'use client';

import React from 'react';
import Link from 'next/link';
import { BdphoLogo } from './BdphoLogo';
import { BDPHO_METRICS, PARTNERS } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

const PARTNER_ROLE_EN: Record<string, string> = {
  'টাইটেল স্পন্সর': 'Title Sponsor',
  'প্রধান মিডিয়া পার্টনার': 'Lead Media Partner',
  'একাডেমিক সহযোগী': 'Academic Partner',
  'ল্যাবরেটরি সহযোগী': 'Laboratory Partner',
  'বিজ্ঞান পৃষ্ঠপোষক': 'Science Patron',
  'সরকারি পৃষ্ঠপোষক': 'Government Patron',
};

const PARTNER_LOGO_EN: Record<string, string> = {
  'প্রথম আলো': 'Prothom Alo',
};

export const Footer: React.FC = () => {
  const { L } = useLanguage();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/90 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Strategic Institutional Partners */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-6">
            {L(
              'একাডেমিক, সরকারি ও মিডিয়া সহযোগী প্রতিষ্ঠানসমূহ',
              'Academic, Government & Media Partner Institutions'
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center items-center">
            {PARTNERS.map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 transition"
              >
                <div className="font-bold text-slate-900 text-xs mb-0.5">
                  {L(p.logoText, PARTNER_LOGO_EN[p.logoText] ?? p.logoText)}
                </div>
                <div className="text-[10px] text-slate-500">
                  {L(p.role, PARTNER_ROLE_EN[p.role] ?? p.role)}
                </div>
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
              {L(
                'বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (বিডিএফও) দেশের শিক্ষার্থীদের মধ্যে বৈজ্ঞানিক জিজ্ঞাসা, গাণিতিক যুক্তি ও উদ্ভাবনী চিন্তা বিকাশের জন্য নিবেদিত জাতীয় একাডেমি। আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) এবং এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO)-এ বাংলাদেশের মেধার পতাকা সমুন্নত রাখতে আমরা নিরলসভাবে কাজ করে যাচ্ছি।',
                'The Bangladesh Physics Olympiad (BdPhO) is the national academy dedicated to fostering scientific curiosity, mathematical reasoning, and innovative thinking among students across the country. We work tirelessly to keep Bangladesh’s banner of talent flying high at the International Physics Olympiad (IPhO) and the Asian Physics Olympiad (APhO).'
              )}
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-500">
              <span className="text-xs">{L('অনুমোদন:', 'Accreditation:')}</span>
              <span className="font-bold text-slate-800">
                {L('IPhO ও APhO-এর অফিসিয়াল সদস্য', 'Official member of IPhO & APhO')}
              </span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {L('অলিম্পিয়াড তথ্য', 'Olympiad Info')}
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/about" className="hover:text-blue-700 transition">
                  {L('বিডিএফও পরিচিতি', 'About BdPhO')}
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-blue-700 transition">
                  {L('ক্যাটাগরি A, B, C, D বিবরণ', 'Categories A, B, C, D details')}
                </Link>
              </li>
              <li>
                <Link href="/past-papers" className="hover:text-blue-700 transition">
                  {L('বিগত প্রশ্নপত্র ও সমাধান', 'Past papers & solutions')}
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="hover:text-blue-700 transition">
                  {L('আইপিএইচও মানসম্পন্ন সিলেবাস', 'IPhO-standard syllabus')}
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-blue-700 transition">
                  {L('আন্তর্জাতিক হল অব ফেম', 'International Hall of Fame')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Activities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {L('শিক্ষার্থী সেবা', 'Student Services')}
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/admit-card" className="hover:text-blue-700 transition">
                  {L('প্রবেশপত্র ডাউনলোড', 'Download admit card')}
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-700 transition">
                  {L('শিক্ষার্থী পোর্টাল লগইন', 'Student portal login')}
                </Link>
              </li>
              <li>
                <Link href="/tech-fair" className="hover:text-blue-700 transition">
                  {L('বিজ্ঞান ও প্রযুক্তি মেলা', 'Science & Technology Fair')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-700 transition">
                  {L('আলোকচিত্র গ্যালারি', 'Photo gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700 transition">
                  {L('হেল্প ডেস্ক ও সাধারণ জিজ্ঞাসা (FAQ)', 'Help desk & FAQ')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: National Secretariat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {L('কেন্দ্রীয় সচিবালয়', 'Central Secretariat')}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {L('বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড', 'Bangladesh Physics Olympiad')}
              <br />
              {L('বাড়ি নং ৪/৯, নিচতলা', 'House No. 4/9, Ground Floor')}
              <br />
              {L('ব্লক # এফ, লালমাটিয়া, ঢাকা-১২০৭', 'Block # F, Lalmatia, Dhaka-1207')}
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
              {L(
                'সময়সূচি: রবি – বৃহস্পতি, সকাল ১০টা – বিকাল ৫টা',
                'Hours: Sun – Thu, 10:00 AM – 5:00 PM'
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            {L(
              '© ২০১১–২০২৬ বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (বিডিএফও)। সর্বস্বত্ব সংরক্ষিত।',
              '© 2011–2026 Bangladesh Physics Olympiad (BdPhO). All rights reserved.'
            )}
          </div>
          <div className="flex items-center gap-4">
            <span>{L('দ্বিভাষিক প্রশ্নপদ্ধতি', 'Bilingual question papers')}</span>
            <span>•</span>
            <span>{L('বাংলা সংস্করণ অগ্রাধিকারযোগ্য', 'Bangla version takes precedence')}</span>
            <span>•</span>
            <Link href="/" className="hover:text-slate-900 font-semibold transition">
              {L('উপরে যান ↑', 'Back to top ↑')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
