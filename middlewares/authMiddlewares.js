import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'

config({path: '../config/config.env'})


const authService = async (req, res, next) =>{
   console.log(req.headers.authorization)
   try {
      let token
      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1]
         if(token){
            try {
               const decoded = jwt.verify(token, process.env.JWT_SECRET)
               if (decoded){
                  req.user = await User.findById(decoded.id).select('-password')
                  next()
               }
            } catch (err) {
               res.status(401)
               throw new Error('Not authorized, token verification failed')  
            }
         }else {
            res.status(401)
            throw new Error('Not authorized, token cannot be empty token failed')
         }
      }else {
         res.status(401)
         throw new Error('Not authorized, token failed') 
      }
      
   } catch (err) {
      // res.status(400)
      // throw new Error('Not authorized, bad request token failed') 
      next(err)
   }
}

export  { authService }
