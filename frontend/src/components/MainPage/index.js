import React from 'react'
import { Container, Row } from 'reactstrap';
import RestaurantsPage from '../RestaurantsPage';


function MainPage(props) {
  return (
    <Container>
      <Row>
        <RestaurantsPage />
      </Row>
    </Container>
  )

}

export default MainPage
