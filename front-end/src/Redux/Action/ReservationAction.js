import axios from "axios"
import { GET_RESERVATION } from "../ActionTypes/ReservationTypes"

export const Get_reservation=()=>async(dispatch)=>{
try {
    const res=await axios.get('reservation/get')
    dispatch({type:GET_RESERVATION,payload:res.data})
    
} catch (error) {
    console.log("reservation ne saffiche pas ",error)
}
}
export const Add_reservation=(data)=>async(dispatch)=>{
    try {
        await axios.post('reservation/post',data)
        dispatch(Get_reservation())
    } catch (error) {
        console.log(error)
    }
}

export const Delete_reservation=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`reservation/delete/${id}`)
        dispatch(Get_reservation())
    } catch (error) {
        console.log(error) 
    }
}
export const Edit_reservation=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("reseravtion/update/"+id,data)
        dispatch(Get_reservation())
    } catch (error) {
        console.log(error) 
    }
}
