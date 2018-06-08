import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Welcome to MathApp</h3>
        <Container />
      </div>
    );
  }
}

export default App;
