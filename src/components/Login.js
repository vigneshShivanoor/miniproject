import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        // Authentication successful
        setErrorMessage("");
        setShowError(false);
        navigate("/"); // Redirect to the home page
      } else {
        // Authentication failed
        setErrorMessage("Invalid username or password.");
        setShowError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error connecting to the server.");
      setShowError(true);
    }
  };

  return (
    <div className="login-container">
      <header
        style={{
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        <h1
          style={{
            margin: 0, // Removes default margin around the h1
            padding: "10px", // Adds padding around the h1
            fontSize: "2em", // Adjust font size as needed
          }}
        >
          IEEE Admin Login
        </h1>
      </header>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {showError && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link to="/forgot-password">Forgot password?</Link>
        <br />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
