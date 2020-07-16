import React from 'react';
import logo from '../../images/tutor-center2.png';
import './MainHeader.scss';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const MainHeader = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderTop image={logo} />
      </div>
      <HeaderBottom />
    </div>
  );
};

export default MainHeader;
