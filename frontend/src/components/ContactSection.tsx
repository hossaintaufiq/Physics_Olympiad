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
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
                National Secretariat & <br />
                <span className="text-blue-900">
                  Regional Inquiries.
                </span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Have questions regarding regional center allocations, school registrations, admit card corrections, or sponsorship partnerships? Reach out to the national coordination team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    National Office Location
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
                    Official Email Support
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
                    Secretariat Hours
                  </div>
                  <p className="text-xs text-slate-600">
                    Sunday – Thursday: 10:00 AM – 05:00 PM (BST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Send an Inquiry to the Academic Team
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out this form for academic questions, institutional registration queries, or volunteer inquiries.
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Message Dispatched!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. The Bangladesh Physics Olympiad coordination desk will review your inquiry and follow up at your provided email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactFullNameLight" className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contactFullNameLight"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abrar Fahad"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmailAddressLight" className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contactEmailAddressLight"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. student@school.edu.bd"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactCategorySelectLight" className="block text-xs font-medium text-slate-700 mb-1">
                      Category Track
                    </label>
                    <select
                      id="contactCategorySelectLight"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    >
                      <option value="Category A">Category A (Classes 5-6)</option>
                      <option value="Category B">Category B (Classes 7-8)</option>
                      <option value="Category C">Category C (Classes 9-10)</option>
                      <option value="Category D">Category D (Classes 11-12)</option>
                      <option value="Teacher/Mentor">Teacher / Mentor</option>
                      <option value="Media/Sponsor">Media / Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactSubjectLineLight" className="block text-xs font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="contactSubjectLineLight"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Regional Center Clarification"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessageAreaLight" className="block text-xs font-medium text-slate-700 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    id="contactMessageAreaLight"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none focus:border-blue-500 transition resize-none shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md shadow-blue-500/20"
                >
                  <Send className="w-4 h-4 text-white" />
                  Dispatch Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
