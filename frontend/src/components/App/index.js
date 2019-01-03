import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/checkouts">Checkouts</Link>
            </nav>
            <Route path="/" exact component={MainPage} />
            <Route path="/checkouts" exact component={MainPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
