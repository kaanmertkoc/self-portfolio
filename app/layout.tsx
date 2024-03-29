import type { Metadata } from 'next';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeaderGradient from '../components/Header/HeaderGradient';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Kaan Mert Koç',
  description:
    'I am a highly skilled and versatile professional with a broad spectrum of expertise in the field of technology and development. My journey in the digital landscape has been marked by an array of skills and experiences that make me a valuable asset in various domains. In addition to these technical proficiencies, I offer IT consulting services, providing expert advice and guidance on various technological topics. With a passion for project management, I ensure the successful execution of digital endeavors, both on the frontend and backend. Area of expertise: Web Development, Cross-Platform Mobile Application Development, Native Mobile App Development, Backend Development, Database Architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className=' z-1 flex flex-col' data-theme='dark'>
        <Header />
        <HeaderGradient />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
