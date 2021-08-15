import React, { useState} from 'react'
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
      <form onSubmit={onSubmit}>
         <input type='text' value={description}  onChange={(e)=> setDescription(e.target.value)}/>
         <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
         <button type='submit'>ok</button>
      </form>
   )
}


export default EditIncomeForm
