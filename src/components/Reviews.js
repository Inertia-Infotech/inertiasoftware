import React, { useState, useEffect, useRef } from 'react';
import '../styles/Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'CEO, TechVentures India',
    avatar: 'RS',
    color: '#0d6efd',
    rating: 5,
    text: "Inertia Infotech completely transformed our business. They built our ERP system from scratch, and the results are incredible. Our productivity increased by 40% within the first month. The team's dedication and technical expertise is unmatched.",
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Founder, StyleHub',
    avatar: 'PM',
    color: '#7c3aed',
    rating: 5,
    text: "The e-commerce platform they built for us is stunning and performs brilliantly. Orders have doubled since launch. Inertia Infotech understood our vision perfectly and delivered beyond expectations. Highly recommended!",
  },
  {
    id: 3,
    name: 'Ankit Patel',
    role: 'CTO, FinSmart Solutions',
    avatar: 'AP',
    color: '#059669',
    rating: 5,
    text: "Their IT consultancy services saved us lakhs in infrastructure costs. The team reviewed our entire stack and provided a clear, actionable roadmap. Professional, prompt, and highly knowledgeable. Will definitely work with them again.",
  },
  {
    id: 4,
    name: 'Sneha Kulkarni',
    role: 'Director, EduPrime',
    avatar: 'SK',
    color: '#d97706',
    rating: 5,
    text: "The mobile app they developed for our ed-tech platform is exceptional. Smooth, intuitive, and loved by our 10,000+ users. Inertia Infotech's communication throughout the project was excellent — always responsive and transparent.",
  },
  {
    id: 5,
    name: 'Vikram Desai',
    role: 'MD, Desai Manufacturing',
    avatar: 'VD',
    color: '#e11d48',
    rating: 5,
    text: "We needed a complex inventory management system integrated with our existing tools. Inertia Infotech delivered a flawless solution on time and on budget. The post-launch support has been equally impressive.",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => goTo((current + 1) % reviewsData.length);
  const prev = () => goTo((current - 1 + reviewsData.length) % reviewsData.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 4500);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  const getVisibleIndices = () => {
    const len = reviewsData.length;
    return [
      (current - 1 + len) % len,
      current,
      (current + 1) % len,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-bg-shape"></div>
      <div className="container">
        <div className="reviews-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="reviews-carousel">
          <div className="reviews-track">
            {visibleIndices.map((idx, pos) => {
              const review = reviewsData[idx];
              const isCenter = pos === 1;
              return (
                <div
                  key={`${idx}-${pos}`}
                  className={`review-card ${isCenter ? 'review-card--active' : 'review-card--side'}`}
                  style={{ '--review-color': review.color }}
                  onClick={() => !isCenter && goTo(idx)}
                >
                  <div className="review-quote">
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <p className="review-text">{review.text}</p>
                  <div className="review-stars">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                  </div>
                  <div className="review-author">
                    <div className="review-avatar" style={{ background: review.color }}>
                      {review.avatar}
                    </div>
                    <div>
                      <div className="review-name">{review.name}</div>
                      <div className="review-role">{review.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reviews-controls">
            <button className="reviews-arrow" onClick={prev} aria-label="Previous">
              <i className="fa fa-chevron-left"></i>
            </button>
            <div className="reviews-dots">
              {reviewsData.map((_, idx) => (
                <button
                  key={idx}
                  className={`reviews-dot ${idx === current ? 'reviews-dot--active' : ''}`}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            <button className="reviews-arrow" onClick={next} aria-label="Next">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
