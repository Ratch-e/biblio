import React from 'react';

const Book = ({ authors, title, city, publisher, year, pages }) => {
  const makeCity = (city) => {
    switch(city) {
      case 'Москва':
        return 'M.'

      case 'Санкт-Петербург':
        return 'СПб.'

      default:
        return city;
    }
  }
  
  return (<div className="list__text">
    {authors.map((author, key) =>
      authors.length - 1 === key ? 
      `${author.lastname} ${author.name[0]}.${author.middlename[0]}` : 
      `${author.lastname} ${author.name[0]}.${author.middlename[0]}, `)}. {title}. &mdash; {makeCity(city)}: {publisher}, {year}. &mdash; {pages}c.
  </div>);
};

export default Book;
