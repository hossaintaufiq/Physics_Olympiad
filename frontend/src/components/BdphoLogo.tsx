'use client';

import React from 'react';

interface BdphoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BdphoLogo: React.FC<BdphoLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { icon: 34, title: 'text-base', sub: 'text-[9px]' },
    md: { icon: 44, title: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 56, title: 'text-2xl', sub: 'text-xs' },
  };

  const { icon, title, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Handcrafted Vector Academic Physics Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 hover:rotate-12"
        >
          {/* Subtle Outer Academic Seal Ring */}
          <circle cx="50" cy="50" r="47" stroke="#1e3a8a" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="43" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />

          {/* Background disc */}
          <circle cx="50" cy="50" r="41" fill="#f8fafc" />

          {/* Quantum Orbits */}
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="14"
            transform="rotate(-30 50 50)"
            stroke="#2563eb"
            strokeWidth="2.2"
            fill="none"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="14"
            transform="rotate(30 50 50)"
            stroke="#0284c7"
            strokeWidth="2.2"
            fill="none"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="14"
            transform="rotate(90 50 50)"
            stroke="#d97706"
            strokeWidth="2.2"
            fill="none"
          />

          {/* Central Nucleus with Star Accent */}
          <circle cx="50" cy="50" r="7.5" fill="#1e3a8a" />
          <circle cx="50" cy="50" r="3.5" fill="#fbbf24" />

          {/* Electrons on Orbits */}
          <circle cx="24" cy="35" r="3" fill="#2563eb" />
          <circle cx="76" cy="65" r="3" fill="#2563eb" />
          <circle cx="76" cy="35" r="3" fill="#0284c7" />
          <circle cx="50" cy="16" r="3" fill="#d97706" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-tight text-slate-900 font-mono ${title}`}>
              BdPhO
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
              17th
            </span>
          </div>
          <span className={`font-semibold text-slate-700 tracking-tight ${sub}`}>
            Bangladesh Physics Olympiad
          </span>
          <span className="text-[9px] text-slate-600 font-medium hidden sm:inline">
            Affiliated with IPhO & APhO
          </span>
        </div>
      )}
    </div>
  );
};
