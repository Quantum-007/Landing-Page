'use client';

import React from 'react';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`admin-container ${inter.className}`}>
      <style jsx global>{`
        /* Global styles for admin section */
        .admin-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Override any conflicting styles from your main app */
        .admin-container .RaLayout {
          font-family: inherit;
        }

        /* Custom scrollbar */
        .admin-container ::-webkit-scrollbar {
          width: 8px;
        }

        .admin-container ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .admin-container ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        .admin-container ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
      {children}
    </div>
  );
}
