import React from 'react';
import { Link } from 'react-router-dom';
import './tutor-finder-very-fast.scss';

const TutorFinderVeryFast = () => (
  <div className="tutor-finder__very-fast">
    <h3 className="tutor-finder__header">Very Fast Method</h3>

    <div className="tutor-finder__step">
      <div className="tutor-finder__step-icon tutor-finder__order">
        <small>1</small>
        <i className="fas fa-clipboard-list"></i>
      </div>
      <p className="tutor-finder">
        Choose a suitable tutor from our base and add to the order
      </p>
    </div>
    <div className="tutor-finder__step">
      <div className="tutor-finder__step-icon tutor-finder--contact">
        <small>2</small>
        <i className="fas fa-phone-alt"></i>
      </div>
      <p className="tutor-finder">
        Choose a suitable tutor from our base and add to the order
      </p>
    </div>
    <div className="tutor-finder__step">
      <Link className="btn tutor-finder__faster-btn" to="/orders">
        Pick tutor for me
      </Link>
    </div>
  </div>
);

export default TutorFinderVeryFast;
