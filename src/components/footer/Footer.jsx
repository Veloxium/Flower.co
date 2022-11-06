import React from 'react';
import './footer.css';
import Line2 from '../../assets/pin-putih.png';
import { Container, Row, Col, Nav} from "react-bootstrap";
import FlowerFooter from "../../assets/flower-footer.png";
import {Instagram, Facebook, Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='footer'sticky="bottom">
        <div className='judul-center'>
            <img src={Line2} alt="line" />
            <h1>FOLLOW  US</h1>
        </div>
        <Container >
            <Row>
                <Col sm={5} className='footer-flower'>
                    <img src={FlowerFooter} alt="flower" />
                </Col>
                <Col sm={7}>
                    <div className='footer-text' id='follow'>
                        <h3>Flower.Co</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora excepturi nihil a explicabo magni earum tempore consectetur. Omnis, neque fugiat exercitationem asperiores qui odio vero!</p>
                        <div className='footer-menu'>
                            <div className='list'>
                            <h4>SOCIAL MEDIA</h4>
                            <ul>
                                <li><Instagram size={20} className='icon'/> Flower.co</li>
                                <li><Facebook size={20} className='icon'/> Flower.co Store</li>
                                <li><Whatsapp size={20} className='icon'/> 08123456789</li>
                            </ul>
                            </div>
                            <div className='list'>
                            <h4>CATEGORY</h4>
                            <div className='tag'>
                            <ul>
                                <li>FLower</li>
                                <li>Bucket</li>
                                <li>Contact</li>
                            </ul>
                            <ul>
                                <li>Home</li>
                                <li>Buy</li>
                                <Nav.Link href='#how'><li>How to order</li></Nav.Link>
                            </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer