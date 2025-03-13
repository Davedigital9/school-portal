import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherSignIn.css";

export default function TeacherSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication logic (replace with real authentication)
    if (username === "teacher" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/secure");
    } else {
      alert("Invalid credentials");
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}