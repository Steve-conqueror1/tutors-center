import React from 'react';
import logo from '../../images/tutor-center2.png';
import './MainHeader.scss';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const MainHeader = (props) => {
  return (
    <div className="header">
      <div className="container">
        <HeaderTop image={logo} />
      </div>
      <HeaderBottom authUser={props.authUser} />
    </div>
  );
};

export default MainHeader;
