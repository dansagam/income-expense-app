import React, {useContext} from 'react'
import { GlobalContext } from '../context/IEGlobalState'

const IncomeDisplay = () => {
    const {incomeTransactions} = useContext(GlobalContext)
    const iteratedAmount = incomeTransactions.map(incomeTransaction => incomeTransaction.amount)
    const totalIncome = iteratedAmount.reduce((acc, item) => (acc +=item), 0).toFixed(2)
    // function valueCal(firstValue, nextVal){
    //     return firstValue.amount + nextVal.amount
    // }

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
