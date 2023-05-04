import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import FeaturedChef from "../FeaturedChef/FeaturedChef";
import { useLoaderData } from "react-router-dom";
import Hiring from "../Hiring/Hiring";

const Home = () => {

  const ourChef = useLoaderData();

  return (
    <Container className="p-3">
      <Row>
        <Col lg={9} md={12}><Banner></Banner></Col>
        <Col lg={3} md={12}>
          <h1>Ready to elevate you culinary creations?</h1>
        </Col>
      </Row>
        <h3 className="text-center mt-3"> Hire a top-rated chef today and experience the difference</h3>
        <div className="row">
          {
            ourChef.map(eachChef=> <FeaturedChef
              key={eachChef.id}
              eachChef={eachChef}
            ></FeaturedChef>)
          }
        </div>
        <Hiring></Hiring>
    </Container>
  );
};

export default Home;
