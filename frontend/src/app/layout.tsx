import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050816',
};

export const metadata: Metadata = {
  title: 'Bangladesh Physics Olympiad (BdPhO) · Official National Platform',
  description:
    'Official national platform of the Bangladesh Physics Olympiad (BdPhO). Selecting and training Bangladesh delegates for the International Physics Olympiad (IPhO) and Asian Physics Olympiad (APhO). Explore past question papers, syllabus, categories, results, and admit cards.',
  keywords: [
    'Bangladesh Physics Olympiad',
    'BdPhO',
    'IPhO Bangladesh',
    'APhO Bangladesh',
    'Physics Olympiad Past Papers',
    'BdPhO Admit Card',
    'BdPhO Syllabus',
    'Physics Olympiad Registration',
  ],
  authors: [{ name: 'Bangladesh Physics Olympiad National Committee' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#050816] text-[#f8fafc] font-sans antialiased selection:bg-sky-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
