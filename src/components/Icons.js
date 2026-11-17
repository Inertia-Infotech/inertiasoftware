import React from 'react';

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);

export const ArrowUp = (p) => (
  <svg {...base} {...p}><path d="M12 20V5M6 11l6-6 6 6" /></svg>
);

export const Mail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>
);

export const Phone = (p) => (
  <svg {...base} {...p}><path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" /></svg>
);

export const Pin = (p) => (
  <svg {...base} {...p}><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.3" /></svg>
);

export const Check = (p) => (
  <svg {...base} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);

export const WhatsApp = (p) => (
  <svg {...base} {...p}>
    <path d="M4.5 19.5 5.6 15.6A8 8 0 1 1 8.6 18.5Z" />
    <path d="M9.2 8.6c.2-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .4-.1.6l-.4.5c-.1.1-.1.3 0 .5.6 1 1.4 1.8 2.4 2.3.2.1.4.1.5-.1l.5-.6c.1-.2.4-.2.6-.1l1.4.7c.2.1.4.3.3.5 0 .5-.2 1.3-1.2 1.6-.7.2-1.9.1-3.6-.9-1.7-1.1-2.8-2.6-3.1-3.6-.4-1.1-.1-2.1.3-2.8Z" fill="currentColor" stroke="none" />
  </svg>
);

/** Arrow that slides out and back in on hover (no layout movement, clipped inside its box). */
export function SwapArrow({ up = false }) {
  const Icon = up ? ArrowUpRight : ArrowRight;
  return (
    <span className="swap-arrow" aria-hidden="true">
      <Icon className="swap-arrow__a" />
      <Icon className="swap-arrow__b" />
    </span>
  );
}
