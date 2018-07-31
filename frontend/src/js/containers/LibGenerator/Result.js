import React from 'react';
import { connect } from 'react-redux';

/**
 * Итоговый список источников
 * @param {Object} props
 */
const Result = props => (
  <div className="generator__result">
    <h2 className="title">Итоговый список:</h2>
    <ol className="list">
      {props.biblioStore.list.map((item, key) => (
        <li className="list__item" key={key}>
          <span className="list__text">
            {
              item.author.map((author, key) => 
                item.author.length - 1 === key ? 
                `${author.lastname} ${author.name[0]}.${author.middlename[0]}` : 
                `${author.lastname} ${author.name[0]}.${author.middlename[0]}, `
              )
            }
            . {item.title}. &mdash;{' '}
            {item.city === 'Москва' ? 'M.' : item.city === 'Cанкт-Петербург' ? 'СПб.' : item.city}: {item.publisher},{' '}
            {item.year}. &mdash; {item.pages}c.
          </span>
        </li>
      ))}
    </ol>
  </div>
);

function mapStateToProps(state) {
  return {
    biblioStore: state.biblioListReducer,
  };
}

export default connect(mapStateToProps)(Result);
