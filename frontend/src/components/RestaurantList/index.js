import React from 'react'
import Restaurant from '../Restaurant';
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Query } from 'react-apollo'
import { GET_RESTAURANTS } from '../../graphql/queries';


RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired,
}

RestaurantList.defaultProps = {
  restaurants: [],
}

function RestaurantList(props) {
  return (
    <ListGroup>
      <Query query={GET_RESTAURANTS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Fetching</div>
          }

          if (error) {
            // return toast.error(error.message, { position: 'top-center'})
          }

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
