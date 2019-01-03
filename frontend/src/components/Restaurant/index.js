import React from 'react'
import PropTypes from 'prop-types'

Restaurant.propTypes = {
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
