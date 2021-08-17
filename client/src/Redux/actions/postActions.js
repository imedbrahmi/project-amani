import axios from 'axios'
import { GET_ALL_POSTS,UPDATE_POST,DELETE_POST,FAILED,ADD_POST,GET_POST} from '../constants/actionTypes'
 

export const getAllPosts=()=>async(dispatch)=>{
    try {
       const res=await axios.get("/api/posts") 
       dispatch({type:GET_ALL_POSTS,payload:res.posts})
       
    } catch (error) {
        dispatch({type: FAILED ,payload:error})
    }

}
//create post
export const addPosts=(newPost)=>async(dispatch)=>{
    const config={headers:{authorization:localStorage.getItem("token")}}
    try {
    
      const res=await axios.post("/api/posts",newPost,config);
    
      dispatch(getAllPosts())  
    
    } catch (error) {
        dispatch({type: FAILED ,payload:error}) 
    }
}
// update post 
export const updatePost=(id,data)=>
    async(dispatch)=>{
         try{
            const config = {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            };
            const result=await axios.put(`api/posts/${id}`,data,config)
            dispatch({type:UPDATE_POST})
        }

    catch(error){
        dispatch({type:FAILED,payload:error})
    }
}
//delete post
export const deletePost = (id) => async (dispatch) =>{
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.delete(`/api/posts/${id}`,config)
         dispatch({type:DELETE_POST})
    } catch (error) {
        dispatch({type:FAILED,payload:error}) 
    }
}
// get post by id
export const getPost=(id)=>async(dispatch)=>{
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result=await axios.get(`/api/posts/${id}`,config) 
        dispatch({type:GET_POST,payload:result.data.post})
    } catch (error) {
        dispatch({type:FAILED,payload:error}) 
    }
}