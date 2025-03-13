import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./studentForm.css";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@tofeeacademy\.com$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address with @tofeeacademy.com domain.");
      return;
    }
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({ name, email, phone, grade, emergencyContactName, emergencyContactPhone });
    localStorage.setItem("students", JSON.stringify(students));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      </div>
      <div className="form-container">
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label>Grade:</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label>Emergency Contact Name:</label>
        <input
          type="text"
          value={emergencyContactName}
          onChange={(e) => setEmergencyContactName(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label>Emergency Contact Phone:</label>
        <input
          type="text"
          value={emergencyContactPhone}
          onChange={(e) => setEmergencyContactPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}