// import {useContext} from 'react'
// import { GlobalContext } from '../context/IEGlobalState'
import ExpenseIncomeDisplay from './ExpenseIncomeDisplay'
import { useSelector} from 'react-redux'
import { expenseSelectState } from '../context/ExpenseReducer'
import { incomeSelectState } from '../context/IncomeReducer'

const TopIncomeExpenseTop = () => {
    const expenseTransactions = useSelector(expenseSelectState)
    const incomeTransactions = useSelector(incomeSelectState)
    console.log(incomeTransactions)
    const iteratedAmount = incomeTransactions.map(incomeTransaction =>(incomeTransaction.amount))
    const totalIncome = iteratedAmount.reduce((acc, item) => (acc +=item), 0).toFixed(2)
    const totalExpenseAmount = expenseTransactions.map(expenseTransaction => (expenseTransaction.amount))
    const totalExpense = totalExpenseAmount.reduce((acc, item) => (acc += item), 0).toFixed(2)
    let todayDate = new Date()
    let options = {month: 'long'}
    const todayMonth = new Intl.DateTimeFormat('en-US', options).format(todayDate);

    return (
        <div className="income-expense-details">
            <div className="header-text-div">
                <h2 className="header-text">Welcome to your budget of the <span>{todayMonth}</span> </h2>
            </div>
            <div className="income-expense-display">{totalIncome - totalExpense}</div>
            <ExpenseIncomeDisplay />
        </div>
    )
}

export default TopIncomeExpenseTop
