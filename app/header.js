import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import actions from '../resources/actions'

const headerStyle = { width: '100%' }
const Header = () => (
    <Navbar inverse collapseOnSelect style = { headerStyle }>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Test Exercise 4 Quover</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem onClick = { () => actions.authentication.logOut() } > LogOut </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
