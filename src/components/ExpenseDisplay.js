import React from 'react'

const ExpenseDisplay = () => {
    return (
        <div className="expense-stack-display">
            <div className="expense-label">Expense</div>
            <div className="total-expense-amount-field">
                <div className="expense-amount">300</div>
                <div className="expense-amount-percentage">40%</div>
            </div>
        </div>
    )
}

export default ExpenseDisplay
