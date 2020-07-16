import React from 'react';
import TutorItem from './TutorItem';

const TutorsList = (props) => {
  if (props.tutors.length === 0) {
    return <h2>No Tutors currently</h2>;
  }

  return (
    <ul className="tutors-list">
      {props.tutors.map((tutor) => {
        return (
          <TutorItem
            key={tutor.id}
            name={tutor.name}
            age={tutor.age}
            image={tutor.image}
            experience={tutor.experience}
            city={tutor.city}
          />
        );
      })}
    </ul>
  );
};

export default TutorsList;
