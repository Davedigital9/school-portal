import React from "react";
import logo from "../assets/Tofee_Academy.png";
import school from "../assets/academy.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="School Logo" className="logo" />
      <img src={school} alt="School" className="school-image" />
    </div>
  );
}