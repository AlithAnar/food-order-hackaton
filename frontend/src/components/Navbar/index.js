import React from 'react'
import { Link } from "react-router-dom"

import {
  Nav,
  NavItem,
  Navbar,
} from 'reactstrap';

import './styles.css'

function NavbarComponent() {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem className={'navItem'}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem className={'navItem'}>
          <Link to="/checkouts">Checkouts</Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent
