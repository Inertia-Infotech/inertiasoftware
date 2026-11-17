import React, { useMemo, useRef, useState } from 'react';
import { PageHero, WorkCard, NextProjectCard } from '../components/Sections';
import { projects } from '../data/work';
import { services } from '../data/services';
import { useReveal, gsap, useGSAP, prefersReducedMotion } from '../lib/motion';
import useTitle from '../lib/useTitle';

export default function Work() {
  const root = useRef(null);
  const grid = useRef(null);
  const [filter, setFilter] = useState('All');
  useTitle('Work', 'Selected ERP, website and app projects designed and built by Inertia Software.');
  useReveal(root);

  // Only offer filters for services that actually have projects.
  const filters = useMemo(
    () => ['All', ...services.map((s) => s.title).filter((t) => projects.some((p) => p.service === t))],
    []
  );
  const shown = filter === 'All' ? projects : projects.filter((p) => p.service === filter);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        grid.current.children,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06 }
      );
    },
    { dependencies: [filter], scope: grid }
  );

  return (
    <div ref={root}>
      <PageHero
        eyebrow="Work"
        title="Selected *work*."
        lede="A few of the products we’ve designed and built for businesses across retail, education, hospitality, real estate and manufacturing."
      >
        <div className="filters" role="group" aria-label="Filter projects by service" data-fade="0.35">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`chip ${filter === f ? 'is-active' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="chip__count mono">
                {f === 'All' ? projects.length : projects.filter((p) => p.service === f).length}
              </span>
            </button>
          ))}
        </div>
      </PageHero>

      <section className="section section--top0">
        <div className="container">
          <div className="wgrid" ref={grid}>
            {shown.map((p) => (
              <WorkCard key={p.id} project={p} headingLevel="h2" />
            ))}
            <NextProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
}
