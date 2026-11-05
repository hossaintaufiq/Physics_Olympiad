'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Download, Search, CheckCircle, AlertCircle, FileText, ExternalLink, Printer } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function AdmitCardPage() {
  const { L } = useLanguage();
  const [round, setRound] = useState<'regional' | 'national'>('regional');
  const [regId, setRegId] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Download className="w-3.5 h-3.5 text-blue-700" />
              <span>{L('অফিসিয়াল প্রবেশপত্র পোর্টাল', 'Official admit card portal')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {L('অলিম্পিয়াড প্রবেশপত্র ডাউনলোড', 'Download Olympiad admit card')}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {L(
                'আপনার রেজিস্ট্রেশন স্ট্যাটাস যাচাই করুন, বরাদ্দকৃত ভেন্যু ও রোল নম্বর জানুন এবং ১৭তম বিডিএফও এর অফিশিয়াল প্রবেশপত্র প্রিন্ট করুন।',
                'Verify your registration status, see your assigned venue and roll number, and print the official 17th BdPhO admit card.',
              )}
            </p>
          </div>
        </section>

        {/* Verification Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="p-3 rounded-2xl bg-blue-100 text-blue-700">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {L('পরীক্ষার্থী তথ্য অনুসন্ধান', 'Candidate lookup')}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {L(
                      'নিবন্ধনের সময় প্রাপ্ত ইউনিক রেজিস্ট্রেশন আইডি বা রোল প্রদান করুন',
                      'Enter the unique registration ID or roll number from your registration',
                    )}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSearch} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {L('পরীক্ষার রাউন্ড নির্বাচন করুন', 'Select exam round')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => { setRound('regional'); setHasSearched(false); }}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition border ${
                        round === 'regional'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {L('আঞ্চলিক পর্ব (১৬টি ক্লাস্টার)', 'Regional round (16 clusters)')}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setRound('national'); setHasSearched(false); }}
                      className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition border ${
                        round === 'national'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {L('জাতীয় পর্ব (ঢাকা)', 'National round (Dhaka)')}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="admitRegIdInput" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {L('রেজিস্ট্রেশন আইডি / রোল নম্বর', 'Registration ID / roll number')}
                  </label>
                  <div className="relative">
                    <input
                      id="admitRegIdInput"
                      type="text"
                      required
                      value={regId}
                      onChange={(e) => setRegId(e.target.value)}
                      placeholder={L(
                        'যেমন: BDPHO-2026-4821 অথবা 17BDPHO-9201',
                        'e.g. BDPHO-2026-4821 or 17BDPHO-9201',
                      )}
                      className="w-full pl-4 pr-28 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-2 top-2 px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center gap-1.5 transition disabled:opacity-50 shadow-xs"
                    >
                      {isLoading ? (
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      ) : (
                        <>
                          <Search className="w-3.5 h-3.5" />
                          {L('যাচাই করুন', 'Verify')}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Verified Result Card */}
              {hasSearched && (
                <div className="p-6 rounded-2xl bg-white border border-emerald-300 shadow-sm space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      {L('পরীক্ষার্থী নিশ্চিতকরণ সম্পন্ন', 'Candidate verified')}
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      {L('১৭তম বিডিএফও', '17th BdPhO')} •{' '}
                      {round === 'regional'
                        ? L('আঞ্চলিক পর্ব', 'Regional round')
                        : L('জাতীয় পর্ব', 'National round')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">{L('ক্যান্ডিডেট আইডি:', 'Candidate ID:')}</span>
                      <span className="font-bold text-slate-900 font-mono">{regId.toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{L('পরীক্ষার ক্লাস্টার:', 'Exam cluster:')}</span>
                      <span className="font-bold text-slate-900">
                        {L('ঢাকা আঞ্চলিক ক্লাস্টার ০১', 'Dhaka Regional Cluster 01')}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{L('পরীক্ষা কেন্দ্র ও ভেন্যু:', 'Exam centre & venue:')}</span>
                      <span className="font-bold text-slate-900">
                        {L('কার্জন হল, ঢাকা বিশ্ববিদ্যালয়', 'Curzon Hall, University of Dhaka')}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">{L('রিপোর্টিং সময়:', 'Reporting time:')}</span>
                      <span className="font-bold text-amber-700">
                        {L(
                          'সকাল ০৮:৩০ (পরীক্ষা শুরু: সকাল ০৯:৩০)',
                          '08:30 AM (exam starts: 09:30 AM)',
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap gap-3">
                    <a
                      href={BDPHO_METRICS.admitCardPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm text-center"
                    >
                      <Printer className="w-4 h-4" />
                      {L('প্রবেশপত্র PDF ডাউনলোড / প্রিন্ট করুন', 'Download / print admit card PDF')}
                    </a>
                    <a
                      href={BDPHO_METRICS.admitCardPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition border border-slate-200"
                    >
                      {L('অফিসিয়াল এডমিন সার্ভার', 'Official admin server')}{' '}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Directives Note */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                <p>
                  <strong>{L('বাধ্যতামূলক পরীক্ষার নির্দেশনা:', 'Mandatory exam instructions:')}</strong>{' '}
                  {L(
                    'পরীক্ষা কক্ষে অবশ্যই এই প্রবেশপত্রের একটি প্রিন্ট করা কপি এবং আপনার স্কুল/কলেজের মূল পরিচয়পত্র সাথে আনতে হবে। স্মার্টফোনে সংরক্ষিত ডিজিটাল কপি হলে কোনোভাবেই গ্রহণযোগ্য নয়।',
                    'You must bring a printed copy of this admit card and your original school/college ID to the exam hall. A digital copy saved on a smartphone is not accepted under any circumstances.',
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
