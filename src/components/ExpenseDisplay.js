import {useContext} from 'react'
import { GlobalContext } from '../context/IEGlobalState'

const ExpenseDisplay = () => {
    const {expenseTransactions, incomeTransactions} = useContext(GlobalContext)
    const iteratedAmount = incomeTransactions.map(incomeTransaction => incomeTransaction.amount)
    const totalIncome = iteratedAmount.reduce((acc, item) => (acc +=item), 0).toFixed(2)
    const totalExpenseAmount = expenseTransactions.map(expenseTransaction => expenseTransaction.amount)
    const totalExpense = totalExpenseAmount.reduce((acc, item) => (acc += item), 0).toFixed(2)
    const transactionPercetage = ((Number(totalExpense)/(Number(totalExpense) + Number(totalIncome))) *100).toFixed(2)
        
    // function valueCal(firstValue, nextVal){
        
    //     return firstValue + Number(nextVal) 
    // }
    return (
        <div className="expense-stack-display">
            <div className="expense-label">Expense</div>
            <div className="total-expense-amount-field">
                <div className="expense-amount">{totalExpense}</div>
                <div className="expense-amount-percentage">{transactionPercetage}<span>%</span></div>
            </div>
        </div>
    )
}

export default ExpenseDisplay
