import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherSignIn.css";

export default function TeacherSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Specific login credentials
    const validUsername = "johla01";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/secure");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <h1>Teacher Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}