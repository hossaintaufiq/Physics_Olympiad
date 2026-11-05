'use client';

import React from 'react';
import { LOCALES } from '@/i18n/messages';
import { useLanguage } from '@/i18n/LanguageProvider';

/** EN (default) / বাংলা language switch — matches upstream navbar styling. */
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 ${className}`}
      role="group"
      aria-label={t.langLabel}
    >
      {LOCALES.map((item) => {
        const active = locale === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setLocale(item.id)}
            className={`min-w-[2.75rem] px-2.5 py-1.5 rounded-md text-[11px] font-bold transition ${
              active
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            aria-pressed={active}
          >
            {item.short}
          </button>
        );
      })}
    </div>
  );
}
