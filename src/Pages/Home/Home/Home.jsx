import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import FeaturedChef from "../FeaturedChef/FeaturedChef";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col lg={9}><Banner></Banner></Col>
        <Col lg={3}>2 of 2</Col>
      </Row>
      <Row>
        {/* <Col lg={4}>1 of 3</Col>
        <Col lg={4}>2 of 3</Col>
        <Col lg={4}>3 of 3</Col> */}
        <FeaturedChef></FeaturedChef>
      </Row>
    </Container>
  );
};

export default Home;
