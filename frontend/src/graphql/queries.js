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

export const GET_CHECKOUT_VOTES = gql
  `
  {
    votes {
      restaurantId
      checkoutId
      userName
      date
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
  query Selections($checkoutId: String!) {
    selections(checkoutId: $checkoutId) {
      restaurantIds
      checkoutId
    }
  }
`


