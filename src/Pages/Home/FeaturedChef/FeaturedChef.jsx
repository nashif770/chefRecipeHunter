import React, { useEffect, useState } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedChef = ({ eachChef }) => {
  const { name, id, num_recipes, picture, years_of_experience, likes } = eachChef;

  return (
    <Container className="col m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "350px" }} variant="top" src={picture} />
        <Card.Body>
          <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
            <p>Likes :{likes}</p>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Recipes: {num_recipes}</ListGroup.Item>
          <ListGroup.Item>
            Experience: {years_of_experience} years
          </ListGroup.Item>
            <Link to={`chefRecipe/${id}`}><Button className="w-100">View Recipes</Button></Link>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default FeaturedChef;
