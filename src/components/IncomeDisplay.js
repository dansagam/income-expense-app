import React from 'react'
import { useSelector } from 'react-redux'
import { incomeSelectState } from '../context/IncomeReducer'

const IncomeDisplay = () => {
    const incomeTransactions = useSelector(incomeSelectState)
    const iteratedAmount = incomeTransactions.map(incomeTransaction => incomeTransaction.amount)
    const totalIncome = iteratedAmount.reduce((acc, item) => (acc +=item), 0).toFixed(2)
    return (
        <div className="income-stack-display">
            <div className="income-label">Income</div>
            <div className="total-income-amount-field">
                <div className="income-amount">{totalIncome}</div>
                <div className="income-amount-percentage">&nbsp;</div>
            </div>
        </div>
    )
}

export default IncomeDisplay
