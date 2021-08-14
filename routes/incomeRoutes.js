import express from "express";
import { addIncome, deleteIncome, editIncome, getIncomes } from "../controllers/incomeControllers.js";

const router = express.Router()


router
   .route('/')
   .get(getIncomes)
   .post(addIncome)

router
   .route('/:id')
   .put(editIncome)
   .delete(deleteIncome)




export default router