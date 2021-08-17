import axios from 'axios'
import {UPDATE_USER,DELETE_USER,GET_ALL_USERS,FAILED}from '../constants/actionTypes'

//GET ALL USERS
export const getAllUsers=()=>async(dispatch)=>{
    try {
        const result=await axios.get('/api/users')
        dispatch({type:GET_ALL_USERS,payload:result.data.user})
    } catch (error) {
        
    }
}
//GET USER BY ID 

export const getUser=(id)=>async(dispatch)=>{
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
       const result=await axios.delete(`api/users/${id}`,config)
    } catch (error) {
        
    }
}

// UPDATE USER
export const updateUser=(id,data)=>async(dispatch)=>{
         try{
            const config = {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            };
            const result=await axios.put(`api/users/${id}`,data,config)
            dispatch(getUser())
        }

    catch(error){
        dispatch({type:FAILED,payload:error})
    }
}
//DELETE USER
export const deleteUser = (id) => async (dispatch) =>{
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.delete(`/api/users/${id}`,config)
         dispatch({type:DELETE_USER})
    } catch (error) {
        dispatch({type:FAILED,payload:error}) 
    }
}