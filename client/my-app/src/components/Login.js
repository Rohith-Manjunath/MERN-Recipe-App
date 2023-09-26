import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setShowError(true);
      return;
    }

    try {
      let response = await fetch("http://localhost:2000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      response = await response.json();

      if (!response.error) {
        alert("Logn Successful");
        localStorage.setItem("token", response.token);
        window.location.href = "/";
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.error("An error occurred while registering user:", error);
    }
  };

  return (
    <div className="SignupContainer">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <h2>Login</h2>

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
      {showError && (
        <span className="fill-fields-error">Please Fill all the fields</span>
      )}
    </div>
  );
};

export default Login;
