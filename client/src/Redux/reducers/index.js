//import combineReducers
import {combineReducers} from "redux"

//import userReducer
import authReducer from './authReducer'
import alertReducer from './alertReducer'
import postReducer from "./postReducer"
import userReducer from "./userReducer"

//create rootReducer
const rootReducer = combineReducers({authReducer,alertReducer,postReducer,userReducer})

//export
export default rootReducer