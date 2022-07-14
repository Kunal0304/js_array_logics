import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { UserAddress, UserAge, UserMobile, UserName } from '../Redux/Action/UserAction'

function User() {
  const User=useSelector(state=>state)
  const dispatch=useDispatch()
  return (
    <div>
      <h3>{User.Name}</h3>
      <h3>{User.Age}</h3>
      <h3>{User.Mobile}</h3>
      <h3>{User.Address}</h3>

      <input type="text"  onChange={(e)=>dispatch(UserName(e.target.value))}/>
      <input type="text"  onChange={(e)=>dispatch(UserAge(e.target.value))}/>
      <input type="text"  onChange={(e)=>dispatch(UserMobile(e.target.value))}/>
      <input type="text"  onChange={(e)=>dispatch(UserAddress(e.target.value))}/>
      <button> click here </button>
    </div>
  )
}

export default User