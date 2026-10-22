'use client';

import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle, Search, AlertCircle, FileText, Printer } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

interface AdmitCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmitCardModal: React.FC<AdmitCardModalProps> = ({ isOpen, onClose }) => {
  const [round, setRound] = useState<'regional' | 'national'>('regional');
  const [regId, setRegId] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regId.trim()) return;

    setIsLoading(true);
    setHasSearched(false);

    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="মডাল বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              প্রবেশপত্র যাচাইকরণ পোর্টাল
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              ১৭তম বিডিএফও এর অফিশিয়াল প্রবেশপত্র যাচাই ও ডাউনলোড করুন
            </p>
          </div>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => { setRound('regional'); setHasSearched(false); }}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all border ${
                round === 'regional'
                  ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              আঞ্চলিক পর্ব
            </button>
            <button
              type="button"
              onClick={() => { setRound('national'); setHasSearched(false); }}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all border ${
                round === 'national'
                  ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              জাতীয় পর্ব
            </button>
          </div>

          <div>
            <label htmlFor="admitModalIdInput" className="block text-xs font-semibold text-slate-600 mb-1">
              রেজিস্ট্রেশন আইডি / রোল নম্বর
            </label>
            <div className="relative">
              <input
                id="admitModalIdInput"
                type="text"
                required
                value={regId}
                onChange={(e) => setRegId(e.target.value)}
                placeholder="যেমন: BDPHO-2026-4821 অথবা 17BDPHO-9201"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 transition disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Search className="w-3.5 h-3.5" />
                    অনুসন্ধান
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {hasSearched && (
          <div className="mt-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                পরীক্ষার্থী নিশ্চিতকরণ সম্পন্ন
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {round === 'regional' ? 'আঞ্চলিক পর্ব' : 'জাতীয় পর্ব'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-500 block">ক্যান্ডিডেট আইডি:</span>
                <span className="font-bold text-slate-900 font-mono">{regId.toUpperCase()}</span>
              </div>
              <div>
                <span className="text-slate-500 block">পরীক্ষার ক্লাস্টার:</span>
                <span className="font-bold text-slate-900">ঢাকা আঞ্চলিক ক্লাস্টার ০১</span>
              </div>
              <div>
                <span className="text-slate-500 block">পরীক্ষা কেন্দ্র ও ভেন্যু:</span>
                <span className="font-bold text-slate-900">কার্জন হল, ঢাকা বিশ্ববিদ্যালয়</span>
              </div>
              <div>
                <span className="text-slate-500 block">রিপোর্টিং সময়:</span>
                <span className="font-bold text-amber-700">সকাল ০৮:৩০ (পরীক্ষা: ০৯:৩০)</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <a
                href={BDPHO_METRICS.admitCardPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm text-center"
              >
                <Printer className="w-4 h-4" />
                প্রবেশপত্র PDF ডাউনলোড
              </a>
              <a
                href={BDPHO_METRICS.admitCardPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition border border-slate-200"
              >
                এডমিন সার্ভার <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
          <p>
            পরীক্ষা কক্ষে অবশ্যই প্রবেশপত্রের প্রিন্ট করা কপি এবং শিক্ষাপ্রতিষ্ঠানের মূল আইডি কার্ড প্রদর্শন করতে হবে।
          </p>
        </div>
      </div>
    </div>
  );
};
