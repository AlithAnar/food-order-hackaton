import React from 'react'
import Restaurant from '../Restaurant';
import PropTypes from 'react-prop-types'

Restaurant.PropTypes = {
  restaurants: PropTypes.array.isRequired,
}


function RestaurantList(props) {
  return (
    <div>
      {props.restaurants.map(renderRestaurant)}
    </div>
  )
}

function renderRestaurant(restaurant) {
  return (
    <Restaurant restaurant={restaurant} />
  )
}

export default RestaurantList
