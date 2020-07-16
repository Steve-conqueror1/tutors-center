import React from 'react';
import './HeaderTop.scss';
import { Link } from 'react-router-dom';

const HeaderTop = (props) => {
  return (
    <div className="header-top">
      <div className="header-top__home">
        <Link to="/">
          <img src={props.image} alt="Tutors-center" />
        </Link>
        <h2 className="header-top__location">
          Moscow <span>&rsaquo;</span>
        </h2>
      </div>
      <div className="header-top__contacts">
        <h2>
          <i className="fas fa-headset"></i> +7-453-234-12-12
        </h2>
        <div className="header-top__schedule">
          <span>ПН-ПТ 8:00 - 23:00</span>
          <span>CБ-ВС 9:00 -22:00</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
