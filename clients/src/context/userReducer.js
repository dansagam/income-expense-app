import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')) : null


export const registerUser = createAsyncThunk('users/registerUser', async({name, email, password}, {rejectWithValue, dispatch}) =>{
   try {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }

      const { data } = await axios.post('/api/users', {name: name, email: email, password: password}, config )

      // dispatch({
      //    type: 'users/registerSuccess',
      //    payload: data
      // })

      localStorage.setItem('userInfo', JSON.stringify(data))

      return data
   } catch (err) {
      rejectWithValue(err.response)
   }
})

export const loginUser = createAsyncThunk('users/loginUser', 
   async({email, password}, {rejectWithValue, dispatch})=>{

      try {
         const config = {
            headers: {
               'Content-Type': 'application/json'
            }
         }
         const { data } = await axios.post('api/users/login', {email, password}, config)
         // dispatch({
         //    type: 'users/loginSuccess',
         //    payload: data
         // })

         localStorage.setItem('userInfo', JSON.stringify(data))
         return data
      } catch (err) {
         // rejectWithValue(err.response ? err.response.message : err.response)
         rejectWithValue(err.response)
      }
})

export const getUserProfile = createAsyncThunk('users/getUserProfile', 
   async(id, {dispatch, getState, rejectWithValue})=>{
   try {
      const { 
         userLogin : {
            userInfo
         }
      } = getState().User
      const config = {
         headers: {
            Authorization: `Bearer ${userInfo.token}`
         }
      }
      const {data} = await axios.get('/api/users/profiles', config)
      // dispatch({
      //    type: 'users/userDetailSuccess',
      //    payload: data
      // })
      return data
   } catch (err) {
      rejectWithValue(err.response)
   }
})

export const updateUserProfile = createAsyncThunk('users/updateUserProfile', 
   async(user, {dispatch, getState, rejectWithValue})=>{
      try {
      
         const { 
            userLogin : {
               userInfo
            }
         } = getState().User


         const config ={
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${userInfo.token}`
            }
         }

         const {data} = await axios.put('api/users/profiles', user, config)

         localStorage.setItem('userInfo', JSON.stringify(data))

         return data
      } catch (err) {
         rejectWithValue(err.response)
      }
})


export const userReducer = createSlice({
   name: 'users',
   initialState: {
      userLogin: { 
         userInfo: userInfoFromStorage 
      },
      isAuthenticated: null,
      isLoading: false,
      error: {
         msg: {},
         status: null,
         id: null
      }
   },
   reducers: {

   },
   extraReducers: {
      [registerUser.pending]: (state, action) =>{

      },
      [registerUser.fulfilled]: (state, action) =>{

      },
      [registerUser.rejected]: (state, action) =>{

      },
      [loginUser.pending]: (state, action) =>{

      },
      [loginUser.fulfilled]: (state, action) =>{

      },
      [loginUser.rejected]: (state, action) =>{

      },
      [getUserProfile.fulfilled]: (state, action) =>{

      },
      [getUserProfile.rejected]: (state, action) =>{

      },
      [updateUserProfile.fulfilled]: (state, action) =>{
         
      }
   }
})




export default userReducer.reducer