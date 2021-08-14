import express from 'express'
import { config } from 'dotenv'
import connectDB from './config/seedDB.js'
import morgan from 'morgan'

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


const PORT = process.env.PORT || 5000

app.listen(
    PORT, () => 
    console.log(`MERN shopping app 
        ${process.env.NODE_ENV} listening on port ${PORT} 🔥 !` )
)