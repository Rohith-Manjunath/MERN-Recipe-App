import React, { useState } from "react";
import "../App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:2000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const user = await response.json();

        if (user.error) {
          alert("User already exists.");
        } else {
          alert("Registration successful.");
          localStorage.setItem("token", user.token);
        }
      } else {
        console.error("Failed to register user:", response.status);
      }
    } catch (error) {
      console.error("An error occurred while registering user:", error);
    }
  };

  return (
    <div className="SignupContainer">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <h2>SignUp</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
