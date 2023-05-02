import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import FeaturedChef from "../FeaturedChef/FeaturedChef";
import { useLoaderData } from "react-router-dom";

const Home = () => {

  const ourChef = useLoaderData();

  return (
    <Container>
      <Row>
        <Col lg={9}><Banner></Banner></Col>
        <Col lg={3}>2 of 2</Col>
      </Row>
        <h3>Chef: {ourChef.length}</h3>
        <div className="row">
          {
            ourChef.map(eachChef=> <FeaturedChef
              key={eachChef.id}
              eachChef={eachChef}
            ></FeaturedChef>)
          }
        </div>
    </Container>
  );
};

export default Home;
