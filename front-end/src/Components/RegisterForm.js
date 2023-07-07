import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function  RegisterForm({show, handleClose}) {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[birthdate,setBirthDate]=useState("")
  const[image,setImage]=useState("")
  const[phone,setPhone]=useState("")
  const navigate=useNavigate()
  const handleRegister=()=>{
    axios.post('user/register',{
      name:name,
      email:email,
      password:password,
      birthdate:birthdate,
      image:image,
      phone:phone
      

    }).then((response)=>{
      console.log(response)
      navigate("/host")
      
    },{handleClose})
    .catch((error)=>{
      console.log(error)
      if(error.response.data==="email already exist"){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email already exist',
          
        })
      }
      else{
        if (error.response.data.errors[0].msg==="please enter a valid email"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please enter a valid email',
            
          })
        }
        if (error.response.data.errors[0].msg==="at least 6 caracters"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password should be at least 6 caracters',
            
          })
        }
        if (error.response.data.errors[0].msg==="at least 8 numbers"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' Phone number should be at least 8 numbers',
           
          })
        }
        if (error.response.data.errors[0].msg==="name required"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' Please enter your name',
            
          })
        }

      } 

    })
    
}
 
  return (
    <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"onChange={(e)=>setName(e.target.value)} />
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
        
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
          <Form.Label>Birth date</Form.Label>
          <Form.Control type="date" placeholder="Select your birthdate" onChange={(e)=>setBirthDate(e.target.value)} />
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Select your picture" onChange={(e)=>setImage(e.target.value)}/>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" onChange={(e)=>setPhone(e.target.value)} />
          
      </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary"  onClick={handleRegister}>
            Save Changes
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterForm;