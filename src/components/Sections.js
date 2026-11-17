import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Words } from './Words';
import { SwapArrow } from './Icons';
import ProjectShot from './ProjectShot';
import { process, requirementsMail, whatsappLink } from '../data/site';
import { gsap, useGSAP, prefersReducedMotion } from '../lib/motion';

export function PageHero({ eyebrow, title, lede, children, crumbs }) {
  return (
    <section className="phero">
      <div className="container">
        {crumbs && (
          <nav className="crumbs mono" aria-label="Breadcrumb" data-fade="">
            {crumbs.map((c, i) => (
              <React.Fragment key={c.label}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </React.Fragment>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow" data-fade="">{eyebrow}</p>}
        <Words as="h1" className="phero__title display" text={title} />
        {lede && (
          <p className="phero__lede lede" data-fade="0.25">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, link, dark = false, id }) {
  return (
    <div className="shead">
      <p className={`eyebrow ${dark ? 'eyebrow--dark' : ''}`} data-fade="">{eyebrow}</p>
      <Words as="h2" id={id} className="shead__title h2" text={title} />
      {link && (
        <Link to={link.to} className={`textlink ${dark ? 'textlink--light' : ''}`} data-fade="0.2">
          {link.label} <SwapArrow />
        </Link>
      )}
    </div>
  );
}

const STEP_ICONS = {
  chat: <path d="M5 18.5 6 15a7.5 7.5 0 1 1 3 2.8Z M9 11h6M9 8h4" />,
  mail: <path d="M3.5 6.5h17v11h-17Z M4 7l8 6 8-6" />,
  bolt: <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6Z" />,
  gift: <path d="M4 10h16v10H4Z M3 7h18v3H3Z M12 7v13 M12 7c-1.5-3.5-5-3.5-5-1.2C7 7 9 7 12 7Zm0 0c1.5-3.5 5-3.5 5-1.2C17 7 15 7 12 7Z" />,
  rocket: <path d="M12 15c4-3 6.5-7 6.5-11.5C14 3.5 10 6 7 10l-3 .5 2.5 3 2 2 3 2.5Zm-5 1-2.5 4.5L9 18 M14.5 9.5a1.5 1.5 0 1 0 0-.01" />,
};

export function ProcessSection() {
  const root = useRef(null);

  // Cards stick and stack; the one underneath gently shrinks as the next slides over it.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const cards = gsap.utils.toArray('.scard', root.current);
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.fromTo(
          card,
          { scale: 1, filter: 'brightness(1)' },
          {
            scale: 0.92 + i * 0.012,
            filter: 'brightness(0.86)',
            ease: 'none',
            scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 25%', scrub: true },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section className="section start" ref={root} aria-labelledby="start-title">
      <div className="container start__grid">
        <div className="start__intro">
          <p className="eyebrow" data-fade="">How to start</p>
          <Words as="h2" id="start-title" className="h2" text="From first message to a *free* *demo* in 2 days." />
          <p className="lede start__lede" data-fade="0.15">
            No long meetings or complicated forms. Send us your idea today and see a working demo of your product
            within two days, completely free.
          </p>
          <div className="start__actions" data-fade="0.25">
            <a href={requirementsMail} className="btn btn--grad">
              <span>Email your requirements</span>
              <SwapArrow />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <span>WhatsApp us</span>
              <SwapArrow up />
            </a>
          </div>
        </div>

        <ol className="scards">
          {process.map((s, i) => (
            <li className="scard" key={s.no} style={{ '--c': s.color, '--i': i }}>
              <div className="scard__top">
                <span className="scard__no">Step {s.no}</span>
                <svg className="scard__icon" viewBox="0 0 24 24" aria-hidden="true">
                  {STEP_ICONS[s.icon]}
                </svg>
              </div>
              <h3 className="scard__title">{s.title}</h3>
              <p className="scard__desc">{s.desc}</p>
              {s.badge && <span className="scard__badge">{s.badge}</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WorkCard({ project, headingLevel: H = 'h3' }) {
  return (
    <article className="wcard">
      <ProjectShot project={project} />
      <div className="wcard__meta">
        <H className="wcard__title">{project.title}</H>
        <span className="wcard__service mono">{project.service}</span>
      </div>
      <p className="wcard__desc">{project.desc}</p>
      <ul className="wcard__tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
}

export function NextProjectCard() {
  return (
    <Link to="/contact" className="wcard wcard--cta">
      <span className="wcard__cta-inner">
        <span className="eyebrow">Your project</span>
        <span className="wcard__cta-title">
          Could be <em className="accent">next</em>.
        </span>
        <span className="wcard__cta-link">
          Start a conversation <SwapArrow />
        </span>
      </span>
    </Link>
  );
}
