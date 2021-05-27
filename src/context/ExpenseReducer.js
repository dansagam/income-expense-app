
const ExpenseReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE_TRANSACTION':
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
            }
        case 'DELETE_EXPENSE_TRANSACTION':
            return {
                ...state,
                expenseTransactions: state.expenseTransactions.filter(expenseTransaction => expenseTransaction.id !==action.payload)
            }
        default:
            return state
    }
}

export default ExpenseReducer
