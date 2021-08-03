import {useContext, useState} from 'react'
import { GlobalContext } from '../context/IEGlobalState'
import EditExpenseForm from './EditExpenseForm'
import Expense from './Expense'

const ExpenseList = () => {
    const {expenseTransactions, expenseStatus} = useContext(GlobalContext)
    const [targetid, setTargetid] = useState('')
    return (
        <div className="expense-list-container">
            
            {expenseTransactions.map(expenseTransaction => (
                <>
                    {!expenseStatus ?
                        <Expense key={expenseTransaction.id} expenseTransaction ={expenseTransaction} onSetTargetid ={setTargetid} />
                    
                    : expenseStatus && (targetid === expenseTransaction.id) 
                        ? <EditExpenseForm expenseTransaction ={expenseTransaction} />
                    : <Expense key={expenseTransaction.id} expenseTransaction ={expenseTransaction}  onSetTargetid ={setTargetid}/>
                    }
                </>
            ))}
        </div>
    )
}

export default ExpenseList
