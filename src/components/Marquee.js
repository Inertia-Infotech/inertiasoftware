import React, { useRef } from 'react';
import { gsap, useGSAP, getLenis, prefersReducedMotion } from '../lib/motion';

const Star = () => (
  <svg className="marquee__star" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5Z" fill="currentColor" />
  </svg>
);

// Infinite ticker that speeds up with scroll velocity and follows scroll direction.
// `reverse` runs it the other way (used for the second crossed tape).
export function Ticker({ items, className = '', reverse = false }) {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return undefined;
      const track = root.current.querySelector('.marquee__track');
      const base = reverse ? -1 : 1;
      const tween = gsap.to(track, { xPercent: -50, duration: 36, ease: 'none', repeat: -1 });
      tween.totalTime(tween.duration() * 200); // headroom so it can play in reverse
      tween.timeScale(base);

      const lenis = getLenis();
      if (!lenis) return undefined;

      let dir = 1;
      const onScroll = ({ velocity }) => {
        if (velocity > 0.1) dir = 1;
        else if (velocity < -0.1) dir = -1;
        const boost = 1 + Math.min(Math.abs(velocity) * 0.18, 6);
        gsap.to(tween, {
          timeScale: base * dir * boost,
          duration: 0.25,
          overwrite: true,
          onComplete: () => gsap.to(tween, { timeScale: base * dir, duration: 1.4, ease: 'power2.out', overwrite: true }),
        });
      };
      const off = lenis.on('scroll', onScroll);
      return () => off();
    },
    { scope: root }
  );

  const row = (
    <div className="marquee__group">
      {items.map((t) => (
        <span className="marquee__item" key={t}>
          {t}
          <Star />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} ref={root} aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  );
}

// Two crossed tapes moving in opposite directions.
export default function Tapes({ top, bottom }) {
  return (
    <div className="tapes">
      <Ticker items={bottom} className="tape tape--dark" reverse />
      <Ticker items={top} className="tape tape--grad" />
    </div>
  );
}
