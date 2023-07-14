import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {Delete_reservation, Edit_reservation} from '../../Redux/Action/ReservationAction'

const HostCard = ({el}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  
  const[host,setHost]=useState(el?.host)
  const[dateDebut,setDateDebut]=useState(el?.dateDebut)
  const[dateFin,setDateFin]=useState(el?.dateFin)
  const[totalPrice ,setTotalPrice ]=useState(el?.totalPrice )

  const handleEdit=()=>{
    dispatch(Edit_reservation(el._id,{host,dateDebut,dateFin,totalPrice}),handleClose())
  }
  return (
    <div>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={el?.host} alt='404' />
      <Card.Body>
        
        
        <Card.Text>
         {el?.dateDebut}
         {el?.dateFin}
         {el?.totalPrice}
  

        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
      <Button variant="danger" onClick={()=>dispatch(Delete_reservation(el._id))}>Delete</Button>
      <Button variant="warning"  onClick={handleShow}>
       Edit
    </Button>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        
        <Form.Label>Host</Form.Label>
        <Form.Control type="text" placeholder="Enter host" onChange={(e)=>setHost(e.target.value)} 
        value={host}
      />
       
     
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date de debut du séjour</Form.Label>
        <Form.Control type="date" placeholder="date debut" onChange={(e)=>setDateDebut(e.target.value)} 
          value={dateDebut}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>Date de fin</Form.Label>
        <Form.Control type="date" placeholder="Enter date fin" onChange={(e)=>setDateFin(e.target.value)} 
          value={dateFin}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
      <Form.Label>Total price</Form.Label>
      <Form.Control type="text" placeholder="Enter price" onChange={(e)=>setTotalPrice(e.target.value)} 
        value={totalPrice}
      />
    </Form.Group>
    
  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Footer>
    </Card>
    </div>
  )
}

export default HostCard