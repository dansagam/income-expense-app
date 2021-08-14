import Income from '../models/Incomes.js'

export const getIncomes = async (req, res, next) => {
   try {
      const incomes = await Income.find()
      res.status(201).json({
         success: true,
         count: incomes.length,
         data: incomes
      })
   } catch (err) {
      return res.status(400).json({ message: err.message });
   }

}
export const addIncome = async (req, res, next) =>{
   try {
      const income = await Income.create(req.body)
      res.status(201).json({
         success: true,
         data: income
      })
   } catch (err) {
      return res.status(400).json({ message: err.message });  
   }

}
export const deleteIncome = async (req, res, next) => {
   try {
      const income = await Income.findByIdAndRemove(req.params.id)
      res.status(201).json({
         success: true,
         data: {}
      })
   } catch (err) {
      return res.status(400).json({ message: err.message });  
      
   }

}
export const editIncome = async (req, res, next) =>{
   try {
      const income = await Income.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.status(201).json({
         success: true,
         data: income
      })
   } catch (err) {
      return res.status(400).json({ message: err.message });  
      
   }

}