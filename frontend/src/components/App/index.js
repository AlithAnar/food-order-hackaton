import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage'
import { Route, Link } from "react-router-dom";
import LoginForm from '../LoginForm';
import { withRouter } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/checkouts">Checkouts</Link>
          </nav>
          <Route path="/" exact component={MainPage} />
          <Route path="/checkouts" exact component={MainPage} />
          <Route path="/login" exact component={LoginForm} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const userName = localStorage.getItem('userName')
    if (userName) {
      this.props.history.push('/checkouts')
    } else {
      this.props.history.push('/login')
    }
  }
}

export default withRouter(App);
