import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const getIncomeTransactions = createAsyncThunk('Income/getIncomeTrransactions', async (
    arg, {rejectWithValue}) =>{
    try {
        const response = await axios.get('/api/incomes')
        return response.data.data
    } catch (err) {
        // console.log(err.response)
        throw rejectWithValue(err.response)
    }
})
export const addIncomeTransaction = createAsyncThunk('Income/addIncomeTransaction', async(
    newIncome, {getState, rejectWithValue}) =>{
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
            // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWE1ZWE2MzQzOWFlNmZhYzRkMTc0YyIsImlhdCI6MTYzMDMzMTgxNiwiZXhwIjoxNjMyOTIzODE2fQ.Ey7DTAdDEA_5cH1d0lbmE2f5Cs8GnGahkNvVAJApfFE`
            
            }
        }
        const response = await axios.post('/api/incomes', newIncome, config)
        return response.data.data
    } catch (err) {
        // console.log(err.response)
        throw rejectWithValue(err.response)
    }
})

export const deleteIncomeTransaction = createAsyncThunk('Income/deleteIncomeTransaction', async(
    transactionId,{getState, rejectWithValue}) =>{
    try {
        const { 
           userLogin : {
              userInfo
           }
        } = getState().User
        
        const config = {
            headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
            }
        }
        // eslint-disable-next-line no-unused-vars
        const response = await axios.delete(`/api/incomes/${transactionId}`, config)
        return transactionId
    } catch (err) {
        // console.log(err.response)
        throw rejectWithValue(err.response)
    }
})

export const editIncomeTransaction = createAsyncThunk('Income/editIncomeTransaction', async(
    {_id, description, amount}, {getState, rejectWithValue}) =>{
        console.log({_id, description, amount})
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
            // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWE1ZWE2MzQzOWFlNmZhYzRkMTc0YyIsImlhdCI6MTYzMDMzMTgxNiwiZXhwIjoxNjMyOTIzODE2fQ.Ey7DTAdDEA_5cH1d0lbmE2f5Cs8GnGahkNvVAJApfFE`
            }
        }
        const response = await axios.put(`/api/incomes/${_id}`, {
            description: description, amount: amount
        }, config)
        return response.data.data
    } catch (err) {
        console.log(err.response)
        return rejectWithValue(err.response)  
    }
})



export const IncomeReducer = createSlice({
    name: 'Income',
    initialState: {
        incomeTransactions:[],
        status: false,
        loading: false,
        error: {
           msg: {},
           status: null,
           id: null
        },
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
        [getIncomeTransactions.rejected]: (state, action) =>{
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
        [addIncomeTransaction.fulfilled]: (state, action) =>{
            return {
                ...state,
                incomeTransactions: [action.payload, ...state.incomeTransactions]
            }
        },
        [addIncomeTransaction.rejected]: (state, action) =>{
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
        [deleteIncomeTransaction.fulfilled]: (state, action) =>{
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction._id !== action.payload)
            }
        },
        [deleteIncomeTransaction.rejected]: (state, action) =>{
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
        [editIncomeTransaction.fulfilled]: (state, action) =>{
            const { _id, description, amount} = action.payload
            const existingIncome = state.incomeTransactions.find((incomeTransaction) => incomeTransaction._id === _id)
            if(existingIncome) {
               existingIncome.description = description
               existingIncome.amount = amount
            }
        },
        [editIncomeTransaction.rejected]: (state, action) =>{
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

export const { /**addIncomeTransaction, deleteIncometransaction, editIncomeTransaction */ incomeEditStatus} = IncomeReducer.actions
export const incomeSelectState = state => state.Income.incomeTransactions

export default IncomeReducer.reducer

