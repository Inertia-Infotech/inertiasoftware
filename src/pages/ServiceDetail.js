import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../assets/servicesData';
import '../styles/ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [slug]);

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <div className="not-found-content">
            <i className="fa fa-exclamation-triangle"></i>
            <h2>Service Not Found</h2>
            <p>The service you're looking for doesn't exist.</p>
            <button className="btn-primary" onClick={() => navigate('/services')}>
              View All Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  const otherServices = servicesData.filter(s => s.slug !== slug);

  return (
    <div className={`service-detail-page ${visible ? 'service-detail-page--visible' : ''}`}>
      {/* Hero */}
      <section className="sd-hero" style={{ '--sd-color': service.color }}>
        <div className="sd-hero-bg">
          <img src={service.heroImage} alt={service.title} className="sd-hero-image" />
          <div className="sd-hero-overlay"></div>
        </div>
        <div className="container sd-hero-inner">
          <div className="sd-breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa fa-chevron-right"></i>
            <Link to="/services">Services</Link>
            <i className="fa fa-chevron-right"></i>
            <span>{service.title}</span>
          </div>
          <div className="sd-hero-content">
            <div className="sd-hero-icon">
              <i className={service.icon}></i>
            </div>
            <h1 className="sd-hero-title">{service.title}</h1>
            <p className="sd-hero-subtitle">{service.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="sd-main">
        <div className="container sd-main-grid">
          {/* Left: Content */}
          <div className="sd-content">
            <div className="sd-section">
              <h2 className="sd-section-title">Overview</h2>
              <p className="sd-section-text">{service.fullDesc}</p>
            </div>

            {/* Features */}
            <div className="sd-section">
              <h2 className="sd-section-title">What's Included</h2>
              <div className="sd-features-grid">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="sd-feature-item"
                    style={{ '--sd-color': service.color }}
                  >
                    <i className="fa fa-check-circle"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="sd-section">
              <h2 className="sd-section-title">Our Process</h2>
              <div className="sd-process">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="sd-process-step"
                    style={{ '--sd-color': service.color }}
                  >
                    <div className="sd-process-number">{step.step}</div>
                    <div className="sd-process-connector"></div>
                    <div className="sd-process-info">
                      <h4 className="sd-process-title">{step.title}</h4>
                      <p className="sd-process-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="sd-section">
              <h2 className="sd-section-title">Technologies We Use</h2>
              <div className="sd-tech-stack">
                {service.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="sd-tech-badge"
                    style={{ '--sd-color': service.color }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="sd-sidebar">
            {/* CTA Card */}
            <div className="sd-cta-card" style={{ '--sd-color': service.color }}>
              <div className="sd-cta-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="sd-cta-title">Ready to Get Started?</h3>
              <p className="sd-cta-text">Let's discuss your {service.title.toLowerCase()} requirements and build something remarkable.</p>
              <button
                className="btn-primary sd-cta-btn"
                onClick={() => navigate('/contact')}
                style={{ background: service.color, borderColor: service.color }}
              >
                <i className="fa fa-paper-plane"></i>
                Get a Free Quote
              </button>
              <a
                href={`https://wa.me/919270166932?text=Hi!%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="sd-wa-btn"
              >
                <i className="fab fa-whatsapp"></i>
                Chat on WhatsApp
              </a>
            </div>

            {/* Other Services */}
            <div className="sd-other-services">
              <h4 className="sd-other-title">Other Services</h4>
              {otherServices.map(s => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="sd-other-item"
                  style={{ '--other-color': s.color }}
                >
                  <div className="sd-other-icon">
                    <i className={s.icon}></i>
                  </div>
                  <span>{s.title}</span>
                  <i className="fa fa-arrow-right sd-other-arrow"></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
