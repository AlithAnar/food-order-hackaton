import React from 'react'
import PropTypes from 'prop-types'

Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

Restaurant.defaultProps = {
  onClick: () => { },
}

function Restaurant(props) {
  return (
    <div onClick={props.onClick}>
      <div>{props.restaurant.name}</div>
    </div>
  )
}

export default Restaurant
