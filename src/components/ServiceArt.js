import React from 'react';
import useAnimateInView from '../lib/useAnimateInView';

// Line illustrations for each service. Strokes use currentColor so they work on light and dark
// backgrounds; highlights use the accent colour. All motion is SMIL/CSS and pauses for reduced motion.

const Move = ({ path, dur = '2.6s', begin = '0s', reverse = false, r = 4 }) => (
  <circle r={r} className="sa-accent">
    <animateMotion
      dur={dur}
      begin={begin}
      repeatCount="indefinite"
      path={path}
      keyPoints={reverse ? '1;0' : '0;1'}
      keyTimes="0;1"
      calcMode="linear"
    />
  </circle>
);

function Erp() {
  const modules = [
    { x: 24, y: 28, label: 'Inventory' },
    { x: 280, y: 28, label: 'Billing' },
    { x: 24, y: 226, label: 'HR' },
    { x: 280, y: 226, label: 'Reports' },
  ];
  const links = ['M120 51 H180 V115', 'M280 51 H220 V115', 'M120 249 H180 V185', 'M280 249 H220 V185'];
  return (
    <>
      {links.map((d) => (
        <path key={d} d={d} className="sa-line sa-draw" pathLength="1" />
      ))}
      {modules.map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width="96" height="46" rx="10" className="sa-line" />
          <text x={m.x + 48} y={m.y + 27} className="sa-label" textAnchor="middle">{m.label}</text>
        </g>
      ))}
      <rect x="150" y="115" width="100" height="70" rx="14" className="sa-line sa-line--strong" />
      <rect x="170" y="150" width="12" height="24" rx="2" className="sa-accent sa-bar" />
      <rect x="194" y="138" width="12" height="36" rx="2" className="sa-accent sa-bar sa-bar--2" />
      <rect x="218" y="144" width="12" height="30" rx="2" className="sa-accent sa-bar sa-bar--3" />
      <Move path={links[0]} />
      <Move path={links[1]} begin="0.6s" />
      <Move path={links[2]} begin="1.2s" reverse />
      <Move path={links[3]} begin="1.8s" reverse />
    </>
  );
}

function Web() {
  return (
    <>
      <rect x="40" y="30" width="320" height="240" rx="14" className="sa-line sa-line--strong" />
      <path d="M40 58 H360" className="sa-line" />
      <circle cx="60" cy="44" r="3.5" className="sa-fill" />
      <circle cx="74" cy="44" r="3.5" className="sa-fill" />
      <circle cx="88" cy="44" r="3.5" className="sa-fill" />
      <rect x="150" y="37" width="150" height="14" rx="7" className="sa-line" />
      <g className="sa-build">
        <rect x="64" y="84" width="150" height="12" rx="6" className="sa-fill sa-b1" />
        <rect x="64" y="104" width="110" height="12" rx="6" className="sa-fill sa-b2" />
        <rect x="64" y="128" width="130" height="6" rx="3" className="sa-fill sa-dim sa-b3" />
        <rect x="64" y="140" width="96" height="6" rx="3" className="sa-fill sa-dim sa-b3" />
        <rect x="64" y="160" width="74" height="22" rx="11" className="sa-accent sa-b4" />
        <g className="sa-b5">
          <rect x="236" y="80" width="100" height="104" rx="10" className="sa-line" />
          <circle cx="314" cy="104" r="9" className="sa-accent" />
          <path d="M244 176 L274 138 L296 162 L311 148 L330 176" className="sa-line" />
        </g>
        <g className="sa-b6">
          <rect x="64" y="204" width="84" height="46" rx="8" className="sa-line sa-dimline" />
          <rect x="158" y="204" width="84" height="46" rx="8" className="sa-line sa-dimline" />
          <rect x="252" y="204" width="84" height="46" rx="8" className="sa-line sa-dimline" />
        </g>
      </g>
      <circle cx="101" cy="171" r="0" className="sa-ripple">
        <animate attributeName="r" values="0;0;24;24" keyTimes="0;0.62;0.74;1" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.9;0;0" keyTimes="0;0.62;0.74;1" dur="6s" repeatCount="indefinite" />
      </circle>
      <path d="M0 0 L0 17 L4.6 12.6 L8 20 L11 18.6 L7.6 11.4 L13.6 11.4 Z" className="sa-cursor">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M330 252 C 270 236, 160 210, 101 171"
          keyPoints="0;0;1;1"
          keyTimes="0;0.25;0.6;1"
          calcMode="spline"
          keySplines="0 0 1 1;0.6 0 0.2 1;0 0 1 1"
        />
      </path>
    </>
  );
}

function Design() {
  return (
    <>
      <path d="M120 100 H380" className="sa-guide" />
      <text x="372" y="92" className="sa-label sa-label--accent" textAnchor="end">16</text>
      <rect x="140" y="20" width="120" height="260" rx="22" className="sa-line sa-line--strong" />
      <rect x="182" y="30" width="36" height="8" rx="4" className="sa-fill" />
      <circle cx="170" cy="70" r="11" className="sa-line" />
      <rect x="188" y="63" width="50" height="6" rx="3" className="sa-fill" />
      <rect x="188" y="74" width="34" height="5" rx="2.5" className="sa-fill sa-dim" />
      <rect x="156" y="100" width="88" height="60" rx="10" className="sa-accent sa-pulse" />
      {[182, 206, 230].map((y) => (
        <g key={y}>
          <circle cx="164" cy={y} r="5" className="sa-line" />
          <rect x="176" y={y - 3} width={y === 206 ? 44 : 60} height="6" rx="3" className="sa-fill sa-dim" />
        </g>
      ))}
      {/* pen tool curve */}
      <path d="M22 236 L60 150" className="sa-handle" />
      <path d="M128 176 L92 262" className="sa-handle" />
      <circle cx="60" cy="150" r="4" className="sa-line" />
      <circle cx="92" cy="262" r="4" className="sa-line" />
      <path d="M22 236 C 60 150, 92 262, 128 176" className="sa-pen sa-draw-loop" pathLength="1" />
      <rect x="18" y="232" width="8" height="8" className="sa-anchor" />
      <rect x="124" y="172" width="8" height="8" className="sa-anchor" />
      {/* swatches + type */}
      <circle cx="300" cy="52" r="10" className="sa-accent" />
      <circle cx="326" cy="52" r="10" className="sa-fill" />
      <circle cx="352" cy="52" r="10" className="sa-line" />
      <text x="292" y="196" className="sa-type">Aa</text>
      <text x="294" y="222" className="sa-label">Display / 48</text>
    </>
  );
}

function Dev() {
  const lines = [
    { x: 38, w: 70, c: 'sa-accent' },
    { x: 54, w: 110, c: 'sa-fill' },
    { x: 54, w: 84, c: 'sa-fill sa-dim' },
    { x: 70, w: 96, c: 'sa-accent' },
    { x: 70, w: 60, c: 'sa-fill sa-dim' },
    { x: 54, w: 120, c: 'sa-fill' },
    { x: 38, w: 40, c: 'sa-fill sa-dim' },
  ];
  return (
    <>
      <rect x="18" y="40" width="204" height="184" rx="12" className="sa-line sa-line--strong" />
      <path d="M18 66 H222" className="sa-line" />
      <circle cx="36" cy="53" r="3.5" className="sa-fill" />
      <circle cx="50" cy="53" r="3.5" className="sa-fill" />
      <circle cx="64" cy="53" r="3.5" className="sa-fill" />
      {lines.map((l, i) => (
        <rect
          key={i}
          x={l.x}
          y={84 + i * 19}
          width={l.w}
          height="7"
          rx="3.5"
          className={`${l.c} sa-type-line`}
          style={{ animationDelay: `${i * 0.28}s` }}
        />
      ))}
      <text x="18" y="252" className="sa-label">› build passing</text>
      <path d="M222 132 C 238 132, 236 150, 252 150" className="sa-guide" />
      <rect x="252" y="30" width="120" height="240" rx="20" className="sa-line sa-line--strong" />
      <rect x="294" y="40" width="36" height="8" rx="4" className="sa-fill" />
      <rect x="268" y="66" width="60" height="8" rx="4" className="sa-fill" />
      <rect x="268" y="86" width="88" height="56" rx="10" className="sa-accent" />
      <rect x="268" y="152" width="88" height="20" rx="6" className="sa-line" />
      <rect x="268" y="180" width="88" height="20" rx="6" className="sa-line" />
      <rect x="268" y="236" width="88" height="6" rx="3" className="sa-fill sa-dim" />
      <rect x="268" y="236" width="88" height="6" rx="3" className="sa-accent sa-progress" />
      <circle cx="312" cy="214" r="9" className="sa-accent sa-done" />
      <path d="M307.5 214 l3 3 l5.5 -6" className="sa-check sa-done" />
    </>
  );
}

function Flow() {
  const top = 'M64 150 H124 M176 150 C 200 150, 205 87, 240 87';
  const route1 = 'M50 150 H150 C 200 150, 205 87, 240 87 H310 C 332 87, 318 150, 346 150';
  const route2 = 'M50 150 H150 C 200 150, 205 213, 240 213 H310 C 332 213, 318 150, 346 150';
  return (
    <>
      <path d={top} className="sa-line sa-draw" pathLength="1" />
      <path d="M176 150 C 200 150, 205 213, 240 213" className="sa-line sa-draw" pathLength="1" />
      <path d="M310 87 C 332 87, 316 150, 328 150" className="sa-line sa-draw" pathLength="1" />
      <path d="M310 213 C 332 213, 316 150, 328 150" className="sa-line sa-draw" pathLength="1" />
      <circle cx="50" cy="150" r="14" className="sa-line sa-line--strong" />
      <text x="50" y="186" className="sa-label" textAnchor="middle">problem</text>
      <path d="M150 124 L176 150 L150 176 L124 150 Z" className="sa-line sa-line--strong" />
      <rect x="240" y="70" width="70" height="34" rx="9" className="sa-line" />
      <text x="275" y="91" className="sa-label" textAnchor="middle">automate</text>
      <rect x="240" y="196" width="70" height="34" rx="9" className="sa-line" />
      <text x="275" y="217" className="sa-label" textAnchor="middle">integrate</text>
      <circle cx="350" cy="150" r="22" className="sa-accent" />
      <path d="M341 150 l6 6 l11 -12" className="sa-check" />
      <text x="350" y="194" className="sa-label" textAnchor="middle">solved</text>
      <Move path={route1} dur="3.6s" r={3.5} />
      <Move path={route2} dur="3.6s" begin="1.8s" r={3.5} />
    </>
  );
}

function Ai() {
  return (
    <>
      {/* chat window */}
      <rect x="18" y="34" width="196" height="232" rx="16" className="sa-line sa-line--strong" />
      <path d="M18 72 H214" className="sa-line" />
      <circle cx="42" cy="53" r="10" className="sa-accent" />
      <path d="M42 46 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z" className="sa-spark-ink" />
      <rect x="60" y="47" width="60" height="6" rx="3" className="sa-fill" />
      <rect x="60" y="57" width="38" height="5" rx="2.5" className="sa-fill sa-dim" />
      <rect x="104" y="88" width="94" height="26" rx="12" className="sa-fill sa-dim" />
      <rect x="34" y="126" width="132" height="44" rx="12" className="sa-line" />
      <rect x="46" y="138" width="100" height="6" rx="3" className="sa-fill" />
      <rect x="46" y="152" width="70" height="6" rx="3" className="sa-fill sa-dim" />
      <rect x="34" y="184" width="58" height="26" rx="12" className="sa-line" />
      <circle cx="51" cy="197" r="3.5" className="sa-fill sa-typing" />
      <circle cx="63" cy="197" r="3.5" className="sa-fill sa-typing sa-typing--2" />
      <circle cx="75" cy="197" r="3.5" className="sa-fill sa-typing sa-typing--3" />
      <rect x="30" y="230" width="172" height="22" rx="11" className="sa-line sa-dimline" />
      {/* AI core reading documents */}
      <path d="M214 150 C 240 150, 246 104, 300 104" className="sa-guide" />
      <path d="M300 104 C 330 104, 330 196, 300 214" className="sa-guide" />
      <path d="M300 104 C 270 130, 268 190, 262 214" className="sa-guide" />
      <path className="sa-accent sa-core" d="M300 70 C 303 92, 312 101, 334 104 C 312 107, 303 116, 300 138 C 297 116, 288 107, 266 104 C 288 101, 297 92, 300 70 Z" />
      <rect x="236" y="214" width="52" height="62" rx="8" className="sa-line sa-line--strong" />
      <rect x="246" y="228" width="30" height="5" rx="2.5" className="sa-fill" />
      <rect x="246" y="240" width="22" height="5" rx="2.5" className="sa-fill sa-dim" />
      <rect x="246" y="252" width="30" height="5" rx="2.5" className="sa-fill sa-dim" />
      <text x="262" y="292" className="sa-label" textAnchor="middle">invoice</text>
      <rect x="300" y="214" width="62" height="62" rx="8" className="sa-line sa-line--strong" />
      <rect x="312" y="252" width="8" height="14" rx="2" className="sa-accent sa-bar" />
      <rect x="326" y="242" width="8" height="24" rx="2" className="sa-accent sa-bar sa-bar--2" />
      <rect x="340" y="234" width="8" height="32" rx="2" className="sa-accent sa-bar sa-bar--3" />
      <text x="331" y="292" className="sa-label" textAnchor="middle">report</text>
      <Move path="M214 150 C 240 150, 246 104, 300 104" dur="2.2s" r={3.5} />
      <Move path="M300 104 C 330 104, 330 196, 300 214" dur="2.2s" begin="1.1s" r={3.5} />
    </>
  );
}

const ARTS = { erp: Erp, web: Web, design: Design, dev: Dev, flow: Flow, ai: Ai };

export default function ServiceArt({ kind, className = '', title, active = true }) {
  const Art = ARTS[kind] || Flow;
  const ref = useAnimateInView(active);
  return (
    <svg
      ref={ref}
      className={`sa is-paused ${className}`}
      viewBox="0 0 400 300"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <Art />
    </svg>
  );
}
