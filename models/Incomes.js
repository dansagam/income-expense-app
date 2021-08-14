import mongoose from 'mongoose'

const IncomeSchema = new mongoose.Schema(
   {
      description: {
         type: String,
         require: true,
      },
      amount: {
         type: Number,
         require: true
      },
   },{
      timestamps: true
   }
)

const Income = mongoose.model('Income', IncomeSchema )

export default Income