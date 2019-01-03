import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant';
import { Button } from 'reactstrap'
import { Mutation } from 'react-apollo'
import { REMOVE_RESTAURANT_SELECTION, ADD_VOTE, REMOVE_VOTE } from '../../graphql/mutators';

RestaurantCandidate.propTypes = {
  restaurant: PropTypes.object.isRequired,
  checkoutId: PropTypes.string.isRequired,
}

function RestaurantCandidate(props) {
  return (
    <div>
      <Restaurant restaurant={props.restaurant} />
      {renderUpVote(props)}
      {renderDownVote(props)}
      {renderDeleteButton(props)}
    </div>
  )
}

function renderUpVote(props) {
  return (
    <Mutation
    mutation={ADD_VOTE}
    variables={{ checkoutId: props.checkoutId, restaurantId: props.restaurant._id }}
    onError={error => alert.error(error.message)}
    onCompleted={() => {
      alert.success('Vote added!')
    }}
  >
    {onAddVote => <Button color="success" onClick={onAddVote}>{'+'}</Button>}
  </Mutation>
  )
}

function renderDownVote(props) {
  return (
    <Mutation
    mutation={REMOVE_VOTE}
    variables={{ checkoutId: props.checkoutId, restaurantId: props.restaurant._id }}
    onError={error => alert.error(error.message)}
    onCompleted={() => {
      alert.success('Vote removed!')
    }}
  >
    {onRemoveVote => <Button color="success" onClick={onRemoveVote}>{'-'}</Button>}
  </Mutation>
  )
}

function renderDeleteButton(props) {
  return (
    <Mutation
      mutation={REMOVE_RESTAURANT_SELECTION}
      variables={{ checkoutId: props.checkoutId, restaurantId: props.restaurant._id }}
      onError={error => alert.error(error.message)}
      onCompleted={() => {
        alert.success('Selection removed!')
      }}
    >
      {onRemoveSelection => <Button color="error" onClick={onRemoveSelection}>{'X'}</Button>}
    </Mutation>
  )
}

export default RestaurantCandidate
