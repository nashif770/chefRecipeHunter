import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ eachRecipe }) => {
  const [btnDisable, setBtnDisable] = useState(false);
  const handleClick = () => {
    notify();
    setBtnDisable(true);
  };
  const notify = () => toast("You have set A Favorite");

  const { chef_name, name, picture, rating, ingredients, cooking_method } =
    eachRecipe;

  return (
    <Container className="col m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "250px" }} variant="top" src={picture} />
        <Card.Body>
          <div >
              <h5 className="mt-3">{name}</h5>
              <Button
                className="btn-danger w-100 my-3 p-0"
                onClick={handleClick}
                disabled={btnDisable}
              >
                Favorite
              </Button>
            <ToastContainer></ToastContainer>
          </div>
          <p>Chef Name: {chef_name}</p>
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
