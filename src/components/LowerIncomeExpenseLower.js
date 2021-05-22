import React from 'react'
import IncomeExpenseInputPanel from './IncomeExpenseInputPanel'

const LowerIncomeExpenseLower = () => {
    return (
        <div>
            <div>
                <IncomeExpenseInputPanel />
            </div>
            <div className="income-expense-list-field">
                <div className="income-side-detail">
                    <h2 className="income-header">Income</h2>
                    <div> list</div>
                </div>
                <div className="expense-side-detail">
                    <h2 className="expense-header">Expense</h2>
                    <div>list</div>
                </div>
            </div>
            
        </div>
    )
}

export default LowerIncomeExpenseLower
