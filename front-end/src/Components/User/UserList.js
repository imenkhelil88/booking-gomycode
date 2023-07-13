import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { Get_user } from '../../Redux/Action/UserAction'

import Navigation from '../Navigation'
import UserCard from './UserCard'

const UserList = () => {
  var token=localStorage.getItem('token')
    const dispatch= useDispatch()
    useEffect(() => {
       
      dispatch(Get_user())
      }, [dispatch])
    const users=useSelector(state=>state.UserReducer.users)
    const [search,setSearch]=useState('')
  return (
    <div>
    {<Navigation  setSearch={setSearch}/>}
    {users?.filter((el)=>el.name?.toUpperCase().includes(search?.toUpperCase()))?.map((el)=><UserCard key={el._id} el={el}/>)}
   
    
    </div>
  )
}

export default UserList
