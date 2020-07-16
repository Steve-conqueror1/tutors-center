import React, { Component } from 'react';
import Login from '../../../src/home/components/login/login.component';

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

  componentDidMount() {
    if (!this.state.hidden) {
      document.body.style.overflow = 'hidden';
    }
    if (this.state.hidden) {
      document.body.style.overflow = 'unset';
    }
  }

  render() {
    const { hidden } = this.state;
    const { toggleLogin } = this;
    return (
      <div className="personal-page">
        <h2>Register</h2>
        <i title="Login" className="far fa-user" onClick={toggleLogin}></i>
        <Login hidden={hidden} onClick={toggleLogin} />
      </div>
    );
  }
}

export default PersonalPage;
