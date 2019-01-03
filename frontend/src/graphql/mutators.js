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

export const ADD_VOTE = gql
  `
  mutation FoodOrderMutation($checkoutId: String!, $restaurantId: String!, $username: String!) {
    addVote(checkoutId: $checkoutId, restaurantId: $restaurantId, username: $username) {
      checkoutId
      restaurantId
      username
    }
  }
`

export const DELETE_VOTE = gql
  `
  mutation FoodOrderMutation($checkoutId: String!, $restaurantId: String!, $username: String!) {
    deleteVote(checkoutId: $checkoutId, restaurantId: $restaurantId, username: $username) {
      checkoutId
      restaurantId
      username
    }
  }
`


export const ADD_CHECKOUT_SELECTION = gql
  `
  mutation FoodOrderMutation($checkoutId: String!, $restaurantId: String!) {
    addSelection(checkoutId: $checkoutId, restaurantId: $restaurantId) {
      checkoutId
      restaurantId
    }
  }
`
