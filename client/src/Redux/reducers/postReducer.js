
import { GET_ALL_POSTS,UPDATE_POST,DELETE_POST,FAILED} from '../constants/actionTypes'
const initiaState={
    posts:{},
    postUpdated:false,
    postedeleted:false,
    isAuth:false,
    isAdmin:false
}
const postReducer=(state=initiaState,{type,payload})=>{
    switch(type){
        case GET_ALL_POSTS:
            return{...state,posts:payload,isAdmin:true};
        case UPDATE_POST:
            return {...state,postUpdated:true,isAuth:true};
        case DELETE_POST:
            return{...state,postedeleted:true,isAuth:true}    
        default:
            return state


    }
}
export default postReducer