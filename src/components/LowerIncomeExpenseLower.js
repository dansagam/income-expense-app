
import IncomeExpenseInputPanel from './IncomeExpenseInputPanel'
import IncomeList from './IncomeList'
import ExpenseList from './ExpenseList'

const LowerIncomeExpenseLower = () => {
    
    return (
        <div className="lower-container">
            <div className="input-income-expense-field">
                <IncomeExpenseInputPanel />
            </div>
            <div className="income-expense-list-container">
                <div className="income-side-detail">
                    <h2 className="income-header">Income</h2>
                    <IncomeList />
                </div>
                <div className="expense-side-detail">
                    <h2 className="expense-header">Expense</h2>
                    <ExpenseList />
                </div>
            </div>
        </div>
    )
}

export default LowerIncomeExpenseLower
