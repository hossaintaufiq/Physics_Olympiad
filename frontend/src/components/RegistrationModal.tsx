'use client';

import React, { useState } from 'react';
import { X, UserPlus, CheckCircle2, ExternalLink } from 'lucide-react';
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
    if (num <= 6) return { cat: 'Category A', title: 'Primary / Junior Starter (Classes 5-6)', color: 'text-emerald-700' };
    if (num <= 8) return { cat: 'Category B', title: 'Junior Secondary (Classes 7-8)', color: 'text-cyan-700' };
    if (num <= 10) return { cat: 'Category C', title: 'Secondary (Classes 9-10 / SSC / O-Levels)', color: 'text-amber-700' };
    return { cat: 'Category D', title: 'Higher Secondary (Classes 11-12 / HSC / A-Levels)', color: 'text-purple-700' };
  };

  const currentCat = getRecommendedCategory(selectedClass);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700">
            <UserPlus className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-semibold uppercase tracking-wider mb-1">
              Registration Open • 17th BdPhO
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              National Registration Guide
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-6">
          Registration for the 17th Bangladesh Physics Olympiad is currently active across all 64 districts. Follow these quick steps to ensure your registration is successful.
        </p>

        {/* Step 1: Category Selector */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-4">
          <label htmlFor="regClassSelectLight" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Step 1: Select Your Current Academic Class
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
                Class {c}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
            <div>
              <span className="text-xs text-slate-500">Your Competition Category:</span>
              <div className={`font-bold text-sm ${currentCat.color}`}>
                {currentCat.cat} — {currentCat.title}
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
              Eligible
            </span>
          </div>
        </div>

        {/* Step 2: Information Checklist */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-5 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
            Step 2: Prepare the Required Credentials
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full Name (as per School Records)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Institution Name & District</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Active Guardian Mobile Number</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
            className="flex-1 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-md shadow-blue-500/20"
          >
            Open Official Registration Portal <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
          >
            Review Syllabus First
          </button>
        </div>
      </div>
    </div>
  );
};
