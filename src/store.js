import {configureStore} from '@reduxjs/toolkit'
import ExpenseReducer from './context/ExpenseReducer'
import IncomeReducer from './context/IncomeReducer'

export default configureStore({
   reducer: {
      Expense: ExpenseReducer,
      Income: IncomeReducer,
   },
})