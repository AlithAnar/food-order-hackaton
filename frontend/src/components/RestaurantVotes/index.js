import React from 'react'
import PropTypes from 'prop-types'
import { GET_RESTAURANT_VOTES } from '../../graphql/queries';
import { Query } from 'react-apollo';
import { defaultPollingInterval } from '../../utils/constants';


RestaurantVotes.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  checkoutId: PropTypes.string.isRequired,
}

function RestaurantVotes(props) {
  return (
    <Query
      query={GET_RESTAURANT_VOTES}
      variables={{checkoutId: props.checkoutId, restaurantId: props.restaurantId}}
    >
      {({ loading, error, data, startPolling, stopPolling }) => {
        if (loading) {
          return <div>Fetching</div>
        }

        if (error) {
          stopPolling()
          return 0
        }

        startPolling(defaultPollingInterval)

        return data.votes.length
      }}
    </Query>
  )
}

export default RestaurantVotes
