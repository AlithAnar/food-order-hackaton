import React from 'react';
import BaseComponent from '../BaseComponent';
import { withRouter } from "react-router";
import CheckoutForm from '../CheckoutForm';
import CheckoutList from '../CheckoutList';

class CheckoutsPage extends BaseComponent {

  render() {
    return (
      <div>
        <div>{'Checkout list'}</div>
        <CheckoutList />
        <CheckoutForm />
      </div>
    );
  }

}

export default withRouter(CheckoutsPage);
