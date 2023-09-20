import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const RegisterFunction = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/auth/register", {
        username,
        email,
        password,
      })
      .then(() => {
        console.log("welcome new user");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Something went wrong , Check your informations");
      });
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={RegisterFunction}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
