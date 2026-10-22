'use client';

import React, { useState } from 'react';
import { Camera, X, ZoomIn, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '@/data/bdphoData';
import { GalleryPhoto } from '@/types';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (activeFilter === 'all') return true;
    return photo.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>Memories & Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Moments That Inspire. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                From the Olympiad Archives.
              </span>
            </h2>
            <p className="text-slate-400 text-base">
              A photo wall celebrating laboratory investigations, nationwide exam halls, award ceremonies, and international expeditions. Click any photo to expand.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {[
              { label: 'All Moments', value: 'all' },
              { label: 'National Round', value: 'National' },
              { label: 'Training Camp', value: 'Camp' },
              { label: 'International IPhO', value: 'International' },
              { label: 'Regional Round', value: 'Regional' },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeFilter === f.value
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-sky-400/50 cursor-pointer transition-all duration-300 min-h-[260px] flex flex-col justify-end shadow-lg"
            >
              {/* Image */}
              <img
                src={photo.imageUrl}
                alt={photo.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

              {/* Photo Caption Box */}
              <div className="relative z-10 p-5 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-semibold text-sky-400">
                  <span className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800">
                    {photo.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Calendar className="w-3 h-3" /> {photo.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                  {photo.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2">
                  {photo.caption}
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {photo.location}
                  </span>
                  <span className="text-sky-400 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Enlarge <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/20 bg-slate-950 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-white hover:bg-white/20 transition"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-slate-900/95 border-t border-slate-800 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 font-bold uppercase tracking-wider">
                    {selectedPhoto.category} • {selectedPhoto.year}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {selectedPhoto.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
