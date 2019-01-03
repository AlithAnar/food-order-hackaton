import React from 'react'
import Restaurant from '../Restaurant';
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Query } from 'react-apollo'
import { GET_RESTAURANTS } from '../../graphql/queries';
import * as alert from '../../utils/altert'
import { defaultPollingInterval } from '../../utils/constants'


RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired,
}

RestaurantList.defaultProps = {
  restaurants: [],
}

function RestaurantList(props) {
  return (
    <ListGroup>
      <Query 
        query={GET_RESTAURANTS}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) {
            return <div>Fetching</div>
          }

          if (error) {
            stopPolling()
            return alert.error(error.message)
          }

          startPolling(defaultPollingInterval)

          const restaurants = data.restaurants
          return restaurants.map(renderRestaurant)
        }}
      </Query>
    </ListGroup>
  )
}

function renderRestaurant(restaurant) {
  return (
    <ListGroupItem key={restaurant._id}>
      <Restaurant restaurant={restaurant} />
    </ListGroupItem>
  )
}

export default RestaurantList
