import React, { useContext, useState } from "react";

import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavigationBar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const { user, logOut } = useContext(AuthContext);

  // const photo = user.photoURL;

  const handleLogOut = () => {
    logOut();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Chef Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex ms-auto align-items-center">
            <Link className="mx-3 text-decoration-none text-white" to="/">
              Home
            </Link>
            <Link className="mx-3 text-decoration-none text-white" to="/recipe">
              Recipe
            </Link>
            <Link className="mx-3 text-decoration-none text-white" to="/blog">
              Blog
            </Link>
            {user && (
              <div>
                {isHovering && (
                  <Link 
                    className="mx-3 text-decoration-none text-red"
                    to="#memes"
                  >
                    {user.displayName}
                  </Link>
                )}
                <img
                  style={{ height: "30px" }}
                  src={user.photoURL}
                  alt=""
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            )}
            {user ? (
              <Link
                className="mx-3 text-decoration-none text-white"
                to="/login"
              >
                <Button className="bg-white text-black" onClick={handleLogOut}>
                  Logout
                </Button>
              </Link>
            ) : (
              <Link
                to="./login"
                className="mx-3 text-decoration-none text-white"
              >
                <Button className="bg-white text-black">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
