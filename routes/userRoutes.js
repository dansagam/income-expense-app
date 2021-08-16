import express from 'express'
import { authUserLogin, 
         getUserProfile, 
         getUsers, 
         registerUser, 
         updateUserProfile} from '../controllers/userControllers.js'
import { authService } from '../middlewares/authMiddlewares.js'


const router = express.Router()


router
   .route('/')
   .get( authService, getUsers)
   .post(registerUser)
router
   .route('/login')
   .post(authUserLogin)
router
   .route('/profiles')
   .get(authService, getUserProfile)
   .put(authService, updateUserProfile)

router  
   .route('/:id')
   .put(authService)
   .delete(authService)



export default router