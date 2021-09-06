import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getExpenseTransactions = createAsyncThunk('Expense/getExpenseTransactions', async(arg, {rejectWithValue}) =>{
    try {
        const response = await axios.get('/api/expenses')
        // console.log(response)
        return response.data.data
    } catch (err) {
        throw rejectWithValue(err.response)
    }
})

export const addExpenseTransaction = createAsyncThunk('Expense/addExpenseTransaction', async(
    newExpense, {getState, rejectWithValue}) =>{
    try {
        const { 
           userLogin : {
              userInfo
           }
        } = getState().User
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const response = await axios.post('/api/expenses', newExpense, config)
        return response.data.data
    } catch (err) {
        throw rejectWithValue(err.response)
        
    }
})

export const deleteExpenseTransaction = createAsyncThunk('Expense/deleteExpenseTransaction', async(
    expenseId, {getState, rejectWithValue}) =>{
    try {
        const { 
           userLogin : {
              userInfo
           }
        } = getState().User
        const config = {
           headers: {
              Authorization: `Bearer ${userInfo.token}`
           }
        }
        // eslint-disable-next-line no-unused-vars
        const response = await axios.delete(`/api/expenses/${expenseId}`, config)
        return expenseId
    } catch (err) {
        throw rejectWithValue(err.response)
    }
})

export const editExpenseTransaction = createAsyncThunk('Expense/editExpenseTransaction', async(
    {_id, description, amount}, {getState, rejectWithValue}) =>{
    try {
        const { 
           userLogin : {
              userInfo
           }
        } = getState().User
        const config = {
           headers: {
              Authorization: `Bearer ${userInfo.token}`
           }
        }

        const response = await axios.put(`/api/expenses/${_id}`, { 
            description: description, amount: amount
        }, config)
        return response.data.data
    } catch (err) {
        return rejectWithValue(err.response)
    }
})

export const ExpenseReducer =createSlice({
    name: 'Expense',
    initialState: {
        expenseTransactions : [],
        status: false,
        loading: false,
        error: {
           msg: {},
           status: null,
           id: null
        },

    },
    reducers: {
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
        [getExpenseTransactions.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: false,
                error: {
                    msg: action.payload.data,
                    status: action.payload.status,
                    id: action.payload.statusText
                }
            }
        },
        [addExpenseTransaction.fulfilled]: (state, action) => {
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
            }
        },
        [addExpenseTransaction.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: false,
                error: {
                    msg: action.payload.data,
                    status: action.payload.status,
                    id: action.payload.statusText
                }
            }
        },
        [deleteExpenseTransaction.fulfilled]: (state, action) =>{
            return {
                ...state,
                expenseTransactions: state.expenseTransactions.filter(expenseTransaction => expenseTransaction.id !==action.payload)
            }
        },
        [deleteExpenseTransaction.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: false,
                error: {
                    msg: action.payload.data,
                    status: action.payload.status,
                    id: action.payload.statusText
                }
            }
        },
        [editExpenseTransaction.fulfilled]: (state, action) =>{
            const { _id, description, amount} = action.payload
            const existingExpense = state.expenseTransactions.find((expenseTransaction) => expenseTransaction._id === _id)
            if(existingExpense) {
               existingExpense.description = description
               existingExpense.amount = amount
            }
        },
        [editExpenseTransaction.rejected]: (state, action) =>{
            return {
                ...state,
                loading: false,
                status: false,
                error: {
                    msg: action.payload.data,
                    status: action.payload.status,
                    id: action.payload.statusText
                }
            }
        }
    }
})

export const    {
                    expenseEditStatus
                } = ExpenseReducer.actions

export const expenseSelectState = state => state.Expense.expenseTransactions

export default ExpenseReducer.reducer
