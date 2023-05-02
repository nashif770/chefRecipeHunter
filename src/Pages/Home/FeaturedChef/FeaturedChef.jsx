import React, { useEffect, useState } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedChef = ({ eachChef }) => {
  const { name, id, num_recipes, picture, years_of_experience } = eachChef;

  return (
    <Container className="col m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
            <p>Like</p>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Recipes: {num_recipes}</ListGroup.Item>
          <ListGroup.Item>
            Experience: {years_of_experience} years
          </ListGroup.Item>
            <Link to={`chefRecipe/${id}`}><Button>View Recipes</Button></Link>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default FeaturedChef;
