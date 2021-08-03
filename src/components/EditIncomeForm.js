import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/IEGlobalState'

const EditIncomeForm = (props) => {
   const { updateIncomeStatus,editIncomeTransaction} = useContext(GlobalContext)
   const [description, setDescription] = useState(props.incomeTransaction.description)
   const [amount, setAmount] = useState(props.incomeTransaction.amount)
   const onSubmit = (e) =>{
      e.preventDefault()
      const newUpdate ={
         id: props.incomeTransaction.id,
         description: description,
         amount: Number(+amount)
      }
      editIncomeTransaction(newUpdate)
      updateIncomeStatus(false)
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
