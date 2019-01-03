import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage'
import { Route, Link } from "react-router-dom";
import LoginForm from '../LoginForm';
import CheckoutsPage from '../CheckoutsPage';
import { withRouter } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/checkouts">Checkouts</Link>
        </nav>
        <Route path="/" exact component={MainPage} />
        <Route path="/checkouts" exact component={CheckoutsPage} />
        <Route path="/login" exact component={LoginForm} />
      </div>
    );
  }

  componentDidMount() {
    const userName = localStorage.getItem('userName')
    if (userName) {
      this.props.history.push('/')
    } else {
      this.props.history.push('/login')
    }
  }
}

export default withRouter(App);
