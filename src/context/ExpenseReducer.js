import {createSlice} from '@reduxjs/toolkit'


export const ExpenseReducer =createSlice({
    name: 'Expense',
    initialState: {
        expenseTransactions : [
            {id: 1,  description: 'john doe', amount: 4000},
            {id: 2,  description: 'john doe', amount: 4000}
        ],
        status: false,
        loading: false,

    },
    reducers: {
        addExpenseTransaction: (state, action) => {
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
            }
        },
        deleteExpenseTransaction: (state, action) => {
            return {
                ...state,
                expenseTransactions: state.expenseTransactions.filter(expenseTransaction => expenseTransaction.id !==action.payload)
            }

        },
        editExpenseTransaction: (state, action) =>{
            const { id, description, amount} = action.payload
            const existingExpense = state.expenseTransactions.find((expenseTransaction) => expenseTransaction.id === id)
            if(existingExpense) {
               existingExpense.text = description
               existingExpense.amount = amount
            }
            return {
                ...state,
                expenseTransactions: [...state.expenseTransactions],
                status: false
            }
        },
        expenseEditStatus: (state, action) =>{
            return {
                ...state,
                status: action.payload
            }
        }
    },
})

export const    {
                    addExpenseTransaction, 
                    deleteExpenseTransaction, 
                    editExpenseTransaction, 
                    expenseEditStatus
                } = ExpenseReducer.actions

export const expenseSelectState = state => state.Expense.expenseTransactions

export default ExpenseReducer.reducer
