import React from 'react'
import RestaurantList from '../RestaurantList'
import { Container, Row, Col } from 'reactstrap';

const mockRestaurants = [
  {
    name: 'Sample restaurant 1'
  },
  {
    name: 'Sample restaurant 2'
  }
]

function MainPage(props) {
  return (
    <Container>
      <Row>
        <div>{'Restaurant list'}</div>
        <RestaurantList restaurants={mockRestaurants} />
      </Row>
    </Container>
  )

}

export default MainPage
