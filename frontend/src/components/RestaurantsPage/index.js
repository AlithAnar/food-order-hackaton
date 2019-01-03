import React from 'react'
import RestaurantList from '../RestaurantList'
import { Input, Button } from 'reactstrap';
import RestaurentsForm from '../RestaurantsForm';

const mockRestaurants = [
  {
    name: 'Sample restaurant 1'
  },
  {
    name: 'Sample restaurant 2'
  }
]

function RestaurantsPage(props) {
  return (
    <div>
      <div>{'Restaurant list'}</div>
      <RestaurantList restaurants={mockRestaurants} />
      <RestaurentsForm />
    </div>
  )

}

export default RestaurantsPage


