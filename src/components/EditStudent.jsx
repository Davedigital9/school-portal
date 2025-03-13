import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const studentToEdit = students.find((student, index) => index === parseInt(id));
    setStudent(studentToEdit);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students[parseInt(id)] = student;
    localStorage.setItem("students", JSON.stringify(students));
    navigate("/secure");
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div className="edit-student-container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            type="text"
            name="grade"
            value={student.grade}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Emergency Contact Name:</label>
          <input
            type="text"
            name="emergencyContactName"
            value={student.emergencyContactName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Emergency Contact Phone:</label>
          <input
            type="text"
            name="emergencyContactPhone"
            value={student.emergencyContactPhone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}