import React from 'react';
import './subject-filter.styles.scss';

const SubjectFilter = () => {
  return (
    <select className="subjects" name="subjects" form="filter-form">
      <option defaultValue="Select city">Select Subject</option>
      <option value="English">English</option>
      <option value="Maths">Maths</option>
      <option value="Physics">Physics</option>
      <option value="Chemistry">Chemistry</option>
    </select>
  );
};

export default SubjectFilter;
