import {useContext, useState} from 'react'
import { GlobalContext } from '../context/IEGlobalState'
import EditIncomeForm from './EditIncomeForm'
import Income from './Income'

const IncomeList = () => {
    const {incomeTransactions, incomeStatus} = useContext(GlobalContext)
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
