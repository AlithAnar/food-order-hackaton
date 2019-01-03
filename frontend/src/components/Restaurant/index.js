import React from 'react'
import PropTypes from 'react-prop-types'

Restaurant.PropTypes = {
  restaurant: PropTypes.object.isRequired,
}

function Restaurant(props) {
  return (
    <div>
      <div>{props.restaurant.name}</div>
    </div>
  )
}

export default Restaurant
