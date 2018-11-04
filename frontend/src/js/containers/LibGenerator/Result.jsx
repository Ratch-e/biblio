import React from 'react';
import { connect } from 'react-redux';

import Book from '../../components/ResultItems/Book'
/**
 * Итоговый список источников
 * @param {Object} props
 */
const Result = props => (
  <div className="generator__result">
    {props.biblioStore.length ? <h2 className="title">Итоговый список: (ГОСТ 7.1 и ГОСТ 7.80)</h2> : null}
    <ol className="list">
      {props.biblioStore.list.map((item, key) => (
        <li className="list__item" key={key}>
          <Book 
            authors={item.author}
            title={item.title}
            city={item.city}
            publisher={item.publisher}
            year={item.year}
            pages={item.pages}
          />
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
