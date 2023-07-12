import { GET_USER } from "../ActionTypes/UserTypes"

const initialState = {
    user:[]
    }
    
    const UserReducer= (state = initialState, { type, payload }) => {
        switch (type) {
          case GET_USER:
              return({...state,users:payload.user})
        
          default:
             return state
    }}
    export default UserReducer