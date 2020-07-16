import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/tutors-center.png';
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__body">
        <div className="footer__info">
          <div className="footer__company-logo footer--item">
            <img src={logo} height={50} alt="Logo" />
            <div className="footer__contacts">
              <address>
                <i className="fas fa-map-marker-alt marker"></i>Moscow, Yunsti
                11
              </address>
              <div className="footer__contacts">
                <p> +7977 959 2181 &mdash; Russian</p>
                <p> +79190675498 &mdash; Worldwide</p>
              </div>
            </div>
          </div>
          <div className="footer__pupils footer--item">
            <h1>Students</h1>
            <Link to="/tutors">
              <h1>Find Tutors</h1>
            </Link>
            <p>
              Through Tutor-center you can find the best tutors all in one place
            </p>
          </div>
          <div className="footer__tutors footer--item">
            <h1>Tutors</h1>
            <Link to="/register">
              <h1>Register</h1>
            </Link>
            <p>
              Through Tutor-center you can find the best tutors all in one place
            </p>
          </div>
          <div className=" footer--item">
            <h1>Our Apps</h1>
            <p>Download our app on Google Play or App Store</p>
            <div className="footer__apps">
              <div>
                <span>
                  <i className="fab fa-google-play"></i>
                </span>
                Google Play
              </div>
              <div>
                <span>
                  <i className="fab fa-apple"></i>
                </span>
                App Store
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>@copy;2007-2020, Tutor-selection service Tutor-center.ru</p>
          <p>Modern Tutoring inco.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
