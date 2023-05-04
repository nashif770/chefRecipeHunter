import React, { useEffect, useState } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import Banner from "../Banner/Banner";
import ChefBanner from "../ChefBanner/ChefBanner";

const ChefRecipe = () => {
  const recipe = useLoaderData();

  // console.log(recipe[0].chef_id);

  // console.log(individualChef.id);

  return (
    <Container>
      <div className="d-flex mt-3 justify-content-center align-items-center">
        <ChefBanner></ChefBanner>
      </div>
      <div className="row m-3">
        {recipe.map((eachRecipe) => (
          <RecipeCard key={eachRecipe._id} eachRecipe={eachRecipe}></RecipeCard>
        ))}
      </div>
    </Container>
  );
};

export default ChefRecipe;
