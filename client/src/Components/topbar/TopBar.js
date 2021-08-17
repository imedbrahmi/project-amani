import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { current } from '../../Redux/actions/authActions';
import { logout } from '../../Redux/actions/authActions';
import "./topbar.css"

export default function TopBar() {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(current());
        
    }, [])
    const isAuth = useSelector(state => state.authReducer.isAuth);
    return (
        <div className="top">
         <div className="topLeft">
         <i className="topIcon fab fa-facebook-square"></i>
         <i className="topIcon fab fa-twitter-square"></i>
         <i className="topIcon fab fa-pinterest-square"></i>
         <i className="topIcon fab fa-instagram-square"></i>
         </div>
         <div className="topCenter">
         <ul className="topList">
         <li className="topListItem">
            <Link to="/" className="link">HOME</Link>
            </li>
            <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
            <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
            <li className="topListItem">
                 <Link to="/write" className="link">WRITE</Link>
                 </li>
           
         </ul>
         </div>  
         <div className="topRight">
         { isAuth?(
             <>
             <Link to="/settings">
         <img className="topImg" 
         src="https://mpng.subpng.com/20180326/wzw/kisspng-computer-icons-user-profile-avatar-female-profile-5ab915f791e2c1.8067312315220792235976.jpg" 
         alt="avatar"/>
         </Link>
         <ul className="topList">
                 
                 <li className="topListItem">
                 <Link className="link" to="/login">
                 <div  onClick={() => dispatch(logout())}>
                 LOGOUT
                 </div></Link>
                 </li>

                 </ul>
               
                 </>
             ):(
                <>
                <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
                </li>
                 
                 <li className="topListItem">
                 <Link className="link" to="/register">REGISTER</Link>
                 </li>
                 </>
             )
        }
         <i className="topSearchIcon fas fa-search"></i> 
         </div> 
          
        </div>
    )
}
