import { GET_ONE_USER, GET_USER } from "../ActionTypes/UserTypes"

const initialState = {
    users:[],
    oneuser:{}
    }
    
    const UserReducer= (state = initialState, { type, payload }) => {
        switch (type) {
          case GET_USER:
              return({...state,users:payload.user})
        case GET_ONE_USER:
          return ({...state,oneuser:payload})
          default:
             return state
    }}
    export default UserReducer