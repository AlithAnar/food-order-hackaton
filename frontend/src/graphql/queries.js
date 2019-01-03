import gql from 'graphql-tag'

export const GET_RESTAURANTS = gql
  `
  {
    restaurants {
      name
      _id
    }
  }
`

export const GET_CHECKOUTS = gql
  `
  {
    checkouts {
      _id
      restaurantId
      date
      status
    }
  }
`

export const GET_CHECKOUT_MESSAGES = gql
  `
  {
    messages {
      restaurantId
      checkoutId
      userName
      date
      text
    }
  }
`

export const GET_CHECKOUT_SELECTIONS = gql
  `
  query FoodOrderRootQueryType($checkoutId: String!) {
    checkoutSelections(checkoutId: $checkoutId) {
      restaurantId
      checkoutId
    }
  }
`

export const GET_RESTAURANT_VOTES = gql
  `
  query Votes($checkoutId: String!, $restaurantId: String!) {
    votes(checkoutId: $checkoutId, restaurantId: $restaurantId) {
      restaurantId
      checkoutId
      userName
      date
    }
  }
`

