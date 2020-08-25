import React from 'react';
import faker from 'faker/locale/ru';
import Rating from '../shared/rating/rating.component';
import './tutor.styles.scss';

const Tutor = ({ tutors, subject = '', region = '' }) => {
  return tutors
    .filter((tutor) => {
      if (subject) {
        return tutor.subject === subject;
      }
      return tutor;
    })
    .filter((tutor) => {
      if (region) {
        return tutor.region === region;
      }
      return tutor;
    })
    .map((tutor, index) => {
      console.log('tutor.subject...', tutor.subject);
      return (
        <div className="tutor" key={index}>
          <div className="tutor__detail">
            <div className="tutor__profile">
              <div
                className="tutor__photo"
                style={{ backgroundImage: `url(${tutor.imageUrl})` }}
              ></div>
              <Rating size={1.4} />
            </div>
            <div className="tutor__bio">
              <h1>
                {`${tutor.firstname} ${tutor.middlename}  ${tutor.surname} `}{' '}
                <span>
                  <i className="far fa-check-circle" title="Authenticated"></i>
                </span>
              </h1>
              <h2 className="tutor__experience">
                Private tutor with {tutor.experience} years of experience
              </h2>
              <h3 className="tutor__subject">
                <i className="fab fa-readme"></i>Tutor for:{tutor.subject}
              </h3>
              <h3 className="tutor__location">
                <i className="fas fa-map-marker-alt"></i>Location:{' '}
                {tutor.region}
              </h3>
              <div className="tutor__review">
                <h1 className="review__header">Review</h1>
                <p>{faker.lorem.paragraph()}</p>
              </div>
            </div>
          </div>
          <div className="tutor__cost">
            <h2 className="tutor__cost__per-hour">from 1 400 / hour</h2>
            <h2 className="tutor__status">
              <span>
                <i className="fas fa-circle"></i>
              </span>
              Free
            </h2>
            <div className="tutor__contacts">
              <h2>My Contacts</h2>
              <h4 className="tutor__contacts__contact">
                <i className="fas fa-envelope-square"></i> Email: {tutor.email}
              </h4>
              <h4 className="tutor__contacts__contact">
                <i className="fas fa-phone"></i>Phone: {tutor.phone}
              </h4>
            </div>
          </div>
        </div>
      );
    });
};

export default Tutor;
