import express from "express";
import { addIncome, deleteIncome, editIncome, getIncomes } from "../controllers/incomeControllers.js";
import { authService } from "../middlewares/authMiddlewares.js";

const router = express.Router()


router
   .route('/')
   .get(getIncomes)
   .post(authService, addIncome)

router
   .route('/:id')
   .put(authService, editIncome)
   .delete(authService, deleteIncome)




export default router