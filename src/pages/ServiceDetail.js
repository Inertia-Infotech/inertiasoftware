import React, { useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ServiceArt from '../components/ServiceArt';
import { PageHero, ProcessSection } from '../components/Sections';
import { Words } from '../components/Words';
import { SwapArrow } from '../components/Icons';
import { services, getService, legacyServiceSlugs } from '../data/services';
import { whatsappLink } from '../data/site';
import { useReveal } from '../lib/motion';
import useTitle from '../lib/useTitle';
import NotFound from './NotFound';

function Detail({ service }) {
  const root = useRef(null);
  useTitle(service.title, `${service.title} by Inertia Software — ${service.short}`);
  useReveal(root, [service.slug]);

  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];

  return (
    <div ref={root} style={{ '--c': service.color, '--tint': service.tint }}>
      <PageHero
        crumbs={[{ to: '/services', label: 'Services' }, { label: service.title }]}
        eyebrow={`Service ${service.no}`}
        title={service.title}
        lede={service.short}
      >
        <div className="phero__actions" data-fade="0.35">
          <Link to={`/contact?service=${service.slug}`} className="btn">
            <span>Discuss your project</span>
            <SwapArrow />
          </Link>
          <a
            className="btn btn--ghost"
            href={whatsappLink(`Hi Inertia! I'm interested in ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>WhatsApp us</span>
            <SwapArrow up />
          </a>
        </div>
      </PageHero>

      <section className="container">
        <div className="sd__art" data-fade="0.2" style={{ '--tint': service.tint, '--art-accent': service.color, '--art-bg': service.tint }}>
          <ServiceArt kind={service.art} title={`${service.title} illustration`} />
        </div>
      </section>

      <section className="section sd__overview">
        <div className="container sd__overview-grid">
          <p className="eyebrow" data-fade="">Overview</p>
          <div>
            <p className="sd__intro" data-fade="">{service.intro}</p>
            <div className="sd__ideal" data-fade="0.1">
              <span className="mono">Ideal for</span>
              <p>{service.idealFor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight sd__deliver" aria-labelledby="deliver-title">
        <div className="container">
          <div className="shead">
            <p className="eyebrow" data-fade="">What you get</p>
            <Words as="h2" id="deliver-title" className="h2" text="Everything included, *end* to end." />
          </div>
          <ol className="dgrid" data-stagger="">
            {service.deliverables.map((d, i) => (
              <li key={d}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                {d}
              </li>
            ))}
          </ol>
          <div className="sd__stack" data-fade="">
            <span className="mono">Typical stack</span>
            <ul>
              {service.stack.map((t) => (
                <li key={t} className="chip chip--static">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="container">
        <Link to={`/services/${next.slug}`} className="nextlink">
          <span className="mono">Next service — {next.no}</span>
          <span className="nextlink__title">
            {next.title} <SwapArrow />
          </span>
        </Link>
      </section>
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  if (legacyServiceSlugs[slug]) return <Navigate to={`/services/${legacyServiceSlugs[slug]}`} replace />;
  const service = getService(slug);
  if (!service) return <NotFound />;
  return <Detail key={service.slug} service={service} />;
}
