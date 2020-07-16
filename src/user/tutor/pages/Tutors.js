import React from 'react';
import TutorsList from '../components/TutorsList';

const Tutors = () => {
  const TUTORS = [
    {
      id: 't1',
      name: 'Stephen Kilonzo',
      city: 'Moscow',
      age: 24,
      experience: '4 years',
      image: 'https://randomuser.me/portraits/men/8.jpg',
    },
    {
      id: 't2',
      name: 'Stephen Kilonzo',
      city: 'Saint Petersburg',
      age: 34,
      experience: '7 years',
      image: 'https://randomuser.me/portraits/women/7.jpg',
    },
  ];
  return <TutorsList tutors={TUTORS} />;
};

export default Tutors;
