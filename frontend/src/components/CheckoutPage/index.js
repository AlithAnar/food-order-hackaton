import React from 'react';
import BaseComponent from '../BaseComponent';
import { withRouter } from "react-router";
import RestaurantAvailableForCheckout from '../RestaurantAvailableForCheckout';
import RestaurantNotAvailableForCheckout from '../RestaurantNotAvailableForCheckout';
import './styles.css'

class CheckoutPage extends BaseComponent {

  render() {
    return (
      <div className='checkoutPage'>
        <RestaurantAvailableForCheckout checkoutId={this.props.match.params.id} />
        <RestaurantNotAvailableForCheckout checkoutId={this.props.match.params.id} />
      </div>
    );
  }

}

export default withRouter(CheckoutPage);
