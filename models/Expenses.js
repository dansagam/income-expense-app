import mongoose from 'mongoose'

const ExpenseSchema = new mongoose.Schema(
   {
      description: {
         type: String,
         require: true
      },
      amount : {
         type: Number,
         require: true
      },
   },
   {
      timestamps: true
   }
)

const Expense = mongoose.model('Expense', ExpenseSchema)

export default Expense