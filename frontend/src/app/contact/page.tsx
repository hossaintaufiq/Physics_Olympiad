'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { FaqSection } from '@/components/FaqSection';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-slate-50 border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <Mail className="w-3.5 h-3.5 text-blue-700" />
              <span>জাতীয় সচিবালয় ও হেল্পডেস্ক</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              যোগাযোগ ও সচরাচর জিজ্ঞাসা
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড কেন্দ্রীয় পরিচালনা পর্ষদের সাথে সরাসরি যোগাযোগ করুন অথবা সচরাচর জিজ্ঞাসায় দ্রুত প্রশ্নের সমাধান খুঁজে নিন।
            </p>
          </div>
        </section>

        {/* Contact Desk */}
        <ContactSection />

        {/* Searchable FAQ Section */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
