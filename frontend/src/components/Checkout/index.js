import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router";

Checkout.propTypes = {
  checkout: PropTypes.object.isRequired,
}

function Checkout(props) {
  const date = new Date(props.checkout.date)
  return (
    <div onClick={() => props.history.push(`checkout/${props.checkout.id}`)}>
      <div>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</div>
    </div>
  )
}

export default withRouter(Checkout)
