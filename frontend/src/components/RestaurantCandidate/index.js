import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant';
import { Button } from 'reactstrap'
import { Mutation } from 'react-apollo'
import { REMOVE_RESTAURANT_SELECTION, ADD_VOTE, DELETE_VOTE } from '../../graphql/mutators';
import RestaurantVotes from '../RestaurantVotes';
import * as alert from '../../utils/altert'

RestaurantCandidate.propTypes = {
  restaurant: PropTypes.object.isRequired,
  checkoutId: PropTypes.string.isRequired,
}

function RestaurantCandidate(props) {
  return (
    <div key={props.restaurant._id}>
      <Restaurant restaurant={props.restaurant} />
      {renderUpVote(props)}
      {renderDownVote(props)}
      <RestaurantVotes
        checkoutId={props.checkoutId}
        restaurantId={props.restaurant._id}
      />
      {/* {renderDeleteButton(props)} */}
    </div>
  )
}

function renderUpVote(props) {
  const username = localStorage.getItem('userName')
  return (
    <Mutation
      mutation={ADD_VOTE}
      variables={{ checkoutId: props.checkoutId, restaurantId: props.restaurant._id, username }}
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
  const username = localStorage.getItem('userName')
  return (
    <Mutation
      mutation={DELETE_VOTE}
      variables={{ checkoutId: props.checkoutId, restaurantId: props.restaurant._id, username }}
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
