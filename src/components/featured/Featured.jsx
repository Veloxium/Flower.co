import React from "react";
import "./featured.css";
import Line from "./line.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Flower1 from "../../assets/flower1.png";
import Flower2 from "../../assets/flower2.png";
import Flower3 from "../../assets/flower3.png";
import Flower4 from "../../assets/flower4.png";
import Flower5 from "../../assets/flower5.png";
import Flower6 from "../../assets/flower6.png";
import Flower7 from "../../assets/flower7.png";
import Flower8 from "../../assets/flower8.png";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured" id="featured">
      <div className="judul-center">
        <img src={Line} alt="line" />
        <h1>Featured Flower</h1>
      </div>
      <Container>
        <Row>
          <Col sm={3} className="ilang">
            <Card >
              <div className="wrap">
                <Card.Img variant="top" src={Flower1} />
              </div>
              <Card.Body>
                <Card.Title>
                  Rose<span className="ms-auto">15K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="ilang">
            <Card>
              <div className="wrap">
                <h4 className="label">New</h4>
                <Card.Img variant="top" src={Flower2} />
              </div>
              <Card.Body>
                <Card.Title>
                  Lavender<span className="ms-auto">20K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card >
              <div className="wrap">
                <Card.Img variant="top" src={Flower3} />
              </div>
              <Card.Body>
                <Card.Title>
                  Melati<span className="ms-auto">17K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className="ilang">
            <Card>
              <div className="wrap">
                <Card.Img variant="top" src={Flower4} />
              </div>
              <Card.Body>
                <Card.Title>
                  Lupa<span className="ms-auto">12K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={3} className="ilang">
            <Card>
              <div className="wrap">
                <Card.Img variant="top" src={Flower5} />
              </div>
              <Card.Body>
                <Card.Title>
                  Flower<span className="ms-auto">15K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <div className="wrap">
              <h4 className="label">New</h4>
                <Card.Img variant="top" src={Flower6} />
              </div>
              <Card.Body>
                <Card.Title>
                  Aster<span className="ms-auto">20K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <div className="wrap">
                <Card.Img variant="top" src={Flower7} />
              </div>
              <Card.Body>
                <Card.Title>
                  Tulip<span className="ms-auto">20K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <div className="wrap">
              <h4 className="label">New</h4>
                <Card.Img variant="top" src={Flower8} />
              </div>
              <Card.Body>
                <Card.Title>
                  Sunflower<span className="ms-auto">15K</span>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Link to="/on-progress">
          <Button className="seemore">SEE MORE</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Featured;
