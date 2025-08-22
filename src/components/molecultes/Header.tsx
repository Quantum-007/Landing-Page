'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR to prevent hydration mismatch
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        backgroundColor: '#121212',
        zIndex: 1000
      }} />
    );
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        backgroundColor: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #3a3a3a',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        boxSizing: 'border-box'
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#69b343',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#121212'
          }}>
            Q
          </div>
          <span style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#69b343'
          }}>
            QuantumVerse
          </span>
        </div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#home" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</a>
          <a href="#solutions" style={{ color: '#ffffff', textDecoration: 'none' }}>Solutions</a>
          <a href="#contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
