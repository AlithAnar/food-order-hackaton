import gql from 'graphql-tag'

export const CREATE_RESTAURANT = gql
  `
  mutation PostRestaurantMutation($name: String!) {
    post(name: $name) {
      id
      name
    }
  }
`


