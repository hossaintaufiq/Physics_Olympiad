'use client';

import React, { useState } from 'react';
import { X, UserPlus, CheckCircle2, ArrowRight, ExternalLink, School, CreditCard, Sparkles } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [selectedClass, setSelectedClass] = useState<string>('9');

  if (!isOpen) return null;

  const getRecommendedCategory = (cls: string) => {
    const num = parseInt(cls, 10);
    if (num <= 6) return { cat: 'Category A', title: 'Primary / Junior Starter (Classes 5-6)', color: 'text-emerald-400' };
    if (num <= 8) return { cat: 'Category B', title: 'Junior Secondary (Classes 7-8)', color: 'text-cyan-400' };
    if (num <= 10) return { cat: 'Category C', title: 'Secondary (Classes 9-10 / SSC / O-Levels)', color: 'text-amber-400' };
    return { cat: 'Category D', title: 'Higher Secondary (Classes 11-12 / HSC / A-Levels)', color: 'text-purple-400' };
  };

  const currentCat = getRecommendedCategory(selectedClass);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-2xl glass-panel bg-slate-900/95 border border-amber-500/30 shadow-2xl shadow-amber-500/10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <UserPlus className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3" /> Registration Open • 17th BdPhO
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              National Registration Guide
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-6">
          Registration for the 17th Bangladesh Physics Olympiad is currently active across all 64 districts. Follow these quick steps to ensure your registration is successful.
        </p>

        {/* Step 1: Category Selector */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-4">
          <label htmlFor="regClassSelect" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Step 1: Select Your Current Academic Class
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-3">
            {['5', '6', '7', '8', '9', '10', '11', '12'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedClass(c)}
                className={`py-2 rounded-lg font-bold text-xs transition border ${
                  selectedClass === c
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                Class {c}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <div>
              <span className="text-xs text-slate-400">Your Competition Category:</span>
              <div className={`font-bold text-sm ${currentCat.color}`}>
                {currentCat.cat} — {currentCat.title}
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-slate-200">
              Eligible
            </span>
          </div>
        </div>

        {/* Step 2: Information Checklist */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-5 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Step 2: Prepare the Required Credentials
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Name (as per School Records)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Institution Name & District</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Active Guardian Mobile Number</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Valid Student Email Address</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={BDPHO_METRICS.officialPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20"
          >
            Open Official Registration Portal <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition"
          >
            Review Syllabus First
          </button>
        </div>
      </div>
    </div>
  );
};
