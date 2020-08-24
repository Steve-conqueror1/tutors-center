import React, { useState, useEffect } from 'react';
import SubjectFilter from '../../../shared/components/subject-filter/subject-filter.components';

import './Tutors.scss';

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

const learnSubject = [...subjects.schoolSubjects];

const Tutors = (props) => {
  const [users, setUsers] = useState([]);

  let dataLength = users.length;

  const getTutors = async () => {
    const tutors = await props.firebase.doReadUserDetail();

    setTimeout(() => {
      setUsers(tutors);
      dataLength = users.length;
    }, 1000);
  };

  useEffect(() => {
    getTutors();
  }, [dataLength]);

  console.log('dataLength', dataLength);

  const renderedTutors = users.map((user, index) => (
    <div className="" key={index}>
      <h1>Tutors {user.firstname}</h1>
    </div>
  ));

  return (
    <div className="tutors container">
      <h2 className="tutors__path">
        Home &rsaquo;<span>Tutors</span>{' '}
      </h2>
      <h1 className="tutors__header">
        Found tutors for you <span>{users.length + 234}</span>{' '}
      </h1>
      <div className="tutors__detail">
        <div className="tutors__sorting">
          <div className="filter__part">
            <h1>
              <i className="fas fa-filter"></i> Filter Results
            </h1>
          </div>
          <h1 className="part__header">Subjects</h1>
          <div className="filter__part">
            <h3>Choose the subject you would like to learn</h3>
            <SubjectFilter />
          </div>

          <h1 className="part__header">City</h1>
          <div className="filter__part">
            <h3>Choose your city from the list</h3>
            <SubjectFilter />
          </div>

          <hr />
          <h2 className="part__header last">
            Average Rating: <span>4.7</span>{' '}
          </h2>
          <h4 className="part__rating">
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
          </h4>
          <p>Averarage ratings of all tutors found on our platform</p>
          <hr />
        </div>
        <div className="tutors__list">
          <h1 className="list__header">
            Here is the list of available tutors for you
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            harum vero ducimus ratione earum sunt corrupti libero a. Beatae
            repellat inventore provident itaque iste, quam laudantium quos
            laborum eum natus!
          </p>
          {renderedTutors}
        </div>
      </div>
    </div>
  );
};

export default Tutors;
