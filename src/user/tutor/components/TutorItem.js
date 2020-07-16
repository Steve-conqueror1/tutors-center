import React from 'react';
import './TutorItem.css';

const TutorItem = (props) => {
  return (
    <li className="tutor-item">
      <div className="tutor-list__content">
        <div className="tutor-list__img">
          <img src={props.image} alt={props.name} />
        </div>
        <h2>Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
        <h3>Age: {props.city}</h3>
        <h3>Experience: {props.experience}</h3>
      </div>
    </li>
  );
};

export default TutorItem;
