import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

let lenis = null;

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Start Lenis smooth scrolling once, driven by GSAP's ticker so ScrollTrigger stays in sync. */
export function initSmoothScroll() {
  if (lenis || prefersReducedMotion()) return lenis;

  lenis = new Lenis({
    lerp: 0.07,
    wheelMultiplier: 0.95,
    smoothWheel: true,
    anchors: { offset: -96 },
    autoRaf: false,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

export const getLenis = () => lenis;

export function scrollToTop({ immediate = true } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate, force: true });
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
}

export function setScrollLocked(locked) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.classList.toggle('is-locked', locked);
}

/**
 * Scroll-triggered reveals for everything inside `scope`:
 *  [data-split]     word-by-word masked rise (use the <Words> component)
 *  [data-fade]      soft fade + rise; value = delay in seconds
 *  [data-stagger]   children fade in one after another
 *  [data-parallax]  drifts while scrolling; value = strength (e.g. 0.15)
 *  [data-scrub]     words light up as you scroll (use <ScrubText>)
 */
export function useReveal(scope, dependencies = []) {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(scope);

      q('[data-split]').forEach((el) => {
        el.classList.add('is-masked');
        gsap.from(el.querySelectorAll('.w > span'), {
          yPercent: 115,
          duration: 1.15,
          ease: 'expo.out',
          stagger: 0.045,
          delay: parseFloat(el.dataset.delay) || 0,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          // Drop the mask once revealed so italic tails and punctuation are never clipped.
          onComplete: () => el.classList.remove('is-masked'),
        });
      });

      q('[data-fade]').forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 32,
          duration: 1.1,
          ease: 'power3.out',
          delay: parseFloat(el.dataset.fade) || 0,
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });
      });

      q('[data-stagger]').forEach((el) => {
        gsap.from(el.children, {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      q('[data-parallax]').forEach((el) => {
        const strength = parseFloat(el.dataset.parallax) || 0.15;
        gsap.fromTo(
          el,
          { yPercent: strength * 50 },
          {
            yPercent: -strength * 50,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      });

      q('[data-scrub]').forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll('.sw'),
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 55%', scrub: true },
          }
        );
      });
    },
    { scope, dependencies, revertOnUpdate: true }
  );
}

export { gsap, ScrollTrigger, useGSAP };
