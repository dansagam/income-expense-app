import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/IEGlobalState'

const EditExpenseForm = (props) => {
   const { updateExpenseStatus,editExpenseTransaction} = useContext(GlobalContext)
   const [description, setDescription] = useState(props.expenseTransaction.description)
   const [amount, setAmount] = useState(props.expenseTransaction.amount)
   const onSubmit = (e) =>{
      e.preventDefault()
      const newUpdate ={
         id: props.expenseTransaction.id,
         description: description,
         amount: Number(+amount)
      }
      editExpenseTransaction(newUpdate)
      updateExpenseStatus(false)
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
