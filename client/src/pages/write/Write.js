
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from '../../Redux/actions/postActions';

import "./write.css"

export default function Write() {
    const dispatch=useDispatch()
    const [title,setTitle]=useState("title")
    const [desc,setDesc]=useState("desc")
    const [photo,setPhoto]=useState("photo")


    const user = useSelector((state) => state.authReducer.user);
    const posts=useSelector((state)=>state.postReducer.posts)
 
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addPosts({user:user._id,title,desc,photo}));
    };
    return (
    
        <div className="write">
        <link rel="manifest" href="/manifest.webmanifest"></link>
        <img type="text"  name="photo"  value ={photo} onChange= {(e)=>setPhoto(e.target.value)} src="https://img.cuisineaz.com/660x660/2015/10/18/i76684-recette-macarons-pistache.jpg" alt="" className="writeImg"/>
           <form className="writeForm">
           <div className="writeFormGroup">
           <label htmlFor="fileInput">
           <i className=" writeIcon fas fa-plus"></i>
           </label>
           <input type= "file" id="fileInput" style={{display:"none"}}  />
           <input type= "text" placeholder="Title" className="writeInput" autoFocus= {true}  name="title" value={title} onChange= {(e)=>setTitle(e.target.value)}/>
           
           </div>
           <div className="writeFormGroup">
           <textarea placeholder="Write your Recipe..." type="text" className="writeInput writeText"  name="desc" value={desc} onChange= {(e)=>setDesc(e.target.value)}></textarea>
           </div>
           <button className="writeSubmit" onClick={e=>handleAdd(e)}> Publish</button>
           </form>
        </div>
    )
}
