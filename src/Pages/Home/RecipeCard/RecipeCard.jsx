import React from "react";
import { Card, Container } from "react-bootstrap";

const RecipeCard = ({eachRecipe}) => {
    
  const {chef_name, name, picture} = eachRecipe;
  console.log(name)
  return (
    <Container className="col m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
          </div>
            <p>Chef: {chef_name}</p>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroup.Item>Recipes: {num_recipes}</ListGroup.Item>
          <ListGroup.Item>
            Experience: {years_of_experience} years
          </ListGroup.Item>
            <Link to={`chefRecipe/${id}`}><Button>View Recipes</Button></Link>
        </ListGroup> */}
      </Card>
    </Container>
  );
};

export default RecipeCard;
