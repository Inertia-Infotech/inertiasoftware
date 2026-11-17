import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { navLinks, site, whatsappLink } from '../data/site';
import { setScrollLocked } from '../lib/motion';
import { SwapArrow } from './Icons';

const menuLinks = [{ to: '/', label: 'Home' }, ...navLinks];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const { pathname } = useLocation();

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 160 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    setScrollLocked(open);
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const cls = ['hdr', scrolled && 'is-scrolled', hidden && !open && 'is-hidden', open && 'is-open']
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={cls}>
        <div className="container hdr__inner">
          <Link to="/" className="hdr__logo" aria-label="Inertia Software — home">
            <Logo />
          </Link>

          <nav className="hdr__nav" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className="hdr__link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contact" className="btn btn--sm hdr__cta">
            <span>Start a project</span>
            <SwapArrow />
          </Link>

          <button
            type="button"
            className="hdr__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hdr__toggle-label">{open ? 'Close' : 'Menu'}</span>
            <span className="hdr__toggle-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="container menu__inner">
          <nav className="menu__nav" aria-label="Mobile">
            {menuLinks.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className="menu__link"
                style={{ '--i': i }}
                tabIndex={open ? 0 : -1}
              >
                <span className="menu__no mono">0{i + 1}</span>
                <span className="menu__label">{l.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="menu__foot" style={{ '--i': menuLinks.length }}>
            <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>{site.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
              WhatsApp · {site.phone}
            </a>
            <span className="mono menu__loc">{site.location}</span>
          </div>
        </div>
      </div>
    </>
  );
}
