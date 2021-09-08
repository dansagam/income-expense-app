
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, } from 'react-redux'
import { deleteIncomeTransaction, incomeEditStatus } from '../context/IncomeReducer'
import { useState } from 'react'

const Income = (props) => {
    const dispatch = useDispatch()
    const [removalDiv, setRemovalDiv] = useState(false)
    return (
        <div className={ removalDiv ? `item-field removal-row` : `item-field`} key={props.incomeTransaction._id}>
            <div className="item-description">{props.incomeTransaction.description}</div>
            <div className="item-value-container">
                <div className="item-value">{props.incomeTransaction.amount}</div>
                <div className="delete-edit-button">
                    <span onClick={() => {
                        dispatch(incomeEditStatus(true))
                        props.onSetTargetid(props.incomeTransaction._id)}
                        }>
                            <FontAwesomeIcon  icon={faEdit}  size="sm"/>
                    </span>
                    <span className="remove-button" 
                        onClick={()=> {
                            setRemovalDiv(true)
                            setTimeout(() => dispatch(deleteIncomeTransaction(props.incomeTransaction._id)),3000)
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

export default Income
