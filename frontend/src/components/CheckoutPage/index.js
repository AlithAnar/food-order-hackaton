import React from 'react';
import BaseComponent from '../BaseComponent';
import { withRouter } from "react-router";
import RestaurantAvailableForCheckout from '../RestaurantAvailableForCheckout';

class CheckoutPage extends BaseComponent {

  render() {
    return (
      <div>
        <RestaurantAvailableForCheckout checkoutId={this.props.match.params.id} />
      </div>
    );
  }

}

export default withRouter(CheckoutPage);
