import React from 'react';

const NewEntryInput = props => (
  <label className="new-entry__item">
    <span className="new-entry__title">{props.title}</span>
    <input type={props.type} className="input" value={props.value} onChange={e => props.click(props.category, e)} />
  </label>
);

export default NewEntryInput;
