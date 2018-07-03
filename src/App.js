import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>I Love You React</h1>
      <p className="p"><strong>Ghassan said : </strong>React is amazing</p>
      <Person />
      <Person />
      </div>
    );
  }
}

export default App;
