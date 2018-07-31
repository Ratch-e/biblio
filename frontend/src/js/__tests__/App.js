import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
import Header from '../components/App/Header';
import LibGenerator from '../components/LibGenerator/LibGenerator';

describe('Запуск компонентов', () => {
  test('Приложение запускается', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Шапка показывается', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
