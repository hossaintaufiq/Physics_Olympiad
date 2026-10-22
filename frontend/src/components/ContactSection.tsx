'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { BDPHO_METRICS } from '@/data/bdphoData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Category C',
    subject: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', category: 'Category C', subject: '', message: '' });
      setIsSent(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office & Liaison Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>যোগাযোগ করুন</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
                জাতীয় সচিবালয় ও <br />
                <span className="text-blue-900">
                  আঞ্চলিক যোগাযোগ কেন্দ্র।
                </span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                আঞ্চলিক কেন্দ্র বণ্টন, প্রাতিষ্ঠানিক নিবন্ধন, প্রবেশপত্র সংক্রান্ত কোনো জিজ্ঞাসা কিংবা সার্বিক সহযোগিতার জন্য জাতীয় অলিম্পিয়াড সচিবালয়ের সাথে যোগাযোগ করুন।
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    কেন্দ্রীয় সচিবালয়ের ঠিকানা
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {BDPHO_METRICS.officeAddress}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    অফিসিয়াল ইমেইল সাপোর্ট
                  </div>
                  <a
                    href={`mailto:${BDPHO_METRICS.contactEmail}`}
                    className="text-xs text-blue-600 hover:underline font-mono font-semibold"
                  >
                    {BDPHO_METRICS.contactEmail}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    সচিবালয়ের সময়সূচি
                  </div>
                  <p className="text-xs text-slate-600">
                    রবিবার – বৃহস্পতিবার: সকাল ১০:০০ – বিকাল ০৫:০০ (বাংলাদেশ সময়)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              একাডেমিক টিমের নিকট বার্তা পাঠান
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              একাডেমিক কোনো জিজ্ঞাসা, প্রাতিষ্ঠানিক নিবন্ধন কিংবা স্বেচ্ছাসেবক হিসেবে অংশগ্রহণের জন্য ফরমটি পূরণ করুন।
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">বার্তা প্রেরিত হয়েছে!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  যোগাযোগের জন্য ধন্যবাদ। বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড টিম আপনার বার্তা পর্যালোচনা করে দ্রুত ইমেইলে উত্তর প্রদান করবে।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactFullNameLight" className="block text-xs font-medium text-slate-700 mb-1">
                      আপনার পূর্ণ নাম *
                    </label>
                    <input
                      id="contactFullNameLight"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="যেমন: আবরার ফাহাদ"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmailAddressLight" className="block text-xs font-medium text-slate-700 mb-1">
                      ইমেইল ঠিকানা *
                    </label>
                    <input
                      id="contactEmailAddressLight"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="যেমন: student@school.edu.bd"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactCategorySelectLight" className="block text-xs font-medium text-slate-700 mb-1">
                      ক্যাটাগরি বা ভূমিকা
                    </label>
                    <select
                      id="contactCategorySelectLight"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    >
                      <option value="Category A">ক্যাটাগরি এ (৫ম-৬ষ্ঠ শ্রেণি)</option>
                      <option value="Category B">ক্যাটাগরি বি (৭ম-৮ম শ্রেণি)</option>
                      <option value="Category C">ক্যাটাগরি সি (৯ম-১০ম শ্রেণি)</option>
                      <option value="Category D">ক্যাটাগরি ডি (১১শ-১২শ শ্রেণি)</option>
                      <option value="Teacher/Mentor">শিক্ষক / মেন্টর</option>
                      <option value="Media/Sponsor">গণমাধ্যম / পার্টনারশিপ</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactSubjectLineLight" className="block text-xs font-medium text-slate-700 mb-1">
                      বিষয়
                    </label>
                    <input
                      id="contactSubjectLineLight"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="যেমন: আঞ্চলিক কেন্দ্র সম্পর্কে তথ্য"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessageAreaLight" className="block text-xs font-medium text-slate-700 mb-1">
                    আপনার বার্তা / জিজ্ঞাসা *
                  </label>
                  <textarea
                    id="contactMessageAreaLight"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="আপনার জিজ্ঞাসা বা বিস্তারিত তথ্য এখানে লিখুন..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition resize-none shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md shadow-blue-500/20"
                >
                  <Send className="w-4 h-4 text-white" />
                  বার্তা প্রেরণ করুন
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
