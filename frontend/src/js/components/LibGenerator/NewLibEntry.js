import React, { Component } from 'react';
import NewEntryInput from './NewEntryInput';
import NewEntryTextarea from './NewEntryTextarea';

class NewLibEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      place: '',
      city: '',
      pages: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Хэндлер для ввода в инпут
   * @param {String} key
   * @param {Object} event
   */
  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  /**
   * Добавляет новый элемент списка литературы
   */
  addNewEntry() {
    this.props.add(this.state);
    this.resetState();
  }

  /**
   * Сброс хранилища
   */
  resetState() {
    this.setState({ name: '' });
    this.setState({ place: '' });
    this.setState({ city: '' });
    this.setState({ pages: '' });
  }

  render() {
    return (
      <section className="new-entry">
        <h2 className="title">Новый элемент:</h2>
        <div className="new-entry__inputs">
          <NewEntryTextarea
            title="Название работы"
            value={this.state.name} 
            click={this.handleChange} 
            category="name" 
          />
          <NewEntryTextarea
            title="Место публикации"
            value={this.state.place} 
            click={this.handleChange} 
            category="place" 
          />
          <NewEntryInput 
            title="Город" 
            type="text"
            value={this.state.city} 
            click={this.handleChange} 
            category="city" 
          />
          <NewEntryInput
            title="Количество страниц"
            type="number"
            value={this.state.pages}
            click={this.handleChange}
            category="pages"
          />
        </div>
        <button className="button" onClick={() => this.addNewEntry()}>
          Добавить
        </button>
      </section>
    );
  }
}

export default NewLibEntry;
