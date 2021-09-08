import React, { useEffect, useState } from 'react'
import { Alert, Button, FloatingLabel, Form, Modal, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, loginUser } from '../../context/userReducer'

const Login = () => {
   const { isAuthenticated, error} = useSelector(state => state.User)
   const [modalShow, setModalShow] = useState(false)
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')
   const [msg, setMsg] = useState('')
   const dispatch = useDispatch()

   const toggleHandle = () =>{
      setModalShow(!modalShow)
      dispatch(clearErrors())
   }
   const clearField =() =>{
      setEmail('')
      setPassword('')
   }
   useEffect(() => {
      setMsg(error.msg)
      if(modalShow){
         if (isAuthenticated){
            toggleHandle()
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [error])
   const onSubmit =(e) =>{
      e.preventDefault()
      dispatch(loginUser({
         email: email,
         password: password
      }))
      clearField()
   }
   
   return (
      <div>
         <Nav.Link 
            onClick={toggleHandle}
            href="#"
         >
            Login
         </Nav.Link>
         <Modal
            // {...props}
            show={modalShow}
            onHide={toggleHandle}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Login User
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {msg ? <Alert color='danger'>{`${msg}`}</Alert> : null}
               <Form >
                  <FloatingLabel className="mb-3" label="enter your email">
                     <Form.Control 
                        type="email" 
                        name="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                  </FloatingLabel>
                  <FloatingLabel className="mb-3" label="enter your password">
                     <Form.Control 
                        type="password" 
                        name="password"
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                     />
                  </FloatingLabel>
                  <Button 
                     variant="outline-dark"
                     type="submit" 
                     style={{marginTop: '1.2rem'}} 
                     onClick={onSubmit}
                  >
                     Register
                  </Button>
               </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-dark" onClick={toggleHandle}>Close</Button>
            </Modal.Footer>
         </Modal>
         
      </div>
   )
}

export default Login
