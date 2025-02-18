import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

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
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        setErrorMessage("");
        setShowError(false);
        navigate("/");
      } else {
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
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>IEEE Admin Login</h2>
      </header>
      <form onSubmit={handleSubmit}>
        {showError && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Link
          to="/forgot-password"
          style={{ display: "block", margin: "10px 0" }}
        >
          Forgot password?
        </Link>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{ width: "100%", marginTop: "15px" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
