
const IncomeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_INCOME_TRANSACTION':
            return {
                ...state,
                incomeTransactions: [action.payload, ...state.incomeTransactions]
            }
        case 'DELETE_INCOME_TRANSACTION':
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction.id !== action.payload)
            }
        case 'EDIT_INCOME_TRANSACTION':
            const { id, description, amount} = action.payload
            const existingIncome = state.incomeTransactions.find((incomeTransaction) => incomeTransaction.id === id)
            if(existingIncome) {
               existingIncome.text = description
               existingIncome.amount = amount
            }
            return {
                ...state,
                incomeTransactions: [...state.incomeTransactions],
                status: false
            }
        
        case 'INCOME_EDIT_STATUS':
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}

export default IncomeReducer
