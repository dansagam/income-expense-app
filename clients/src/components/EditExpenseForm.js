import React, { useState} from 'react'
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
      <form onSubmit={onSubmit}>
         <input type='text' value={description}  onChange={(e)=> setDescription(e.target.value)}/>
         <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
         <button type='submit'>ok</button>
      </form>
   )
}

export default EditExpenseForm
