import React from "react";

const BootstrapForm = () => {
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
      <form onSubmit={btnHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            onChange={emailOnChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            onBlur={passowrdOnBlur}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BootstrapForm;
