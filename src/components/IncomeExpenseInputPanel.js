import React from 'react'

const IncomeExpenseInputPanel = () => {
    return (
        <>
            <select name="" id="">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input className="detail-input-text" type="text" />
            <input type="number" className="input-detail-value" />
        </>
    )
}

export default IncomeExpenseInputPanel
