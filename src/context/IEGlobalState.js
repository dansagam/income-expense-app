import React, { createContext, useReducer } from 'react'
import ExpenseReducer from './ExpenseReducer'
import IncomeReducer from './IncomeReducer'


const initialState ={
    incomeTransactions: [
        {id: 1, description: 'book', amount: 5000},
        {id: 2, description: 'sex', amount: 6000}
    ],
    expenseTransactions : [
        {id: 1,  description: 'porn', amount: 4000}
    ]
}
console.log(initialState)
export const GlobalContext = createContext(initialState)
export const GlobalIncomeProvider = ({children}) => {
    const [incomeState, dispatchIncome] = useReducer(IncomeReducer, initialState);
    const [expenseState, dispatchExpense] = useReducer(ExpenseReducer, initialState);
    const addIncomeTransaction = (incomeTransaction) => {
        dispatchIncome({
            type: 'ADD_INCOME_TRANSACTION',
            payload: incomeTransaction
        })
        console.log(incomeTransaction)
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
