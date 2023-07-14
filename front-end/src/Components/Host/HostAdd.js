import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Add_host } from '../../Redux/Action/HostAction';
import { Get_user, get_one_user } from '../../Redux/Action/UserAction';
import axios from 'axios';

const HostAdd = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()
    const[destination,setDestination]=useState("")
    const[room,setRoom]=useState("")
    const[image,setImage]=useState([])
    const[description,setDescription]=useState("")
    const[price,setPrice]=useState("")
    const[address,setAddress]=useState("")
    useEffect(()=>{
      var token=localStorage.getItem("token")
      dispatch(Get_user())
      dispatch(get_one_user(token))

    },[dispatch])
    const role = useSelector((state)=>state.UserReducer.oneuser)
  //   const handlesubmit =async()=>{
  //     const formData= new FormData()
  //     formData.append('file',image)
  //     formData.append('upload_preset','ml_default')
  //     await axios.post('http://api.cloudinary.com/v1_1/dvut377jf/upload',formData)
  //     .then((res)=>{
  //         dispatch (post_prodact({subject:subject,image:res.data.url,name:name}))
  //     })


      
  // }

   
    const handleAdd=async()=>{
      const formData= new FormData()
      formData.append('file',image)
      formData.append('upload_preset','ml_default')
      await axios.post('http://api.cloudinary.com/v1_1/dvut377jf/upload',formData)
      .then((res)=>{
        dispatch(Add_host({destination,room,image:res.data.url,description,price,address}),handleClose())
      })
    }
    
  return (
    <div>
    {role.role==="user"?<Button variant="primary"  onClick={handleShow} >
        add Host
    </Button>:null}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Host</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter destination" onChange={(e)=>setDestination(e.target.value)} 
        value={destination} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Enter image" onChange={(e)=>setImage(e.target.files[0])} 
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Room</Form.Label>
        <Form.Control type="number" placeholder="Enter Room" onChange={(e)=>setRoom(e.target.value)} 
          value={room}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} 
          value={description}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" placeholder="Enter description" onChange={(e)=>setPrice(e.target.value)} 
        value={price}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmai">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setAddress(e.target.value)} 
      value={address}
    />
  </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Host
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default HostAdd