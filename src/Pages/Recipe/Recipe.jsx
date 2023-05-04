import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../Home/RecipeCard/RecipeCard";

const Recipe = () => {
  const recipe = useLoaderData();

  return (
    <Container>
      <h1>Checkout All Our Recipes:</h1>
      {
        <div className="row m-3">
          {recipe.map((eachRecipe) => (
            <RecipeCard
              key={eachRecipe._id}
              eachRecipe={eachRecipe}
            ></RecipeCard>
          ))}
        </div>
      }
    </Container>
  );
};

export default Recipe;
