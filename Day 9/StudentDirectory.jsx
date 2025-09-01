import React, { useEffect, useState } from "react";

export default function StudentDirectory() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Directory</h2>
        <ul className="space-y-2">
          {students.map((student) => (
            <li
              key={student.id}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg border"
            >
              <span>{student.name}</span>
              <span className="text-gray-500 text-sm">{student.course}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
