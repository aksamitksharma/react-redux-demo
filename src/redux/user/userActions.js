import { 
  FETCH_USER_REQUEST, 
  FETCH_USER_SUCCESS, 
  FETCH_USER_FAILURE 
} from "./userConstants"

import axios from "axios"

const fetchUserRequest=()=>{
  return{
    type:FETCH_USER_REQUEST,
  }
}

const fetchUserSuccess=users=>{
  return{
    type:FETCH_USER_SUCCESS,
    payload:users
  }
}

const fetchUserFailure=error=>{
  return{
    type:FETCH_USER_FAILURE,
    payload:error
  }
}

export const fetchUsers=()=>{
  return dispatch=>{
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      // response.data is the array of users
      const users = response.data
      
      // disptach the users data
      dispatch(fetchUserSuccess(users))
    })
    .catch(error=>{
      // error.message is the erro description
      dispatch(fetchUserFailure(error.message))
    })
  }
}