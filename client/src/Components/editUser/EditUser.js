import React,{useState} from 'react'
import{Button,Modal,Form} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { updateUser } from '../../Redux/actions/userActions'


const EditUser=({user:{username,Email,_id}})=> {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setdata] = useState({username,email})
 const handlechange = (e)=>{
     setdata({...data,[e.target.name]:e.target.value})
     const dispatch = useDispatch()
 const handleEdit = () =>{
  dispatch(updateUser(_id,data))
  handleClose()
}
    return (
        <div>
        <Button variant="primary" onClick={handleShow}>
        EDIT
        </Button>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>EDIT CONTACT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <label>Username</label>
        <input type=" text" name ="username"  placeholder ={username} onChange= {(e)=>change(e)}/>
        <label>Email</label>
        <input type=" email" name= "email"  placeholder ={email}  onChange={(e)=>change(e)}  />
       
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Update
          </Button>
        </Modal.Footer>
        </Modal> 
        </div>
    )
}

export default EditUser







}
