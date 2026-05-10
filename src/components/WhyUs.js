import React, { useRef, useEffect, useState } from 'react';
import '../styles/WhyUs.css';

const reasons = [
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Client-First Approach',
    desc: 'Every decision we make centers on your business goals. We listen deeply, plan meticulously, and execute with precision.',
    color: '#0d6efd',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Fast Delivery',
    desc: 'We work with agile methodologies to deliver high-quality software on time — without compromising on quality.',
    color: '#7c3aed',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Security First',
    desc: 'All our solutions are built with enterprise-grade security practices, keeping your data and your customers safe.',
    color: '#059669',
  },
  {
    icon: 'fa-solid fa-headset',
    title: '24/7 Support',
    desc: 'We don\'t disappear after launch. Our team provides ongoing support, maintenance, and updates whenever you need.',
    color: '#d97706',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Clean Code',
    desc: 'We write readable, scalable, and well-documented code that\'s easy to maintain and extend as your needs evolve.',
    color: '#e11d48',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Growth Focused',
    desc: 'We build for the long term. Our solutions are designed to scale seamlessly as your business grows.',
    color: '#0891b2',
  },
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="whyus-section" ref={sectionRef}>
      <div className="container">
        <div className="whyus-layout">
          <div className={`whyus-left ${visible ? 'whyus-left--visible' : ''}`}>
            <span className="section-tag">Why Inertia Infotech</span>
            <h2 className="section-title">The Partner You've Been Looking For</h2>
            <p className="section-subtitle">
              We're not just developers — we're your technology partner. We bring expertise, integrity, and genuine care to every project we touch.
            </p>
            <div className="whyus-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                alt="Our Team"
                className="whyus-image"
              />
              <div className="whyus-image-badge">
                <i className="fa fa-trophy"></i>
                <div>
                  <strong>Award Winning</strong>
                  <span>Software Agency</span>
                </div>
              </div>
            </div>
          </div>

          <div className="whyus-right">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className={`whyus-card ${visible ? 'whyus-card--visible' : ''}`}
                style={{ '--delay': `${idx * 0.08}s`, '--reason-color': reason.color }}
              >
                <div className="whyus-card-icon">
                  <i className={reason.icon}></i>
                </div>
                <div>
                  <h4 className="whyus-card-title">{reason.title}</h4>
                  <p className="whyus-card-desc">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
