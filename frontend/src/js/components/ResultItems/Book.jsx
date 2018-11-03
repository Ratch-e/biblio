import React from 'react';

const Book = ({ authors, title, city, publisher, year, pages }) => (
  <span className="list__text">
    {authors.map(
      (author, key) =>
        authors.length - 1 === key
          ? `${author.lastname} ${author.name[0]}.${author.middlename[0]}`
          : `${author.lastname} ${author.name[0]}.${author.middlename[0]}, `,
    )}
    . {title}. &mdash; {city === 'Москва' ? 'M.' : city === 'Cанкт-Петербург' ? 'СПб.' : city}:{' '}
    {publisher}, {year}. &mdash; {pages}
    c.
  </span>
);

export default Book;
