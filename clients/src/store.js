import {configureStore} from '@reduxjs/toolkit'
import ExpenseReducer from './context/ExpenseReducer'
import IncomeReducer from './context/IncomeReducer'
import UserReducer from './context/userReducer'

export default configureStore({
   reducer: {
      Expense: ExpenseReducer,
      Income: IncomeReducer,
      User: UserReducer
   },
})