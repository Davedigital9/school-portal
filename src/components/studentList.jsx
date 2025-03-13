import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./studentList.css";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("/students.json");
      const jsonStudents = await response.json();
      const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
      setStudents([...storedStudents, ...jsonStudents]);
    };

    fetchStudents();
  }, []);

  return (
    <div className="table-container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Grade</th>
            <th>Emergency Contact Name</th>
            <th>Emergency Contact Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.grade}</td>
              <td>{student.emergencyContactName}</td>
              <td>{student.emergencyContactPhone}</td>
              <td>
                <Link to={`/secure/edit/${index}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}