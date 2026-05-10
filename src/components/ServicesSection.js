import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../assets/servicesData';
import '../styles/ServicesSection.css';

const ServiceCard = ({ service, index }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleViewService = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/services/${service.slug}`);
    }, 1200);
  };

  return (
    <div
      ref={cardRef}
      className={`service-card ${visible ? 'service-card--visible' : ''}`}
      style={{ '--card-delay': `${index * 0.1}s`, '--card-color': service.color }}
    >
      <div className="service-card-icon">
        <i className={service.icon}></i>
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDesc}</p>

      <button
        className={`service-card-btn ${loading ? 'service-card-btn--loading' : ''}`}
        onClick={handleViewService}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="btn-spinner"></span>
            Loading...
          </>
        ) : (
          <>
            View Service
            <i className="fa fa-arrow-right"></i>
          </>
        )}
      </button>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive suite of digital solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
