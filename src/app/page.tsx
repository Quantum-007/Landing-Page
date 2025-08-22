'use client';

export const dynamic = 'force-dynamic';

import './globals.css'
import { MessageStoreProvider } from '@/providers/MessageStoreProvider' // adjust import path

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MessageStoreProvider>
          {/* BRIGHT RED HEADER FOR TESTING */}
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            width: '100%', 
            height: '80px', 
            backgroundColor: 'red', 
            zIndex: 99999
          }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
              HEADER TEST
            </h1>
          </div>
          
          <main style={{ paddingTop: '100px' }}>
            {children}
          </main>
          
          {/* BRIGHT BLUE FOOTER */}
          <div style={{ backgroundColor: 'blue', padding: '40px' }}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
              FOOTER TEST
            </h1>
          </div>
        </MessageStoreProvider>
      </body>
    </html>
  )
}
