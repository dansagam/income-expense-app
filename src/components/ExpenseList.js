import {useContext} from 'react'
import { GlobalContext } from '../context/IEGlobalState'
import Expense from './Expense'

const ExpenseList = () => {
    const {expenseTransactions} = useContext(GlobalContext)
    return (
        <div className="expense-list-container">
            {console.log(expenseTransactions)}
            {expenseTransactions.map(expenseTransaction => (
                <Expense key={expenseTransaction.id} expenseTransaction ={expenseTransaction} />
            ))}
        </div>
    )
}

export default ExpenseList
