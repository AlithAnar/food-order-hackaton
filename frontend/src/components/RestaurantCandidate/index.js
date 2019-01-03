import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant';
import { Button } from 'reactstrap'
import { Mutation } from 'react-apollo'
import { REMOVE_RESTAURANT_SELECTION } from '../../graphql/mutators';

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
    <span>{'+'}</span>
  )
}

function renderDownVote(props) {
  return (
    <span>{'-'}</span>
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
        this.setState({ name: '' })
      }}
    >
      {onRemoveSelection => <Button color="error" onClick={onRemoveSelection}>{'X'}</Button>}
    </Mutation>
  )
}

export default RestaurantCandidate
