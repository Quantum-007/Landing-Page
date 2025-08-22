'use client';

import { useEffect, useState } from 'react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR to prevent hydration mismatch
    return (
      <div style={{
        backgroundColor: '#2d2d2d',
        height: '200px'
      }} />
    );
  }

  return (
    <footer style={{
      backgroundColor: '#2d2d2d',
      borderTop: '1px solid #3a3a3a',
      padding: '3rem 2rem',
      color: '#b0b0b0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ color: '#69b343', marginBottom: '1rem' }}>QuantumVerse</h3>
            <p style={{ lineHeight: '1.6' }}>
              Leading the quantum computing revolution with innovative solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#about" style={{ color: '#b0b0b0', textDecoration: 'none' }}>About Us</a>
              <a href="#solutions" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Solutions</a>
              <a href="#contact" style={{ color: '#b0b0b0', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#ffffff', marginBottom: '1rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span>📧 contact@quantumverse.com</span>
              <span>📱 +1 (555) 123-4567</span>
              <span>📍 San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid #3a3a3a',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#808080'
        }}>
          © 2024 QuantumVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;