
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
    
        default:
            return state
    }
}

export default IncomeReducer
