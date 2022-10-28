import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const LoginWithBootstrapForm = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [resetEamil, setResetEmail] = useState("");
  const btnHandler = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        let user = result.user;
        form.reset();
        setLoginSuccess(true);
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
    // console.log(email, password);
  };

  const emailOnBlurHandler = (event) => {
    let email = event.target.value;
    setResetEmail(email);
  };

  const forgetPassword = () => {
    if (resetEamil == "") {
      alert("Please type the on email box");
      return;
    }
    sendPasswordResetEmail(auth, resetEamil)
      .then(() => {
        alert("Check your email and reset the password");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <h1 className="text-primary">Please Sign In</h1>
      <form onSubmit={btnHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            onBlur={emailOnBlurHandler}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <p>
          <button onClick={forgetPassword} type="button" class="btn btn-link">
            Forget Password?
          </button>
        </p>
        {loginSuccess && (
          <p className="text-success">You have successfully Log in</p>
        )}

        <p>
          Hanvn't any account? <Link to="/register">Register</Link>
        </p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginWithBootstrapForm;
