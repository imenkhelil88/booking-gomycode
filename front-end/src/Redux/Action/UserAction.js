import axios from "axios"
import { GET_USER } from "../ActionTypes/UserTypes"

export const Get_user=()=>async(dispatch)=>{
try {
    const res=await axios.get('user/get')
    dispatch({type:GET_USER,payload:res.data})
} catch (error) {
    console.log("il ne saffiche pas ",error)
}
}
export const Add_user=(data)=>async(dispatch)=>{
    try {
        await axios.post('/user/post',data)
        dispatch(Get_user())
    } catch (error) {
        console.log(error)
    }
}

export const Delete_user=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/user/delete/${id}`)
        dispatch(Get_user())
    } catch (error) {
        console.log(error) 
    }
}
export const Edit_user=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("/user/update/"+id,data)
        dispatch(Get_user())
    } catch (error) {
        console.log(error) 
    }
}
export const get_one_user=()=>async(dispatch)=>{
    try {
        await axios.get("/current")
        dispatch(Get_user())
    } catch (error) {
        console.log(error) 
    }
}