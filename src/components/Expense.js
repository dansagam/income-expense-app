import {useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { GlobalContext } from '../context/IEGlobalState'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Expense = (props) => {
    const {deleteExpenseTransaction} = useContext(GlobalContext)
    return (
        <div className="item-field" id="div_0">
            <div className="item-description">{props.expenseTransaction.description}</div>
            <div className="item-value-container">
                <div className="item-value">{props.expenseTransaction.amount}</div>
                <div className="delete-edit-button">
                    <FontAwesomeIcon icon={faEdit} />
                    <span className="remove-button" onClick={()=> deleteExpenseTransaction(props.expenseTransaction.id)}><FontAwesomeIcon icon={faTrash} /></span>
                </div>
            </div>
        </div>
    )
}

export default Expense