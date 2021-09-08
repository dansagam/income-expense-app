
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { expenseEditStatus, deleteExpenseTransaction } from '../context/ExpenseReducer'
import { useState } from 'react'

const Expense = (props) => {
    const dispatch = useDispatch()
    const [removalDiv, setRemovalDiv] = useState(false)
    return (
        <div className={ removalDiv ? `item-field removal-row` : `item-field`}  id="div_0">
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
                        onClick={()=> {
                            setRemovalDiv(true)
                            setTimeout(() => dispatch(deleteExpenseTransaction(props.expenseTransaction._id)), 3000)
                            setRemovalDiv(false)
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} size="sm"/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Expense
