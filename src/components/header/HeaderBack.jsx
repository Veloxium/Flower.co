import React from 'react'
import './header.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { CartPlusFill } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const HeaderBack = () => {
  return (
    <div className='header'>
        <Navbar fixed="top" bg="pink" expand="lg">
      <Container>
        <Link to="/"><Navbar.Brand>Flower.Co</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='px-3 nav-link'to='/'>Home</Link>
            <Link className='px-3 cart nav-link' to="/on-progress"><CartPlusFill size={25} className='cartplusfill'/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeaderBack