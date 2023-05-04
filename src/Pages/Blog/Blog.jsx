import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
    

  return (
    <div>
      <h1 className="text-center">Things you should Know</h1>
      
      <Accordion className="my-3" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What are the differences between uncontrolled and controlled
            components?
          </Accordion.Header>
          <Accordion.Body>
            <h6>Uncontrolled Components:</h6>
            <p>
              In react an uncontrolled component is a type of component where
              it's value of the input field is controlled directly by the DOM
              itself. When client/user interacts with the component, the value
              gets uploaded directly to the DOM
            </p>
            <h6>Controlled Components:</h6>
            <p>
              Components where tha value of it's input is controlled by the
              components state are called Controlled Components. when someone
              interacts with the component (by typing, etc), the value passes to
              the components state and re-renders the whole component.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What are the difference between nodejs and express js
          </Accordion.Header>
          <Accordion.Body>
            <h6>Node Js</h6>
            <p>
              Node JS is an event driven model using JavaScript as it's main
              language. It helps build Scalabale Network application
            </p>
            <h6>Express Js</h6>
            <p>
              Express Js is a web framework built on top of Node.js that
              simplifies the process of building web applications and
              APIs.Express is a minimal and flexible Node. js web application
              framework that provides a robust set of features for web and
              mobile applications
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How to validate React props using PropTypes
          </Accordion.Header>
          <Accordion.Body>
            Proptypes is a library that checks a range of validators set by
            react to make sure the recieved data valid. validating the data can
            catch errors early and make te code better for future changes.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is a custom hook, and why will you create a custom hook?
          </Accordion.Header>
          <Accordion.Body>
            <h6>Custom Hook:</h6>
            <p>
              In React Custom Hook is a js function that allows us to extract
              and reuse logic from components
            </p>
            <h6>Why use custom Hook?</h6>
            <p>
              The main reason to write a custom hook is for code reusability.
              For example, instead of writing the same code across multiple
              components that use the same common stateful logic (say a
              “setState” or localStorage logic), you can put that code inside a
              custom hook and reuse it.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <img
        className="my-3"
        style={{ width: "100%" }}
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg"
        alt=""
      />
    </div>
  );
};

export default Blog;
