import React, { Component } from 'react';
import Result from './Result';
import NewLibEntry from './NewLibEntry';

class LibGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addEntry = this.addEntry.bind(this);
  }

  /**
   * Добавиляет новый элемент списка литературы
   * @param {Object} entry 
   */
  addEntry(entry) {
    this.setState(prevState => {
      return { items: [...prevState.items, entry] };
    });
  }

  render() {
    return (
      <section className="generator">
        <NewLibEntry add={this.addEntry}/>
        <Result list={this.state.items}/>
      </section>
    );
  }
}

export default LibGenerator;
