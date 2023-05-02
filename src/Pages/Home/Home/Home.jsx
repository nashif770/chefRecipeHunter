import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json)
      .then((data) => setChef(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(chef);

  return (
    <Container>
      <Row>
        <Col lg={9}><Banner></Banner></Col>
        <Col lg={3}>2 of 2</Col>
      </Row>
      <Row>
        <Col lg={4}>1 of 3</Col>
        <Col lg={4}>2 of 3</Col>
        <Col lg={4}>3 of 3</Col>
      </Row>
    </Container>
  );
};

export default Home;
