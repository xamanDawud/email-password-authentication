import React from "react";

const NormalFormValidation = () => {
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
      <form action="" onSubmit={btnHandler}>
        <input onChange={emailOnChange} type="email" name="email" id="" />
        <br />
        <br />
        <input onBlur={passowrdOnBlur} type="password" name="password" id="" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NormalFormValidation;
