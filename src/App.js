import React, { Component } from 'react';
import logo from './dogs_fort_funston.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dog Hikes</h2>
        </div>
        <p className="App-intro">
          Find and rate dog-friendly hikes in the Bay area.
        </p>
      </div>
    );
  }
}

export default App;
