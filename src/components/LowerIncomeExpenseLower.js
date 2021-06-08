import {useContext} from 'react'
import IncomeExpenseInputPanel from './IncomeExpenseInputPanel'
import { GlobalContext } from '../context/IEGlobalState'
import IncomeList from './IncomeList'
import ExpenseList from './ExpenseList'

const LowerIncomeExpenseLower = () => {
    const {expenseTransactions, incomeTransactions} = useContext(GlobalContext)
    
    return (
        <div className="lower-container">
            <div className="input-income-expense-field">
                <IncomeExpenseInputPanel />
            </div>
            <div className="income-expense-list-container">
                <div className="income-side-detail">
                    <h2 className="income-header">Income</h2>
                    <div className="income-list-container">
                        {incomeTransactions.map(incomeTransaction =>(
                            <IncomeList key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
                        ))}
                    </div>
                </div>
                <div className="expense-side-detail">
                    <h2 className="expense-header">Expense</h2>
                    <div className="expense-list-container">
                        {expenseTransactions.map(expenseTransaction => (
                            <ExpenseList key={expenseTransaction.id} expenseTransaction = {expenseTransaction} />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LowerIncomeExpenseLower
