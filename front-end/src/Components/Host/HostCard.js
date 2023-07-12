import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Delete_host, Edit_host } from '../../Redux/Action/HostAction';
import ReservationAdd from '../Reservation/ReservationAdd';

const HostCard = ({el}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const[destination,setDestination]=useState(el?.destination)
  const[room,setRoom]=useState(el?.room)
  const[image,setImage]=useState(el?.image)
  const[description,setDescription]=useState(el?.description)
  const[price,setPrice]=useState(el?.price)
  const[address,setAddress]=useState(el?.address)
  const handleEdit=()=>{
    dispatch(Edit_host(el._id,{destination,room,image,description,price,address}),handleClose(),window.location.reload())
  }
  return (
    <div>
       <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={el?.image} alt='404' />
      <Card.Body>
        <Card.Title>{el?.destination}</Card.Title>
        <h2>{el?.room}</h2>
        <Card.Text>
         {el?.description}
         {el?.address}
         {el?.price}
      

        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
      <Button variant="danger" onClick={()=>dispatch(Delete_host(el._id),window.location.reload())} >Delete</Button>
      <Button variant="warning"  onClick={handleShow}>
       Edit
    </Button>
   
    <ReservationAdd 
    show={show}
    handleClose={handleClose}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Host</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setDestination(e.target.value)} 
        value={destination} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setImage(e.target.value)} 
        value={image} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Room</Form.Label>
        <Form.Control type="text" placeholder="Enter Room" onChange={(e)=>setRoom(e.target.value)} 
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
      <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setPrice(e.target.value)} 
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