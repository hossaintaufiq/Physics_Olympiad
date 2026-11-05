'use client';

import React, { useState } from 'react';
import { X, UserPlus, CheckCircle2, ExternalLink } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
  const [selectedClass, setSelectedClass] = useState<string>('9');

  if (!isOpen) return null;

  const getRecommendedCategory = (cls: string) => {
    const num = parseInt(cls, 10);
    if (num <= 6)
      return {
        cat: text('ক্যাটাগরি এ', 'Category A'),
        title: text(
          'প্রাইমারি / জুনিয়র স্টার্টার (৫ম – ৬ষ্ঠ শ্রেণি)',
          'Primary / Junior Starter (Classes 5–6)',
        ),
        color: 'text-emerald-700',
      };
    if (num <= 8)
      return {
        cat: text('ক্যাটাগরি বি', 'Category B'),
        title: text('জুনিয়র সেকেন্ডারি (৭ম – ৮ম শ্রেণি)', 'Junior secondary (Classes 7–8)'),
        color: 'text-cyan-700',
      };
    if (num <= 10)
      return {
        cat: text('ক্যাটাগরি সি', 'Category C'),
        title: text(
          'সেকেন্ডারি (৯ম – ১০ম শ্রেণি / এসএসসি / ও-লেভেল)',
          'Secondary (Classes 9–10 / SSC / O-Level)',
        ),
        color: 'text-amber-700',
      };
    return {
      cat: text('ক্যাটাগরি ডি', 'Category D'),
      title: text(
        'হায়ার সেকেন্ডারি (১১শ – ১২শ শ্রেণি / এইচএসসি / এ-লেভেল)',
        'Higher secondary (Classes 11–12 / HSC / A-Level)',
      ),
      color: 'text-purple-700',
    };
  };

  const currentCat = getRecommendedCategory(selectedClass);

  const classLabel = (c: string) => {
    const bn =
      c === '5'
        ? '৫ম'
        : c === '6'
          ? '৬ষ্ঠ'
          : c === '7'
            ? '৭ম'
            : c === '8'
              ? '৮ম'
              : c === '9'
                ? '৯ম'
                : c === '10'
                  ? '১০ম'
                  : c === '11'
                    ? '১১শ'
                    : '১২শ';
    const en =
      c === '5'
        ? '5th'
        : c === '6'
          ? '6th'
          : c === '7'
            ? '7th'
            : c === '8'
              ? '8th'
              : c === '9'
                ? '9th'
                : c === '10'
                  ? '10th'
                  : c === '11'
                    ? '11th'
                    : '12th';
    return text(bn, en);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={text('মডাল বন্ধ করুন', 'Close modal')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700">
            <UserPlus className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-semibold uppercase tracking-wider mb-1">
              {text('নিবন্ধন উন্মুক্ত • ১৭তম বিডিএফও', 'Registration open • 17th BdPhO')}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {text('জাতীয় নিবন্ধন নির্দেশিকা', 'National registration guide')}
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6">
          {text(
            '১৭তম বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াডের প্রাথমিক নিবন্ধন দেশব্যাপী ৬৪টি জেলায় উন্মুক্ত রয়েছে। সফলভাবে নিবন্ধন সম্পন্ন করতে নিচের নির্দেশিকাটি অনুসরণ করুন।',
            'Primary registration for the 17th Bangladesh Physics Olympiad is open across all 64 districts. Follow the guide below to complete registration successfully.',
          )}
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
          <label htmlFor="regClassSelectLight" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            {text('ধাপ ১: আপনার বর্তমান শ্রেণি নির্বাচন করুন', 'Step 1: Select your current class')}
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-3">
            {['5', '6', '7', '8', '9', '10', '11', '12'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedClass(c)}
                className={`py-2 rounded-xl font-bold text-xs transition border ${
                  selectedClass === c
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {classLabel(c)}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
            <div>
              <span className="text-xs text-slate-500">
                {text('আপনার জন্য নির্ধারিত ক্যাটাগরি:', 'Recommended category for you:')}
              </span>
              <div className={`font-bold text-sm ${currentCat.color}`}>
                {currentCat.cat} • {currentCat.title}
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              {text('সুপারিশকৃত', 'Recommended')}
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {text('ধাপ ২: যা যা প্রয়োজন', 'Step 2: What you need')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {text(
                  'শিক্ষাপ্রতিষ্ঠানের মূল পরিচয়পত্র বা প্রত্যয়নপত্র',
                  'Original school ID or certificate',
                )}
              </span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {text(
                  'পাসপোর্ট আকারের স্পষ্ট ডিজিটাল ছবি (জেপিজি/পিএনজি)',
                  'Clear passport-size digital photo (JPG/PNG)',
                )}
              </span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {text(
                  'অভিভাবক অথবা শিক্ষার্থীর নিজস্ব সচল মোবাইল নম্বর',
                  'Active mobile number of guardian or student',
                )}
              </span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {text(
                  'অনলাইন রেজিস্ট্রেশন ফি ও নিশ্চিতকরণ এসএমএস',
                  'Online registration fee & confirmation SMS',
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
          <a
            href={BDPHO_METRICS.officialPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md shadow-blue-500/20"
          >
            {text('অফিসিয়াল পোর্টালে সরাসরি আবেদন করুন', 'Apply directly on the official portal')}
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition border border-slate-200"
          >
            {text('বন্ধ করুন', 'Close')}
          </button>
        </div>
      </div>
    </div>
  );
};
