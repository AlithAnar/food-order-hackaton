import React from 'react';
import BaseComponent from '../BaseComponent';
import { withRouter } from "react-router";

class CheckoutPage extends BaseComponent {

  render() {
    return (
      <div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
  }

}

export default withRouter(CheckoutPage);
