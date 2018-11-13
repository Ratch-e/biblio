import React from 'react';
import { getAuthors, makeCity, getFirstAuthor } from '../../helpers/result'

const Book = ({ authors, title, city, publisher, year, pages }) => (
  <div className="list__text">
    {getFirstAuthor(authors)}. {title} [Текст] / {getAuthors(authors)} &mdash; {makeCity(city)}: {publisher}, {year}. &mdash; {pages}c.
  </div>
);

export default Book;
