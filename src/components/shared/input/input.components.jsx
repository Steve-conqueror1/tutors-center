import React from 'react';
import './input.styles.scss';

const InputComponent = ({ type, name, id, placeholder, ...otherProps }) => (
  <React.Fragment>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={(placeholder = placeholder ? placeholder : '')}
      onChange={otherProps.onChange}
      value={otherProps.value}
      onClick={otherProps.onClick}
      required
    />
  </React.Fragment>
);

export default InputComponent;
