'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, LogIn, ChevronDown, ExternalLink } from 'lucide-react';
import { BdphoLogo } from './BdphoLogo';
import { BDPHO_METRICS } from '@/data/bdphoData';

interface SubNavItem {
  name: string;
  description: string;
  href: string;
}

interface NavGroup {
  name: string;
  href?: string;
  items?: SubNavItem[];
}

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navGroups: NavGroup[] = [
    {
      name: 'মূলপাতা',
      href: '/',
    },
    {
      name: 'পরিচিতি',
      items: [
        {
          name: 'বিডিএফও পরিচিতি',
          description: 'প্রতিষ্ঠার ইতিহাস, ২০১১ থেকে জাতীয় যাত্রা ও রূপকল্প',
          href: '/about',
        },
        {
          name: 'একাডেমিক কমিটি',
          description: 'অধ্যাপক ড. মুহম্মদ জাফর ইকবাল ও জাতীয় শিক্ষকমণ্ডলী',
          href: '/committee',
        },
        {
          name: 'অলিম্পিয়াড পরিক্রমা',
          description: 'আন্তর্জাতিক আইপিএইচও পর্যন্ত উত্তরণের ৬টি ধাপ',
          href: '/about#pathway',
        },
      ],
    },
    {
      name: 'একাডেমিক্স',
      items: [
        {
          name: 'ক্যাটাগরি ও যোগ্যতা',
          description: '৫ম থেকে ১২শ শ্রেণি, ক্যালকুলেটর নিয়ম ও প্রশ্নপদ্ধতি',
          href: '/categories',
        },
        {
          name: 'অফিসিয়াল সিলেবাস',
          description: '৫টি তাত্ত্বিক ক্ষেত্র, গুরুত্বপূর্ণ সূত্র ও সহায়ক বই',
          href: '/syllabus',
        },
        {
          name: 'বিগত প্রশ্ন আর্কাইভ',
          description: '১ম থেকে ১৬তম আসরের সকল প্রশ্নপত্র ও মডেল সমাধান',
          href: '/past-papers',
        },
      ],
    },
    {
      name: 'অলিম্পিয়াড',
      items: [
        {
          name: 'বিজ্ঞপ্তি ও সার্কুলার',
          description: 'অফিসিয়াল নোটিশ, আঞ্চলিক পর্বের সময়সূচি ও নির্দেশিকা',
          href: '/notices',
        },
        {
          name: 'ফলাফল ও হল অব ফেম',
          description: 'জাতীয় মেধা তালিকা ও আন্তর্জাতিক পদকজয়ীদের গৌরবগাঁথা',
          href: '/results',
        },
        {
          name: 'প্রযুক্তি মেলা',
          description: 'শিক্ষার্থীদের ব্যবহারিক উদ্ভাবন, প্রজেক্ট ও হার্ডওয়্যার',
          href: '/tech-fair',
        },
        {
          name: 'ফটো গ্যালারি',
          description: 'জাতীয় উৎসব, ল্যাব ক্যাম্প ও আন্তর্জাতিক সফরের ছবি',
          href: '/gallery',
        },
      ],
    },
    {
      name: 'যোগাযোগ',
      href: '/contact',
    },
  ];

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Top Advisory Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 font-semibold text-[10px] tracking-wider uppercase border border-blue-700/50">
              জাতীয় প্ল্যাটফর্ম
            </span>
            <span className="text-slate-300 text-[11px] sm:text-xs truncate">
              ১৭তম বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড ২০২৬ • IPhO ও APhO অনুমোদিত
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400 shrink-0">
            <a
              href="mailto:managerbdpho@gmail.com"
              className="hover:text-white transition hidden md:inline font-mono"
            >
              managerbdpho@gmail.com
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition"
            >
              মূল সার্ভার <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Official Emblem & Title */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <BdphoLogo size="md" />
          </Link>

          {/* Desktop Clean Multi-Level Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-semibold text-slate-700">
            {navGroups.map((group) => {
              // Direct Link
              if (group.href) {
                const isActive = pathname === group.href;
                return (
                  <Link
                    key={group.name}
                    href={group.href}
                    className={`px-3.5 py-2 rounded-lg transition ${
                      isActive
                        ? 'text-blue-700 bg-blue-50 font-bold'
                        : 'hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {group.name}
                  </Link>
                );
              }

              // Dropdown Group
              const isGroupActive = group.items?.some((item) => pathname === item.href);
              const isOpen = activeDropdown === group.name;

              return (
                <div
                  key={group.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(group.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : group.name)}
                    className={`px-3.5 py-2 rounded-lg transition flex items-center gap-1 cursor-pointer ${
                      isGroupActive || isOpen
                        ? 'text-blue-700 bg-blue-50 font-bold'
                        : 'hover:text-slate-900 hover:bg-slate-50'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{group.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-700' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Subnav Dropdown Panel */}
                  {isOpen && group.items && (
                    <div className="absolute left-0 mt-1.5 w-72 p-2 bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/60 z-50">
                      <div className="space-y-1">
                        {group.items.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block p-3 rounded-xl transition ${
                                isSubActive
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'hover:bg-slate-50 text-slate-900'
                              }`}
                            >
                              <div className="text-xs font-bold text-slate-900 leading-snug">
                                {subItem.name}
                              </div>
                              <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                                {subItem.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/admit-card"
              className="px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>প্রবেশপত্র</span>
            </Link>

            <Link
              href="/login"
              className="px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-slate-500" />
              <span>লগইন</span>
            </Link>

            <a
              href={BDPHO_METRICS.officialPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 transition shadow-xs flex items-center gap-1.5"
            >
              <span>নিবন্ধন ২০২৬</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 transition"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Categorized Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
            <div className="space-y-4 mb-5">
              {navGroups.map((group) => {
                if (group.href) {
                  return (
                    <Link
                      key={group.name}
                      href={group.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-sm font-bold ${
                        pathname === group.href ? 'text-blue-700' : 'text-slate-900'
                      }`}
                    >
                      {group.name}
                    </Link>
                  );
                }

                return (
                  <div key={group.name} className="space-y-2 border-t border-slate-100 pt-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      {group.name}
                    </div>
                    <div className="grid grid-cols-1 gap-1 pl-2">
                      {group.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`py-1.5 text-xs font-semibold ${
                            pathname === subItem.href
                              ? 'text-blue-700 font-bold'
                              : 'text-slate-700 hover:text-blue-600'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-slate-200">
              <a
                href={BDPHO_METRICS.officialPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-blue-700 hover:bg-blue-800 transition text-center shadow-xs"
              >
                ১৭তম বিডিএফও ২০২৬-এর জন্য নিবন্ধন
              </a>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/admit-card"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 border border-slate-200 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  প্রবেশপত্র ডাউনলোড
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 border border-slate-200 flex items-center justify-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-slate-500" />
                  পোর্টাল লগইন
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
