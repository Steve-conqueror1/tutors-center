import React from 'react';
import HeroSection from '../components/HeroSection';
import SubjectsSection from '../components/SubjectsSection';
import TutorFinderMethods from '../components/tutor-finder/FindTutorMethods';
import UserReviews from '../components/reviews/user-reviews';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />;
      <SubjectsSection />
      <TutorFinderMethods />
      <UserReviews />
    </React.Fragment>
  );
};

export default HomePage;
