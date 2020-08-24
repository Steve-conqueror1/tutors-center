import React, { Component } from 'react';
import Login from '../../pages/home/components/login/login.component';
import { Link } from 'react-router-dom';

import Logout from '../../pages/home/components/logout/logout.component';

import './PersonalPage.scss';

class PersonalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  toggleLogin = (e) => {
    if (e.target.className === 'login') e.stopPropagation();
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    const { hidden } = this.state;
    const { toggleLogin } = this;

    return (
      <div className="personal-page">
        {this.props.authUser ? (
          <React.Fragment>
            <Link to="/account" className="account">
              <i title="My Account" className="far fa-user"></i>
            </Link>
            <Link to="/">
              <Logout />
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/register">
              <h2>Register</h2>
            </Link>
            <i title="Login" className="far fa-user" onClick={toggleLogin}></i>
            <Login hidden={hidden} onClick={toggleLogin} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default PersonalPage;
