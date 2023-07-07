import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import RegisterForm from './RegisterForm';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const LoginForm = () => {
    const [show,setShow]=useState(false);
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleClose=()=> setShow(false);
    
    const handleShow=()=>setShow(true);
    const handleLogin=()=>{
      axios.post('user/login',{
        email:email,
        password:password
      }).then((response)=>{
        console.log(response)
        navigate("/host")
      })
      .catch((error)=>{
        console.log(error)
        if(error.response.data==="email does not exist"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'email does not exist',
            
          })
        }
        
      else{
        if(error.response.data==="wrong password"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'wrong password',
            
          })
        }
        if(error.response.data.errors[0].msg==="password not valid , at least 6 caracters"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'password not valid , at least 6 caracters',
            
          })
        }
      }
  })
    }
  return (
    <div className="login-card">
   

        <Card  style={{ width: '18rem' }}>
        <h1>Login</h1>
          <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          
          <div className='button-login-group'>
          
          <Button variant="primary" type="submit"  onClick={handleLogin}>
            Submit
          </Button>
          
         
          
          <Button onClick={handleShow} variant="primary" >
            Register
          </Button>
          </div>
          
            
          </Card.Body>
        </Card>
        <RegisterForm 
         show={show}
         handleClose={handleClose}/>
        </div>
      );
    }
    
    


export default LoginForm
