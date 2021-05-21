import React from 'react'
import ExpenseIncomeDisplay from './ExpenseIncomeDisplay'

const TopIncomeExpenseTop = () => {
    return (
        <div className="income-expense-details">
            <div className="header-text-div">
                <h2 className="header-text">Welcome to your budget  of the <span>%Month%</span> </h2>
            </div>
            <div className="income-expense-display">+ 0</div>
            <ExpenseIncomeDisplay />
        </div>
    )
}

export default TopIncomeExpenseTop
