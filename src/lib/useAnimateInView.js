import { useEffect, useRef } from 'react';

// Resolves once the page has finished loading and the browser has a quiet moment,
// so decorative animations never compete with the first paint.
let settled = false;
const settledPromise = new Promise((resolve) => {
  if (typeof window === 'undefined') return;
  const done = () => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    idle(() => {
      settled = true;
      resolve();
    }, { timeout: 1200 });
  };
  if (document.readyState === 'complete') done();
  else window.addEventListener('load', done, { once: true });
});

/**
 * Runs an SVG's CSS + SMIL animations only while it is on screen, `active`,
 * and after the page has settled. Off-screen illustrations cost nothing.
 */
export default function useAnimateInView(active = true) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let visible = false;
    let alive = true;

    const apply = () => {
      if (!alive) return;
      const run = visible && active && settled;
      el.classList.toggle('is-paused', !run);
      try {
        if (run) el.unpauseAnimations();
        else el.pauseAnimations();
      } catch (e) {
        /* not an <svg> root — CSS class alone handles it */
      }
    };

    apply();
    if (!settled) settledPromise.then(apply);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        apply();
      },
      { rootMargin: '100px 0px' }
    );
    io.observe(el);

    return () => {
      alive = false;
      io.disconnect();
    };
  }, [active]);

  return ref;
}
