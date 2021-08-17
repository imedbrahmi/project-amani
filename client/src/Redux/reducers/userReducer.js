import { useReducer } from 'react';
import {UPDATE_USER,DELETE_USER, GET_ALL_USERS}from '../constants/actionTypes'
const initialState={
    users:[],
    isAuth:false,
    isAdmin:false,
    userUpdated:false,
    userDeleted:false,
    getAllusres:false
}
const userReducer=(state=initialState,{type,payload})=>{
    switch (type){
        case UPDATE_USER:
            return{...state,userUpdated:true,isAuth:true};
        case DELETE_USER:
            return{...state,userDeleted:true,isAuth:true };
        case GET_ALL_USERS:
            return{...state,getAllusres:true,users:payload,isAdmin:true}
            default :
            return state    
    }
}
 export default userReducer