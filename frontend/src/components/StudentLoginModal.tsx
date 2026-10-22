'use client';

import React, { useState } from 'react';
import { X, LogIn, ExternalLink, ShieldCheck, Key, User } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentLoginModal: React.FC<StudentLoginModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'student' | 'coordinator'>('student');
  const [regId, setRegId] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(BDPHO_METRICS.loginPortal, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="মডাল বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600">
            <LogIn className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              বিডিএফও শিক্ষার্থী পোর্টাল
            </h2>
            <p className="text-xs text-slate-500">
              মার্কশিট, সার্টিফিকেট ও অলিম্পিয়াড প্রোফাইল
            </p>
          </div>
        </div>

        <div className="flex gap-2 p-1 rounded-xl bg-slate-100 border border-slate-200 mb-5">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition ${
              role === 'student'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            শিক্ষার্থী প্রতিযোগী
          </button>
          <button
            type="button"
            onClick={() => setRole('coordinator')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition ${
              role === 'coordinator'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            আঞ্চলিক সমন্বয়ক
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modalLoginRegId" className="block text-xs font-semibold text-slate-700 mb-1">
              রেজিস্ট্রেশন নম্বর / ইউজারনেম
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                id="modalLoginRegId"
                type="text"
                required
                value={regId}
                onChange={(e) => setRegId(e.target.value)}
                placeholder="যেমন: 17BDPHO-89234"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-indigo-500 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="modalLoginPassword" className="block text-xs font-semibold text-slate-700 mb-1">
              পাসওয়ার্ড
            </label>
            <div className="relative">
              <Key className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                id="modalLoginPassword"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-indigo-500 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md shadow-indigo-500/20"
          >
            অফিসিয়াল সার্ভারে লগইন করুন
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            নিরাপদ প্রমাণীকরণ বিডিএফও কেন্দ্রীয় সার্ভার{' '}
            <strong className="text-slate-700">bdpho.org/login</strong> দ্বারা নিয়ন্ত্রিত।
          </span>
        </div>
      </div>
    </div>
  );
};
