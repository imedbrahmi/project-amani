import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.css"
import {useDispatch}from 'react-redux'
import { register } from '../../Redux/actions/authActions' 

const Register=({history})=> {
    const[user,setUser]=useState({username:"",email:"",password:""})
    const dispatch=useDispatch()
    const handleRegister = (e) => {
        e.preventDefault()
      dispatch(register(user, history));
       };
    const handleChange=(e)=>{
        setUser({...user, [e.target.name] : e.target.value})
    }
   
    return (
        <div className="register">
        <span className ="registerTitle">REGISTER</span>
            <form className="registerForm">
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your username... " name="username" required onChange={handleChange} />
            <label>Email</label>
            <input type="email" className="registerInput" placeholder="Enter your email..." name="email" required onChange={handleChange}/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password..." name="password" required onChange={handleChange}/>
    
            <button className="registerButton" onClick={e=>handleRegister(e)}> Register</button>
            </form>
            
            <button className="registerLoginButton"> 
            <Link className="link" to="/login"> Login</Link>
            </button>
        </div>
    )
}
export default Register