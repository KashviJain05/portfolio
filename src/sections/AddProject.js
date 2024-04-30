import React, { useState } from "react";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const ENV_EMAIL = process.env.REACT_APP_EMAIL_ADDRESS;
const ENV_PASSWORD = process.env.REACT_APP_PASSWORD;

const AddProject = () => {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email === ENV_EMAIL && password === ENV_PASSWORD) {
      localStorage.setItem("token", jwt.sign({ email }, " secret", { expiresIn: "1h" }));

      setVerified(true);
    } else {
      alert("Invalid email address or password.");
    }
  };

  if (verified) {
    window.location.href = "/post";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <form onSubmit={handleEmailSubmit}>
        <h2 style={{ color: "wheat" }}>Enter Your Email and Password</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProject;
