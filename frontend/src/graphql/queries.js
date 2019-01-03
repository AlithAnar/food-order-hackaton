import gql from 'graphql-tag'

export const GET_RESTAURANTS = gql
  `
  {
    restaurants {
      name
      rate
    }
  }
`

export const GET_CHECKOUTS = gql
  `
  {
    checkouts {
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
  {
    selections {
      restaurantIds
      checkoutId
    }
  }
`


