import React, { Component } from 'react';
import logo from './dogs_fort_funston.JPG';
import './App.css';
import HikeInput from './HikeInput';
import * as firebase from 'firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 7,
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    // set reference to part of the db to watch
    const timeRef = rootRef.child('time');
    // set real time listener
    timeRef.on('value', snap => {
      this.setState({
        time: snap.val()
      });
    });
  }

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
        <HikeInput />
        <h1>{this.state.time}</h1>
      </div>

    );
  }
}

export default App;
