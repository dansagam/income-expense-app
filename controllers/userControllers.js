import User from '../models/Users.js'
import generateToken from '../utils/generateToken.js'



/*
    @route post api/user
    @desc register and get a ogin token session
    @access public
*/
const registerUser = async (req, res, next) =>{
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
   }else{
      res.status(400)
      throw new Error('Invalid user data')
   }

}

/*
    @route post api/users/login
    @desc authenticate user and get login token
    @access public
*/


const authUserLogin = async ( req, res, next) =>{
   const {email, password} = req.body
   const user = await User.findOne({email})
   if (user && (await user.matchPasswords(password))) {
      res.json({
         _id: user._id,
         name: user.name,
         password: user.password,
         email: user.email,
         token: generateToken(user._id)
      })
   }else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
}

/*
    @route get api/user
    @desc  get all users
    @access private
*/

const getUsers = async (req, res, next) => {
   const user = await User.find({})
   res.json(user)
}

export { registerUser, getUsers, authUserLogin}