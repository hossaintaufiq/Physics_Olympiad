'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Download, Search, CheckCircle, AlertCircle, FileText, ExternalLink, Printer } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export default function AdmitCardPage() {
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
              <span>Official Admit Card Portal</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Download Your Olympiad Admit Card
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Verify your registration status, find your assigned examination center and roll number, and generate your printable admit pass for the 17th BdPhO.
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
                    Candidate Lookup
                  </h2>
                  <p className="text-xs text-slate-500">
                    Enter the Registration ID issued during sign-up
                  </p>
                </div>
              </div>

              <form onSubmit={handleSearch} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Select Examination Round
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
                      Regional Round (16 Clusters)
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
                      National Round (Dhaka)
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="admitRegIdInput" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Registration ID / Roll Number
                  </label>
                  <div className="relative">
                    <input
                      id="admitRegIdInput"
                      type="text"
                      required
                      value={regId}
                      onChange={(e) => setRegId(e.target.value)}
                      placeholder="e.g. BDPHO-2026-4821 or 17BDPHO-9201"
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
                          Verify
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
                      Candidate Confirmed
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      17th BdPhO • {round.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Candidate ID:</span>
                      <span className="font-bold text-slate-900 font-mono">{regId.toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Exam Cluster:</span>
                      <span className="font-bold text-slate-900">Dhaka Regional Cluster 01</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Examination Center:</span>
                      <span className="font-bold text-slate-900">Curzon Hall, University of Dhaka</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Reporting Time:</span>
                      <span className="font-bold text-amber-700">08:30 AM (Exam Starts: 09:30 AM)</span>
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
                      Print / Download Official Admit PDF
                    </a>
                    <a
                      href={BDPHO_METRICS.admitCardPortal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition border border-slate-200"
                    >
                      Official Admin Server <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Directives Note */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                <p>
                  <strong>Mandatory Exam Instructions:</strong> You must carry a printed physical copy of this admit card alongside your official school identity card to the examination hall. Digital copies on smartphones will not be permitted inside the testing halls.
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
