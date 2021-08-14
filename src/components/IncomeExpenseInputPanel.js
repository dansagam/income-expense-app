import React, {useState} from 'react'
import { useDispatch,} from 'react-redux'
import { addExpenseTransaction } from '../context/ExpenseReducer'
import { addIncomeTransaction } from '../context/IncomeReducer'

const IncomeExpenseInputPanel = () => {
    const dispatch = useDispatch()
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
        if(optValue === 'income') {
            dispatch(addIncomeTransaction(newTransaction))
        }
        if (optValue === 'expense'){
            dispatch(addExpenseTransaction(newTransaction))
        }
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
