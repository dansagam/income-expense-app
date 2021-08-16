import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         require: true
      },
      email: {
         type: String,
         require: true,
         unique: true
      },
      password: {
         type: String,
         require: true
      },
      register_date: {
         type: Date,
         default: Date.now
      }
   }
)

UserSchema.methods.matchPassword = async function(enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function (next) {
   if(!this.isModified('password')){
      next()
   }
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)

})


const User = mongoose.model('User', UserSchema)
export default User