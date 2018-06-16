import React from 'react';

const NewEntryTextarea = props => (
  <label className="new-entry__item">
    <span className="new-entry__title">{props.title}</span>
    <textarea rows="3" className="input" value={props.value} onChange={e => props.click(props.category, e)} />
  </label>
);

export default NewEntryTextarea;
