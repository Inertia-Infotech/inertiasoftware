import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      {/* Background blobs */}
      <div className="hero-bg-blob hero-bg-blob--1"></div>
      <div className="hero-bg-blob hero-bg-blob--2"></div>

      <div className="container hero-inner">
        {/* Left Content */}
        <div className={`hero-content ${visible ? 'hero-content--visible' : ''}`}>
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Software Solutions for the Modern World
          </div>

          <h1 className="hero-title">
            We Build Digital
            <span className="hero-title-accent"> Products</span>
            <br />
            That Drive Growth
          </h1>

          <p className="hero-subtitle">
            Inertia Software's helps startups and enterprises transform ideas into powerful software. From web apps to ERP systems — we deliver with precision and passion.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary hero-btn"
              onClick={() => navigate('/contact')}
            >
              <i className="fa fa-paper-plane"></i>
              Enquire Now
            </button>
            <button
              className="btn-outline hero-btn"
              onClick={() => navigate('/contact')}
            >
              <i className="fa fa-rocket"></i>
              Start Project
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">50+</span>
              <span className="hero-stat-label">Projects Delivered</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">30+</span>
              <span className="hero-stat-label">Happy Clients</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">5+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className={`hero-visual ${visible ? 'hero-visual--visible' : ''}`}>
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Inertia Infotech team at work"
              className="hero-image"
            />
            {/* Floating cards */}
            <div className="hero-float-card hero-float-card--1">
              <i className="fa fa-check-circle"></i>
              <span>Project Launched!</span>
            </div>
            <div className="hero-float-card hero-float-card--2">
              <i className="fa fa-star"></i>
              <span>5-Star Reviews</span>
            </div>
            <div className="hero-float-card hero-float-card--3">
              <i className="fa fa-shield-halved"></i>
              <span>Secure & Scalable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
