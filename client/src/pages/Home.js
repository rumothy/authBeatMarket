import React from "react";
import { FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import producers from "../scripts/testData";

function Home() {
  const beats = producers[0].beats;

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome to the Beat Market</h1>
            <h3>Here are some tasty beats</h3>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-4">
          <p>Title</p>
        </Col>
        <Col size="md-4">
          <p>Producer</p>
        </Col>
        <Col size="md-4">
          <p>Cart: 0</p>
        </Col>
      </Row>
      <hr />
      {beats.map(beat => (
        <Row>
          <Col size="md-4">
            <p>{beat.title}</p>
          </Col>
          <Col size="md-4">
            <p>{beat.producerId}</p>
          </Col>
          <Col size="md-4">
            <button>Purchase</button>
          </Col>
        </Row>
      ))}
      <Row>
        <Col size="md-12">
          <a href="/produceradmin" className="btn btn-primary" role="button">
            Producer Login
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
