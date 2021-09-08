import React, {Fragment} from 'react'
import {Navbar, Container, Nav, NavItem,  } from 'react-bootstrap'
import Login from './formComponents/Login'
import Logout from './formComponents/Logout'
import Register from './formComponents/Register'

import {   useSelector } from 'react-redux'

const AppNavBar = () => {
   
   // const [modalShow, setModalShow] = useState(false)
   const {isAuthenticated, 
            userLogin: { 
               userInfo 
            }
         } = useSelector(state => state.User)
   const regLink = (
      <Fragment>
         <NavItem>
            <Login />
         </NavItem>
         <NavItem>
            <Register />
         </NavItem>
      </Fragment>

   ) 
   const logLink = (
      <Fragment>
      <Nav.Item>
         <Logout />
      </Nav.Item>
      <Navbar.Text>
         Signed in as: <a href="#login">{userInfo ? userInfo.name : ''}</a>
      </Navbar.Text>

      </Fragment>
   )

   return (
      <Navbar bg="dark" variant="dark" expand="sm" style={{position: 'sticky', top: '0'}}>
         <Container fluid="lg">
            <Navbar.Brand href="#home">Budget Expense App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
               <Nav className="ml-auto">
                  { isAuthenticated ? logLink :
                   (userInfo) ? logLink : regLink}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default AppNavBar
