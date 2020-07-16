import React from 'react';

import Subject from './Subject';
import './SchoolSubjects.scss';

const SchoolSubjects = (props) => {
  return (
    <React.Fragment>
      <div className="section-subjects__secondary">
        {props.subjects.map((subject) => (
          <Subject key={props.subjects.indexOf(subject)}>{subject}</Subject>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SchoolSubjects;
