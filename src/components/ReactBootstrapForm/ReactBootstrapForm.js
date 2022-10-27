import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ReactBootstrapForm = () => {
  const btnHandler = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log(email, password);
  };

  const passowrdOnBlur = (event) => {
    let password = event.target.value;
    console.log(password);
  };

  const emailOnChange = (event) => {
    let email = event.target.value;
    console.log(email);
  };
  return (
    <div>
      <Form onSubmit={btnHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={emailOnChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={passowrdOnBlur}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReactBootstrapForm;
