import React from 'react';

import SchoolSubjects from './SchoolSubjects';
import './SubjectsSection.scss';

const SubjectsSection = () => {
  let subjects = {
    schoolSubjects: [
      'mathematics',
      'Chemistry',
      'Information Technology',
      'Physics',
      'Biology',
      'Programming',
      'Russian Language',
      'Social Studies',
      'Music',
      'Literature',
      'History',
      'Geography',
    ],
    languages: [
      'English',
      'Spanish',
      'Japanese',
      'Germany',
      'Italian',
      'Chinese',
      'Russian for Foreiners',
      'French',
    ],
  };

  const { schoolSubjects, languages } = subjects;
  return (
    <section className="section-subjects">
      <div className="container">
        <div className="section-subjects__head">
          <h2>What are you planning to learn?</h2>
          <p>Choose from 120090 tutors teaching 20 subjects</p>
        </div>
        <h3 className="section-subjects__school">
          Secondary and Higher Education
        </h3>
        <SchoolSubjects subjects={schoolSubjects} />
        <h3 className="section-subjects__school languages">
          Foreign Languages tutors
        </h3>
        <SchoolSubjects subjects={languages} />
      </div>
    </section>
  );
};

export default SubjectsSection;
