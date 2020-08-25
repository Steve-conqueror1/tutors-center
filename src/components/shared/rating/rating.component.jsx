import React from 'react';
import './rating.styles.scss';

const Rating = (props) => {
  return (
    <React.Fragment>
      <h4 className="part__rating" style={{ fontSize: `${props.size}rem` }}>
        <span>
          <i className="fas fa-star"></i>
        </span>
        <span>
          <i className="fas fa-star"></i>
        </span>
        <span>
          <i className="fas fa-star"></i>
        </span>
        <span>
          <i className="fas fa-star"></i>
        </span>
        <span>
          <i className="fas fa-star"></i>
        </span>
      </h4>
    </React.Fragment>
  );
};

export default Rating;
