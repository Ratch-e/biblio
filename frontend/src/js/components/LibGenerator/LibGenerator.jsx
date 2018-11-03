import React from 'react';
import Result from '../../containers/LibGenerator/Result';
import NewItem from '../../containers/LibGenerator/NewItem';

const LibGenerator = () => {
  return (
    <section className="generator card">
      <NewItem />
      <Result/>
    </section>
  );
};

export default LibGenerator;
