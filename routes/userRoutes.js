import express from 'express'
import { getUsers, registerUser } from '../controllers/userControllers.js'


const router = express.Router()


router
   .route('/')
   .get(getUsers)
   .post(registerUser)

router  
   .route('/:id')
   .put()
   .delete()



export default router