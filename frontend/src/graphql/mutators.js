import gql from 'graphql-tag'

export const CREATE_RESTAURANT = gql
  `
  mutation RestaurantMutation($name: String!) {
    addRestaurant(name: $name) {
      name
    }
  }
`

export const CREATE_CHECKOUT = gql
  `
  mutation RestaurantMutation($date: String!, $status: String!) {
    addCheckout(date: $date, status: $status) {
      date
      status
    }
  }
`
