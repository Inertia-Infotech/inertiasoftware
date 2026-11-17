import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Cradle from '../components/Cradle';
import Tapes from '../components/Marquee';
import ServiceArt from '../components/ServiceArt';
import { Words, ScrubText } from '../components/Words';
import { SwapArrow, ArrowUpRight } from '../components/Icons';
import { SectionHead, ProcessSection, WorkCard, NextProjectCard } from '../components/Sections';
import { services } from '../data/services';
import { projects } from '../data/work';
import { principles, stack } from '../data/site';
import { useReveal, gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from '../lib/motion';
import useTitle from '../lib/useTitle';

const artVars = (s) => ({ '--c': s.color, '--tint': s.tint, '--art-accent': s.artAccent, '--art-bg': s.color });

function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return undefined;
      const cards = gsap.utils.toArray('.deck__card', root.current);

      // Cards rise in on load…
      gsap.from(gsap.utils.toArray('.deck__in', root.current), {
        y: 140,
        autoAlpha: 0,
        duration: 1.3,
        ease: 'expo.out',
        stagger: 0.08,
        delay: 0.5,
      });

      // Headline drifts up and softens as you scroll away from the hero.
      gsap.to('.hero__inner', {
        yPercent: -22,
        autoAlpha: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: '70% top', scrub: true },
      });

      // …start fanned like a hand of cards, and straighten as you scroll.
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1200px)', () => {
        const rot = [-12, -7, -2.4, 2.4, 7, 12];
        const x = [190, 115, 40, -40, -115, -190];
        const y = [88, 36, 8, 8, 36, 88];
        gsap.fromTo(
          cards,
          { rotation: (i) => rot[i], x: (i) => x[i], y: (i) => y[i] },
          {
            rotation: 0,
            x: 0,
            y: 0,
            ease: 'none',
            scrollTrigger: { trigger: '.deck', start: 'top 92%', end: 'top 30%', scrub: 1 },
          }
        );
      });
      mm.add('(max-width: 1199px)', () => {
        gsap.fromTo(
          cards,
          { rotation: (i) => (i % 2 ? 3 : -3), y: (i) => (i % 2 ? 18 : 0) },
          {
            rotation: 0,
            y: 0,
            ease: 'none',
            scrollTrigger: { trigger: '.deck', start: 'top 95%', end: 'top 40%', scrub: 1 },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true">
        <span className="blob blob--a" />
        <span className="blob blob--b" />
        <span className="blob blob--c" />
      </div>

      <div className="container hero__inner">
        <p className="pill" data-fade="">
          <span className="dot dot--live" aria-hidden="true" />
          Taking new projects · <strong>Free demo in 2 days</strong>
        </p>

        <Words
          as="h1"
          id="hero-title"
          className="hero__title display"
          text="Websites, apps & ERP software that keep your business *moving*."
          delay="0.1"
        />

        <p className="hero__lede lede" data-fade="0.35">
          Inertia is an independent design &amp; development studio. We turn ideas and messy processes into fast,
          beautiful software that your team and customers love to use.
        </p>

        <div className="hero__actions" data-fade="0.45">
          <Link to="/contact" className="btn btn--grad">
            <span>Start a project</span>
            <SwapArrow />
          </Link>
          <Link to="/work" className="btn btn--ghost">
            <span>See our work</span>
            <SwapArrow />
          </Link>
        </div>
      </div>

      <div className="container">
        <ul className="deck">
          {services.map((s) => (
            <li className="deck__card" key={s.slug} style={artVars(s)}>
              <Link to={`/services/${s.slug}`} className="deck__in">
                <span className="deck__top">
                  <span className="deck__no">{s.no}</span>
                  <span className="deck__go" aria-hidden="true">
                    <ArrowUpRight width={18} height={18} />
                  </span>
                </span>
                <span className="deck__art" aria-hidden="true">
                  <ServiceArt kind={s.art} />
                </span>
                <span className="deck__title">{s.title}</span>
                <span className="deck__tags">{s.tags.slice(0, 3).join(' · ')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="section intro" aria-label="About the studio">
      <div className="container intro__grid">
        <figure className="intro__art" data-fade="">
          <div data-parallax="0.12">
            <Cradle />
          </div>
          <figcaption className="intro__caption mono">Fig. 01 — A body in motion stays in motion.</figcaption>
        </figure>
        <div className="intro__copy">
          <p className="eyebrow" data-fade="">The studio</p>
          <ScrubText
            className="intro__text"
            text="We’re a small, independent studio, and we like it that way. You work directly with the people who design and build your product. No layers, no hand-offs, no fluff. Just *thoughtful* software that keeps *moving* long after launch."
          />
        </div>
      </div>
    </section>
  );
}

function ServicesList() {
  const [active, setActive] = useState(0);
  const root = useRef(null);
  const current = services[active];

  useGSAP(
    () => {
      if (!prefersReducedMotion()) {
        gsap.fromTo(
          root.current,
          { clipPath: 'inset(0% 5% 0% 5% round 56px)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 28px)',
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'top 20%', scrub: true },
          }
        );
      }
      gsap.utils.toArray('.svc__row', root.current).forEach((row, i) => {
        ScrollTrigger.create({
          trigger: row,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="section section--dark svc" ref={root} aria-labelledby="svc-title">
      <div className="container">
        <SectionHead
          dark
          id="svc-title"
          eyebrow="What we do"
          title="Six ways we help you move *forward*."
          link={{ to: '/services', label: 'All services' }}
        />

        <div className="svc__grid">
          <ol className="svc__list">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className={`svc__row ${active === i ? 'is-active' : ''}`}
                  style={{ '--c': s.color }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="svc__no">{s.no}</span>
                  <span className="svc__body">
                    <span className="svc__title">{s.title}</span>
                    <span className="svc__short">{s.short}</span>
                    <span className="svc__art-m" aria-hidden="true" style={artVars(s)}>
                      <ServiceArt kind={s.art} />
                    </span>
                  </span>
                  <span className="svc__go" aria-hidden="true">
                    <SwapArrow up />
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="svc__panel" aria-hidden="true">
            <div className="svc__stage" style={{ '--c': current.color }}>
              {services.map((s, i) => (
                <div key={s.slug} className={`svc__art ${active === i ? 'is-active' : ''}`} style={artVars(s)}>
                  <ServiceArt kind={s.art} />
                </div>
              ))}
            </div>
            <div className="svc__caption">
              <span>{current.no} / {String(services.length).padStart(2, '0')}</span>
              <span>{current.tags.join(' · ')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return undefined;
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        const track = root.current.querySelector('.work__track');
        const pin = root.current.querySelector('.work__pin');
        const distance = () => track.scrollWidth - pin.clientWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            start: 'center center',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="section work" ref={root} aria-labelledby="work-title">
      <div className="container">
        <SectionHead
          id="work-title"
          eyebrow="Selected work"
          title="Projects we’re *proud* of."
          link={{ to: '/work', label: 'View all work' }}
        />
      </div>
      <div className="work__pin">
        <div className="work__track">
          {projects.map((p) => (
            <WorkCard key={p.id} project={p} />
          ))}
          <NextProjectCard />
        </div>
      </div>
    </section>
  );
}

const TILE_COLORS = ['#6C47FF', '#F2479B', '#FF6A2B', '#0FB57E'];

function Principles() {
  return (
    <section className="section principles" aria-labelledby="why-title">
      <div className="container">
        <SectionHead id="why-title" eyebrow="Why work with us" title="Small studio. *Serious* craft." />
        <ul className="bento" data-stagger="">
          {principles.map((p, i) => (
            <li className="bento__tile" key={p.title} style={{ '--c': TILE_COLORS[i] }}>
              <span className="bento__no">0{i + 1}</span>
              <h3 className="bento__title">{p.title}</h3>
              <p className="bento__desc">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section section--tight stack" aria-labelledby="stack-title">
      <div className="container stack__grid">
        <p className="eyebrow" id="stack-title" data-fade="">Tools we build with</p>
        <ul className="stack__list" data-stagger="">
          {stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  const root = useRef(null);
  useTitle(null, 'Inertia Software is an independent studio designing and building ERP software, websites and mobile apps for growing businesses.');
  useReveal(root);

  return (
    <div ref={root}>
      <Hero />
      <Tapes
        top={services.map((s) => s.title)}
        bottom={['Design', 'Develop', 'Launch', 'Support', 'Scale']}
      />
      <Intro />
      <ServicesList />
      <SelectedWork />
      <ProcessSection />
      <Principles />
      <Stack />
    </div>
  );
}
