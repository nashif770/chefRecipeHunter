import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    console.log(recipe)
    return (
        <Container>
            <h1>Checkout All Our Recipes: {recipe.length}</h1>
        </Container>
    );
};

export default Recipe;