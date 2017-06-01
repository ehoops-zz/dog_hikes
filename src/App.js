import React, { Component } from 'react';
import logo from './dogs_fort_funston.JPG';
import './App.css';
import HikeInput from './HikeInput';
import * as firebase from 'firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hike: 7,
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    // set reference to part of the db to watch
    const hikeRef = rootRef.child('hike');
    // set real time listener
    hikeRef.on('value', snap => {
      this.setState({
        hike: snap.val(),
      });
    });
  }

  addHike(newHike) {
    console.log('addHike called');
    console.log(newHike);
    const rootRef = firebase.database().ref();
    rootRef.child('hike').push(newHike);
    console.log('hike pushed');
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
        <div className="Main">
          <div className="Map">Map place holder</div>
          <div className="Hike-input">
            <HikeInput
              addHike={this.addHike} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
