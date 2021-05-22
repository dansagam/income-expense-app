import React from 'react'

const IncomeExpenseInputPanel = () => {
    return (
        <div className="input-container">
            <select name="" id="income-expense-option">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input className="detail-input-text" placeholder="Enter the details" type="text" />
            <input placeholder="value" type="number" className="input-detail-value" />
        </div>
    )
}

export default IncomeExpenseInputPanel
