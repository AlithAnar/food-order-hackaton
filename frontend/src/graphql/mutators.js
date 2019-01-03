import gql from 'graphql-tag'

export const CREATE_RESTAURANT = gql
  `
  mutation FoodOrderMutation($name: String!) {
    addRestaurant(name: $name) {
      name
    }
  }
`

export const CREATE_CHECKOUT = gql
  `
  mutation FoodOrderMutation($date: String!, $status: String!) {
    addCheckout(date: $date, status: $status) {
      date
      status
    }
  }
`

export const REMOVE_RESTAURANT_SELECTION = gql
  `
  mutation FoodOrderMutation($checkoutId: String!, $restaurantId: String!) {
    removeSelection(checkoutId: $checkoutId, restaurantId: $restaurantId) {
      checkoutId
      restaurantId
    }
  }
`
