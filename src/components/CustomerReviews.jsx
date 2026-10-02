import React, { useState } from 'react';
import './CustomerReviews.css';

const reviews = [
  { name: 'Tejas Dabholkar', width: 2048, height: 684 },
  { name: 'Yash Daryankar', width: 2048, height: 684 },
  { name: 'Ankita Desai', width: 2048, height: 684 },
  { name: 'Sanketa Narode', width: 2048, height: 768 },
  { name: 'girish.g', width: 1951, height: 768 },
  { name: 'Aniket Kumbhar', width: 2048, height: 683 },
];

export default function CustomerReviews() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="customer-reviews" aria-labelledby="reviews">
      <div className="reviews-heading">
        <div>
          <p className="reviews-eyebrow">Customers</p>
          <h2 id="reviews">Loved by AYSHVA Customers</h2>
          <p>Tap a review to read the full image.</p>
        </div>
        {/* <button className="reviews-toggle" type="button" aria-pressed={paused}
          onClick={() => setPaused(value => !value)}>
          {paused ? 'Resume scrolling' : 'Pause scrolling'}
        </button> */}
      </div>
      <div className="reviews-viewport" tabIndex={0} role="region" aria-label="Customer review images">
        <div className={`reviews-track${paused ? ' is-paused' : ''}`}>
          {[false, true].map(duplicate => (
            <div className="reviews-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {reviews.map((review, index) => (
                <a className="review-image" key={review.name} href={`/assets/reviews/${index + 1}.jpg`}
                  target="_blank" rel="noopener noreferrer" tabIndex={duplicate ? -1 : 0}
                  aria-label={`Read ${review.name}'s review, opens full image in a new tab`}>
                  <img src={`/assets/reviews/${index + 1}.jpg`} alt={`Customer review by ${review.name}`}
                    width={review.width} height={review.height} loading="lazy" decoding="async" />
                  <span className="review-caption">
                    <span>{review.name}</span>
                    <span className="review-open" aria-hidden="true">View review ↗</span>
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
