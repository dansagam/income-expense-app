import React from 'react'
import ExpenseDisplay from './ExpenseDisplay'
import IncomeDisplay from './IncomeDisplay'

const ExpenseIncomeDisplay = () => {
    return (
        <div className="income-expense-details">
            <div className="header-text-div">
                <h2 className="header-text">Welcome to your budget  of the %Month%</h2>
            </div>
            <div className="income-expense-display">+ 0</div>
            <IncomeDisplay />
            <ExpenseDisplay />
        </div>
    )
}

export default ExpenseIncomeDisplay
