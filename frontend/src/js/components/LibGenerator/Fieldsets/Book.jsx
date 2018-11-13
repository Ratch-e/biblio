import React from 'react';
import InputBlock from '../../../components/LibGenerator/InputBlock';

const Book = ({ title, city, change, publisher, year, pages }) => (
  <div className="new-entry__block new-entry__block_type_info">
    <InputBlock title="Название работы" value={title} change={change} category="title" />
    <InputBlock title="Город" type="text" value={city} change={change} category="city" />
    <InputBlock
      title="Издательство"
      type="text"
      value={publisher}
      change={change}
      category="publisher"
    />
    <InputBlock
      title="Год публикации"
      type="number"
      value={year}
      change={change}
      category="year"
    />
    <InputBlock
      title="Количество страниц"
      type="number"
      value={pages}
      change={change}
      category="pages"
    />
  </div>
);

export default Book;