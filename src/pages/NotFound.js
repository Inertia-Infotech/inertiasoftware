import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Words } from '../components/Words';
import { SwapArrow } from '../components/Icons';
import Cradle from '../components/Cradle';
import { useReveal } from '../lib/motion';
import useTitle from '../lib/useTitle';

export default function NotFound() {
  const root = useRef(null);
  useTitle('Page not found');
  useReveal(root);

  return (
    <section className="nf" ref={root}>
      <div className="container nf__grid">
        <div>
          <p className="eyebrow" data-fade="">Error 404</p>
          <Words as="h1" className="display nf__title" text="This page lost its *momentum*." />
          <p className="lede" data-fade="0.2">The page you’re looking for doesn’t exist or has moved.</p>
          <div className="phero__actions" data-fade="0.3">
            <Link to="/" className="btn">
              <span>Back to home</span>
              <SwapArrow />
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              <span>Contact us</span>
              <SwapArrow />
            </Link>
          </div>
        </div>
        <div className="nf__art" data-fade="0.2">
          <Cradle />
        </div>
      </div>
    </section>
  );
}
