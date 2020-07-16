import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = () => {
  return (
    <div className="header-bottom__subjects">
      <div className="header-bottom__menu">
        <span />
        <span />
        <span />
      </div>
      <Link to="/tutors">
        <h2>Tutors</h2>
      </Link>
    </div>
  );
};

export default Menu;
