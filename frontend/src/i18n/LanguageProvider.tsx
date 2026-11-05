'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
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
    document.documentElement.lang = locale;
  } catch {
    /* ignore */
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = readStoredLocale();
    setLocaleState(stored);
    persistLocale(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: messages[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
