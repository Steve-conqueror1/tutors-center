import React from 'react';

import Menu from './Menu';
import './HeaderBottom.scss';
import SearchForm from './SearchForm';
import PersonalPage from './PersonalPage';

const HeaderBottom = (props) => {
  return (
    <div className="header-bottom">
      <div className="container">
        <Menu />
        <div>
          <SearchForm />
        </div>
        <div>
          <PersonalPage authUser={props.authUser} />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
