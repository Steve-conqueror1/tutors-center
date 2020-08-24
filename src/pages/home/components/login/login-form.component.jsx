import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../../../contexts/Firebase';
// import { withFirebase } from '../../../components/Firebase';
// import Input from '../../components/shared/input/input.components';
import Input from '../../../../components/shared/input/input.components';

import './login-form.styles.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <div className="login">
        <div className="login__close">
          <i className="fas fa-times" onClick={this.props.onClick}></i>
        </div>
        <div className="login__top">
          <i className="fas fa-user-circle"></i>
        </div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form__input">
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form__input">
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form__input">
            <Input
              type="submit"
              name="submit"
              value="Login"
              disaled={isInvalid}
            />
          </div>
          {error && <p className="error">{error.message}</p>}
          <div className="form__input">
            <span>Don't have account yet?</span>
            <Link to="/register" onClick={this.props.onClick}>
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const LoginComponent = withRouter(withFirebase(LoginForm));

export default LoginComponent;
