import React from 'react';
import ReactDom from 'react-dom';
import LoginForm from './login-form.component';

import './login.styles.scss';

const Login = (props) => {
  const content = (
    <div className={`login-page ${props.hidden ? 'hidden' : null}`}>
      <LoginForm onClick={props.onClick} />
    </div>
  );

  if (!props.hidden) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return ReactDom.createPortal(content, document.getElementById('login-hook'));
};

export default Login;
