import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Author from '../../components/LibGenerator/Author';

import Book from '../../components/LibGenerator/Fieldsets/Book'

import biblioTypes from '../../constants/biblioTypes';

import * as biblioListActions from '../../actions/biblioListActions';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: [
        {
          name: '',
          lastname: '',
          middlename: '',
        },
      ],
      title: '',
      city: '',
      publisher: '',
      year: '',
      pages: '',
      type: biblioTypes.Book,
    };
  }

  /**
   * Хэндлер для ввода в инпут
   * @param {String} key
   * @param {Object} event
   */
  handleChange = (key, event) => {
    this.setState({ [key]: event.target.value });
  };

  /**
   * Хендлер для инпутов автора
   *
   * @param {*} key
   * @param {*} event
   * @param {*} index
   * @memberof NewItem
   */
  handleAuthorChange = (key, event, index) => {
    let authors = [...this.state.author];
    authors[index][key] = event.target.value;
    this.setState({ author: authors });
  };

  /**
   * Добавить соавтора
   */
  addNewCoauthor = () => {
    let authors = [...this.state.author];
    authors.push({
      name: '',
      lastname: '',
      middlename: '',
    });
    this.setState({ author: authors });
  };

  /**
   * Удалить соавтора
   */
  removeCoauthor = () => {
    let authors = [...this.state.author];
    authors.pop();
    this.setState({ author: authors });
  };

  /**
   * Добавляет новый элемент списка литературы
   */
  addNewEntry = () => {
    if (this.validateInputs()) {
      this.props.biblioListActions.addItem(this.state);
      this.resetState();
    } else {
      console.error('Не прошло валидацию');
    }
  };

  setType = event => {
    this.setState({ type: event.target.value });
  };

  /**
   * Валидация
   */
  validateInputs = () => {
    return !!this.state.title && !!this.state.city && !!this.state.pages && !!this.state.publisher && !!this.state.year;
  };

  /**
   * Сброс хранилища
   */
  resetState = () => {
    this.setState({
      author: [
        {
          name: '',
          lastname: '',
          middlename: '',
        },
      ],
      title: '',
      city: '',
      publisher: '',
      year: '',
      pages: '',
      type: biblioTypes.Book,
    });
  };

  render() {
    return (
      <section className="new-entry">
        <h2 className="title">Новый элемент:</h2>
        <div className="new-entry__inputs">
          <div className="new-entry__block">
            <label className="new-entry__item">
              <span className="new-entry__title">Тип публикации</span>
              <select className="select" value={this.state.value} onChange={this.setType}>
                <option value={biblioTypes.Book}>Книга</option>
                <option value={biblioTypes.Document}>Официальный документ</option>
                <option value={biblioTypes.Journal}>Статья из журнала</option>
                <option value={biblioTypes.Collection}>Статья из сборника</option>
                <option value={biblioTypes.Local}>Ресурс локального доступа</option>
                <option value={biblioTypes.Remote}>Ресурс удаленного доступа</option>
              </select>
            </label>
          </div>

          <div className="new-entry__block new-entry__block_type_authors">
            {this.state.author.map((author, key) => (
              <Author 
                key={key}
                index={key}
                author={author}
                handleAuthorChange={this.handleAuthorChange}
              />
            ))}
          </div>

          <div className="new-entry__block new-entry__block_type_options">
            <button className="button new-entry__button" onClick={() => this.addNewCoauthor()}>
              Добавить соавтора
            </button>
            {this.state.author.length > 1 ? (
              <button className="button new-entry__button" onClick={() => this.removeCoauthor()}>
                Удалить соавтора
              </button>
            ) : null}
          </div>

          <Book
            title={this.state.title}
            city={this.state.city}
            change={this.handleChange}
            publisher={this.state.publisher}
            year={this.state.year}
            pages={this.state.pages}
          />

          <div className="new-entry__block new-entry__block_type_options">
            <button className="button new-entry__button" onClick={() => this.addNewEntry()}>
              Добавить
            </button>
          </div>
        </div>
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
