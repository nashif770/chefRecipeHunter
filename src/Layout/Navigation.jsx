import React from "react";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/home">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/chef">Chef</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/recipe">Recipe</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/blog">Blog</Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
