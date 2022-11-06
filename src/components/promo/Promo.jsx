import React from "react";
import "./promo.css";
import { Container, Row, Col, Button} from "react-bootstrap";
import Flower9 from "../../assets/flower9.png";
import Flower10 from "../../assets/flower10.png";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <div className="promo">
      <h1>
        {" "}
        PROMO IN SUMMER <span>40%</span>
      </h1>
      <Container>
        <Row>
          <Col sm={5}>
            <div className="right">
                <div className="img-flower">
              <img src={Flower9} alt="flower9" />
              </div>
              <div className="isi">
                <div className="isi-text">
                <h3 className="title">Bucket 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores.</p>
                </div>
                <Button className="text-right ">ONLY 25K</Button>
              </div>
            </div>
          </Col>
          <Col sm={5}>
            <div className="right">
                <div className="img-flower">
              <img src={Flower10} alt="flower9" />
              </div>
              <div className="isi">
                <div className="isi-text">
                <h3 className="title">Bucket 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores.</p>
                </div>
                <Button className="text-right ">ONLY 25K</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Link to="/on-progress"><Button className="seemore-promo">SEE MORE</Button></Link>
      </Container>
    </div>
  );
};

export default Promo;
