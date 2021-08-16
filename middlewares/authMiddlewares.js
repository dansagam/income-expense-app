import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'

config({path: '../config/config.env'})


const authService = async (req, res, next) =>{
   const token = req.header('x-auth-token')
   if(!token){
      res.status(401).json({msg: "unauthorised token"})
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
   } catch (error) {
      // res.status(400).json({msg: 'token not valid'})
      res.json({
         msg: error.message
      })
      // console.error(error)
      // res.status(401)
      // throw new Error('Not authorized, token failed')
   }

   // let token
   // if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
   //    try {
   //       token = req.headers.authorization.split(' ')[1]
   //       const decoded = jwt.verify(token, process.env.JWT_SECRET)
   //       req.user = await User.findById(decoded.id).select('-password')
   //       next()
         
   //    } catch (err) {
   //       console.error(error)
   //       res.status(401)
   //       throw new Error('Not authorized, token failed')
         
   //    }

   // }
}

export  { authService }
