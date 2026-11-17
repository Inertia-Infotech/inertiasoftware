import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { initSmoothScroll, scrollToTop, ScrollTrigger, gsap, useGSAP, prefersReducedMotion } from './lib/motion';

function Page({ children }) {
  const ref = useRef(null);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(ref.current, { autoAlpha: 0, duration: 0.6, ease: 'power2.out' });
    },
    { scope: ref }
  );
  return <div ref={ref}>{children}</div>;
}

function Shell() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    initSmoothScroll();
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  // Fresh page → start at the top (or the #section) and re-measure scroll animations.
  useEffect(() => {
    if (!hash) scrollToTop();
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (hash) document.querySelector(hash)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <Page key={pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/portfolio" element={<Navigate to="/work" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Page>
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
