import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/shared/dropdown/dropdown.component';

import './Menu.scss';
import subjects from '../../data/subjects';

const Menu = () => {
  const [visibility, setVisiblity] = useState('hidden');

  return (
    <div className="header-bottom__subjects">
      <div
        className="header-bottom__menu"
        onMouseOver={(e) => setVisiblity('visible')}
        // onMouseOut={(e) => setVisiblity('hidden')}
      >
        <span />
        <span />
        <span />
      </div>
      <Link to="/tutors">
        <h2>Tutors</h2>
      </Link>
      <Dropdown
        subjects={subjects}
        visibility={visibility}
        onMouseLeave={(e) => setVisiblity('hidden')}
      />
    </div>
  );
};

export default Menu;
