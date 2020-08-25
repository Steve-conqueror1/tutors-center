import React, { useState, useEffect } from 'react';
import Rating from '../../../components/shared/rating/rating.component';
import Tutor from '../../../components/tutor/tutor.component';
import subjects from '../../../data/subjects';
import cities from '../../../data/cities';
import DataFilter from '../../../components/shared/input/select.components';

import './Tutors.scss';

const Tutors = (props) => {
  const [users, setUsers] = useState([]);

  const [subject, setSubject] = useState('');
  const [region, setRegion] = useState('');

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

  const handleSubjectChange = (e) => {
    console.log(e.target.value);
    setSubject(e.target.value);
  };

  const handleRegionChange = (e) => {
    console.log(e.target.value);
    setRegion(e.target.value);
  };

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
            <DataFilter
              items={subjects}
              message="Choose subject"
              name="subject"
              customClass="tutor-select"
              value={subject}
              onChange={handleSubjectChange}
            />
          </div>

          <h1 className="part__header">City</h1>
          <div className="filter__part">
            <h3>Choose your city from the list</h3>
            <DataFilter
              items={cities}
              message="Choose your city"
              name="city"
              customClass="tutor-select"
              value={region}
              onChange={handleRegionChange}
            />
          </div>

          <hr />
          <h2 className="part__header last">
            Average Rating: <span>4.7</span>{' '}
          </h2>
          <Rating size={2} />

          <p>Averarage ratings of all tutors found on our platform</p>
          <hr />
        </div>
        <div className="tutors__list">
          <h1 className="list__header">
            Here is the list of available tutors for you
          </h1>

          <Tutor tutors={users} subject={subject} region={region} />
        </div>
      </div>
    </div>
  );
};

export default Tutors;
