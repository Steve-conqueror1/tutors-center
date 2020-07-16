import React from 'react';

import './login-form.styles.scss';

const LoginForm = (props) => {
  return (
    <div className="login">
      <div className="login__close">
        <i className="fas fa-times" onClick={props.onClick}></i>
      </div>
      <div className="login__top">
        <i className="fas fa-user-circle"></i>
      </div>
      <form className="form">
        <div className="form__input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form__input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form__input">
          <input type="submit" name="submit" id="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
