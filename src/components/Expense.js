import {useContext} from 'react'
import { GlobalContext } from '../context/IEGlobalState'

const Expense = (props) => {
    const {deleteExpenseTransaction} = useContext(GlobalContext)
    return (
        <div className="item-field" id="div_0">
            <div className="item-description">{props.expenseTransaction.description}</div>
            <div className="item-value-container">
                <div className="item-value">{props.expenseTransaction.amount}</div>
                <div className="delete-edit-button">
                    <button><span>edit</span></button>
                    <button className="remove-button" onClick={()=> deleteExpenseTransaction(props.expenseTransaction.id)}><span>delete</span></button> 
                </div>
            </div>
        </div>
    )
}

export default Expense
