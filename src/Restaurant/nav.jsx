import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Caros from './carousel';


function Navbars(){

    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mehfil Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.mehfilbiryani.com/">About</Nav.Link>
            <NavDropdown title="More..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Non-Veg</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Veg
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Specials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.dineout.co.in/hyderabad/mehfil-restaurant-kukatpally-west-hyderabad-69225/review">
               Our Rating's
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Caros/>
        
        </>
    )
}

export default Navbars