
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, } from 'react-redux'
import { deleteIncomeTransaction, incomeEditStatus } from '../context/IncomeReducer'

const Income = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="item-field" key={props.incomeTransaction.id}>
            <div className="item-description">{props.incomeTransaction.description}</div>
            <div className="item-value-container">
                <div className="item-value">{props.incomeTransaction.amount}</div>
                <div className="delete-edit-button">
                    <span onClick={() => {
                        dispatch(incomeEditStatus(true))
                        props.onSetTargetid(props.incomeTransaction._id)}
                        }>
                            <FontAwesomeIcon  icon=/**"fa-solid fa-square-pen"*/{faEdit} />
                    </span>
                    <span className="remove-button" onClick={()=> dispatch(deleteIncomeTransaction(props.incomeTransaction.id))}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Income
