import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'  
import { Get_host } from '../../Redux/Action/HostAction'
import HostCard from './HostCard'
import Navigation from '../Navigation'

const HostList = () => {
    const dispatch= useDispatch()
    useEffect(() => {
       
        dispatch(Get_host())
      
      }, [dispatch])
    const hosts=useSelector(state=>state.HostReducer.hosts)
 
    const [search,setSearch]=useState('')
  return (
    <div>
    {<Navigation  setSearch={setSearch}/>}
    {hosts?.filter((el)=>el.destination.toUpperCase().includes(search.toUpperCase()))?.map((el)=><HostCard key={el._id} el={el}/>)}
   
    
    </div>
  )
}

export default HostList
