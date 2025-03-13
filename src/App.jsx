import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import TeacherSignIn from "./pages/TeacherSignIn";
import StudentList from "./components/StudentList";
import EditStudent from "./components/EditStudent";
import ProtectedRoute from "./components/ProtectRoute";
import "./App.css";

export default function App() {
  return (
    <div className="p-4">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/signup" className="nav-link">Student Sign Up</Link>
        <Link to="/signin" className="nav-link">Teacher Sign In</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<TeacherSignIn />} />
        <Route path="/secure" element={<ProtectedRoute><StudentList /></ProtectedRoute>} />
        <Route path="/secure/edit/:id" element={<ProtectedRoute><EditStudent /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}