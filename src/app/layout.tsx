// NO 'use client' here - keep it server component
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* SIMPLE TEST - NO PROVIDERS */}
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          width: '100%', 
          height: '80px', 
          backgroundColor: '#FF0000', 
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ color: 'white' }}>BUILD TEST - NO PROVIDERS</h1>
        </div>
        
        <main style={{ paddingTop: '100px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}