import React, { Component } from 'react';
import './App.css';
import MainPage from '../MainPage'
import { Route } from "react-router-dom";
import LoginForm from '../LoginForm';
import CheckoutsPage from '../CheckoutsPage';
import CheckoutPage from '../CheckoutPage';
import { withRouter } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Route path="/" exact component={MainPage} />
        <Route path="/checkouts" component={CheckoutsPage} />
        <Route path="/checkout/:id" component={CheckoutPage} />
        <Route path="/login" exact component={LoginForm} />
      </div>
    );
  }

  componentDidMount() {
    const userName = localStorage.getItem('userName')
    if (!userName) {
      this.props.history.push('/login')
    }
  }
}

export default withRouter(App);
