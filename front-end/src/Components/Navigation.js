
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HostAdd from './Host/HostAdd';
import { Link } from 'react-router-dom';



const Navigation = ({setSearch}) => 
{
 
  

 
  return (
    <div> 
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand >Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link >Home</Nav.Link>
         
          <NavDropdown title="Link" id="navbarScrollingDropdown">
          
          <Link to='/user'>
            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
            </Link>
            
           
            <NavDropdown.Divider />
            
            <NavDropdown.Item href="#action5">
            <Link to='/reservation'>
            <NavDropdown.Item href="#action3">List of reservations</NavDropdown.Item>
            </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <HostAdd/>
          
         
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navigation