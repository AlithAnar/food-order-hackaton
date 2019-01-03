import React from 'react'
import { Input, Button } from 'reactstrap';
import BaseComponent from '../BaseComponent';
import { Mutation } from 'react-apollo'
import { CREATE_CHECKOUT } from '../../graphql/mutators';
import * as alert from '../../utils/altert'

class CheckoutsForm extends BaseComponent {

  state = {
    timestamp: Date.now(),
  }

  render() {
    return (
      <div>
        <Mutation
          mutation={CREATE_CHECKOUT}
          variables={{ date: `${this.state.timestamp}`, status: 'ACTIVE' }}
          onError={error => alert.error(error.message)}
          onCompleted={() => {
            alert.success('Checkout created!')
            this.setState({ timestamp: Date.now() })
          }}
        >
          {onCreateCheckout => <Button color="success" onClick={onCreateCheckout}>{'Add new checkout'}</Button>}
        </Mutation>

      </div>
    )
  }

}

export default CheckoutsForm


