import React,{useContext} from 'react'
import IncomeExpenseInputPanel from './IncomeExpenseInputPanel'
import { GlobalContext } from '../context/IEGlobalState'

const LowerIncomeExpenseLower = () => {
    const {expenseTransactions} = useContext(GlobalContext)
    
    return (
        <div className="lower-container">
            <div className="input-income-expense-field">
                <IncomeExpenseInputPanel />
            </div>
            <div className="income-expense-list-container">
                <div className="income-side-detail">
                    <h2 className="income-header">Income</h2>
                    <div className="income-list-container">
                        <div className="item-field" id="div_0">
                            <div className="item-description">descriiption</div>
                            <div className="item-value-container">
                                <div className="item-value">2342</div>
                                <div className="delete-edit-button">
                                    <button><span>edit</span></button>
                                    {console.log(expenseTransactions)}
                                    <button className="remove-button"><span>delete</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="expense-side-detail">
                    <h2 className="expense-header">Expense</h2>
                    <div className="expense-list-container">
                        <div className="item-field" id="div_0">
                            <div className="item-description">descriiption</div>
                            <div className="item-value-container">
                                <div className="item-value">2342</div>
                                <div className="delete-edit-button">
                                    <button><span>edit</span></button>
                                    <button className="remove-button"><span>delete</span></button>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LowerIncomeExpenseLower
