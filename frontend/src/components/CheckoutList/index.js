import React from 'react'
import Checkout from '../Checkout';
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Query } from 'react-apollo'
import { GET_CHECKOUTS } from '../../graphql/queries';
import * as alert from '../../utils/altert'


CheckoutList.propTypes = {
  checkouts: PropTypes.array.isRequired,
}

CheckoutList.defaultProps = {
  checkouts: [],
}

function CheckoutList(props) {
  return (
    <ListGroup>
      <Query query={GET_CHECKOUTS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Fetching</div>
          }

          if (error) {
            return alert.error(error.message)
          }

          const checkouts = data.checkouts
          return checkouts.map(renderCheckout)
        }}
      </Query>
    </ListGroup>
  )
}

function renderCheckout(checkout) {
  return (
    <ListGroupItem key={checkout._id}>
      <Checkout checkout={checkout} />
    </ListGroupItem>
  )
}

export default CheckoutList
