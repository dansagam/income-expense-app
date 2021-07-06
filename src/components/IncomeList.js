import {useContext} from 'react'
import { GlobalContext } from '../context/IEGlobalState'
import Income from './Income'

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext)
    return (
        <div className="income-list-container">
            {incomeTransactions.map(incomeTransaction =>(
                <Income key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
            ))}
        </div>
    )
}

export default IncomeList
