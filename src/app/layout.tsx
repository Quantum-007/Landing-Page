import './globals.css';
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
  title:
    'Quantum Robotics | NLP-Powered Industrial Automation | The Future of Robotics',
  description:
    'Quantum Robotics: Pioneering industrial automation through advanced NLP, computer vision, and edge computing. Our platform dramatically accelerates robot development and deployment, enabling natural language programming and multi-robot coordination. Building the future of American manufacturing with intelligent robotics that understand human intent and transform productivity. The Tesla of industrial automation.',
  openGraph: {
    url: 'https://quantumroboticslab.com/',
    images: [{ url: '/assets/logo.svg' }],
    title:
      'Quantum Robotics | NLP-Powered Industrial Automation | The Future of Robotics',
    description:
      'Quantum Robotics: Pioneering industrial automation through advanced NLP, computer vision, and edge computing. Our platform dramatically accelerates robot development and deployment, enabling natural language programming and multi-robot coordination. Building the future of American manufacturing with intelligent robotics that understand human intent and transform productivity. The Tesla of industrial automation.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <ThemeRegistry>
          <QuantumStoreProvider>
            <main className="pt-16">{children}</main>
          </QuantumStoreProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
