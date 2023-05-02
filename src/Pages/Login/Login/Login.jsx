import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin =(event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)
  }
  return (
    <Container className="w-25 mx- mt-4 bg-white p-3 rounded">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br></br>

        <Form.Text className="text-secondary">
          Don't have an account?
          <Link to="/register">Register</Link>
        </Form.Text>
        <br></br>

        <Form.Text className="text-success">
          We'll never share your email with anyone else.
        </Form.Text>
        <br></br>
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
