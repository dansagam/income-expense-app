
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
        case 'EDIT_EXPENSE_TRANSACTION':
            const { id, description, amount} = action.payload
            const existingExpense = state.expenseTransactions.find((expenseTransaction) => expenseTransaction.id === id)
            if(existingExpense) {
               existingExpense.text = description
               existingExpense.amount = amount
            }
            return {
                ...state,
                expenseTransactions: [...state.expenseTransactions],
                // status: false
            }
        default:
            return state
    }
}

export default ExpenseReducer
