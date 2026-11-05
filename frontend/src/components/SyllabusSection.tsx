'use client';

import React, { useState } from 'react';
import { BookOpen, Atom, Zap, Flame, Radio, Bookmark, Cpu } from 'lucide-react';
import { SYLLABUS_DOMAINS } from '@/data/bdphoData';
import { useLanguage } from '@/i18n/LanguageProvider';

type DomainEn = {
  title: string;
  weightage: string;
  summary: string;
  subtopics: { name: string; description: string }[];
  books: { level: string }[];
};

const DOMAIN_EN: Record<string, DomainEn> = {
  mechanics: {
    title: 'Classical mechanics & kinematics',
    weightage: '30% of the core olympiad syllabus',
    summary:
      'From Galileo and Newton to Lagrangian mechanics: conservation laws, non-inertial frames and rigid-body rotation tensors.',
    subtopics: [
      {
        name: 'Kinematics & coordinate systems',
        description:
          'Position vectors, instantaneous velocity, relative velocity, projectile trajectories, radius of curvature and polar coordinates.',
      },
      {
        name: "Newton’s laws & friction",
        description:
          'Momentum conservation, static and kinetic friction, fictitious forces and Coriolis force in accelerating and rotating frames.',
      },
      {
        name: 'Work, kinetic energy & 2-D collisions',
        description:
          'Conservative force fields, potential energy, 2-D elastic and inelastic collisions, centre-of-mass frame.',
      },
      {
        name: 'Rigid-body rotation & angular momentum',
        description:
          'Moment of inertia, parallel- and perpendicular-axis theorems, angular-momentum conservation and pure rolling.',
      },
      {
        name: 'Gravitation & Keplerian orbits',
        description:
          "Newton’s universal gravitation, gravitational potential and escape speed, Kepler’s three laws.",
      },
    ],
    books: [
      { level: 'IPhO & Category D' },
      { level: 'Categories C & D' },
      { level: 'Categories B, C & D' },
    ],
  },
  electromagnetism: {
    title: 'Electromagnetic theory & circuits',
    weightage: '25% of the core olympiad syllabus',
    summary:
      'Electric fields, Gauss’s law, capacitance, DC/AC circuits, Lorentz force, Faraday induction and electromagnetic waves.',
    subtopics: [
      {
        name: 'Electrostatics & Gauss’s law',
        description:
          'Coulomb’s law, field lines, flux integrals, electric potential energy and the method of images.',
      },
      {
        name: 'Capacitance & dielectric media',
        description:
          'Parallel-plate capacitors, energy stored in fields, polarisation charge and dielectric constant.',
      },
      {
        name: 'Magnetic fields & Ampère’s law',
        description:
          'Biot–Savart law, Ampère’s circuital law, Lorentz force on charges, Hall effect and magnetic dipoles.',
      },
      {
        name: 'Electromagnetic induction & Faraday’s law',
        description:
          'Magnetic flux, motional emf, Lenz’s law, self and mutual inductance, generators.',
      },
    ],
    books: [
      { level: 'IPhO & Category D' },
      { level: 'Category D advanced' },
    ],
  },
  thermodynamics: {
    title: 'Heat & statistical physics',
    weightage: '15% of the core olympiad syllabus',
    summary:
      'Kinetic theory of ideal gases, 1st & 2nd laws of thermodynamics, phase changes, entropy and Carnot cycles.',
    subtopics: [
      {
        name: 'Kinetic theory of ideal gases',
        description:
          'Pressure from molecular collisions, equipartition, rms speed and Maxwell speed distribution.',
      },
      {
        name: 'First law & thermodynamic processes',
        description:
          'Work in expansion, internal energy, isobaric, isochoric, isothermal and adiabatic changes.',
      },
      {
        name: 'Second law, Carnot cycle & entropy',
        description:
          'Heat-engine efficiency, Carnot’s theorem, Clausius integral and entropy increase of the universe.',
      },
    ],
    books: [{ level: 'Category D' }],
  },
  'optics-waves': {
    title: 'Waves & optics',
    weightage: '15% of the core olympiad syllabus',
    summary:
      'Simple harmonic motion, superposition, wave optics, interference, diffraction gratings and optical systems.',
    subtopics: [
      {
        name: 'Simple harmonic motion & oscillators',
        description:
          'Spring–mass systems, simple and compound pendulums, damped oscillation and resonance.',
      },
      {
        name: 'Geometric optics & lens systems',
        description:
          'Snell’s law, total internal reflection, thin-lens formula, spherical and chromatic aberration.',
      },
      {
        name: 'Wave optics: interference & diffraction',
        description:
          'Young’s double-slit, thin-film interference, Fraunhofer diffraction and grating resolving power.',
      },
    ],
    books: [{ level: 'Categories C & D' }],
  },
  'modern-physics': {
    title: 'Relativity & quantum introduction',
    weightage: '15% of the core olympiad syllabus',
    summary:
      'Special relativity, photoelectric effect, de Broglie matter waves, Compton scattering and the Bohr atom.',
    subtopics: [
      {
        name: 'Special relativity',
        description:
          'Postulates of relativity, time dilation, length contraction, relativistic momentum and mass–energy equivalence.',
      },
      {
        name: 'Photons & the photoelectric effect',
        description:
          'Work function, stopping potential, Einstein’s photoelectric equation and Compton shift.',
      },
      {
        name: 'Bohr atom & de Broglie wavelength',
        description:
          'Angular-momentum quantisation, hydrogen spectrum, Rydberg constant and wave–particle duality.',
      },
    ],
    books: [{ level: 'Categories C & D' }],
  },
};

export const SyllabusSection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
  const [selectedDomainId, setSelectedDomainId] = useState<string>('mechanics');

  const activeDomain =
    SYLLABUS_DOMAINS.find((d) => d.id === selectedDomainId) || SYLLABUS_DOMAINS[0];
  const en = DOMAIN_EN[activeDomain.id];

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Atom className="w-5 h-5" />;
    }
  };

  return (
    <section id="syllabus" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>{text('পাঠ্যক্রম ও প্রামাণ্য পুস্তক তালিকা', 'Curriculum & recommended reading')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {text('পদার্থবিজ্ঞানের জ্ঞানের ভিত্তি।', 'Foundations of physics knowledge.')} <br />
            <span className="text-blue-900">
              {text(
                'আন্তর্জাতিক মানের সাথে সম্পূর্ণ সঙ্গতিপূর্ণ।',
                'Fully aligned with international standards.',
              )}
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {text(
              'আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) এর প্রমিত সিলেবাসের আলোকে প্রস্তুতকৃত। উপ-বিষয়াবলী, মূল গাণিতিক সমীকরণ ও উচ্চতর রেফারেন্স বইসমূহ পর্যালোচনা করুন।',
              'Prepared in light of the International Physics Olympiad (IPhO) syllabus. Review subtopics, key equations and advanced reference books.',
            )}
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
          {SYLLABUS_DOMAINS.map((domain) => {
            const isSelected = selectedDomainId === domain.id;
            const dEn = DOMAIN_EN[domain.id];
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-white text-purple-800 border-purple-600 shadow-md shadow-purple-500/10'
                    : 'bg-white/70 text-slate-600 border-slate-200 hover:bg-white hover:text-slate-900'
                }`}
              >
                {getDomainIcon(domain.icon)}
                <span>{text(domain.title, dEn?.title || domain.title)}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Panel */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                  {text(activeDomain.weightage, en?.weightage || activeDomain.weightage)}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {text(activeDomain.title, en?.title || activeDomain.title)}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md md:text-right">
              {text(activeDomain.summary, en?.summary || activeDomain.summary)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {text(
                  'বিস্তারিত বিষয় বিভাজন ও মৌলিক সমীকরণসমূহ',
                  'Detailed topic breakdown & core equations',
                )}
              </h4>

              {activeDomain.subtopics.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-900 font-sans">
                      {text(sub.name, en?.subtopics[idx]?.name || sub.name)}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {sub.categories.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-slate-700 border border-slate-200"
                        >
                          {text(`ক্যাট ${c}`, `Cat ${c}`)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {text(sub.description, en?.subtopics[idx]?.description || sub.description)}
                  </p>

                  {sub.formulas && sub.formulas.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {sub.formulas.map((form, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-blue-700 font-mono text-[11px] shadow-2xs"
                        >
                          {form}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {text('প্রামাণ্য সহায়ক গ্রন্থাবলী', 'Recommended reference books')}
              </h4>

              <div className="space-y-3">
                {activeDomain.recommendedBooks.map((book, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                  >
                    <div className="flex items-start gap-2.5">
                      <Bookmark className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{book.title}</div>
                        <div className="text-[11px] text-slate-500">
                          {text('লেখক:', 'Author:')} {book.author}
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 inline-block">
                      {text('উপযোগিতা:', 'Suitability:')}{' '}
                      {text(book.level, en?.books[bIdx]?.level || book.level)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 text-center space-y-3">
                <span className="text-xs font-bold text-slate-900 block">
                  {text(
                    'অফিসিয়াল ২০২৬ সিলেবাস PDF খুঁজছেন?',
                    'Looking for the official 2026 syllabus PDF?',
                  )}
                </span>
                <p className="text-[11px] text-slate-600">
                  {text(
                    'জাতীয় কমিটি কর্তৃক অনুমোদিত বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াডের বিস্তারিত সিলেবাস ডাউনলোড করুন।',
                    'Download the detailed Bangladesh Physics Olympiad syllabus approved by the national committee.',
                  )}
                </p>
                <a
                  href="https://www.bdpho.org/syllabus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  {text('পূর্ণাঙ্গ সিলেবাস PDF ↗', 'Full syllabus PDF ↗')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
