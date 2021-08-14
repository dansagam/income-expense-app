import {createSlice} from '@reduxjs/toolkit'

export const IncomeReducer = createSlice({
    name: 'Income',
    initialState: {
        incomeTransactions:[
            {id: 1, description: 'book', amount: 5000},
            {id: 2, description: 'Music', amount: 6000}
        ],
        status: false,
        loading: false,
    },
    reducers: {
        addIncomeTransaction: (state, action) => {
            return {
                ...state,
                incomeTransactions: [action.payload, ...state.incomeTransactions]
            }
        },
        deleteIncometransaction: (state, action)=>{
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction.id !== action.payload)
            }
        },
        editIncomeTransaction: (state, action) => {
            const { id, description, amount} = action.payload
            const existingIncome = state.incomeTransactions.find((incomeTransaction) => incomeTransaction.id === id)
            if(existingIncome) {
               existingIncome.description = description
               existingIncome.amount = amount
            }
            // return {
            //     ...state,
            //     incomeTransactions: [...state.incomeTransactions],
            //     status: false
            // }
        },
        incomeEditStatus: (state, action)=>{
            return {
                ...state,
                status: action.payload
            }

        }
    }
})

export const {addIncomeTransaction, deleteIncometransaction, editIncomeTransaction, incomeEditStatus} = IncomeReducer.actions
export const incomeSelectState = state => state.Income.incomeTransactions

export default IncomeReducer.reducer

// const IncomeReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_INCOME_TRANSACTION':
//             return {
//                 ...state,
//                 incomeTransactions: [action.payload, ...state.incomeTransactions]
//             }
//         case 'DELETE_INCOME_TRANSACTION':
//             return {
//                 ...state,
//                 incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction.id !== action.payload)
//             }
//         case 'EDIT_INCOME_TRANSACTION':
//             const { id, description, amount} = action.payload
//             const existingIncome = state.incomeTransactions.find((incomeTransaction) => incomeTransaction.id === id)
//             if(existingIncome) {
//                existingIncome.text = description
//                existingIncome.amount = amount
//             }
//             return {
//                 ...state,
//                 incomeTransactions: [...state.incomeTransactions],
//                 status: false
//             }
        
//         case 'INCOME_EDIT_STATUS':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         default:
//             return state
//     }
// }

