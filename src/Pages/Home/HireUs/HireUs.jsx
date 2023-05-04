import React from "react";
import { Button, Form } from "react-bootstrap";

const HireUs = () => {
  return (
    <div className="text-center">
      <h3>Hire from Us!</h3>
      <h6>Just fill up the form bellow to get a quote</h6>
      <Form className="w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="number" placeholder="+880" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location:</Form.Label>
          <Form.Control type="Text" placeholder="Type Your Location" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get Quote
        </Button>
      </Form>
    </div>
  );
};

export default HireUs;
