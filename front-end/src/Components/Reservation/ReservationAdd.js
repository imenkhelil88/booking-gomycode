
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Add_reservation } from '../../Redux/Action/ReservationAction';
import { useNavigate } from 'react-router-dom';
import { Get_user, get_one_user } from '../../Redux/Action/UserAction';

const ReservationAdd = ({host_id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate=useNavigate()
    const dispatch=useDispatch()
  
  const[dateDebut,setDateDebut]=useState("")
  const[dateFin,setDateFin]=useState("")
  const[totalPrice ,setTotalPrice ]=useState("")
  useEffect(()=>{
    var token=localStorage.getItem("token")
    dispatch(Get_user())
    dispatch(get_one_user(token))

  })
  const userId = useSelector((state)=>state.UserReducer.oneuser)
   
    const handleAdd=()=>{
      var useid=userId._id
        dispatch(Add_reservation({host_id,useid,dateDebut,dateFin,totalPrice}),handleClose(),navigate('/reservation'))
    }
   
   
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