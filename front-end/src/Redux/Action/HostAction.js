import axios from "axios"
import { GET_HOST } from "../ActionTypes/HostTypes" 

export const Get_host=()=>async(dispatch)=>{
try {
    const res=await axios.get('host/get')
    dispatch({type:GET_HOST,payload:res.data})
} catch (error) {
    console.log("il ne saffiche pas ",error)
}
}
export const Add_host=(data)=>async(dispatch)=>{
    try {
        await axios.post('/host/post',data)
        dispatch(Get_host())
    } catch (error) {
        console.log(error)
    }
}
export const Delete_host=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/host/delete/${id}`)
        dispatch(Get_host())
    } catch (error) {
        console.log(error) 
    }
}
export const Edit_host=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("/host/update/"+id,data)
        dispatch(Get_host())
    } catch (error) {
        console.log(error) 
    }
}