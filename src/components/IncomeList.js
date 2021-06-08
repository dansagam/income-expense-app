import {useContext} from 'react'
import { GlobalContext } from '../context/IEGlobalState'

const IncomeList = (props) => {
    const {deleteIncomeTransaction} = useContext(GlobalContext)
    return (
        <div className="item-field" key={props.incomeTransaction.id}>
            <div className="item-description">{props.incomeTransaction.description}</div>
            <div className="item-value-container">
                <div className="item-value">{props.incomeTransaction.amount}</div>
                <div className="delete-edit-button">
                    <button><span>edit</span></button>
                    <button className="remove-button" onClick={()=> deleteIncomeTransaction(props.incomeTransaction.id)}><span>delete</span></button>
                </div>
            </div>
        </div>
    )
}

export default IncomeList
