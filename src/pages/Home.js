import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';
import '../styles/Home.css';

const CTABanner = () => (
  <section className="cta-banner">
    <div className="container cta-inner">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Transform Your Business?</h2>
        <p className="cta-subtitle">Let's discuss your project and build something remarkable together.</p>
      </div>
      <div className="cta-actions">
        <a href="/contact" className="btn-primary cta-btn">
          <i className="fa fa-rocket"></i>
          Start Your Project
        </a>
        <a href="https://wa.me/919270166932" target="_blank" rel="noopener noreferrer" className="cta-wa-btn">
          <i className="fab fa-whatsapp"></i>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesSection />
      <WhyUs />
      <CTABanner />
      <Reviews />
      <ContactSection />
    </div>
  );
};

export default Home;
