import React from 'react'

const Result = (props) => (
  <div className="generator__result">
    <h2 className="title">Итоговый список:</h2>
    <ol className="list">
      { props.list.map((item, key) => (
        <li key={key}>{item.name}/{item.place} - {item.city}. {item.pages}c.</li>
      )) }
    </ol>
  </div>
)

export default Result;