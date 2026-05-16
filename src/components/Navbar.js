import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleBookAppointment = () => {
    setMenuOpen(false);
    navigate('/contact');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  const careerLinks = [
    { to: '/culture', label: 'Our Culture' },
    { to: '/internships', label: 'Internships' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/certificate-verification', label: 'Certificate Verification' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Inertia Infotech" className="navbar-logo-img" />
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'navbar-link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {/* Career Dropdown */}
          <li className="navbar-dropdown-wrapper">
            <button
              className={`navbar-link navbar-dropdown-toggle ${careerDropdownOpen ? 'navbar-dropdown-toggle--open' : ''}`}
              onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
            >
              Career
              <i className={`fa fa-chevron-down navbar-dropdown-arrow ${careerDropdownOpen ? 'navbar-dropdown-arrow--open' : ''}`}></i>
            </button>
            <ul className={`navbar-dropdown-menu ${careerDropdownOpen ? 'navbar-dropdown-menu--open' : ''}`}>
              {careerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar-dropdown-link ${isActive ? 'navbar-dropdown-link--active' : ''}`
                    }
                    onClick={() => setCareerDropdownOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Book Appointment */}
        <button className="btn-primary navbar-cta" onClick={handleBookAppointment}>
          <i className="fa fa-calendar-check"></i>
          Book Appointment
        </button>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `mobile-link ${isActive ? 'mobile-link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {/* Mobile Career Dropdown */}
          <li>
            <button
              className={`mobile-link mobile-dropdown-toggle ${careerDropdownOpen ? 'mobile-dropdown-toggle--open' : ''}`}
              onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
            >
              Career
              <i className={`fa fa-chevron-down mobile-dropdown-arrow ${careerDropdownOpen ? 'mobile-dropdown-arrow--open' : ''}`}></i>
            </button>
            <ul className={`mobile-dropdown-menu ${careerDropdownOpen ? 'mobile-dropdown-menu--open' : ''}`}>
              {careerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `mobile-dropdown-link ${isActive ? 'mobile-dropdown-link--active' : ''}`
                    }
                    onClick={() => {
                      setCareerDropdownOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <button className="btn-primary mobile-cta" onClick={handleBookAppointment}>
          <i className="fa fa-calendar-check"></i>
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
