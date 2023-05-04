import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { createUser, userUpdate } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleAccept = (event) => {
    setAccepted(event.target.checked);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setTimeout(() => {
          userUpdate(name, photo)
            .then(() => {
              console.log("profile Updated");
            })
            .catch((error) => {
              // console.log(error);
            });
        }, 1000);
      })
      .catch((error) => console.log(error));

  };

  return (
    <Container className="w-25 mx- mt-4 bg-white p-3 rounded">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photo</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Photo URL"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
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
            placeholder="Enter Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccept}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>
              </>
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>

        <br></br>

        <Form.Text className="text-secondary">
          Already have an Account?
          <Link to="/login">Login</Link>
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

export default Register;
