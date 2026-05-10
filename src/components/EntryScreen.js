import React, { useState, useEffect } from 'react';

const EntryScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem('inertia_entered');
    if (!hasEntered) {
      setIsVisible(true);
      document.body.classList.add('app-pre-entry');
      // Set opacity 0 for all target elements before rendering to avoid flicker
      const style = document.createElement('style');
      style.id = 'entry-pre-style';
      style.innerHTML = `
        body.app-pre-entry .topbar,
        body.app-pre-entry .navbar,
        body.app-pre-entry .hero-content > *,
        body.app-pre-entry .hero-visual,
        body.app-pre-entry .section-title,
        body.app-pre-entry .section-subtitle,
        body.app-pre-entry .service-card,
        body.app-pre-entry .why-us-item,
        body.app-pre-entry .cta-content > *,
        body.app-pre-entry .cta-actions > *,
        body.app-pre-entry .review-card,
        body.app-pre-entry .footer-col {
          opacity: 0 !important;
          transform: translateY(20px) !important;
        }
      `;
      document.head.appendChild(style);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleStart = () => {
    sessionStorage.setItem('inertia_entered', 'true');
    setIsFading(true);
    
    // Trigger animation after overlay fades out
    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
      triggerAnimations();
    }, 400);
  };

  const triggerAnimations = () => {
    const allElements = document.querySelectorAll(
      '.topbar, .navbar, .hero-content > *, .hero-visual, .section-title, .section-subtitle, .service-card, .why-us-item, .cta-content > *, .cta-actions > *, .review-card, .footer-col'
    );
    
    allElements.forEach((el, i) => {
      // 50ms stagger per element, 0.6s duration
      el.style.transition = `opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 0.05}s, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 0.05}s`;
    });

    requestAnimationFrame(() => {
      // Removing the class triggers the transitions back to original states
      document.body.classList.remove('app-pre-entry');
      
      // Cleanup styles after all animations finish
      setTimeout(() => {
        allElements.forEach((el) => {
          el.style.transition = '';
        });
        const style = document.getElementById('entry-pre-style');
        if (style) style.remove();
      }, 600 + allElements.length * 50);
    });
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isFading ? 0 : 1,
        transition: 'opacity 0.4s ease',
      }}
    >
      <div style={{ textAlign: 'center', color: '#0d6efd' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
          marginBottom: '2rem',
          fontFamily: 'var(--font-main)',
          fontWeight: 800,
          letterSpacing: '-1px'
        }}>
          Inertia Infotech
        </h1>
        <button
          onClick={handleStart}
          style={{
            padding: '16px 48px',
            fontSize: '1.25rem',
            fontWeight: 600,
            fontFamily: 'var(--font-main)',
            color: '#fff',
            backgroundColor: '#0d6efd',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(13, 110, 253, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(13, 110, 253, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(13, 110, 253, 0.3)';
          }}
        >
          Start Experience
        </button>
      </div>
    </div>
  );
};

export default EntryScreen;
