import React, { Component } from 'react';
import Header from './Header';
import LibGenerator from '../LibGenerator/LibGenerator'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <LibGenerator/>
      </div>
    );
  }
}

export default App;
