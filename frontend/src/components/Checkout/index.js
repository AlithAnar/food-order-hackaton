import React from 'react'
import PropTypes from 'prop-types'

Checkout.propTypes = {
  checkout: PropTypes.object.isRequired,
}

function Checkout(props) {
  return (
    <div>
      <div>{props.checkout.name}</div>
    </div>
  )
}

export default Checkout
