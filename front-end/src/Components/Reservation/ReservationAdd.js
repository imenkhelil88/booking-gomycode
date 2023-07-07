
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Add_reservation } from '../../Redux/Action/ReservationAction';
import { useNavigate } from 'react-router-dom';

const ReservationAdd = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[host,setHost]=useState("")
  const[user,setUser]=useState("")
  const[dateDebut,setDateDebut]=useState("")
  const[dateFin,setDateFin]=useState("")
  const[totalPrice ,setTotalPrice ]=useState("")
    
   
    const handleAdd=()=>{
        dispatch(Add_reservation({host,user,dateDebut,dateFin,totalPrice}),handleClose(),navigate('/reservation'))
    }
    // const handleAdmin=(data)=>{
    //   if(data.user.role==='admin'){
    //     {handleShow()}
    //     console.log(data.user.role)
    //   }
      
    //  }
   
  return (
    <div>
    <Button variant="primary"  onClick={handleShow} >
        Add Reservation
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Host</Form.Label>
        <Form.Control type="text" placeholder="Enter host" onChange={(e)=>setHost(e.target.value)} 
        value={host} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>User</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setUser(e.target.value)} 
        value={user} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date de debut du séjour</Form.Label>
        <Form.Control type="text" placeholder="Enter date début" onChange={(e)=>setDateDebut(e.target.value)} 
          value={dateDebut}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>Date de fin du séjour</Form.Label>
        <Form.Control type="text" placeholder="Enter date fin" onChange={(e)=>setDateFin(e.target.value)} 
          value={dateFin}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
      <Form.Label>Total Price</Form.Label>
      <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setTotalPrice(e.target.value)} 
        value={totalPrice}
      />
    </Form.Group>
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Reservation
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ReservationAdd