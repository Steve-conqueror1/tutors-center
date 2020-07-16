import React from 'react';

import TutorFinderFast from './tutor-finder-fast';
import TutorFinderVeryFast from './tutor-finder-very-fast';

import './FindTutorMethods.scss';

const FindTutorMethods = () => (
  <div className="tutor-finder-methods">
    <div className="tutor-finder container">
      <h2>Two ways to find the best tutor</h2>
      <div className="tutor-finder__methods">
        <TutorFinderFast />
        <TutorFinderVeryFast />
      </div>
    </div>
  </div>
);

export default FindTutorMethods;
