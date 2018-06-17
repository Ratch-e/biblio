import React from 'react';

const InputBlock = ({ title, value, click, category, type }) => (
  <label className="new-entry__item">
    <span className="new-entry__title">{title}</span>
    <input type={type} className="input" value={value} onChange={e => click(category, e)} />
  </label>
);

export default InputBlock;
