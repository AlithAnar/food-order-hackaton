import React from 'react'
import Restaurant from '../Restaurant';
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';

RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired,
}

RestaurantList.defaultProps = {
  restaurants: [],
}

function RestaurantList(props) {
  return (
    <ListGroup>
      {props.restaurants.map(renderRestaurant)}
    </ListGroup>
  )
}

function renderRestaurant(restaurant) {
  return (
    <ListGroupItem key={restaurant.name}>
      <Restaurant restaurant={restaurant} />
    </ListGroupItem>
  )
}

export default RestaurantList
