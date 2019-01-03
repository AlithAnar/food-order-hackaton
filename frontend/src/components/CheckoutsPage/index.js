import React from 'react';
import BaseComponent from '../BaseComponent';
import { withRouter } from "react-router";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Checkout from '../Checkout';
import { Button } from 'reactstrap';

class CheckoutsPage extends BaseComponent {

  state = {
    checkouts: [{ date: Date.now() - 10000, id: 'asdasd' }, { date: Date.now() - 20000, id: 'asdaasadssd' }],
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.checkouts.map(this.renderCheckout)}
        </ListGroup>
        <Button onClick={this.addCheckout}>Add checkout</Button>
      </div>
    );
  }

  renderCheckout(checkout) {
    return (
      <ListGroupItem key={checkout.date}>
        <Checkout checkout={checkout} />
      </ListGroupItem>
    )
  }

  addCheckout() {
    const newCheckouts = this.state.checkouts.concat({date: Date.now(), id: Date.now()})
    this.setState({
      checkouts: newCheckouts,
    })
  }

}

export default withRouter(CheckoutsPage);
