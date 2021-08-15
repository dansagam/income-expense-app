import Expense from "../models/Expenses.js";

export const getExpenses = async (req, res, next) =>{
   try {
      const expenses = await Expense.find()
      return res.status(201).json({
         success: true,
         count: expenses.length,
         data: expenses
      })
   } catch (err) {
      return res.status(400).json({ message: err.message });
   }
}

export const addExpense = async (req, res, next) => {
   try {
      const expense = await Expense.create(req.body)
      return res.status(201).json({
         success: true,
         data: expense
      })
      
   } catch (err) {
      return res.status(400).json({ message: err.message });
      
   }

}

export const deleteExpense = async (req, res, next) =>{
   try {
      const expense = await Expense.findByIdAndRemove(req.params.id)
      return res.status(201).json({
         success: true,
         data: {}
      })
   } catch (err) {
      return res.status(400).json({ message: err.message });
      
   }

}
export const editExpense = async (req, res, next) =>{
   try {
      const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {new: true})
      return res.status(201).json({
           success: true,
           data: expense
      })
   } catch (err) {
      return res.status(400).json({ message: err.message }); 
   }

}