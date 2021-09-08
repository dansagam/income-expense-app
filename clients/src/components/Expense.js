
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { expenseEditStatus, deleteExpenseTransaction } from '../context/ExpenseReducer'

const Expense = (props) => {
    const dispatch = useDispatch()
    return (
        <div className={`item-field `}  id="div_0">
            <div className="item-description">{props.expenseTransaction.description}</div>
            <div className="item-value-container">
                <div className="item-value">{props.expenseTransaction.amount}</div>
                <div className={`delete-edit-button`}>
                    <span onClick={() => {
                        dispatch(expenseEditStatus(true))
                        props.onSetTargetid(props.expenseTransaction._id)}}
                    >
                        <FontAwesomeIcon icon={faEdit} size="sm" />
                    </span>
                    <span className="remove-button" 
                        onClick={()=> dispatch(deleteExpenseTransaction(props.expenseTransaction._id))}
                    >
                        <FontAwesomeIcon icon={faTrash} size="sm"/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Expense
