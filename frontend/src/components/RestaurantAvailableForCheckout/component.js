import React from 'react'
import Restaurant from '../Restaurant';
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Query, Mutation } from 'react-apollo'
import { GET_CHECKOUT_SELECTIONS, GET_RESTAURANTS } from '../../graphql/queries';
import * as alert from '../../utils/altert'
import { defaultPollingInterval } from '../../utils/constants'
import './styles.css'
import { ADD_CHECKOUT_SELECTION } from '../../graphql/mutators';

RestaurantAvailableForCheckout.propTypes = {
  restaurants: PropTypes.array.isRequired,
}

RestaurantAvailableForCheckout.defaultProps = {
  restaurants: [],
}

function RestaurantAvailableForCheckout(props) {
  return (
    <ListGroup className={'availableRestaurants'}>
      {decorateWithRestaurants((restaurantsLoading, restaurantsError, restaurantsData) => {
        return decorateWithSelections((selectionsLoading, selectionsError, selectionsData) => {
          if (restaurantsLoading || selectionsLoading) {
            return <div>Fetching</div>
          }

          if (selectionsError || restaurantsError) {
            return <div>Error</div>
          }

          const selectedRestaurants = selectionsData.checkoutSelections.map(selection => selection.restaurantId)
          return restaurantsData.restaurants.filter(restaurant => selectedRestaurants.indexOf(restaurant._id) === -1).map(renderRestaurant)
        })
      })}
    </ListGroup >
  )

  function decorateWithRestaurants(render) {
    return (
      <Query
        query={GET_RESTAURANTS}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (error) {
            stopPolling()
            alert.error(error.message)
            return <div>Error</div>
          }

          startPolling(defaultPollingInterval)

          return render(loading, error, data)
        }}
      </Query>
    )
  }

  function decorateWithSelections(render) {
    return (
      <Query
        query={GET_CHECKOUT_SELECTIONS}
        variables={{ checkoutId: props.checkoutId }}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (error) {
            stopPolling()
            alert.error(error.message)
            return <div>Error</div>
          }

          startPolling(defaultPollingInterval)

          return render(loading, error, data)
        }}
      </Query>
    )
  }

  function renderRestaurant(restaurant) {
    return (
      <Mutation
        mutation={ADD_CHECKOUT_SELECTION}
        variables={{ checkoutId: props.checkoutId, restaurantId: restaurant._id }}
        onError={error => alert.error(error.message)}
        onCompleted={() => {
          alert.success('Restaurant selected!')
        }}
      >
        {onAddSelection =>
          <ListGroupItem key={restaurant._id} onClick={onAddSelection} className={'availableRestaurant'}>
            <Restaurant restaurant={restaurant} />
          </ListGroupItem>}
      </Mutation>

    )
  }
}

export default RestaurantAvailableForCheckout
