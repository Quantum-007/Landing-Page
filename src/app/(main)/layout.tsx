export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* DEBUG HEADER - BRIGHT RED SO WE CAN'T MISS IT */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        height: '80px', 
        backgroundColor: 'red', 
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '40px' }}>
          HEADER TEST - CAN YOU SEE THIS?
        </h1>
      </div>
      
      <main style={{ paddingTop: '100px' }}>{children}</main>
      
      {/* DEBUG FOOTER - BRIGHT BLUE */}
      <div style={{ 
        backgroundColor: 'blue', 
        padding: '40px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '40px' }}>
          FOOTER TEST - CAN YOU SEE THIS?
        </h1>
      </div>
    </>
  );
}