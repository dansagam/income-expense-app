import React, { createContext, useReducer } from 'react'
import ExpenseReducer from './ExpenseReducer'
import IncomeReducer from './IncomeReducer'


const initialState ={
    incomeTransactions: [
        {id: 1, textDetail: 'book', Amount: 5000},
        {id: 2, textDetail: 'sex', Amount: 6000}
    ],
    expenseTransactions : [
        {id: 1,  textDetail: 'porn', Amount: 4000}
    ]
}

export const GlobalContext = createContext(initialState)
export const GlobalIncomeProvider = ({children}) => {
    const [incomeState, dispatchIncome] = useReducer(IncomeReducer, initialState.incomeTransactions);
    const [expenseState, dispatchExpense] = useReducer(ExpenseReducer, initialState.expenseTransactions);
    const addIncomeTransaction = (incomeTransaction) => {
        dispatchIncome({
            type: 'ADD_INCOME_TRANSACTION',
            payload: incomeTransaction
        })
    }
    const deleteIncomeTransaction = (id) =>{
        dispatchIncome({
            type: 'DELETE_INCOME_TRANSACTION',
            payload: id
        })
    }
    const addExpenseTransaction = (expenseTransaction) => {
        dispatchExpense({
            type: 'ADD_EXPENSE_TRANSACTION',
            payload: expenseTransaction
        })
    }
    const deleteExpenseTransaction = (id) => {
        dispatchExpense({
            type: 'DELETE_EXPENSE_TRANSACTION',
            payload: id
        })
    }

    return <GlobalContext.Provider value={
        {incomeTransactions: incomeState.incomeTransactions, 
            expenseTransactions: expenseState.expenseTransactions,
            deleteIncomeTransaction, addIncomeTransaction,
            addExpenseTransaction, deleteExpenseTransaction
        }
    }>
        {children}
    </GlobalContext.Provider>
}
