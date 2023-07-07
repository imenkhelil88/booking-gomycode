
import {combineReducers} from "redux"
import UserReducer from "./userReducer"
import HostReducer from "./hostReducer"
import ReservationReducer from "./reservationReducer"


const rootreducer=combineReducers({UserReducer,HostReducer,ReservationReducer})

export default rootreducer