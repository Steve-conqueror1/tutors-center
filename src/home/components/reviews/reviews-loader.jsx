import React from 'react';

import './reviews-loader.scss';

const ReviewsLoader = (props) => (
  <div className="reviews__collection">
    {props.reviews.map((review, index) => (
      <div className="reviews__profiles" key={index}>
        <div className="reviews__user">
          <div className="reviews__bio">
            <figure className="profile">
              <img src={review.userProfileUrl} alt={review.name} />
            </figure>
            <div className="rating">
              <h2>{review.name}</h2>
              <h3>{review.subject}</h3>
              <span>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
            </div>
          </div>
          <div className="reviews__message">
            <p>{review.review}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ReviewsLoader;
