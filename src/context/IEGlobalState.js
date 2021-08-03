import React, { createContext,  /** useMemo*/ useReducer } from 'react'
import ExpenseReducer from './ExpenseReducer'
import IncomeReducer from './IncomeReducer'


const initialState ={
    incomeTransactions: [
        {id: 1, description: 'book', amount: 5000},
        {id: 2, description: 'Music', amount: 6000}
    ],
    expenseTransactions : [
        {id: 1,  description: 'john doe', amount: 4000},
        {id: 2,  description: 'john doe', amount: 4000}
    ],
    loading: false,
    status: false
}

export const GlobalContext = createContext(initialState)
export const GlobalIncomeProvider = ({children}) => {
    const [incomeState, dispatchIncome] = useReducer(IncomeReducer, initialState);
    const [expenseState, dispatchExpense] = useReducer(ExpenseReducer, initialState);
    // console.log(incomeState)
    // console.log(expenseState)
    const addIncomeTransaction = (incomeTransaction) => {
        dispatchIncome({
            type: 'ADD_INCOME_TRANSACTION',
            payload: incomeTransaction
        })
        // console.log(incomeTransaction)
    }
    const editIncomeTransaction = (newIncomeTransaction)=> {
        dispatchIncome({
            type: 'EDIT_INCOME_TRANSACTION',
            payload: newIncomeTransaction
        })
    }
    const editExpenseTransaction = (newExpenseTransaction)=> {
        console.log(newExpenseTransaction)
        dispatchExpense({
            type: 'EDIT_EXPENSE_TRANSACTION',
            payload: newExpenseTransaction
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
    const updateExpenseStatus = (newStatus) =>{
        dispatchExpense({
            type: 'EXPENSE_EDIT_STATUS',
            payload: newStatus

        })
    }
    const updateIncomeStatus = (newStatus) =>{
        dispatchIncome({
            type: 'INCOME_EDIT_STATUS',
            payload: newStatus

        })
    }

    return <GlobalContext.Provider value={
        {incomeTransactions: incomeState.incomeTransactions, 
            expenseTransactions: expenseState.expenseTransactions,
            incomeStatus: incomeState.status,
            expenseStatus: expenseState.status, updateIncomeStatus, updateExpenseStatus,
            deleteIncomeTransaction, addIncomeTransaction,
            editIncomeTransaction, editExpenseTransaction,
            addExpenseTransaction, deleteExpenseTransaction
        }
    }>
        {children}
    </GlobalContext.Provider>
}
