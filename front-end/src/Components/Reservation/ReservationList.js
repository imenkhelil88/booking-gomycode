import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'  
import { Get_reservation } from '../../Redux/Action/ReservationAction'
import RervationCard from './ReservationCard'
import Navigation from '../Navigation'

const ReservationList = () => {
    const dispatch= useDispatch()
    useEffect(() => {
       
        dispatch(Get_reservation())
      
      }, [dispatch])
    const reservations=useSelector(state=>state.ReservationReducer.reservations)
 
    const [search,setSearch]=useState('')
  return (
    <div>
    {<Navigation  setSearch={setSearch}/>}
    {reservations?.filter((el)=>el.destination.toUpperCase().includes(search.toUpperCase()))?.map((el)=><RervationCard key={el._id} el={el}/>)}
   
    
    </div>
  )
}

export default ReservationList
