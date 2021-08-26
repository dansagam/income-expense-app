import express from "express";
import { getExpenses, addExpense, deleteExpense, editExpense } from '../controllers/expenseControllers.js'
import { authService } from "../middlewares/authMiddlewares.js";

const router = express.Router()


router
   .route('/')
   .get(getExpenses)
   .post(authService, addExpense)

router
   .route('/:id')
   .put(authService, editExpense)
   .delete(authService, deleteExpense)




export default router