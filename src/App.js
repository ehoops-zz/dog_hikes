import React, { Component } from 'react';
import * as firebase from 'firebase';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './dogs_fort_funston.JPG';
import './App.css';
import HikeInput from './HikeInput';
import HikeList from './HikeList';
import HikeDetails from './HikeDetails';


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
          <div className="Hike-info">
            <BrowserRouter>
              <div>
                <Link
                  className="Router-link"
                  to="/list"
                  >Hike List</Link>
                <Link
                  className="Router-link"
                  to="/input"
                  >New Hike</Link>
                <Link
                  className="Router-link"
                  to="/details"
                  >Details</Link>

                <Route path="/list" component={HikeList} />
                <Route path="/input" component={HikeInput} />
                <Route path="/details" component={HikeDetails} />
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
