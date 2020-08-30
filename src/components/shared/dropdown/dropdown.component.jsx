import React from 'react';
import { Link } from 'react-router-dom';
import './dropdown.styles.scss';

const Dropdown = ({ subjects, visibility, onMouseLeave }) => {
  return (
    <div
      className="dropdown"
      style={{ visibility: `${visibility}` }}
      onMouseLeave={onMouseLeave}
    >
      {subjects.map((subject, index) => {
        return (
          <div className="dropdown__subject" key={index}>
            <Link to={`tutor/${subject.toLowerCase()}`}>
              <h4>{subject}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
