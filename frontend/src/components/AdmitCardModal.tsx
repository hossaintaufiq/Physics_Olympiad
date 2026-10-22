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
      // If student enters any ID or starts with 2026/BDPHO or test
      setFoundCard(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl p-6 sm:p-8 rounded-2xl glass-panel bg-slate-900/95 border border-sky-500/30 shadow-2xl shadow-sky-500/10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Admit Card Verification Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
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
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-sm'
                  : 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:bg-slate-800'
              }`}
            >
              Regional Round
            </button>
            <button
              type="button"
              onClick={() => { setRound('national'); setHasSearched(false); }}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all border ${
                round === 'national'
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-sm'
                  : 'bg-slate-800/50 text-slate-400 border-slate-700/50 hover:bg-slate-800'
              }`}
            >
              National Round
            </button>
          </div>

          <div>
            <label htmlFor="modalRegId" className="block text-xs font-medium text-slate-300 mb-1.5">
              Registration ID / Roll Number
            </label>
            <div className="relative">
              <input
                id="modalRegId"
                type="text"
                value={regId}
                onChange={(e) => setRegId(e.target.value)}
                placeholder="e.g. BDPHO-2026-1482 or your registration number"
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white placeholder-slate-500 text-sm outline-none transition"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 px-4 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full" />
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
          <div className="mt-5 p-4 rounded-xl bg-slate-950/60 border border-emerald-500/40 text-left space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Valid Registration Found
              </span>
              <span className="text-xs text-slate-400 font-mono">17th BdPhO • {round.toUpperCase()}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-400 block">Candidate ID:</span>
                <span className="font-semibold text-white font-mono">{regId.toUpperCase()}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Exam Cluster:</span>
                <span className="font-semibold text-white">Dhaka Regional Cluster 01</span>
              </div>
              <div>
                <span className="text-slate-400 block">Assigned Center:</span>
                <span className="font-semibold text-white">Curzon Hall, University of Dhaka</span>
              </div>
              <div>
                <span className="text-slate-400 block">Reporting Time:</span>
                <span className="font-semibold text-amber-300">08:30 AM (Exam: 09:30 AM)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={BDPHO_METRICS.admitCardPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs text-center flex items-center justify-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                Print / Download Admit PDF
              </a>
              <a
                href={BDPHO_METRICS.admitCardPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs flex items-center gap-1 transition"
              >
                Official Portal <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        <div className="mt-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300/90 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>
            Admit cards must be presented in printed physical format alongside your institutional student ID card on the exam day. For direct official validation, visit{' '}
            <a
              href={BDPHO_METRICS.admitCardPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-amber-200"
            >
              admin.bdpho.org/admit-card
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};
