import React from 'react';
import './home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Flower from './bg.png';
import { CartPlusFill } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home' id='home'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className='center'>
                    <h3>What is your</h3>
                    <h1 className='big'>Favorite Flower</h1>
                    <h3>let's find and buy some flowers</h3>
                    <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus dolorum tenetur quisquam, eligendi aliquam voluptate.</p>
                    <Link to="/on-progress" className='custom'><Button className='buy'> BUY <span>NOW</span></Button><CartPlusFill size={30} className='btnCart'/> </Link>
                    </div>
                </Col>
                <Col lg={6}>
                    <img src={Flower} alt="bg" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home