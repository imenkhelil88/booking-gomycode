import { GET_RESERVATION } from "../ActionTypes/ReservationTypes"


const initialState = {
    reservation:[]
    }
    
    const ReservationReducer= (state = initialState, { type, payload }) => {
        switch (type) {
          case GET_RESERVATION:
              return({...state,hosts:payload.host})
        
          default:
             return state
    }}
    export default ReservationReducer