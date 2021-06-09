import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/IEGlobalState'

const IncomeExpenseInputPanel = () => {
    const {addIncomeTransaction} = useContext(GlobalContext)
    const {addExpenseTransaction} = useContext(GlobalContext)
    const   [optValue, setOptValue] = useState('income'),
            [description, setDecription] = useState(''),
            [amount, setAmount] = useState(0)
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000 ),
            description,
            amount: +amount
        }
        console.log(newTransaction)
        if(optValue === 'income') {
            addIncomeTransaction(newTransaction)
        }
        if (optValue === 'expense'){
            addExpenseTransaction(newTransaction)
        }
        // {(optValue = 'expense') ? addExpenseTransaction(newTransaction) 
        // : (optValue = 'income') ? addIncomeTransaction(newTransaction)
        
        // }
        setDecription('')
        
        setAmount('')
    }
    return (
        <form action="" method="post" onSubmit= {onSubmit}>
            <div className="input-container">
                <select name="" id="income-expense-option" value={optValue} onChange = {(e)=> setOptValue(e.target.value)}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <input value={description} onChange={(e) => setDecription(e.target.value)} className="detail-input-text" placeholder="Enter the details" type="text" />
                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="value" type="number" className="input-detail-value" />
                <button>submit</button>
            </div>

        </form>
    )
}

export default IncomeExpenseInputPanel
