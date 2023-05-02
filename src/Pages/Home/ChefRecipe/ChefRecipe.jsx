import React from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import Banner from "../Banner/Banner";

const ChefRecipe = () => {
  const recipe = useLoaderData();

  return (
    <Container>
      <div className="row m-3">
        {recipe.map((eachRecipe) => (
          <RecipeCard key={eachRecipe._id} eachRecipe={eachRecipe}></RecipeCard>
        ))}
      </div>
    </Container>
  );
};

export default ChefRecipe;
