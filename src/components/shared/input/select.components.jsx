import React from 'react';
import './select.styles.scss';

const Select = (props) => (
  <React.Fragment>
    <select
      className="select-items"
      name={props.name}
      value={props.value}
      form="filter-form"
      onChange={props.onChange}
    >
      <option defaultValue={props.message}>{props.message}</option>
      {props.items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </React.Fragment>
);

export default Select;
