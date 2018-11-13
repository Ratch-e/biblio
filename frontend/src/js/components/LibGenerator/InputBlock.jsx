import React from 'react';
import classNames from 'classnames';

const InputBlock = ({ className = '', title, value, change, category, type, index = 0 }) => (
  <label className={classNames('new-entry__item', className.length ? className : null)}>
    <span className="new-entry__title">{title}</span>
    <input type={type} className="input" value={value} onChange={e => change(category, e, index)} />
  </label>
);

export default InputBlock;
