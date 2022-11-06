import React from 'react';
import './header.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { CartPlusFill } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <Navbar fixed="top" bg="pink" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Flower.Co</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='px-3'href='#home'>Home</Nav.Link>
            <Nav.Link className='px-3' href="#featured">Featured</Nav.Link>
            <Nav.Link className='px-3' href="#follow">Follow</Nav.Link>
            <Link className='px-3 cart nav-link' to="/on-progress"><CartPlusFill size={25} className='cartplusfill'/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header