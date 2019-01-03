import React from 'react'
import PropTypes from 'prop-types'

Checkout.propTypes = {
  checkout: PropTypes.object.isRequired,
}

function Checkout(props) {
  const date = new Date(props.checkout.date)
  return (
    <div>
      <div>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</div>
    </div>
  )
}

export default Checkout
