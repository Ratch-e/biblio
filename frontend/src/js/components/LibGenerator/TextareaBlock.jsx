import React from 'react';

const TextareaBlock = ({ title, value, category, click }) => (
  <label className="new-entry__item">
    <span className="new-entry__title">{title}</span>
    <textarea rows="8" className="input" value={value} onChange={e => click(category, e)} />
  </label>
);

export default TextareaBlock;
