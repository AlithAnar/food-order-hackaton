import React from 'react';
import BaseComponent from '../BaseComponent';
import { withRouter } from "react-router";
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Checkout from '../Checkout';

class CheckoutsPage extends BaseComponent {

  state = {
    checkouts: [{ name: 'a' }, { name: 'b' }],
    checkoutName: '',
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.checkouts.map(this.renderCheckout)}
        </ListGroup>
        <input onChange={this.onChange} value={this.state.checkoutName} placeholder={'Type checkout name'}/>
        <button onClick={this.onSave}>Save checkout name</button>
      </div>
    );
  }

  renderCheckout(checkout) {
    return (
      <ListGroupItem>
        <Checkout checkout={checkout} />
      </ListGroupItem>
    )
  }

  onChange(event) {
    this.setState({
      checkoutName: event.target.value,
    })
  }

  onSave() {
    const newCheckouts = this.state.checkouts.concat({name: this.state.checkoutName})
    this.setState({
      checkouts: newCheckouts,
      checkoutName: '',
    })
  }

}

export default withRouter(CheckoutsPage);
