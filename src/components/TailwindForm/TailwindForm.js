import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const TailwindForm = () => {
  let [errorPassword, setErrorPassword] = useState("");
  let [success, setSuccess] = useState(false);
  let [name, setname] = useState("");
  const btnHandler = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let name = event.target.name.value;
    setname(name);
    console.log(email, password, name);

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
        varifyEmail();
        setProfileName();
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setErrorPassword(error.message);
      });

    const varifyEmail = () => {
      sendEmailVerification(auth.currentUser).then((result) => {
        alert("Check your email and verify that account");
      });
    };
  };

  const setProfileName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("Display name updated");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="text-primary">Please Register...!</h1>
      <form action="" onSubmit={btnHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered input-md w-full max-w-xs"
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered input-md w-full max-w-xs"
        />{" "}
        <p className="text-danger">{errorPassword}</p>
        {success && <p className="text-success">Register Successfully</p>}
        <br />
        <p>
          Have you an account? <Link to="/login">Login</Link>
        </p>
        <button className="btn btn-active btn-accent">Register</button>
      </form>
    </div>
  );
};

export default TailwindForm;
