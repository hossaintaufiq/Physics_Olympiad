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
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600">
            <LogIn className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              BdPhO Student Portal
            </h2>
            <p className="text-xs text-slate-500">
              Access your marksheet, certificate & round status
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
            Student Participant
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
            Regional Coordinator
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentRegIdLight" className="block text-xs font-medium text-slate-700 mb-1">
              Registration Number / Username
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                id="studentRegIdLight"
                type="text"
                value={regId}
                onChange={(e) => setRegId(e.target.value)}
                placeholder="e.g. 17BDPHO-89234"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition shadow-2xs"
              />
            </div>
          </div>

          <div>
            <label htmlFor="studentPasswordInputLight" className="block text-xs font-medium text-slate-700 mb-1">
              Secret Password
            </label>
            <div className="relative">
              <Key className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                id="studentPasswordInputLight"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your confidential password"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition shadow-2xs"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-md shadow-indigo-500/20"
          >
            Continue to Official Portal
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            Official authentication is maintained directly on the encrypted Bangladesh Physics Olympiad server at{' '}
            <span className="text-slate-800 font-mono font-semibold">bdpho.org/login</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
