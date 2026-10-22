'use client';

import React, { useState, useEffect } from 'react';
import { Atom, Menu, X, Download, LogIn, Sparkles, Bell, ExternalLink, ChevronDown } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

interface NavbarProps {
  onOpenAdmitModal: () => void;
  onOpenLoginModal: () => void;
  onOpenRegisterModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmitModal,
  onOpenLoginModal,
  onOpenRegisterModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Categories', href: '#categories' },
    { name: 'Past Papers', href: '#papers' },
    { name: 'Syllabus', href: '#syllabus' },
    { name: 'Hall of Fame', href: '#hall-of-fame' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Tech Fair', href: '#tech-fair' },
    { name: 'Committee', href: '#committee' },
    { name: 'Notices', href: '#notices' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Advisory Ticker Strip */}
      <div className="bg-gradient-to-r from-sky-950/90 via-slate-900 to-indigo-950/90 border-b border-white/5 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-[10px] tracking-wide uppercase">
              <Sparkles className="w-3 h-3" /> Official Notice
            </span>
            <span className="truncate">
              17th BdPhO National & Regional Rounds 2026 • Question papers bilingual (Bengali & English)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-200 transition">Email: {BDPHO_METRICS.contactEmail}</span>
            <span className="text-slate-600">|</span>
            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 flex items-center gap-1 font-medium transition"
            >
              Official Server <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-panel bg-slate-950/85 shadow-lg shadow-black/40 border-b border-white/10'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group text-left"
            aria-label="Bangladesh Physics Olympiad Home"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-sky-400/30 group-hover:border-sky-400 transition-colors shadow-lg shadow-sky-500/10">
              <Atom className="w-6 h-6 text-sky-400 group-hover:rotate-45 transition-transform duration-700" />
              <div className="absolute inset-0 rounded-2xl bg-sky-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-sky-300 transition-colors font-mono">
                  BdPhO
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  17th
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-none tracking-tight">
                Bangladesh Physics Olympiad
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenAdmitModal}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Admit Card</span>
            </button>

            <button
              onClick={onOpenLoginModal}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-indigo-400" />
              <span>Student Portal</span>
            </button>

            <button
              onClick={onOpenRegisterModal}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition shadow-md shadow-amber-500/20 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Register 2026</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-6 glass-panel bg-slate-950/95 border-b border-white/10 animate-fadeIn">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-left rounded-lg text-slate-300 hover:text-white hover:bg-white/10 text-sm font-medium transition"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenRegisterModal(); }}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                Register for 17th BdPhO
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenAdmitModal(); }}
                  className="py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-sky-400" />
                  Admit Card
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenLoginModal(); }}
                  className="py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-indigo-400" />
                  Student Login
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
