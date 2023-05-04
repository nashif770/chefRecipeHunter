import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const Hiring = () => {
  return (
    <div>
      <h3 className="text-center">Want to Get Hired?</h3>

      <Row>
        <Col lg={9} md={12}>
          <img
            style={{ width: "100%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Chef_Pam_is_working_on_her_dish_in_%22The_Table%22_restaurant.png"
            alt=""
          />
        </Col>
        <Col lg={3} md={12}>
          <h3>Join Us!</h3>
          <p>See our Hiring Process</p>
          <Button className="w-100">Join Us</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Hiring;
