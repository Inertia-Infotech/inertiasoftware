import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ServiceArt from '../components/ServiceArt';
import { PageHero, ProcessSection } from '../components/Sections';
import { Words } from '../components/Words';
import { SwapArrow, Check } from '../components/Icons';
import { services } from '../data/services';
import { useReveal } from '../lib/motion';
import useTitle from '../lib/useTitle';

export default function Services() {
  const root = useRef(null);
  useTitle('Services', 'ERP software, website design, app design, app development and custom software solutions by Inertia Software.');
  useReveal(root);

  return (
    <div ref={root}>
      <PageHero
        eyebrow="Services"
        title="Design and engineering for *growing* businesses."
        lede="Six focused services, one team. Pick one, or combine them. Most of our clients start with a conversation about the problem, not the technology."
      >
        <ul className="jump" data-stagger="">
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="chip">
                <span className="chip__dot" style={{ background: s.color }} /> {s.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <div className="sblocks">
        {services.map((s, i) => (
          <article className={`section sblock ${i % 2 ? 'sblock--flip' : ''}`} id={s.slug} key={s.slug} aria-labelledby={`${s.slug}-t`} style={{ '--c': s.color }}>
            <div className="container sblock__grid">
              <div className="sblock__art" data-fade="" style={{ '--tint': s.tint, '--art-accent': s.color, '--art-bg': s.tint }}>
                <ServiceArt kind={s.art} />
              </div>
              <div className="sblock__copy">
                <span className="sblock__no" data-fade="" style={{ '--c': s.color }}>{s.no} / {String(services.length).padStart(2, '0')}</span>
                <Words as="h2" id={`${s.slug}-t`} className="h2" text={s.title} />
                <p className="sblock__intro" data-fade="0.1">{s.intro}</p>
                <ul className="ticks" data-stagger="">
                  {s.deliverables.slice(0, 6).map((d) => (
                    <li key={d}>
                      <Check width={18} height={18} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${s.slug}`} className="textlink" data-fade="0.1">
                  Explore {s.title} <SwapArrow />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ProcessSection />
    </div>
  );
}
