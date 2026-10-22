'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AnnouncementTicker } from '@/components/AnnouncementTicker';
import { CategoriesSection } from '@/components/CategoriesSection';
import { PastPapersArchive } from '@/components/PastPapersArchive';
import { RoadmapSection } from '@/components/RoadmapSection';
import { ProblemOfTheWeek } from '@/components/ProblemOfTheWeek';
import { SyllabusSection } from '@/components/SyllabusSection';
import { HallOfFameSection } from '@/components/HallOfFameSection';
import { TechFairSection } from '@/components/TechFairSection';
import { CommitteeSection } from '@/components/CommitteeSection';
import { GallerySection } from '@/components/GallerySection';
import { NoticesSection } from '@/components/NoticesSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

// Modals
import { AdmitCardModal } from '@/components/AdmitCardModal';
import { StudentLoginModal } from '@/components/StudentLoginModal';
import { RegistrationModal } from '@/components/RegistrationModal';

export default function Home() {
  const [admitModalOpen, setAdmitModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#050816] text-slate-100 relative selection:bg-sky-500 selection:text-slate-950">
      {/* Global Navigation */}
      <Navbar
        onOpenAdmitModal={() => setAdmitModalOpen(true)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero with Cosmic Physics Particles & Live Countdown */}
        <Hero
          onOpenAdmitModal={() => setAdmitModalOpen(true)}
          onOpenRegisterModal={() => setRegisterModalOpen(true)}
        />

        {/* 2. Live Announcements & Urgent Circulars Ticker */}
        <AnnouncementTicker />

        {/* 3. The 4 Categories (A, B, C, D) with Sample Problems */}
        <CategoriesSection />

        {/* 4. Filterable Past Papers Archive & Model Solutions */}
        <PastPapersArchive />

        {/* 5. The 6-Step Olympic Roadmap to IPhO */}
        <RoadmapSection />

        {/* 6. Interactive Physics Problem of the Week */}
        <ProblemOfTheWeek />

        {/* 7. Comprehensive IPhO-Aligned Syllabus & Recommended Reading */}
        <SyllabusSection />

        {/* 8. International Hall of Fame (IPhO & APhO Medalists) with Confetti */}
        <HallOfFameSection />

        {/* 9. Technology & Scientific Invention Fair */}
        <TechFairSection />

        {/* 10. Central Academic Committee & Mentors */}
        <CommitteeSection />

        {/* 11. Inspiring Event Gallery & Fullscreen Lightbox */}
        <GallerySection />

        {/* 12. Official Directives & Circulars Board */}
        <NoticesSection />

        {/* 13. Interactive Accordion FAQs */}
        <FaqSection />

        {/* 14. National Secretariat & Inquiry Desk */}
        <ContactSection />
      </main>

      {/* Institutional Footer with Affiliations */}
      <Footer />

      {/* Interactive Global Modals */}
      <AdmitCardModal
        isOpen={admitModalOpen}
        onClose={() => setAdmitModalOpen(false)}
      />

      <StudentLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
    </div>
  );
}
