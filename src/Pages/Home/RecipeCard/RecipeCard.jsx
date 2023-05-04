import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


  

const RecipeCard = ({ eachRecipe }) => {
  const [btnDisable, setBtnDisable] = useState(false)
  const handleClick = () =>{
    notify();
    setBtnDisable(true);
  }
  const notify = () => toast("You have set A Favorite");

  const { chef_name, name, picture, rating, ingredients, cooking_method } =
    eachRecipe;

  return (
    <Container className="col m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "250px" }} variant="top" src={picture} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{name}</Card.Title>
            <Button onClick={handleClick} disabled={btnDisable}>Favorite</Button>
            <ToastContainer></ToastContainer>
          </div>
          <p>Chef: {chef_name}</p>
          <p>Ratings: {rating}</p>
          <h6>Ingredients: </h6>
          <p>{ingredients}</p>
          <h6>How to Cook:</h6>
          <p>{cooking_method}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeCard;
