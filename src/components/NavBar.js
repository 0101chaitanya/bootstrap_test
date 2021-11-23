import React from 'react';
import {
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
  Button,
} from 'react-bootstrap';
import brand from '../assets/clothes-svgrepo-com.svg';
const NavBar = ({ cats }) => {
  return (
    <Navbar expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>
          <img
            src={brand}
            alt='brand logo'
            className='d-inline-block me-2 align-text-top'
            width='30'
            variant='white'
            height='24'
            //  style={{ width: 40 }}
          />
          SnapCart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '120px' }}
            navbarScroll>
            {cats.map((item, i) => (
              <Nav.Link key={item} href={`#action${i + 1}`}>
                {item}
              </Nav.Link>
            ))}
          </Nav>
          <Form className='d-flex justify-content-start'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-dark'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
