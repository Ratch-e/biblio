import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputBlock from '../../components/LibGenerator/InputBlock';
import TextareaBlock from '../../components/LibGenerator/TextareaBlock';
import * as biblioListActions from '../../actions/biblioListActions';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author_name: '',
      author_lastname: '',
      author_middlename: '',
      title: '',
      city: '',
      publisher: '',
      year: '',
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
    } else {
      console.error('Не прошло валидацию');
    }
  }

  /**
   * Валидация
   */
  validateInputs() {
    return (
      !!this.state.title &&
      !!this.state.city &&
      !!this.state.pages &&
      !!this.state.author_name &&
      !!this.state.author_lastname &&
      !!this.state.author_middlename &&
      !!this.state.publisher &&
      !!this.state.year
    );
  }

  /**
   * Сброс хранилища
   */
  resetState() {
    this.setState({ author_name: '' });
    this.setState({ author_lastname: '' });
    this.setState({ author_middlename: '' });
    this.setState({ title: '' });
    this.setState({ city: '' });
    this.setState({ publisher: '' });
    this.setState({ year: '' });
    this.setState({ pages: '' });
  }

  render() {
    return (
      <section className="new-entry">
        <h2 className="title">Новый элемент:</h2>
        <div className="new-entry__inputs">
          <InputBlock
            title="Фамилия автора"
            type="text"
            value={this.state.author_lastname}
            click={this.handleChange}
            category="author_lastname"
          />
          <InputBlock
            title="Имя автора"
            type="text"
            value={this.state.author_name}
            click={this.handleChange}
            category="author_name"
          />
          <InputBlock
            title="Отчество автора"
            type="text"
            value={this.state.author_middlename}
            click={this.handleChange}
            category="author_middlename"
          />
          <TextareaBlock title="Название работы" value={this.state.title} click={this.handleChange} category="title" />
          <InputBlock title="Город" type="text" value={this.state.city} click={this.handleChange} category="city" />
          <InputBlock
            title="Издательство"
            type="text"
            value={this.state.publisher}
            click={this.handleChange}
            category="publisher"
          />
          <InputBlock
            title="Год публикации"
            type="number"
            value={this.state.year}
            click={this.handleChange}
            category="year"
          />
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

function mapStateToProps(state) {
  return {
    biblioStore: state.biblioListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    biblioListActions: bindActionCreators(biblioListActions, dispatch),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);
