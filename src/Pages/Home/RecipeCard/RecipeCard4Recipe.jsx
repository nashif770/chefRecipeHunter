import React from 'react';
import { Card, Container } from 'react-bootstrap';

const RecipeCard4Recipe = ({eachRecipe}) => {
    const {chef_name, name, picture, rating, ingredients, cooking_method} = eachRecipe;
  
  return (
    <Container className="col m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "250px" }} variant="top" src={picture} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
          </div>
            <p>Chef: {chef_name}</p>
            <p>Ratings: {rating}</p>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default RecipeCard4Recipe;