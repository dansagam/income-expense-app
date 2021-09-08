import React, { useState} from 'react'
import { Button, Col, Form, Row , FloatingLabel} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editIncomeTransaction, incomeEditStatus } from '../context/IncomeReducer'

const EditIncomeForm = (props) => {
   const dispatch = useDispatch()
   const [description, setDescription] = useState(props.incomeTransaction.description)
   const [amount, setAmount] = useState(props.incomeTransaction.amount)
   const onSubmit = (e) =>{
      e.preventDefault()
      const newUpdate ={
         _id: props.incomeTransaction._id,
         description: description,
         amount: Number(+amount)
      }
      dispatch(editIncomeTransaction(newUpdate))
      dispatch(incomeEditStatus(false))
   }

   return (
      <Form onSubmit={onSubmit}>
         <Row>
            <Col>
               <FloatingLabel className="mb-3" label="description">
                  <Form.Control 
                     sm={5}
                     type='text' 
                     value={description}  
                     onChange={(e)=> setDescription(e.target.value)}
                  />
               </FloatingLabel>
            </Col>
            <Col>
               <FloatingLabel className="mb-3" label="Edit your amount">
                  <Form.Control  
                     sm={5}
                     type='number' 
                     value={amount} 
                     onChange={(e) => setAmount(e.target.value)}
                  />

               </FloatingLabel>
            </Col>
            <Col>
               <Button sm={2} type='submit'>ok</Button>
            </Col>
         </Row>
      </Form>
   )
}


export default EditIncomeForm
