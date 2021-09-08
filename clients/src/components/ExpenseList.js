import {useState} from 'react'
import { useSelector } from 'react-redux'
import { expenseSelectState } from '../context/ExpenseReducer'
import EditExpenseForm from './EditExpenseForm'
import Expense from './Expense'

const ExpenseList = () => {
    const expenseTransactions = useSelector(expenseSelectState)
    const expenseStatus = useSelector(state => state.Expense.status)
    const [targetid, setTargetid] = useState('')
    return (
        <div className="expense-list-container">
            
            {expenseTransactions.map(expenseTransaction => (
                <>
                    {!expenseStatus ?
                        <Expense 
                            key={expenseTransaction._id.toString()} 
                            expenseTransaction ={expenseTransaction} 
                            onSetTargetid ={setTargetid} 
                        />
                    
                    : expenseStatus && (targetid === expenseTransaction._id) ? 
                        <EditExpenseForm expenseTransaction ={expenseTransaction} />
                    : 
                        <Expense 
                            key={expenseTransaction._id.toString()} 
                            expenseTransaction ={expenseTransaction}  
                            onSetTargetid ={setTargetid}
                        />
                    }
                </>
            ))}
        </div>
    )
}

export default ExpenseList
