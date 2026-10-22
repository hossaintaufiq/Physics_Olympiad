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
    // Redirect to official BdPhO authentication endpoint
    window.open(BDPHO_METRICS.loginPortal, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl glass-panel bg-slate-900/95 border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <LogIn className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              BdPhO Student Portal
            </h2>
            <p className="text-xs text-slate-400">
              Access your marksheet, certificate & round status
            </p>
          </div>
        </div>

        <div className="flex gap-2 p-1 rounded-xl bg-slate-950/80 border border-slate-800 mb-5">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition ${
              role === 'student'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Student Participant
          </button>
          <button
            type="button"
            onClick={() => setRole('coordinator')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition ${
              role === 'coordinator'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Regional Coordinator
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentRegId" className="block text-xs font-medium text-slate-300 mb-1">
              Registration Number / Username
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
              <input
                id="studentRegId"
                type="text"
                value={regId}
                onChange={(e) => setRegId(e.target.value)}
                placeholder="e.g. 17BDPHO-89234"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-white placeholder-slate-500 text-sm outline-none transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="studentPasswordInput" className="block text-xs font-medium text-slate-300 mb-1">
              Secret Password
            </label>
            <div className="relative">
              <Key className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
              <input
                id="studentPasswordInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your confidential password"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-white placeholder-slate-500 text-sm outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-500/20"
          >
            Continue to Official Portal
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-5 p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            Official authentication is maintained directly on the encrypted Bangladesh Physics Olympiad server at{' '}
            <span className="text-slate-300 font-mono">bdpho.org/login</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
