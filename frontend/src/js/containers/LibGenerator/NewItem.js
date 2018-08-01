import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputBlock from '../../components/LibGenerator/InputBlock';
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.addNewCoauthor = this.addNewCoauthor.bind(this);
  }

  /**
   * Хэндлер для ввода в инпут
   * @param {String} key
   * @param {Object} event
   */
  handleChange(key, event) {
    this.setState({ [key]: event.target.value });
  }

  handleAuthorChange(key, event, index) {
    let newState = { ...this.state };
    newState.author[index][key] = event.target.value;
    this.setState({ newState });
  }

  /**
   * Добавить соавтора
   */
  addNewCoauthor() {
    let newState = { ...this.state };
    newState.author.push({
      name: '',
      lastname: '',
      middlename: '',
    });
    this.setState({ newState });
  }

  removeCoauthor() {
    let newState = { ...this.state };
    newState.author.pop();
    this.setState({ newState });
  }

  /**
   * Добавляет новый элемент списка литературы
   */
  addNewEntry() {
    if (this.validateInputs()) {
      this.props.biblioListActions.addItem(this.state);
      this.resetState();
    } else {
      console.error('Не прошло валидацию');
    }
  }

  /**
   * Валидация
   */
  validateInputs() {
    return !!this.state.title && !!this.state.city && !!this.state.pages && !!this.state.publisher && !!this.state.year;
  }

  /**
   * Сброс хранилища
   */
  resetState() {
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
  }

  render() {
    return (
      <section className="new-entry">
        <h2 className="title">Новый элемент:</h2>
        <div className="new-entry__inputs">
          {this.state.author.map((author, key) => (
            <div key={key} className="new-entry__block new-entry__block_type_authors">
              <InputBlock
                className="new-entry__item_type_author"
                title="Фамилия автора"
                type="text"
                index={key}
                value={author.lastname}
                click={this.handleAuthorChange}
                category="lastname"
              />
              <InputBlock
                className="new-entry__item_type_author"
                title="Имя автора"
                type="text"
                index={key}
                value={author.name}
                click={this.handleAuthorChange}
                category="name"
              />
              <InputBlock
                className="new-entry__item_type_author"
                title="Отчество автора"
                type="text"
                index={key}
                value={author.middlename}
                click={this.handleAuthorChange}
                category="middlename"
              />
            </div>
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
