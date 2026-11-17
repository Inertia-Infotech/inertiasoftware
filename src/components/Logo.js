import React from 'react';

// Wordmark: two touching spheres (momentum passing from one to the next) + "inertia".
export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <svg className="logo__mark" viewBox="0 0 34 20" aria-hidden="true" focusable="false">
        <circle cx="9" cy="10" r="8" fill="#6C47FF" />
        <circle cx="25" cy="10" r="8" fill="#F2479B" />
      </svg>
      <span className="logo__word">inertia</span>
    </span>
  );
}
