'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  messages,
  type Locale,
  type Messages,
} from '@/i18n/messages';

type Ctx = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
  /** Pick Bangla or English string for the active locale. */
  L: (bn: string, en: string) => string;
  isSwitching: boolean;
};

const LanguageContext = createContext<Ctx | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  try {
    const stored = window.localStorage.getItem(LOCALE_COOKIE);
    if (stored === 'en' || stored === 'bn') return stored;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

function persistLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_COOKIE, locale);
    document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
    document.documentElement.lang = locale === 'bn' ? 'bn' : 'en';
    document.documentElement.dataset.locale = locale;
  } catch {
    /* ignore */
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const stored = readStoredLocale();
    setLocaleState(stored);
    persistLocale(stored);
  }, []);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      setIsSwitching(true);
      document.documentElement.classList.add('locale-switching');
      window.setTimeout(() => {
        startTransition(() => {
          setLocaleState(next);
          persistLocale(next);
        });
        window.setTimeout(() => {
          document.documentElement.classList.remove('locale-switching');
          setIsSwitching(false);
        }, 180);
      }, 90);
    },
    [locale],
  );

  const L = useCallback(
    (bn: string, en: string) => (locale === 'bn' ? bn : en),
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
      L,
      isSwitching: isSwitching || isPending,
    }),
    [locale, setLocale, L, isSwitching, isPending],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div
        className={`locale-root transition-opacity duration-200 ease-out ${
          isSwitching || isPending ? 'opacity-60' : 'opacity-100'
        }`}
        data-locale={locale}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
