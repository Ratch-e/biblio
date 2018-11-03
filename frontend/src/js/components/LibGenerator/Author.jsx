import React from 'react';
import InputBlock from './InputBlock';

const Author = ({ index, author, handleAuthorChange }) => (
  <div key={index} className="new-entry__block new-entry__block_type_authors">
    <InputBlock
      className="new-entry__item_type_author"
      title="Фамилия автора"
      type="text"
      index={index}
      value={author.lastname}
      click={handleAuthorChange}
      category="lastname"
    />
    <InputBlock
      className="new-entry__item_type_author"
      title="Имя автора"
      type="text"
      index={index}
      value={author.name}
      click={handleAuthorChange}
      category="name"
    />
    <InputBlock
      className="new-entry__item_type_author"
      title="Отчество автора"
      type="text"
      index={index}
      value={author.middlename}
      click={handleAuthorChange}
      category="middlename"
    />
  </div>
);

export default Author;