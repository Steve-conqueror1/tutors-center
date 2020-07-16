import React from 'react';
import HeroSectionPromotion from './HeroSectionPromotion';
import HeroSectionFilter from './HeroSectionFilter';

import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>We help you find the best tutors</h1>
        <HeroSectionPromotion />
        <HeroSectionFilter />
      </div>
    </section>
  );
};

export default HeroSection;
