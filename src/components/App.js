import React, { Component } from 'react';
import Calculator from './calculator';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="calculator-container">
          <Calculator  />
        </div>
      </div>
    );
  }
}

export default App;
