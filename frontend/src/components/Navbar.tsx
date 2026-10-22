'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, LogIn, Sparkles, ExternalLink, ChevronDown } from 'lucide-react';
import { BdphoLogo } from './BdphoLogo';
import { BDPHO_METRICS } from '@/data/bdphoData';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  // Close mobile menu upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  const primaryNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Categories', href: '/categories' },
    { name: 'Past Papers', href: '/past-papers' },
    { name: 'Syllabus', href: '/syllabus' },
    { name: 'Results & Honors', href: '/results' },
    { name: 'Notices', href: '/notices' },
  ];

  const secondaryNavLinks = [
    { name: 'Central Committee', href: '/committee' },
    { name: 'Technology Fair', href: '/tech-fair' },
    { name: 'Photo Gallery', href: '/gallery' },
    { name: 'Contact & FAQ', href: '/contact' },
  ];

  const allNavLinks = [...primaryNavLinks, ...secondaryNavLinks];

  return (
    <>
      {/* Top Advisory Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold text-[10px] tracking-wider uppercase border border-blue-400/30">
              <Sparkles className="w-3 h-3 text-amber-400" /> Official
            </span>
            <span className="text-slate-300 text-[11px] sm:text-xs truncate">
              17th Bangladesh Physics Olympiad • Affiliated with IPhO & APhO
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400 shrink-0">
            <a
              href="mailto:managerbdpho@gmail.com"
              className="hover:text-white transition hidden md:inline"
            >
              managerbdpho@gmail.com
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition"
            >
              Official Server <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Handcrafted BdPhO Logo */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <BdphoLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-slate-600">
            {primaryNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-bold'
                      : 'hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* More Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${
                  secondaryNavLinks.some((l) => l.href === pathname)
                    ? 'text-blue-700 bg-blue-50 font-bold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>More</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 py-2 bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 z-50 animate-fadeIn">
                  {secondaryNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMoreDropdownOpen(false)}
                      className={`block px-4 py-2 text-xs font-semibold ${
                        pathname === link.href
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/admit-card"
              className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Admit Card</span>
            </Link>

            <Link
              href="/login"
              className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-indigo-600" />
              <span>Student Portal</span>
            </Link>

            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition shadow-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Register 2026</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 transition"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Fullscreen Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-2 gap-1 mb-4">
              {allNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-bold transition ${
                      isActive
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
              <a
                href={BDPHO_METRICS.officialPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-blue-700 flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Register for 17th BdPhO
              </a>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/admit-card"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 border border-slate-200 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  Admit Card
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 border border-slate-200 flex items-center justify-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-indigo-600" />
                  Student Portal
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
