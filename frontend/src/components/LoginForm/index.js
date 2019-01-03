import React from 'react';
import BaseComponent from '../BaseComponent';
import { withRouter } from "react-router";

class LoginForm extends BaseComponent {

  state= {
    userName: '',
  }

  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.userName} placeholder={'Type your name'}/>
        <button onClick={this.onSave}>Save user name</button>
      </div>
    );
  }

  onChange(event) {
    this.setState({
      userName: event.target.value,
    })
  }

  onSave() {
    localStorage.setItem('userName', this.state.userName)
    this.props.history.push('/')
  }

}

export default withRouter(LoginForm);
