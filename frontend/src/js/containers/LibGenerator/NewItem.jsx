import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputBlock from '../../components/LibGenerator/InputBlock';
import Author from '../../components/LibGenerator/Author'

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
      type: 1,
    };
  }

  /**
   * Хэндлер для ввода в инпут
   * @param {String} key
   * @param {Object} event
   */
  handleChange = (key, event) => {
    this.setState({ [key]: event.target.value });
  }

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
  }

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
  }

  /**
   * Удалить соавтора
   */
  removeCoauthor = () => {
    let authors = [...this.state.author];
    authors.pop();
    this.setState({ author: authors });
  }

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
  }

  setType = (event) => {
    this.setState({ type: event.target.value });
  }

  /**
   * Валидация
   */
  validateInputs = () => {
    return !!this.state.title && !!this.state.city && !!this.state.pages && !!this.state.publisher && !!this.state.year;
  }

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
    });
    this.setState({ title: '' });
    this.setState({ city: '' });
    this.setState({ publisher: '' });
    this.setState({ year: '' });
    this.setState({ pages: '' });
    this.setState({ type: 1 });
  }

  render() {
    return (
      <section className="new-entry">
        <h2 className="title">Новый элемент:</h2>
        <div className="new-entry__inputs">
          <div className="new-entry__block">
            <label className="new-entry__item">
              <span className="new-entry__title">Тип публикации</span>
              <select className="select" value={this.state.value} onChange={this.setType}>
                <option value="1">Книга</option>
                <option value="2">Журнал</option>
              </select>
            </label>
          </div>

          {this.state.author.map((author, key) => (
            <Author
              key={key}
              index={key}
              author={author}
              handleAuthorChange={this.handleAuthorChange}
            />
          ))}

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

          <div className="new-entry__block new-entry__block_type_info">
            <InputBlock title="Название работы" value={this.state.title} click={this.handleChange} category="title" />
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
