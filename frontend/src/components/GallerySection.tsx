'use client';

import React, { useState } from 'react';
import { Camera, X, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '@/data/bdphoData';
import { GalleryPhoto } from '@/types';
import { useLanguage } from '@/i18n/LanguageProvider';

const PHOTO_EN: Record<
  string,
  { title: string; category: string; caption: string; year: string; location: string }
> = {
  g1: {
    title: 'National final exam at Curzon Hall',
    category: 'National round',
    caption:
      'Over 1,200 top competitors from 16 regions sit the theoretical exam in the historic Curzon Hall of the University of Dhaka.',
    year: '2025',
    location: 'Curzon Hall, University of Dhaka',
  },
  g2: {
    title: 'National training camp in BUET optics lab',
    category: 'Training camp',
    caption:
      'Selected finalists measure precise wavelengths and refractive indices using lasers and prisms.',
    year: '2025',
    location: 'BUET & DU Physics laboratories',
  },
  g3: {
    title: 'Bangladesh national team flag-raising on the world stage',
    category: 'International IPhO',
    caption:
      'The five-member Bangladesh delegation with the national flag at the IPhO opening ceremony.',
    year: '2024',
    location: 'International congress auditorium',
  },
  g4: {
    title: 'Science fair & hardware innovation showcase',
    category: 'National round',
    caption:
      'Young researchers demonstrate self-built projects based on resonant circuits and interferometers before the judges.',
    year: '2025',
    location: 'National science festival pavilion',
  },
  g5: {
    title: 'National awards & medal ceremony',
    category: 'National round',
    caption:
      'Dr Muhammed Zafar Iqbal and guests from the national science academy present gold medals and certificates to national winners.',
    year: '2025',
    location: 'Central auditorium, Dhaka',
  },
  g6: {
    title: 'Advanced optical bench & data recording',
    category: 'Training camp',
    caption:
      'Students work with digital optical sensors during intensive lab practice for international team selection.',
    year: '2025',
    location: 'National Physics Camp',
  },
};

export const GallerySection: React.FC = () => {
  const { L } = useLanguage();
  const text = (bn: string, en: string) => L(bn, en);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeFilter === 'all') return true;
    return photo.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  const filters = [
    { label: text('সকল মুহূর্ত', 'All moments'), value: 'all' },
    { label: text('জাতীয় পর্ব', 'National round'), value: 'জাতীয়' },
    { label: text('প্রশিক্ষণ ক্যাম্প', 'Training camp'), value: 'ক্যাম্প' },
    { label: text('আন্তর্জাতিক IPhO', 'International IPhO'), value: 'IPhO' },
  ];

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-emerald-600" />
              <span>{text('স্মৃতি ও অনুপ্রেরণার মুহূর্ত', 'Moments of memory & inspiration')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
              {text('অনুপ্রেরণাদায়ী মুহূর্ত।', 'Inspiring moments.')} <br />
              <span className="text-blue-900">
                {text('বিডিএফও আর্কাইভের স্থিরচিত্র।', 'Stills from the BdPhO archive.')}
              </span>
            </h2>
            <p className="text-slate-600 text-base">
              {text(
                'পরীক্ষাগারের অনুসন্ধান, দেশব্যাপী উৎসবের হলরুম, জমকালো পদক প্রদান ও আন্তর্জাতিক অভিযানের স্মরণীয় স্থিরচিত্র। বড় করে দেখতে যেকোনো ছবিতে ক্লিক করুন।',
                'Memorable stills from lab inquiry, nationwide festival halls, medal ceremonies and international trips. Click any photo to enlarge.',
              )}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white border border-slate-200 self-start md:self-auto shadow-2xs">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeFilter === f.value
                    ? 'bg-slate-100 text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => {
            const en = PHOTO_EN[photo.id];
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl cursor-pointer transition-all duration-300 min-h-[270px] flex flex-col justify-end shadow-xs"
              >
                <img
                  src={photo.imageUrl}
                  alt={text(photo.title, en?.title || photo.title)}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                <div className="relative z-10 p-5 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-sky-300">
                    <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-xs border border-white/20">
                      {text(photo.category, en?.category || photo.category)}
                    </span>
                    <span className="flex items-center gap-1 text-slate-200">
                      <Calendar className="w-3 h-3" /> {text(photo.year, en?.year || photo.year)}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                    {text(photo.title, en?.title || photo.title)}
                  </h3>

                  <p className="text-xs text-slate-200 line-clamp-2">
                    {text(photo.caption, en?.caption || photo.caption)}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-300 border-t border-white/20">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {text(photo.location, en?.location || photo.location)}
                    </span>
                    <span className="flex items-center gap-1 text-sky-400">
                      <Maximize2 className="w-3 h-3" /> {text('বড় করুন', 'Enlarge')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Fullscreen Preview */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                aria-label={text('ছবি বন্ধ করুন', 'Close photo view')}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-slate-900">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={text(selectedPhoto.title, PHOTO_EN[selectedPhoto.id]?.title || selectedPhoto.title)}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-white">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 font-bold border border-blue-200">
                    {text(
                      selectedPhoto.category,
                      PHOTO_EN[selectedPhoto.id]?.category || selectedPhoto.category,
                    )}
                  </span>
                  <span className="font-mono text-slate-500 font-semibold">
                    {text('বছর:', 'Year:')}{' '}
                    {text(selectedPhoto.year, PHOTO_EN[selectedPhoto.id]?.year || selectedPhoto.year)}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {text(selectedPhoto.title, PHOTO_EN[selectedPhoto.id]?.title || selectedPhoto.title)}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {text(
                    selectedPhoto.caption,
                    PHOTO_EN[selectedPhoto.id]?.caption || selectedPhoto.caption,
                  )}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>
                    {text('স্থান:', 'Location:')}{' '}
                    {text(
                      selectedPhoto.location,
                      PHOTO_EN[selectedPhoto.id]?.location || selectedPhoto.location,
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
