import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, site, whatsappLink } from '../data/site';
import { services } from '../data/services';
import { Words } from './Words';
import { SwapArrow, ArrowUp } from './Icons';
import LocalTime from './LocalTime';
import { useReveal, scrollToTop, gsap, useGSAP, prefersReducedMotion } from '../lib/motion';

const GIANT_COLORS = ['#6C47FF', '#2D6BFF', '#F2479B', '#FF6A2B', '#0FB57E', '#FFC93C', '#A68FFF'];

export default function Footer() {
  const root = useRef(null);
  useReveal(root);

  // Footer content slides up into place, and the giant wordmark letters rise.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.ftr__cta',
        { y: -90 },
        {
          y: 0,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'top 25%', scrub: true },
        }
      );
      gsap.from('.ftr__giant span', {
        yPercent: 100,
        ease: 'none',
        stagger: 0.06,
        scrollTrigger: { trigger: '.ftr__giant', start: 'top bottom', end: 'bottom bottom', scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <footer className="ftr" ref={root}>
      <div className="container">
        <section className="ftr__cta" aria-labelledby="ftr-cta-title">
          <p className="eyebrow eyebrow--dark" data-fade="">Have a project in mind?</p>
          <Words as="h2" id="ftr-cta-title" className="ftr__title" text="Let’s build it *together*." />
          <p className="ftr__offer" data-fade="0.1">
            Send us your requirements today and get a <strong>free demo of your product within two days</strong>.
          </p>
          <div className="ftr__actions" data-fade="0.15">
            <Link to="/contact" className="btn btn--light">
              <span>Get your free demo</span>
              <SwapArrow />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">
              <span>Chat on WhatsApp</span>
              <SwapArrow up />
            </a>
          </div>
          <a href={`mailto:${site.email}`} className="ftr__mail" data-fade="0.25">
            {site.email}
          </a>
        </section>

        <div className="ftr__grid">
          <div className="ftr__col">
            <h3 className="ftr__head mono">Studio</h3>
            <p className="ftr__text">
              Independent design &amp; development studio building ERP systems, websites, apps and AI automations for growing businesses.
            </p>
          </div>
          <div className="ftr__col">
            <h3 className="ftr__head mono">Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link className="ftr__link" to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ftr__col">
            <h3 className="ftr__head mono">Navigate</h3>
            <ul>
              <li><Link className="ftr__link" to="/">Home</Link></li>
              {navLinks.map((l) => (
                <li key={l.to}><Link className="ftr__link" to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="ftr__col">
            <h3 className="ftr__head mono">Contact</h3>
            <ul>
              <li><a className="ftr__link" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a className="ftr__link" href={site.phoneHref}>{site.phone}</a></li>
              <li><a className="ftr__link" href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li className="ftr__muted">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="ftr__bar">
          <span className="mono">© {new Date().getFullYear()} {site.name}</span>
          <span className="ftr__time">
            <span className="dot dot--live" aria-hidden="true" />
            Local time · <LocalTime />
          </span>
          <button type="button" className="ftr__top mono" onClick={() => scrollToTop({ immediate: false })}>
            Back to top <ArrowUp width={16} height={16} />
          </button>
        </div>
      </div>

      <div className="ftr__giant" aria-hidden="true">
        {'inertia'.split('').map((c, i) => (
          <span key={i} style={{ '--c': GIANT_COLORS[i] }}>{c}</span>
        ))}
      </div>
    </footer>
  );
}
