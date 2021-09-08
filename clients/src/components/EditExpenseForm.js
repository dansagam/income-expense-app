import React, { useState} from 'react'
import { Button, Col, Form, Row,FloatingLabel } from 'react-bootstrap'
import { useDispatch,  } from 'react-redux'
import { expenseEditStatus,editExpenseTransaction } from '../context/ExpenseReducer'

const EditExpenseForm = (props) => {
   const dispatch = useDispatch()
   const [description, setDescription] = useState(props.expenseTransaction.description)
   const [amount, setAmount] = useState(props.expenseTransaction.amount)
   const onSubmit = (e) =>{
      e.preventDefault()
      const newUpdate ={
         _id: props.expenseTransaction._id,
         description: description,
         amount: Number(+amount)
      }
      dispatch(editExpenseTransaction(newUpdate))
      dispatch(expenseEditStatus(false))
   }

   return (
      <Form onSubmit={onSubmit}>
         <Row>
            <Col>
               <FloatingLabel className="mb-3" label=" description">
                  <Form.Control 
                     sm={5} 
                     type='text' 
                     value={description}  
                     onChange={(e)=> setDescription(e.target.value)}
                  />
               </FloatingLabel>
            </Col>
            <Col>
               <FloatingLabel className="mb-3" label="edit your amount">
                  <Form.Control 
                     sm={5} 
                     type='number' 
                     value={amount} 
                     onChange={(e) => setAmount(e.target.value)}
                  />
               </FloatingLabel>
            </Col>
            <Col>
               <Button  sm={2} type='submit'>ok</Button>
            </Col>
         </Row>
      </Form>
   )
}

export default EditExpenseForm
