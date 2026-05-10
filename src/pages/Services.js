import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../assets/servicesData';
import '../styles/ServicesPage.css';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">What We Offer</span>
            <h1 className="page-hero-title">Our Services</h1>
            <p className="page-hero-subtitle">
              We deliver end-to-end digital solutions that help businesses grow, scale, and stay ahead in a rapidly evolving world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="services-detail-section">
        <div className="container">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`service-detail-block ${idx % 2 === 1 ? 'service-detail-block--reversed' : ''}`}
            >
              <div className="service-detail-image-col">
                <div className="service-detail-image-wrapper">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="service-detail-image"
                  />
                  <div
                    className="service-detail-image-overlay"
                    style={{ '--service-color': service.color }}
                  >
                    <i className={service.icon}></i>
                  </div>
                </div>
              </div>

              <div className="service-detail-content">
                <div className="service-detail-icon" style={{ '--service-color': service.color }}>
                  <i className={service.icon}></i>
                </div>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-desc">{service.fullDesc}</p>

                <div className="service-detail-features">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="service-detail-feature" style={{ '--service-color': service.color }}>
                      <i className="fa fa-check"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-detail-actions">
                  <button
                    className="btn-primary"
                    onClick={() => navigate(`/services/${service.slug}`)}
                    style={{ background: service.color, borderColor: service.color }}
                  >
                    Learn More
                    <i className="fa fa-arrow-right"></i>
                  </button>
                  <button
                    className="btn-outline"
                    onClick={() => navigate('/contact')}
                    style={{ color: service.color, borderColor: service.color }}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
