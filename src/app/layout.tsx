import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* EMERGENCY HEADER - BRIGHT GREEN */}
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          width: '100%', 
          height: '80px', 
          backgroundColor: '#00FF00', 
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ color: 'black', fontSize: '40px' }}>
            HEADER WORKS - ROOT LAYOUT
          </h1>
        </div>
        
        <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
          {children}
        </main>
        
        {/* EMERGENCY FOOTER - BRIGHT ORANGE */}
        <div style={{ 
          backgroundColor: '#FF6600', 
          padding: '40px',
          textAlign: 'center'
        }}>
          <h1 style={{ color: 'white', fontSize: '40px' }}>
            FOOTER WORKS - ROOT LAYOUT
          </h1>
        </div>
      </body>
    </html>
  )
}