import gql from 'graphql-tag'

export const CREATE_RESTAURANT = gql
  `
  mutation RestaurantMutation($name: String!) {
    addRestaurant(name: $name) {
      name
    }
  }
`


