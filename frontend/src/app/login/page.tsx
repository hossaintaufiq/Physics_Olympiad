'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogIn, User, Key, ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export default function LoginPage() {
  const [role, setRole] = useState<'student' | 'coordinator'>('student');
  const [regId, setRegId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(BDPHO_METRICS.loginPortal, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 mb-2">
              <LogIn className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              BdPhO Student Portal
            </h1>
            <p className="text-xs text-slate-500">
              Access your marksheet, certificate & Olympiad status
            </p>
          </div>

          {/* Role Switch */}
          <div className="flex gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
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
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
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
              <label htmlFor="loginPageId" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Registration Number / Username
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  id="loginPageId"
                  type="text"
                  required
                  value={regId}
                  onChange={(e) => setRegId(e.target.value)}
                  placeholder="e.g. 17BDPHO-89234"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="loginPagePass" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Secret Password
              </label>
              <div className="relative">
                <Key className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  id="loginPagePass"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your confidential password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md shadow-indigo-500/20"
            >
              Log in to Official Server
              <ExternalLink className="w-4 h-4" />
            </button>
          </form>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              Official participant authentication and certificate verification is operated on the secure Bangladesh Physics Olympiad server at{' '}
              <a
                href={BDPHO_METRICS.loginPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                bdpho.org/login
              </a>.
            </p>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/contact"
              className="text-xs font-semibold text-slate-500 hover:text-blue-700 transition"
            >
              Forgot your Registration ID or Password? Contact Support →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
