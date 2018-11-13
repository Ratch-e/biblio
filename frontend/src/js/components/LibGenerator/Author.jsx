import React from 'react';
import InputBlock from './InputBlock';

const Author = ({ index, author, handleAuthorChange }) => (
  <div key={index} className="new-entry__block new-entry__block_type_author">
    <InputBlock
      className="new-entry__item_type_author"
      title="Фамилия автора"
      type="text"
      index={index}
      value={author.lastname}
      change={handleAuthorChange}
      category="lastname"
    />
    <InputBlock
      className="new-entry__item_type_author"
      title="Имя автора"
      type="text"
      index={index}
      value={author.name}
      change={handleAuthorChange}
      category="name"
    />
    <InputBlock
      className="new-entry__item_type_author"
      title="Отчество автора"
      type="text"
      index={index}
      value={author.middlename}
      change={handleAuthorChange}
      category="middlename"
    />
  </div>
);

export default Author;