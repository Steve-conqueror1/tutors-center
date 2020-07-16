import React from 'react';
import { Link } from 'react-router-dom';

import REVIEWS_LIST from '../../../assets/reviews-list';
import ReviewsLoader from './reviews-loader';

import './user-reviews.scss';

class UserReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: REVIEWS_LIST,
      limit: 4,
    };
  }

  displayedReviews = (reviews) => {
    return reviews.filter(
      (review, index) =>
        index < this.state.limit && index > this.state.limit - 3
    );
  };

  fetchNextPage = () => {
    this.setState({
      limit:
        this.state.limit === this.state.reviews.length
          ? 2
          : this.state.limit + 2,
    });
  };

  fetchPreviousPage = () => {
    this.setState({
      limit: this.state.limit > 2 ? this.state.limit - 2 : null,
    });
  };
  render() {
    const { reviews, limit } = this.state;
    return (
      <div className="reviews">
        <div className="container">
          <div className="reviews__header">
            <h2>Over 25,000 students rated tutors</h2>
            <p>
              After the session, we talk on the phone with each student and ask
              for a review of the tutor
            </p>
          </div>

          <ReviewsLoader reviews={this.displayedReviews(reviews)} />

          <div className="reviews__scroll">
            <i
              className={` ${
                limit === 2 ? 'scroll-end' : null
              } fas fa-chevron-left left-arrow`}
              onClick={this.fetchPreviousPage}
            ></i>

            <i
              className={`${
                reviews.length === limit ? 'scroll-end' : null
              } fas fa-chevron-right right-arrow`}
              onClick={this.fetchNextPage}
            ></i>
          </div>
          <Link to="/tutors" className="reviews__tutor-finder">
            Find tutors
          </Link>
        </div>
      </div>
    );
  }
}

export default UserReviews;
