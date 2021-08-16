import User from '../models/Users.js'
import generateToken from '../utils/generateToken.js'



/*
    @route post api/user
    @desc register and get a ogin token session
    @access public
*/
const registerUser = async (req, res, next) =>{
   try {
      const {name, email, password} = req.body
   
      const existingUser = await User.findOne({email})
   
      if(existingUser){
         res.status(400)
         throw new Error('User already exist')
      }
      const user = await User.create({
         name, 
         email, 
         password
      })
   
      if(user) {
         res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
   
         })
      }
      else{
         res.status(400)
         throw new Error('Invalid user data')
      }
      
   } catch (error) {
      res.json({
         msg: error.message
      })
   }

}

/*
    @route post api/users/login
    @desc authenticate user and get login token
    @access public
*/


const authUserLogin = async ( req, res, next) =>{
   try {
      const {email, password} = req.body
      const user = await User.findOne({email})
      if (user && (await user.matchPassword(password))) {
         res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
         })
      }else {
         res.status(401)
         throw new Error('Invalid email or password')
       }
      
   } catch (error) {
      res.json({
         msg: error.message
      })
      
   }
}

/*
    @route get api/user
    @desc  get all users
    @access private
*/

const getUsers = async (req, res, next) => {
   try {
      const user = await User.find({})
      res.json(user)
      
   } catch (error) {
      res.status(404).json({
         msg: 'User not found'
      })
      
   }
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res, next) =>{

   try {
      const userProfile = await User.findById(req.user._id)
      res.json({
         _id: userProfile._id,
         name: userProfile.name,
         email: userProfile.email
      })
      
   } catch (err) {
      res.status(404).json({
         msg: 'User not found'
      })
   }
}

const updateUserProfile = async (req, res, next) =>{
   try {
      const user = await User.findById(req.user._id)
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
         user.password = req.body.password
      }
      const updatedUser = await user.save()

      res.json({
         _id: updatedUser._id,
         name: updatedUser.name,
         email: updatedUser.email,
         token: generateToken(updatedUser._id),
      })
   } catch (error) {
      res.status(404)
      throw new Error('User not found')
   }
}

export { 
   registerUser, 
   getUsers, 
   authUserLogin, 
   getUserProfile,
   updateUserProfile
}