import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {

  // const [error, setError] = useState({})
  
  const {signInUser, googleSigner, gitSigner} = useContext(AuthContext);


  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleGoogleLogin = () =>{
    console.log("goog");
    googleSigner()
    .then(result =>{
      console.log(result)
    })
    .catch(error => {console.log(error)})
  }

  const handleGitLogin = () =>{
    console.log("git");
    gitSigner()
    .then(result =>{
      console.log(result)
    })
    .catch(error => {console.log(error)})
  }

  const handleLogin =(event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    signInUser(email, password)
    .then(result =>{
      console.log(result.user)
      navigate(from)
    })
    .catch(error=> console.log(error))
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

        <Button className="w-100 mt-2" variant="primary" type="submit">
          Submit
        </Button>
        <p className="m-0 m-2 text-center">Or</p>

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

          sdas
        </Form.Text>
      </Form>
        <Button onClick={handleGoogleLogin} className="w-100 mt-2" variant="primary" type="submit">
          Login with Google
        </Button>
        <Button onClick={handleGitLogin} className="w-100 mt-2" variant="primary" type="submit">
          Login with GitHub
        </Button>
    </Container>
  );
};

export default Login;
