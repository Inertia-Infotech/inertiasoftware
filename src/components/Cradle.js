import React from 'react';

// Newton's cradle — "a body in motion stays in motion" (Newton's first law, the law of inertia).
// One ball per service colour. Pure SVG + CSS keyframes; pivots rotate around the top bar.
const X = [176, 248, 320, 392, 464];
const COLORS = ['#6C47FF', '#2D6BFF', '#F2479B', '#FF6A2B', '#0FB57E'];
const TOP = 30;
const CY = 300;
const R = 36;

function Ball({ i, className }) {
  const cx = X[i];
  return (
    <g className={className} style={className ? { transformOrigin: `${cx}px ${TOP}px` } : undefined}>
      <line x1={cx} y1={TOP} x2={cx} y2={CY - R} className="cr__string" />
      <circle cx={cx} cy={CY} r={R} fill={COLORS[i]} />
      <circle cx={cx - 12} cy={CY - 13} r={10} className="cr__shine" />
    </g>
  );
}

export default function Cradle({ className = '' }) {
  return (
    <svg className={`cradle ${className}`} viewBox="0 0 640 460" role="img" aria-label="An animated Newton's cradle">
      <g className="cr__frame">
        <line x1="16" y1={TOP} x2="624" y2={TOP} />
        <line x1="16" y1={TOP} x2="16" y2="440" />
        <line x1="624" y1={TOP} x2="624" y2="440" />
        <line x1="0" y1="440" x2="640" y2="440" />
      </g>
      <path className="cr__guide" d="M464 300 A270 270 0 0 0 574 277" />
      <path className="cr__guide" d="M176 300 A270 270 0 0 1 66 277" />
      <ellipse cx="320" cy="424" rx="190" ry="6" className="cr__shadow" />
      <Ball i={0} className="cr__swing cr__swing--l" />
      <Ball i={1} />
      <Ball i={2} />
      <Ball i={3} />
      <Ball i={4} className="cr__swing cr__swing--r" />
    </svg>
  );
}
