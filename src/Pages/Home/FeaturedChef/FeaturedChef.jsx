import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const FeaturedChef = () => {
  const {id} = useParams();
  return (
    <Container>
      <h3>See our Featured Chefs: {id}</h3>
    </Container>
  );
};

export default FeaturedChef;