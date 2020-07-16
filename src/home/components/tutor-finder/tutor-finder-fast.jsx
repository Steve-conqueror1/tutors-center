import React from 'react';
import { Link } from 'react-router-dom';

import './tutor-finder-fast.scss';

const TutorFinderFast = () => (
  <div className="tutor-finder__fast">
    <h3 className="tutor-finder__header">Fast Method</h3>
    <div className="tutor-finder__step">
      <div className="tutor-finder__step-icon tutor-finder__tutors-base">
        <small>1</small>
        <i className="fas fa-users"></i>
      </div>
      <p>Choose a suitable tutor from our base and add to the order</p>
    </div>
    <div className="tutor-finder__step">
      <div className="tutor-finder__step-icon tutor-finder__order">
        <small>2</small>
        <i className="fas fa-clipboard-list"></i>
      </div>
      <p>Choose a suitable tutor from our base and add to the order</p>
    </div>
    <div className="tutor-finder__step">
      <div className="tutor-finder__step-icon tutor-finder--contact">
        <small>3</small>
        <i className="fas fa-phone-alt"></i>
      </div>
      <p>Choose a suitable tutor from our base and add to the order</p>
    </div>
    <div className="tutor-finder__step">
      <Link className="btn tutor-finder__fast-btn" to="/tutors">
        Find Tutors
      </Link>
    </div>
  </div>
);

export default TutorFinderFast;
