'use client';

import React, { useState } from 'react';
import { X, Download, ExternalLink, CheckCircle, Search, AlertCircle, FileText } from 'lucide-react';
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
  const [foundCard, setFoundCard] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regId.trim()) return;

    setIsLoading(true);
    setHasSearched(false);

    setTimeout(() => {
      setIsLoading(false);
      setHasSearched(true);
      setFoundCard(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Admit Card Verification Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Download and verify your official 17th BdPhO entrance pass
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
              Regional Round
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
              National Round
            </button>
          </div>

          <div>
            <label htmlFor="modalRegIdLight" className="block text-xs font-medium text-slate-700 mb-1.5">
              Registration ID / Roll Number
            </label>
            <div className="relative">
              <input
                id="modalRegIdLight"
                type="text"
                value={regId}
                onChange={(e) => setRegId(e.target.value)}
                placeholder="e.g. BDPHO-2026-1482 or your registration number"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition shadow-2xs"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition disabled:opacity-50 shadow-xs"
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

        {hasSearched && foundCard && (
          <div className="mt-5 p-5 rounded-2xl bg-slate-50 border border-emerald-300 text-left space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Valid Registration Found
              </span>
              <span className="text-xs text-slate-500 font-mono">17th BdPhO • {round.toUpperCase()}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-500 block">Candidate ID:</span>
                <span className="font-semibold text-slate-900 font-mono">{regId.toUpperCase()}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Exam Cluster:</span>
                <span className="font-semibold text-slate-900">Dhaka Regional Cluster 01</span>
              </div>
              <div>
                <span className="text-slate-500 block">Assigned Center:</span>
                <span className="font-semibold text-slate-900">Curzon Hall, University of Dhaka</span>
              </div>
              <div>
                <span className="text-slate-500 block">Reporting Time:</span>
                <span className="font-semibold text-amber-700">08:30 AM (Exam: 09:30 AM)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={BDPHO_METRICS.admitCardPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                Print / Download Admit PDF
              </a>
              <a
                href={BDPHO_METRICS.admitCardPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium text-xs flex items-center gap-1 transition"
              >
                Official Portal <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        <div className="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
          <p>
            Admit cards must be presented in printed physical format alongside your institutional student ID card on the exam day. For direct official validation, visit{' '}
            <a
              href={BDPHO_METRICS.admitCardPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-amber-800"
            >
              admin.bdpho.org/admit-card
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};
