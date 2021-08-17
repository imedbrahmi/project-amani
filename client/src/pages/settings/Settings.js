import React,{useState} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import{Button,Modal,Form} from 'react-bootstrap'
import Sidebar from '../../Components/sidebar/Sidebar'
import'./settings.css'
import { updateUser } from '../../Redux/actions/userActions'

 const Settings=()=> {
  const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const user = useSelector((state) => state.authReducer.user);
    
    const [username,setUsername]=useState("username")
    const [email,setEmail]=useState("email")
    
const handleEdit=()=>{
  dispatch(updateUser({user:user._id,username,email}));
  handleClose()
}

    return (
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
            <span className="settingsUpdateTitle"> Update Your Account</span>
            <button className="settingsDeleteTitle"> Delete Account</button>
            </div>
        <form className="settingsForm">
        <label> Profile picture</label>
        <div className="settingsPP">
        <img width="600px" src="https://previews.123rf.com/images/yupiramos/yupiramos1706/yupiramos170608482/79888141-funny-chef-with-tray-avatar-character-vector-illustration-design.jpg" alt="chef" className=""/>
        <label htmlFor="fileInput">
        <i className=" settingsPPIcon far fa-user-circle"></i>
        </label>
        <input type="file" id="fileInput" style=  {{display:"none"}}  />
        </div>
        <label >Username
        <h6> {user.username} </h6>
        </label>
        <label> Email 
        <h6> {user.email} </h6>
        </label>
        <Button variant="success" onClick={handleShow}>
        UPDATE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>EDIT USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <label>Username</label>
        <input type=" text" name ="username"  placeholder ={user.username}  onChange= {(e)=>setUsername(e.target.value)}  />
        <label>Email</label>
        <input type=" email" name= "email"  placeholder={user.email} onChange= {(e)=>setEmail(e.target.value)}  />
        
       
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="primary" onClick={handleEdit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
        </form>
            </div>
            <Sidebar/>
        </div>
    )
}
export default Settings