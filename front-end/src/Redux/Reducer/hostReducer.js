import { GET_HOST } from "../ActionTypes/HostTypes"

const initialState = {
    host:[]
    }
    
    const HostReducer= (state = initialState, { type, payload }) => {
        switch (type) {
          case GET_HOST:
              return({...state,hosts:payload.host})
        
          default:
             return state
    }}
    export default HostReducer