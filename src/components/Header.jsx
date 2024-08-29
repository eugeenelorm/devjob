
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import sun from '../assets/images/desktop/icon-sun.svg';
import moon from '../assets/images/desktop/icon-moon.svg';

import Form from 'react-bootstrap/Form';




const Header = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container className='navigation'>
          <Navbar.Brand className='logo' href="">devjobs</Navbar.Brand>
          <Nav className="navitems">
            <Nav.Link href=""><img src={sun} alt="" /></Nav.Link>
             <Form><Form.Check type="switch" id="custom-switch" label=""/></Form>
            <Nav.Link href=""> <img src={moon} alt="" /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
     

      
    </div>
  )
}

export default Header