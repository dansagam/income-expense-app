import { useState} from 'react'
import { useSelector } from 'react-redux'
import { incomeSelectState } from '../context/IncomeReducer'
import EditIncomeForm from './EditIncomeForm'
import Income from './Income'

const IncomeList = () => {
    const incomeTransactions = useSelector(incomeSelectState)
    const incomeStatus = useSelector( (state) => state.Income.status)
    const [targetid, setTargetid] = useState('')
    return (
        <div className="income-list-container">
            {incomeTransactions.map(incomeTransaction =>(
                <> { !incomeStatus ?
                    <Income key={incomeTransaction.id} incomeTransaction={incomeTransaction} onSetTargetid={setTargetid} />
                    
                    : incomeStatus && (targetid === incomeTransaction.id) 
                    ? <EditIncomeForm incomeTransaction={incomeTransaction} />
                    :
                    <Income key={incomeTransaction.id} incomeTransaction={incomeTransaction} onSetTargetid={setTargetid} />
                }
                </>
            ))}
        </div>
    )
}

export default IncomeList
