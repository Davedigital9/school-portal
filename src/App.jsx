import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";

export default function App() {
  return (
    <div className="p-4">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}