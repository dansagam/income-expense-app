import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getIncomeTransactions = createAsyncThunk('Income/getIncomeTrransactions', async () =>{
    try {
        const response = await axios.get('/api/incomes')
        console.log(response)
        return response.data.data
    } catch (err) {
        return err.response.data.err
    }
})
export const addIncomeTransaction = createAsyncThunk('Income/addIncomeTransaction', async(newIncome) =>{
    
    const config = {
        header: {
        'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios.post('/api/incomes', newIncome, config)
        return response.data.data
    } catch (err) {
        return err.response.data.err
    }
})

export const deleteIncomeTransaction = createAsyncThunk('Income/deleteIncomeTransaction', async(transactionId) =>{
    try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.delete(`/api/incomes/${transactionId}`)
        return transactionId
    } catch (err) {
        return err.response.data.err
    }
})

export const editIncomeTransaction = createAsyncThunk('Income/editIncomeTransaction', async({_id, description, amount}) =>{
    try {
        const response = await axios.put(`/api/incomes/${_id}`, {description: description, amount: amount})
        return response.data.data
    } catch (err) {
        return err.response.data.err     
    }
})



export const IncomeReducer = createSlice({
    name: 'Income',
    initialState: {
        incomeTransactions:[],
        status: false,
        loading: false,
    },
    reducers: {
        incomeEditStatus: (state, action)=>{
            return {
                ...state,
                status: action.payload
            }

        }
    },
    extraReducers: {
        [getIncomeTransactions.pending]: (state, action) =>{
            state.loading = true
        },
        [getIncomeTransactions.fulfilled]: (state, action) => {
            return {
                ...state,
                incomeTransactions: action.payload
            }
        },
        [addIncomeTransaction.fulfilled]: (state, action) =>{
            return {
                ...state,
                incomeTransactions: [action.payload, ...state.incomeTransactions]
            }
        },
        [deleteIncomeTransaction.fulfilled]: (state, action) =>{
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction.id !== action.payload)
            }
        },
        [editIncomeTransaction.fulfilled]: (state, action) =>{
            const { id, description, amount} = action.payload
            const existingIncome = state.incomeTransactions.find((incomeTransaction) => incomeTransaction.id === id)
            if(existingIncome) {
               existingIncome.description = description
               existingIncome.amount = amount
            }

        }
    }
})

export const { /**addIncomeTransaction, deleteIncometransaction, editIncomeTransaction */ incomeEditStatus} = IncomeReducer.actions
export const incomeSelectState = state => state.Income.incomeTransactions

export default IncomeReducer.reducer

