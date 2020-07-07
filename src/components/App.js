import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Hotels from './Hotels';
import Login from './Login';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="nav-wrapper indigo lighten-4">
              <h1>Hotel Booking System</h1>
        </div>
        <Router>
        <NavBar />
        <div className="row">
          <div className="col s8">
            <Route exact path="/" component={Login} />
            <Route exact path="/hotels" component={Hotels} />
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
