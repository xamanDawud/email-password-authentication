import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);

const TailwindForm = () => {
  let [errorPassword, setErrorPassword] = useState("");
  let [success, setSuccess] = useState(false);
  const btnHandler = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log(email, password);

    if (!/(?=.{8,})/.test(password)) {
      setErrorPassword("The Password must be eight characters or longer");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorPassword("At least one uppercase character");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setErrorPassword("At least one lowercase character");
      return;
    }
    if (!/(?=.*\d)/.test(password)) {
      setErrorPassword("At least add one number digit");
      return;
    }
    if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
      setErrorPassword("Password must contain at least one Special Symbol");
      return;
    }
    setErrorPassword("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        let user = result.user;
        setSuccess(true);
        event.target.reset();
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setErrorPassword(error.message);
      });
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
      <h1 className="text-primary">Please Register...!</h1>
      <form action="" onSubmit={btnHandler}>
        <input
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />{" "}
        <p className="text-danger">{errorPassword}</p>
        {success && <p className="text-success">Register Successfully</p>}
        <br />
        <br />
        <button className="btn btn-active btn-accent">Register</button>
      </form>
    </div>
  );
};

export default TailwindForm;
