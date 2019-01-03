import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../Restaurant';
import { Button } from 'reactstrap'
import { Mutation } from 'react-apollo'
import { REMOVE_RESTAURANT_SELECTION, ADD_VOTE, DELETE_VOTE } from '../../graphql/mutators';
import RestaurantVotes from '../RestaurantVotes';
import * as alert from '../../utils/altert'
import { GET_RESTAURANT_VOTES } from '../../graphql/queries';
import { Query } from 'react-apollo';
import { defaultPollingInterval } from '../../utils/constants';

RestaurantCandidate.propTypes = {
  restaurant: PropTypes.object.isRequired,
  checkoutId: PropTypes.string.isRequired,
}

function RestaurantCandidate(props) {
  return (
    <div key={props.restaurant._id}>
      <Restaurant restaurant={props.restaurant} />
      <Query
        query={GET_RESTAURANT_VOTES}
        variables={{ checkoutId: props.checkoutId, restaurantId: props.restaurant._id }}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) {
            return <div>Fetching</div>
          }

          if (error) {
            stopPolling()
            return 0
          }

          startPolling(defaultPollingInterval)

          return (<div>
            {renderUpVote(props, data.votes)}
            {renderDownVote(props, data.votes)}
            {data.votes.length}
          </div>)
        }}
      </Query>

    </div>
  )
}

function renderUpVote(props, votes) {
  const username = localStorage.getItem('userName')
  if (votes.filter(vote => vote.username === username).length > 0) {
    return null
  }

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

function renderDownVote(props, votes) {
  const username = localStorage.getItem('userName')
  if (votes.filter(vote => vote.username === username).length === 0) {
    return null
  }

  return (
    <Mutation
      mutation={DELETE_VOTE}
      variables={{ checkoutId: props.checkoutId, restaurantId: props.restaurant._id, username }}
      onError={error => alert.error(error.message)}
      onCompleted={() => {
        alert.success('Vote removed!')
      }}
    >
      {onRemoveVote => <Button color="danger" onClick={onRemoveVote}>{'-'}</Button>}
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
