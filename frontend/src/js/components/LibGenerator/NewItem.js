import React, { Component } from 'react';
import InputBlock from './InputBlock';
import TextareaBlock from './TextareaBlock';

class NewItem extends Component {
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
    if (this.validateInputs()) {
      this.props.add(this.state);
      this.resetState();
    }
  }

  validateInputs() {
    return !!this.state.name && !!this.state.place && !!this.state.city && !!this.state.pages;
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
          <TextareaBlock title="Название работы" value={this.state.name} click={this.handleChange} category="name" />
          <TextareaBlock title="Место публикации" value={this.state.place} click={this.handleChange} category="place" />
          <InputBlock title="Город" type="text" value={this.state.city} click={this.handleChange} category="city" />
          <InputBlock
            title="Количество страниц"
            type="number"
            value={this.state.pages}
            click={this.handleChange}
            category="pages"
          />
        </div>
        <button className="button new-entry__button" onClick={() => this.addNewEntry()}>
          Добавить
        </button>
      </section>
    );
  }
}

export default NewItem;
