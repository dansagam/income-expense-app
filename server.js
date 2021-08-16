import express from 'express'
import { config } from 'dotenv'
import connectDB from './config/seedDB.js'
import morgan from 'morgan'
import expenseRoutes from './routes/expenseRoutes.js'
import incomeRoutes from './routes/incomeRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

config({path: './config/config.env'})

connectDB()

app.use(express.json())


if(process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'))
}
if(process.env.NODE_ENV === 'production'){
app.use(express.static('clients/build'))
}

app.use('/api/expenses', expenseRoutes)
app.use('/api/incomes', incomeRoutes)
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 5000

app.listen(
    PORT, () => 
    console.log(`Budget income app  ${process.env.NODE_ENV} listening on port ${PORT} 🔥 !` )
)