import React, { Fragment } from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutSucess } from '../../context/userReducer'

const Logout = () => {
   const dispatch = useDispatch()
   return (
         <Fragment>
            <Nav.Link href="#" onClick={() => dispatch(logoutSucess())}>
               logout
            </Nav.Link>
         </Fragment>
   )
}

export default Logout
