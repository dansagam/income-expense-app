import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getExpenseTransactions = createAsyncThunk('Expense/getExpenseTransactions', async() =>{
    try {
        const response = await axios.get('/api/expenses')
        return response.data.data
    } catch (err) {
        return err.response.data.err
    }
})

export const addExpenseTransaction = createAsyncThunk('Expense/addExpenseTransaction', async(newExpense) =>{
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios.post('/api/expenses', newExpense, config)
        return response.data.data
    } catch (err) {
        return err.response.data.err
        
    }
})

export const deleteExpenseTransaction = createAsyncThunk('Expense/deleteExpenseTransaction', async(expenseId) =>{
    try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.delete(`/api/expenses/${expenseId}`)
        return expenseId
    } catch (err) {
        return err.response.data.err
    }
})

export const editExpenseTransaction = createAsyncThunk('Expense/editExpenseTransaction', async({_id, description, amount}) =>{
    try {
        const response = await axios.put(`/api/expenses/${_id}`, {_id, description, amount})
        return response.data.data
    } catch (err) {
        return err.response.data.err
    }
})

export const ExpenseReducer =createSlice({
    name: 'Expense',
    initialState: {
        expenseTransactions : [],
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
            // return {
            //     ...state,
            //     expenseTransactions: [...state.expenseTransactions],
            //     status: false
            // }
        },
        expenseEditStatus: (state, action) =>{
            return {
                ...state,
                status: action.payload
            }
        }
    },
    extraReducers:{
        [getExpenseTransactions.pending]: (state, action) =>{
            state.loading = true
        },
        [getExpenseTransactions.fulfilled]: (state, action) =>{
            return{
                ...state,
                expenseTransactions: action.payload
            }
        },
        [addExpenseTransaction.fulfilled]: (state, action) => {
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
            }
        },
        [deleteExpenseTransaction.fulfilled]: (state, action) =>{
            return {
                ...state,
                expenseTransactions: state.expenseTransactions.filter(expenseTransaction => expenseTransaction.id !==action.payload)
            }
        },
        [editExpenseTransaction.fulfilled]: (state, action) =>{
            const { _id, description, amount} = action.payload
            const existingExpense = state.expenseTransactions.find((expenseTransaction) => expenseTransaction._id === _id)
            if(existingExpense) {
               existingExpense.text = description
               existingExpense.amount = amount
            }

        }
    }
})

export const    {
                    expenseEditStatus
                } = ExpenseReducer.actions

export const expenseSelectState = state => state.Expense.expenseTransactions

export default ExpenseReducer.reducer
