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
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: 'বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (BdPhO) · অফিসিয়াল প্ল্যাটফর্ম',
  description:
    'বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড (BdPhO)-এর অফিসিয়াল জাতীয় প্ল্যাটফর্ম। আন্তর্জাতিক পদার্থবিজ্ঞান অলিম্পিয়াড (IPhO) ও এশিয়ান পদার্থবিজ্ঞান অলিম্পিয়াড (APhO)-এর বাংলাদেশ দল নির্বাচন ও প্রশিক্ষণ। বিগত প্রশ্নপত্র, সিলেবাস, ক্যাটাগরি, ফলাফল ও প্রবেশপত্র ডাউনলোড।',
  keywords: [
    'বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড',
    'বিডিএফও',
    'Bangladesh Physics Olympiad',
    'BdPhO',
    'IPhO Bangladesh',
    'APhO Bangladesh',
    'পদার্থবিজ্ঞান অলিম্পিয়াড প্রশ্নপত্র',
    'বিডিএফও প্রবেশপত্র',
  ],
  authors: [{ name: 'বাংলাদেশ পদার্থবিজ্ঞান অলিম্পিয়াড কেন্দ্রীয় কমিটি' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
