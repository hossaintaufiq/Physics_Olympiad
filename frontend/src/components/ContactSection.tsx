'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, Globe, ExternalLink } from 'lucide-react';
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office & Liaison Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                National Secretariat & <br />
                <span className="bg-gradient-to-r from-sky-400 to-amber-300 bg-clip-text text-transparent">
                  Regional Inquiries.
                </span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Have questions regarding regional center allocations, school registrations, admit card corrections, or sponsorship partnerships? Reach out to the national coordination team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    National Office Location
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {BDPHO_METRICS.officeAddress}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Official Email Support
                  </div>
                  <a
                    href={`mailto:${BDPHO_METRICS.contactEmail}`}
                    className="text-xs text-sky-400 hover:underline font-mono"
                  >
                    {BDPHO_METRICS.contactEmail}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Secretariat Hours
                  </div>
                  <p className="text-xs text-slate-300">
                    Sunday – Thursday: 10:00 AM – 05:00 PM (BST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send an Inquiry to the Academic Team
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out this form for academic questions, institutional registration queries, or volunteer inquiries.
            </p>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. The Bangladesh Physics Olympiad coordination desk will review your inquiry and follow up at your provided email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactFullName" className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contactFullName"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abrar Fahad"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm outline-none focus:border-sky-400 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmailAddress" className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contactEmailAddress"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. student@school.edu.bd"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm outline-none focus:border-sky-400 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactCategorySelect" className="block text-xs font-medium text-slate-300 mb-1">
                      Category Track
                    </label>
                    <select
                      id="contactCategorySelect"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs sm:text-sm outline-none focus:border-sky-400 transition"
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
                    <label htmlFor="contactSubjectLine" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="contactSubjectLine"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Regional Center Clarification"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm outline-none focus:border-sky-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessageArea" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    id="contactMessageArea"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm outline-none focus:border-sky-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-sky-500/20"
                >
                  <Send className="w-4 h-4 text-slate-950" />
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
