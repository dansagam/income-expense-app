import express from "express";
import { getExpenses, addExpense, deleteExpense, editExpense } from '../controllers/expenseControllers.js'

const router = express.Router()


router
   .route('/')
   .get(getExpenses)
   .post(addExpense)

router
   .route('/:id')
   .put(editExpense)
   .delete(deleteExpense)




export default router