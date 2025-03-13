import './globals.css';

import Header from '@/components/molecultes/Header';
import Footer from '@/components/molecultes/Footer';
import ThemeRegistry from '@/providers/ThemeRegistry';

import type { Metadata } from 'next';

import { Manrope } from 'next/font/google';
import { QuantumStoreProvider } from '@/providers/QuantumStoreProvider';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quantumroboticslab.com/'),
  title: 'FullKitchen - Restaurant marketing and online ordering platform',
  description:
    'FullKitchen offers a restaurant software solution to get more customers for restaurants. Online ordering platform with delivery and pickup, integrated loyalty platform, marketing and customer management. Try our data and AI driven restaurant software for free.',
  openGraph: {
    url: 'https://quantumroboticslab.com/',
    images: [{ url: '/assets/logo.svg' }],
    title: 'FullKitchen - Restaurant marketing and online ordering platform',
    description:
      'FullKitchen offers a restaurant software solution to get more customers for restaurants. Online ordering platform with delivery and pickup, integrated loyalty platform, marketing and customer management. Try our data and AI driven restaurant software for free.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <ThemeRegistry>
          <QuantumStoreProvider>
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
          </QuantumStoreProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
