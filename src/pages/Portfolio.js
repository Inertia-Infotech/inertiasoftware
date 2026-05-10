import React, { useState } from 'react';
import '../styles/ServicesPage.css';
import '../styles/Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Sitai Milk Products E-Commerce',
    category: 'Web Development',
    tag: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    desc: 'A full-featured e-commerce platform with inventory management, payment integration, and real-time analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#0d6efd',
  },
  {
    id: 2,
    title: 'ThinkingMinds Learning App',
    category: 'App Development',
    tag: 'app',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&q=80',
    desc: 'A cross-platform mobile learning application with live classes, progress tracking, and gamification for 10,000+ students.',
    tech: ['React Native', 'Firebase', 'Node.js'],
    color: '#7c3aed',
  },
  {
    id: 3,
    title: 'Cashflow Business ERP',
    category: 'ERP Development',
    tag: 'erp',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    desc: 'Custom ERP system integrating inventory, HR, finance, and production modules for a large manufacturing enterprise.',
    tech: ['Python', 'Django', 'PostgreSQL'],
    color: '#d97706',
  },
  // {
  //   id: 4,
  //   title: 'FinSmart Cloud Migration',
  //   category: 'IT Consultancy',
  //   tag: 'consulting',
  //   image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
  //   desc: 'Guided a fintech startup through a complete cloud migration from on-premise to AWS, reducing costs by 35%.',
  //   tech: ['AWS', 'Docker', 'Terraform'],
  //   color: '#059669',
  // },
  {
    id: 5,
    title: 'Ambika Hotel Order System',
    category: 'App Development',
    tag: 'app',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    desc: 'Real-time food delivery application with live order tracking, restaurant management portal, and payment gateway.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    color: '#e11d48',
  },
  {
    id: 6,
    title: 'PropVista Real Estate Portal',
    category: 'Web Development',
    tag: 'web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    desc: 'A comprehensive real estate platform with property listings, virtual tours, lead management, and CRM integration.',
    tech: ['Next.js', 'PostgreSQL', 'AWS S3'],
    color: '#0891b2',
  },
];

const categories = ['All', 'Web Development', 'App Development', 'ERP Development', 'IT Consultancy'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="section-tag">Our Work</span>
            <h1 className="page-hero-title">Portfolio</h1>
            <p className="page-hero-subtitle">
              A selection of projects that showcase our expertise, creativity, and commitment to delivering results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="portfolio-section">
        <div className="container">
          {/* Filters */}
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`portfolio-filter-btn ${activeFilter === cat ? 'portfolio-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="portfolio-card"
                style={{ '--project-color': project.color }}
              >
                <div className="portfolio-card-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-card-image"
                  />
                  <div className="portfolio-card-overlay">
                    <div className="portfolio-card-category">{project.category}</div>
                  </div>
                </div>
                <div className="portfolio-card-body">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-desc">{project.desc}</p>
                  <div className="portfolio-card-tech">
                    {project.tech.map(t => (
                      <span key={t} className="portfolio-tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="portfolio-empty">
              <i className="fa fa-folder-open"></i>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
