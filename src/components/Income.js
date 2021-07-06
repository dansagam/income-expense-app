import {useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/IEGlobalState'

const Income = (props) => {
    const {deleteIncomeTransaction} = useContext(GlobalContext)
    return (
        <div className="item-field" key={props.incomeTransaction.id}>
            <div className="item-description">{props.incomeTransaction.description}</div>
            <div className="item-value-container">
                <div className="item-value">{props.incomeTransaction.amount}</div>
                <div className="delete-edit-button">
                    <span><FontAwesomeIcon  icon=/**"fa-solid fa-square-pen"*/{faEdit} /></span>
                    <span className="remove-button" onClick={()=> deleteIncomeTransaction(props.incomeTransaction.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Income
