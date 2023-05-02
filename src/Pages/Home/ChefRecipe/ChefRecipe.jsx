import React from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import Banner from "../Banner/Banner";

const ChefRecipe = () => {
  const recipe = useLoaderData();
  console.log(recipe);

  return (
    <Container>
      <div className="row m-3">
        {recipe.map((eachRecipe) => (
          <RecipeCard key={eachRecipe.id} eachRecipe={eachRecipe}></RecipeCard>
        ))}
      </div>
    </Container>
  );
};

export default ChefRecipe;
