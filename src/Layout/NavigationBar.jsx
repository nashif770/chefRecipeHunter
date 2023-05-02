import React, { useContext } from "react";

import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavigationBar = () => {

  const {user} = useContext(AuthContext)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Chef Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex ms-auto align-items-center">
            <Link className="mx-3 text-decoration-none text-white" to="/">Home</Link>
            <Link className="mx-3 text-decoration-none text-white" to="/chef">Chef</Link>
            <Link className="mx-3 text-decoration-none text-white" to="/recipe">Recipe</Link>
            <Link className="mx-3 text-decoration-none text-white" to="/blog">Blog</Link>
            { user &&
              <Link className="mx-3 text-decoration-none text-white" to="#memes">{user.displayName}</Link>}
            { user ?
              <Link className="mx-3 text-decoration-none text-white" to="/login"><Button className="bg-white text-black">Logout</Button></Link>:
              <Link className="mx-3 text-decoration-none text-white"><Button className="bg-white text-black">Login</Button></Link>

              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
