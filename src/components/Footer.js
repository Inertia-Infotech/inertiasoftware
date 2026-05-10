import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Company Info */}
          <div className="footer-col footer-col--wide">
            <Link to="/" className="footer-logo">
              <div className="" style={{ color: 'white' }}><img src={logo} alt="Inertia Infotech" className="navbar-logo-img" /></div>
            </Link>
            <p className="footer-about">
              Inertia Infotech is a forward-thinking software development company committed to building digital solutions that matter. From startups to enterprises, we help businesses thrive in the digital age.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://wa.me/919270166932" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><a href="/#reviews" className="footer-link">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/web-development" className="footer-link">Web Development</Link></li>
              <li><Link to="/services/app-development" className="footer-link">App Development</Link></li>
              <li><Link to="/services/consultancy" className="footer-link">IT Consultancy</Link></li>
              <li><Link to="/services/erp-development" className="footer-link">ERP Development</Link></li>
            </ul>
          </div>

          {/* Contact + Map */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:+919270166932" className="footer-contact-item">
                  <i className="fa fa-phone"></i>
                  +91 92701 66932
                </a>
              </li>
              <li>
                <a href="mailto:inertiainfotech@gmail.com" className="footer-contact-item">
                  <i className="fa fa-envelope"></i>
                  inertiainfotech@gmail.com
                </a>
              </li>
              <li>
                <span className="footer-contact-item footer-contact-item--addr">
                  <i className="fa fa-location-dot"></i>
                  Sangamner, Maharashtra, India
                </span>
              </li>
            </ul>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30198.31578856505!2d74.19399071738278!3d19.573488698903174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4fb63b6a19d5%3A0x44a41f4a22ebe3d0!2sSangamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Inertia Infotech Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            © {currentYear} Inertia Infotech. All rights reserved.
          </p>
          <p className="footer-tagline">
            Crafted with <i className="fa fa-heart" style={{ color: '#e11d48' }}></i> in Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
