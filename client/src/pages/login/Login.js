import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../../Redux/actions/authActions'

 const  Login=({history})=> {
    const [user,setUser]=useState({email:'',password:''})
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        setUser({...user, [e.target.name] : e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user, history));
    };

    
    return (
        <div className="login">
        <span className ="loginTitle">LOGIN</span>
            <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your email..." name="email" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..." name="password" onChange={handleChange}/>
            <button className="loginButton" onClick={e=>handleLogin(e)}> Login</button>
            </form>
            <button className="loginRegisterButton"> 
            <Link   className="link" to="/register"> Register</Link>
            </button>
            
        </div>
    )
}
export default Login
