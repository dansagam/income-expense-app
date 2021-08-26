import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'

config({path: '../config/config.env'})


const authService = async (req, res, next) =>{
   try {
      let token
      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1]
         try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            if (decoded){
               req.user = await User.findById(decoded.id).select('-password')
            }
         } catch (err) {
            res.status(401)
            throw new Error('Not authorized, token verification failed')
            
         }
         next()
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
