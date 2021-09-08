import React from 'react'
import {Navbar, Container, Nav, NavItem,  } from 'react-bootstrap'

const AppNavBar = () => {
   return (
      <Navbar bg="dark" variant="dark" expand="sm">
         <Container fluid="lg">
            <Navbar.Brand href="#home">Budget Expense App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
               <Nav className="me-auto">
                  <NavItem>
                     <Nav.Link href="#home">Login</Nav.Link>
                  </NavItem>
                  <NavItem>
                     <Nav.Link href="#home">Register</Nav.Link>

                  </NavItem>
                  <Nav.Item>
                  <Nav.Link href="#home">Logout</Nav.Link>
                     
                  </Nav.Item>
                  <Navbar.Text>
                     Signed in as: <a href="#login">KayUI</a>
                  </Navbar.Text>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default AppNavBar
