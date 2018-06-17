import React from 'react';

/**
 * Итоговый список источников
 * @param {Object} props
 */
const Result = props => (
  <div className="generator__result">
    <h2 className="title">Итоговый список:</h2>
    <ol className="list">
      {props.list.map((item, key) => (
        <li className="list__item" key={key}>
          <span className="list__text">
            {item.author_lastname} {item.author_name[0]}.{item.author_middlename[0]}. {item.title}. &mdash;{' '}
            {item.city === 'Москва' ? 'M.' : item.city === 'Cанкт-Петербург' ? 'СПб.' : item.city}: {item.publisher}, {item.year}. &mdash; {item.pages}c.
          </span>
        </li>
      ))}
    </ol>
  </div>
);

export default Result;
